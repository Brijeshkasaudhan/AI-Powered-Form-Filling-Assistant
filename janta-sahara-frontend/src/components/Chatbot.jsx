import React, { useState } from 'react';
import axios from 'axios';

function Chatbot({ panHistory, aadharHistory }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! You can ask me anything about your PAN/Aadhaar forms or any general question.' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setLoading(true);
    try {
      // Pass dashboard context to AI for smarter answers
      const contextString = `User has ${panHistory.length} PAN forms and ${aadharHistory.length} Aadhaar updates. `;
      
      const res = await axios.post(
        'https://cors-anywhere.herokuapp.com/https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: contextString },
            { role: "user", content: input }
          ],
          max_tokens: 100
        },
        {
          headers: {
            'Authorization': `Bearer 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`, // <-- PUT YOUR OPENAI KEY HERE
            'Content-Type': 'application/json'
          }
        }
      );
      const aiReply = res.data.choices[0].message.content.trim();
      setMessages(prev => [...prev, { from: 'bot', text: aiReply }]);
    } catch (error) {
      setMessages(prev => [...prev, { from: 'bot', text: "Sorry, I couldn't answer right now." }]);
    }
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '320px',
      backgroundColor: '#121624',
      borderRadius: '15px',
      boxShadow: '0 0 15px #67e6dc77',
      color: '#e2e8f0',
      fontFamily: "Poppins, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '400px',
      overflow: 'hidden',
      zIndex: 99
    }}>
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '12px 15px',
        fontSize: '0.9rem'
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            textAlign: msg.from === 'bot' ? 'left' : 'right',
            marginBottom: '10px'
          }}>
            <span style={{
              display: 'inline-block',
              backgroundColor: msg.from === 'bot' ? '#1b2839' : '#67e6dc',
              color: msg.from === 'bot' ? '#67e6dc' : '#181825',
              padding: '8px 14px',
              borderRadius: '12px',
              maxWidth: '80%'
            }}>{msg.text}</span>
          </div>
        ))}
        {loading && <div style={{ color: '#67e6dc' }}>Bot is typing...</div>}
      </div>
      <div style={{ display: 'flex', borderTop: '1px solid #2a3a53' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
          placeholder="Ask me anything..."
          style={{
            flex: 1,
            border: 'none',
            padding: '12px',
            backgroundColor: '#121624',
            color: '#e2e8f0',
            fontSize: '1rem',
            borderRadius: '0 0 0 15px',
            outline: 'none',
          }}
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading} style={{
          backgroundColor: '#67e6dc',
          border: 'none',
          borderRadius: '0 0 15px 0',
          color: '#181825',
          fontWeight: 700,
          padding: '0 20px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
