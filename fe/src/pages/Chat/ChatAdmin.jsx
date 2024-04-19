import React, { useEffect, useState } from "react";
import {
  createConnection,
  registerMessageReceivedHandler,
  sendMessage,
} from "../../Service/signalRChat";
import { Modal, Button, Form } from "react-bootstrap";
import CryptoJS from "crypto-js";
//import "../../styles/admin/css/chatstyles.css";

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
    // <Modal show={true} onHide={onClose} centered>
    //     <Modal.Header closeButton>
    //         <Modal.Title>Chat with {user.user.email}</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //         {messages.map((message, index) => (
    //             <p key={index} className={message.sender === 'Admin' ? 'text-right' : 'text-left'}>
    //                 <strong>{message.sender}:</strong> {message.message}
    //             </p>
    //         ))}
    //         <Form.Control type="text" placeholder="Message" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
    //     </Modal.Body>
    //     <Modal.Footer>
    //         <Button variant="primary" onClick={handleSend}>Send</Button>
    //     </Modal.Footer>
    // </Modal>
    <Modal
      show={true}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop={false}
      className="contacts_body"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="d-flex">
            <img
              src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
              className="rounded-circle user_img_msg m-2"
              style={{ width: "50px", height: "50px" }}
            />
            <h4>{user.user.email}</h4>
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="msg_card_body">
          {messages.map((message, index) => (
            <div key={index}>
              {message.sender === "Admin" ? (
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    <strong>{message.sender}:</strong> {message.message}
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                      className="rounded-circle user_img_msg"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="msg_cotainer">
                    <strong>{message.sender}:</strong> {message.message}
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="msg_cotainer">
              Hi, how are you admin?
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              Hi Khalid i am good tnx how about you?
            </div>
            <div className="img_cont_msg"></div>
          </div> */}

          {/* <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="msg_cotainer">
              I am good too, thank you for your chat template
              <span className="msg_time">9:00 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              You are welcome
              <span className="msg_time_send">9:05 AM, Today</span>
            </div>
            <div className="img_cont_msg"></div>
          </div> */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="primary" onClick={handleSend}>Send</Button> */}
        <div className="input-group">
          <div className="input-group-append">
            <span className="input-group-text attach_btn">
              <i className="fas fa-paperclip" />
            </span>
          </div>
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <div className="input-group-append">
            <Button
              className="input-group-text send_btn text-dark"
              onClick={handleSend}
            >
              <i className="fas fa-location-arrow" />
            </Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ChatAdmin;
