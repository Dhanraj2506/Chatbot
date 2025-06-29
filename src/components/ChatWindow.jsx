import Message  from "./Message";
const ChatWindow = ({messages})=>(<div className="flex-1 overflow-y-auto p-4">
    {messages.map((msg,index)=>(<Message key={index} {...msg} />))}
</div>)
export default ChatWindow;