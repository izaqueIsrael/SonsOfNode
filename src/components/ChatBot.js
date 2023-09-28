import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { askRobomatic } from '@/utils/api';
import loadingGif from '@/images/simple_loading.gif';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const endOfMessagesRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAskRobomatic = async (question) => {
    setIsLoading(true);
    try {
      const response = await askRobomatic(question);
      setMessages((prev) => [...prev, { sender: 'bot', text: response.out }]);
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      setMessages((prev) => [...prev, { sender: 'user', text: userInput }]);
      handleAskRobomatic(userInput);
      setUserInput('');
    }
  };

  // useEffect(() => {
  //   if (endOfMessagesRef.current) {
  //     endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [messages]);

  return (
    <section className="chat">
      <h2 className="title article__title">ChatBot</h2>
      <p className="text article__text chat__title">
        Pode mandar bala nas perguntas pra nossa IA. Mas fica ligeiro, hein? Ela
        parece ser meio que... consciente.
      </p>
      <div className="chatbot">
        <div className="chatbot__messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <p className="text test__text">{message.text}</p>
            </div>
          ))}
          {isLoading && (
            <Image
              src={loadingGif}
              alt="Loading"
              style={{ width: '3rem', height: '2rem' }}
            />
          )}
          <div ref={endOfMessagesRef} />
        </div>
        <form className="chatbot__input" onSubmit={handleSubmit}>
          <input
            className="text test__text"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <button className="text test__text" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChatBot;
