export const streamResponse = (setMessages) => {
    const fullMessage =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    const words = fullMessage.split(" ");
    let index = 0;
  
    const addWord = () => {
      if (index < words.length) {
        const currentWord = words[index];
  
        setMessages((prevMessages) => {
            let updatedMessages = [...prevMessages];
            const lastMessage = updatedMessages[updatedMessages.length - 1];
          
            if (lastMessage && lastMessage.sender === "server") {
              const lastWords = lastMessage.text.split(" ");
              if (lastWords[lastWords.length - 1] !== currentWord) {
                lastMessage.text += ` ${currentWord}`;
              }
            } else {
              updatedMessages.push({
                id: `server-${Date.now()}`,
                sender: "server",
                text: currentWord,
              });
            }
          
            return updatedMessages;
          });
  
        index++;
        if (index < words.length) {
          setTimeout(addWord, 300); 
        }
      }
    };
  
    addWord();
  };
  