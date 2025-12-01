import React, { useState, useEffect } from "react";
import SingleUser from "./SingleUser";

import "./SingleUser.css";

/**
 * List of users that are online to chat with and all chat
 *
 * Proptypes
 * @param {UserObject[]} users to display
 * @param {UserObject} active user in chat
 * @param {string} userId id of the current logged in user
 * @param {(UserObject) => ()} setActiveUser function that takes in user, sets it to active
 */
const ChatList = (props) => {
  // TODO (step 2.2) render chat list
  const userList = props.users.map((user) => (
    <SingleUser
      active={user._id === props.active._id}
      user={user}
      setActiveUser={props.setActiveUser}
    />
  ));
  return <>{userList}</>;
};

export default ChatList;
