import React, { useEffect, useState } from 'react';
import { createConnection, registerMessageReceivedHandler, sendMessage } from '../../Service/signalRChat';
import { Modal, Button, Form } from 'react-bootstrap';

const ChatAdmin = ({ user, messages: initialMessages, onClose }) => {
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        setMessages(initialMessages);
        createConnection('Admin');
        registerMessageReceivedHandler((sender, message) => {
            setMessages(messages => [...messages, { sender, message }]);
        });
    }, [initialMessages]);

    const handleSend = () => {
        sendMessage('Admin', user.user.email, newMessage);
        setMessages([...messages, { sender: 'Admin', message: newMessage }]);
        setNewMessage("");
    }
    // console.log(messages);
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