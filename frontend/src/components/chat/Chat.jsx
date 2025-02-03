import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../App';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { streamResponse } from '../../utils/simulateResponse';

function Chat() {
  const { theme } = useContext(ThemeContext);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const uniqueId = `${Date.now()}-${Math.random()}`;
    const newMessage = {
      id: uniqueId,
      sender: 'user',
      text,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    streamResponse(setMessages);
  };

  const handleResendMessage = (id, newText) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, text: newText } : msg
    );
  
    const userMessageIndex = updatedMessages.findIndex((msg) => msg.id === id);
  
    if (userMessageIndex !== -1) {
      const botMessageIndex = userMessageIndex + 1;
  
      if (updatedMessages[botMessageIndex]?.sender === 'server') {
        updatedMessages.splice(botMessageIndex, 1);
      }
    }
  
    setMessages(updatedMessages);
  
    streamResponse(setMessages);
  };
  
  return (
    <div
      className={`relative w-full h-[75vh] rounded-3xl flex flex-col ${
        theme === 'dark' ? 'bg-transparent text-white' : 'bg-transparent text-black'
      }`}
    >
      <MessageList messages={messages} theme={theme} onSaveEdit={handleResendMessage} />
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}

export default Chat;
