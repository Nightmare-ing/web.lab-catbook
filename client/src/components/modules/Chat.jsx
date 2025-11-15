import React, { useState, useEffect } from "react";
import SingleMessage from "./SingleMessage";
import { NewMessage } from "./NewPostInput";

import "./Chat.css";

/**
 * @typedef UserObject
 * @property {string} _id
 * @property {string} name
 */
/**
 * @typedef MessageObject
 * @property {UserObject} sender
 * @property {string} content
 */
/**
 * @typedef ChatData
 * @property {MessageObject[]} messages
 * @property {UserObject} recipient
 */

/**
 * Renders main chat window including previous messages,
 * who is being chatted with, and the new message input.
 *
 * Proptypes
 * @param {ChatData} data
 */
const Chat = (props) => {
  // TODO (step 1.4): populate Chat.js
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(props.chatData.messages);
  }, []);

  let messageList = null;
  if (messages.length !== 0) {
    messageList = messages.map((messageObj, i) => <SingleMessage key={i} message={messageObj} />);
  } else {
    <p>No Messages!</p>;
  }

  return (
    <div className="u-flexColumn Chat-container">
      <h3 className="u-bold">Chatting with {props.chatData.recipient.name}</h3>
      <div className="Chat-historyContainer">{messageList}</div>
      <div className="Chat-newContainer">
        <NewMessage />
      </div>
    </div>
  );
};

export default Chat;
