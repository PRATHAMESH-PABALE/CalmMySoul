import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi! I’m here to listen. How can I help today?' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMsg = { from: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      const res = await axios.post('https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful, calm, supportive therapist bot." },
            { role: "user", content: input }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`
          }
        }
      );
      const botMsg = res.data.choices[0].message.content;
      setMessages(prev => [...prev, { from: 'bot', text: botMsg }]);
    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: "Sorry, I couldn’t process that." }]);
    }
  };

  return (
    <div>
      <h2>Talk to Your Chatbot 💬</h2>
      <div style={{ maxHeight: '200px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}>
            <b>{msg.from === 'user' ? 'You' : 'Bot'}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type something..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
