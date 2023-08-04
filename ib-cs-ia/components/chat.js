import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendClick = async () => {
    const newMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');

    const response = await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userMessage: input }),
    });

    const data = await response.json();
    console.log(data);
    const aiMessage = { role: 'ai', content: data.data.choices[0].message.content };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>
            <strong>{message.role === 'user' ? 'You: ' : 'AI: '}</strong>
            {message.content}
          </p>
        ))}
      </div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

export default Chat;
