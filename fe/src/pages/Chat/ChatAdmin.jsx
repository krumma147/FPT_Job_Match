import React, { useEffect, useState } from 'react';
import { createConnection, registerMessageReceivedHandler, sendMessage } from '../../Service/signalRChat';
import { Modal, Button, Form } from 'react-bootstrap';
import CryptoJS from "crypto-js";

const ChatAdmin = ({ user, messages: initialMessages, onClose }) => {
    const [messages, setMessages] = useState(() => {
        const localMessages = localStorage.getItem(user.user.email);
        if (localMessages) {
            const bytes = CryptoJS.AES.decrypt(localMessages, 'secret key 123');
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return decryptedData;
        } else {
            return initialMessages;
        }
    });
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        createConnection('Admin');
        registerMessageReceivedHandler((sender, message) => {
            if (sender === user.user.email) {
                setMessages(messages => {
                    const newMessages = [...messages, { sender, message }];
                    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(newMessages), 'secret key 123').toString();
                    localStorage.setItem(user.user.email, ciphertext);
                    return newMessages;
                });
            }
        });
    }, [user.user.email]);

    const handleSend = () => {
        sendMessage('Admin', user.user.email, newMessage);
        setMessages(messages => {
            const newMessages = [...messages, { sender: 'Admin', message: newMessage }];
            const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(newMessages), 'secret key 123').toString();
            localStorage.setItem(user.user.email, ciphertext);
            return newMessages;
        });
        setNewMessage("");
    }

    return (
        <Modal show={true} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Chat with {user.user.email}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {messages.map((message, index) => (
                    <p key={index} className={message.sender === 'Admin' ? 'text-right' : 'text-left'}>
                        <strong>{message.sender}:</strong> {message.message}
                    </p>
                ))}
                <Form.Control type="text" placeholder="Message" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSend}>Send</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ChatAdmin;