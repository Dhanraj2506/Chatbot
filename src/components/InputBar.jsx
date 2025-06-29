import { useState } from "react";
const InpurBar = ({ onSend }) => {
  const [input, setInput] = useState("");
  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };
  return (
    <div className="p-4 border-t bg-white flex-gap-3">
      <input
        className="flex-1 p-2 border rounded"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        type="text"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default InpurBar;
