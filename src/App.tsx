import React, { useState } from "react";

import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";

const App = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = (newMessage: string) => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  );
};

export default App;
