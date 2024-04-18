import React, { useEffect, useState } from 'react';
import { createConnection, sendMessage, registerMessageReceivedHandler } from '../../Service/signalRChat';
import { Modal, Button, Form, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import CryptoJS from 'crypto-js';

const ChatHome = ({ username }) => {
    const [messages, setMessages] = useState(JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem(username) || '', 'secret key').toString(CryptoJS.enc.Utf8) || '[]'));
    const [newMessage, setNewMessage] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        createConnection(username);
        registerMessageReceivedHandler((sender, message) => {
            if (sender === username || sender === 'Admin') {
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
        setMessages(messages => {
            const newMessages = [...messages, { sender: username, message: newMessage }];
            localStorage.setItem(username, CryptoJS.AES.encrypt(JSON.stringify(newMessages), 'secret key').toString());
            return newMessages;
        });
        setNewMessage("");
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const StyledButton = styled(Button)`
        position: fixed;
        right: 0;
        bottom: 0;
        margin-bottom: 10rem;
        `;
    return (
        <div>
            <StyledButton variant="primary" onClick={handleShow}>
                Chat
            </StyledButton>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Chat with Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {messages.map((message, index) => (
                            <p key={index} className={message.sender === username ? 'text-left' : 'text-right'}>
                                <strong>{message.sender}:</strong> {message.message}
                            </p>
                        ))}
                    </ListGroup>
                    <Form>
                        <Form.Group controlId="messageInput">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Enter Message" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSend}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ChatHome;