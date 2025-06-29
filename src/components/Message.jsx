const Message = ({ sender, text, timestamp }) => {
  // const time= timestamp?new
  return (
    <div className="max-w-xl">
      <div className="text-xs text-gray-500 mb-1">
        {sender}:{new Date(timestamp).toLocaleDateString()}
      </div>
      <div className="bg-white p-3 rounded shadow text-sm break-words">{typeof text==='string'?text:JSON.stringify(text)}</div>
    </div>
  );
};
export default Message;
