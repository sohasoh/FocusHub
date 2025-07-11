import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './Text.css'

// Connect to Socket.IO server (replace with your backend URL)
const socket = io('http://localhost:5000');

const Text = () => {
  // State for messages and input
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState(''); // Assume fetched from Profile
  const messagesEndRef = useRef(null);

  // Fetch username (mocked, replace with Profile page data)
  useEffect(() => {
    // Simulate fetching username from Profile page or auth context
    const fetchedUsername = 'JohnDoe'; // Replace with actual user data
    setUsername(fetchedUsername);
  }, []);

  // Set up Socket.IO listeners
  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    // Clean up on component unmount
    return () => {
      socket.off('message');
    };
  }, []);

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      username,
      text: message,
      timestamp: new Date().toISOString(),
    };
    socket.emit('sendMessage', newMessage); // Send to server
    setMessages((prev) => [...prev, newMessage]); // Optimistic update
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.username === username ? 'sent' : 'received'}`}
          >
            <p className="message-username">{msg.username}</p>
            <p className="message-text">{msg.text}</p>
            <p className="message-timestamp">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="btn btn-send">Send</button>
      </form>
    </div>
  );
};

export default Text;