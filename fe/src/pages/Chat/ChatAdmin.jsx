import React, { useEffect, useState } from "react";
import {
  createConnection,
  registerMessageReceivedHandler,
  sendMessage,
} from "../../Service/signalRChat";
import CryptoJS from "crypto-js";
import Icon from '@mdi/react';
import {  mdiRobotAngryOutline, mdiSend } from '@mdi/js';

const ChatAdmin = ({ user, messages: initialMessages, onClose }) => {
  const [messages, setMessages] = useState(() => {
    const localMessages = localStorage.getItem(user.user.email);
    if (localMessages) {
      const bytes = CryptoJS.AES.decrypt(localMessages, "secret key 123");
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    } else {
      return initialMessages;
    }
  });
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    createConnection("Admin");
    registerMessageReceivedHandler((sender, message) => {
      if (sender === user.user.email) {
        setMessages((messages) => {
          const newMessages = [...messages, { sender, message }];
          const ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(newMessages),
            "secret key 123"
          ).toString();
          localStorage.setItem(user.user.email, ciphertext);
          return newMessages;
        });
      }
    });
  }, [user.user.email]);
  useEffect(() => {
    // Thêm lớp 'show-chatbot' vào thẻ body khi component được mount
    document.body.classList.add('show-chatbot');

    // Xóa lớp 'show-chatbot' khỏi thẻ body khi component được unmount
    return () => {
      document.body.classList.remove('show-chatbot');
    };
  }, []);

  const handleSend = () => {
    sendMessage("Admin", user.user.email, newMessage);
    setMessages((messages) => {
      const newMessages = [
        ...messages,
        { sender: "Admin", message: newMessage },
      ];
      const ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(newMessages),
        "secret key 123"
      ).toString();
      localStorage.setItem(user.user.email, ciphertext);
      return newMessages;
    });
    setNewMessage("");
  };

  return (
    <div className="chatbot" style={{
      border: 'solid 0.5px', right: 10, bottom: 5
    }}>
      <header>
        <h2>{user.user.email}</h2>
        <i
          className="fas fa-times"
          style={{ cursor: 'pointer', position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)' }}
          onClick={onClose}
        />
      </header>
      <ul className="chatbox">
        <li className="chat incoming">
          <span className="material-symbols-outlined"><Icon path={mdiRobotAngryOutline} size={1} /></span>
          <p>Hi there 👋<br />How can I help you today?</p>
        </li>
        {messages.map((message, index) => (
          <li key={index} className={message.sender === user.user.email ? 'chat outgoing' : 'chat incoming'}>
            <span className="material-symbols-outlined">{message.sender === 'Admin' ? <Icon path={mdiRobotAngryOutline} size={1} /> : ''}</span>
            <p>{message.message}</p>
          </li>
        ))}
      </ul>
      <div className="chat-input">
        <textarea
          placeholder="Enter a message..."
          required
          defaultValue={""}
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <span onClick={handleSend} ><Icon path={mdiSend} size={1} /></span>
      </div>
    </div>
  );
};

export default ChatAdmin;
