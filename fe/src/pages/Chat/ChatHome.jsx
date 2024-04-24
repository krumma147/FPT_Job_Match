import React, { useEffect, useState } from 'react';
import { createConnection, sendMessage, registerMessageReceivedHandler } from '../../Service/signalRChat';
import CryptoJS from 'crypto-js';
import './Chat.css'
import { Helmet } from 'react-helmet';
import Icon from '@mdi/react';
import { mdiClose, mdiMessageText, mdiRobotAngryOutline, mdiSend } from '@mdi/js';
const ChatHome = ({ username }) => {
    const [messages, setMessages] = useState(JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem(username) || '', 'secret key').toString(CryptoJS.enc.Utf8) || '[]'));
    const [newMessage, setNewMessage] = useState("");
    const [isWaitingResponse, setIsWaitingResponse] = useState(false);

    useEffect(() => {
        createConnection(username);
        registerMessageReceivedHandler((sender, message) => {
            if (sender === username || sender === 'Admin') {
                setIsWaitingResponse(false); // Set to false when a message is received
                setMessages(messages => {
                    const newMessages = [...messages, { sender, message }];
                    localStorage.setItem(username, CryptoJS.AES.encrypt(JSON.stringify(newMessages), 'secret key').toString());
                    return newMessages;
                });
            }
        });
    }, [username]);

    const handleSend = () => {
        sendMessage(username, 'Admin', newMessage);
        setIsWaitingResponse(true); // Set to true when a message is sent
        setMessages(messages => {
            const newMessages = [...messages, { sender: username, message: newMessage }];
            localStorage.setItem(username, CryptoJS.AES.encrypt(JSON.stringify(newMessages), 'secret key').toString());
            return newMessages;
        });
        setNewMessage("");
    }

    return (
        <div>
            <button className="chatbot-toggler">
                <span className="material-symbols-rounded"><Icon path={mdiMessageText} size={1} /></span>
                <span className="material-symbols-outlined"><Icon path={mdiClose} size={1} /></span>
            </button>
            <div className="chatbot" style={{
                boxShadow: "0 0 128px 0 rgba(0,0,0,0.1), 0 32px 64px -48px rgba(0,0,0,0.5)"
            }}>
                <header>
                    <h4>Chat With Admin</h4>
                    <span className="close-btn material-symbols-outlined">close</span>
                </header>
                <ul className="chatbox">
                    <li className="chat incoming">
                        <span className="material-symbols-outlined"><Icon path={mdiRobotAngryOutline} size={1} /></span>
                        <p>Hi there 👋<br />How can I help you today?</p>
                    </li>
                    {messages.map((message, index) => (
                        <li key={index} className={message.sender === username ? 'chat outgoing' : 'chat incoming'}>
                            <span className="material-symbols-outlined">{message.sender === 'Admin' ? <Icon path={mdiRobotAngryOutline} size={1} /> : ''}</span>
                            <p>{message.message}</p>
                        </li>
                    ))}
                    {isWaitingResponse && (
                        <li className="chat incoming">
                            <span className="material-symbols-outlined"><Icon path={mdiRobotAngryOutline} size={1} /></span>
                            <p>Waiting...</p>
                        </li>
                    )}
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
            <Helmet>
                <script src="assets/home/js/chat.js"></script>
            </Helmet>
        </div>

    );
}

export default ChatHome;