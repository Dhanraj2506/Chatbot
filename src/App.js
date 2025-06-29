import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ChatWindow from './components/ChatWindow';
import InpurBar from './components/InputBar';
import callGeminiAPI from './utils/api';

function App() {
  const [messages,setMessages] = useState(()=>{
    const saved=localStorage.getItem('chatMessages');
    return saved? JSON.parse(saved):[];
  })
  useEffect(()=>{
    localStorage.setItem('chtMessages',JSON.stringify(messages));
  },[messages])

  const handleSend = async (text)=>{
    const userMsg = {sender:"You",text,timestamp:Date.now()};
    setMessages((pre)=>[...pre,userMsg]);
    setMessages((prev)=>[...prev,{
      sender:"Gemini",
      text:'...',
      timestamp:Date.now(),
    }])
    const typingIndex= messages.length+1;
    const apiResponse = await callGeminiAPI(text);
    console.log(apiResponse);
    setMessages((prev)=>{
      const updated = [...prev];
      updated[typingIndex]={
        sender:'Gemini',
        text:apiResponse,
        timestamp:Date.now()
      };
      return updated;
    })

  }

  return (
    <div className="App">
      <div className='h-screen flex flex-col bg-white'>
        <h1 className='text-xl font-bold p-4'>Gemini Chat</h1>
        <ChatWindow messages={messages} />
        <InpurBar onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
