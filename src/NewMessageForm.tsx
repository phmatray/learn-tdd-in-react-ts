import React, { useState, ChangeEvent } from "react";

type NewMessageFormProps = {
  onSend: (newMessage: string) => void;
};

const NewMessageForm = ({ onSend }: NewMessageFormProps) => {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    onSend(inputText);
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        data-testid="messageText"
        value={inputText}
        onChange={handleTextChange}
      />
      <button data-testid="sendButton" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default NewMessageForm;
