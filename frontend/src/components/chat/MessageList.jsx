import React from 'react';
import Message from './Message';

function MessageList({ messages, theme, onSaveEdit }) {
  return (
    <div className="flex-grow overflow-y-auto p-4 flex flex-col">
      {messages.map((msg) => (
        <Message
          key={msg.id}
          message={msg}
          theme={theme}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </div>
  );
}

export default MessageList;
