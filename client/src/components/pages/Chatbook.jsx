import React, { useContext, useEffect, useState } from "react";
import ChatList from "../modules/ChatList";
import Chat from "../modules/Chat";
import { socket } from "../../client-socket";
import { get } from "../../utilities";

import "./Chatbook.css";
import { UserContext } from "../context/UserContext";

const ALL_CHAT = {
  _id: "ALL_CHAT",
  name: "ALL_CHAT",
};

const TEST_MESSAGES = [
  {
    sender: {
      _id: 0,
      name: "Kenneth",
    },
    content: "i love web lab",
  },
  {
    sender: {
      _id: 2,
      name: "Abby",
    },
    content: "I'm Abby",
  },
];

const Chatbook = () => {
  const userId = useContext(UserContext);
  const [activeChat, setActiveChat] = useState({
    recipient: ALL_CHAT,
    messages: TEST_MESSAGES,
  });

  const loadMessageHistory = (recipient) => {
    // TODO (step 3.3): Load message history using the /api/chat endpoint
    get("/api/chat", { recipient: recipient._id }).then((messagesObj) => {
      setActiveChat({
        recipient: recipient,
        messages: messagesObj,
      });
    });
  };

  useEffect(() => {
    document.title = "Chatbook";
  }, []);

  useEffect(() => {
    // TODO (step 3.4): Call loadMessageHistory
    loadMessageHistory(activeChat.recipient);
  }, []);

  if (!userId) {
    return <div>Log in before using Chatbook</div>;
  }

  return (
    <>
      <div className="u-flex u-relative Chatbook-container">
        <div className="Chatbook-chatContainer u-relative">
          {activeChat === null ? <p>Loading...</p> : <Chat data={activeChat} />}
        </div>
      </div>
    </>
  );
};

export default Chatbook;
