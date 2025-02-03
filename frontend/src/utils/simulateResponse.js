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
          
          if (updatedMessages.length > 0 && updatedMessages[updatedMessages.length - 1].sender === "server") {
            updatedMessages[updatedMessages.length - 1].text += ` ${currentWord}`;
          } else {
            const newMessage = {
              id: `server-${Date.now()}`,
              sender: "server",
              text: currentWord,
            };
            updatedMessages.push(newMessage);
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
  