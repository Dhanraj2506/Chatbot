/** @format */

import { useState } from "react";
import { getBotReply } from "./bot";

export default function App() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I am a simple chatbot. Say hello." },
  ]);
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      { from: "bot", text: getBotReply(text) },
    ]);
    setInput("");
  };

  return (
    <div className="chat">
      <header className="chat-header">React Chatbot</header>
      <div className="chat-body">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={send}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          aria-label="message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
