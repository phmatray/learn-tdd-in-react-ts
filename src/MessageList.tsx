import React from "react";

type MessageListProps = {
  data: string[];
};

const MessageList = ({ data }: MessageListProps) => (
  <ul>
    {data.map((message) => (
      <li key={message}>{message}</li>
    ))}
  </ul>
);

export default MessageList;
