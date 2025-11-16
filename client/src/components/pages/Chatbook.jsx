import React, { useContext, useEffect, useState } from "react";
import ChatList from "../modules/ChatList";
import Chat from "../modules/Chat";
import { socket } from "../../client-socket";
import { get } from "../../utilities";

import "./Chatbook.css";
import { UserContext } from "../context/UserContext";
import { NewMessage } from "../modules/NewPostInput";
import SingleMessage from "../modules/SingleMessage";

// TODO (step 1.6): Add TEST_DATA, ALL_CHAT database object, and TEST_MESSAGES

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

const ALL_CHAT = {
  _id: 0,
  name: "ALL CHAT",
};

const TEST_DATA = [
  {
    messages: TEST_MESSAGES,
    recipient: ALL_CHAT,
  },
];

const Chatbook = () => {
  const userId = useContext(UserContext); // UserContext stores the ID of the currently logged in user
  const loadMessageHistory = (recipient) => {};

  useEffect(() => {
    document.title = "Chatbook";
  }, []);

  // TODO (step 1.5): populate chatbook (but use TEST_DATA)
  return userId ? (
    <div className="u-flex Chatbook-container">
      <div className="Chatbook-chatContainer">
        <Chat chatData={{ recipient: ALL_CHAT, messages: TEST_MESSAGES }} />
      </div>
    </div>
  ) : (
    <p>Please login to load chat data!</p>
  );
};

export default Chatbook;
