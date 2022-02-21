import './App.css';
import {Message} from "./components/Message/index_message";
import React from 'react';
import {useEffect, useState} from "react";


function App() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  const sendMessage = (newMessage) => {
    setMessages([...messages,  newMessage]);
  }

  const submitMessage = () => {
    if (messageText === '') {
      return;
    }
    sendMessage({
      author: "me",
      text: messageText,
    });
    setMessageText("");
  }

  useEffect(() => {
    if (messages.length === 0) {
      return;
    }
    const tail = messages[messages.length - 1];
    if (tail.author === "bot") {
      return;
    }
    setTimeout(() => {
      sendMessage({author:"bot", text: "I`m bot"});
    },  1500);
  });

  return (
    <div className="App">
      <div>
        <input
          value={messageText}
          onChange={(event) => {
            setMessageText(event.target.value);
          }}
        />
        <button onClick={submitMessage}>Send</button>
      </div>
      <div className="messages">
        {messages.map((message, i) => <Message key={i} text={message.text}/>)}
      </div>
    </div>
  );
}

export default App;
