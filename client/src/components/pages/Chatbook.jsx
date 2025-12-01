import React, { useEffect, useState } from "react";
import ChatList from "../modules/ChatList";
import Chat from "../modules/Chat";
import { socket } from "../../client-socket";
import { get } from "../../utilities";
import { useOutletContext } from "react-router-dom";

import "./Chatbook.css";
import SingleUser from "../modules/SingleUser";

const ALL_CHAT = {
  _id: "ALL_CHAT",
  name: "ALL CHAT",
};

const Chatbook = () => {
  let props = useOutletContext();

  // TODO (step 2.3) Add a state called activeUsers, initialized to []
  const [activeUsers, setActiveUsers] = useState([ALL_CHAT, { _id: 1, name: "Abby" }]);

  const [activeChat, setActiveChat] = useState({
    recipient: ALL_CHAT,
    messages: [],
  });

  const loadMessageHistory = (recipient) => {
    get("/api/chat", { recipient_id: recipient._id }).then((messages) => {
      setActiveChat({
        recipient: recipient,
        messages: messages,
      });
    });
  };

  const addMessage = (data) => {
    setActiveChat((prevActiveChat) => ({
      recipient: prevActiveChat.recipient,
      messages: prevActiveChat.messages.concat(data),
    }));
  };

  useEffect(() => {
    document.title = "Chatbook";
  }, []);

  useEffect(() => {
    loadMessageHistory(ALL_CHAT);
  }, []);

  useEffect(() => {
    socket.on("message", addMessage);
    return () => {
      socket.off("message", addMessage);
    };
  }, []);

  // TODO (step 2.4): Add a callback function called setActiveUser that takes a user as a parameter and
  //    prints the user's name to console. We'll change this function later to do something more useful.
  const setActiveUser = (user) => {
    console.log(user.name);
  };

  if (!props.userId) {
    return <div>Log in before using Chatbook</div>;
  }

  return (
    <>
      <div className="u-flex u-relative Chatbook-container">
        <div className="Chatbook-userList">
          <ChatList
            users={activeUsers}
            active={activeChat.recipient}
            userId={props.userId}
            setActiveUser={setActiveUser}
          />
        </div>
        <div className="Chatbook-chatContainer u-relative">
          <Chat data={activeChat} />
        </div>
      </div>
    </>
  );
};

export default Chatbook;
