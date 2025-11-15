import React, { useState, useEffect } from "react";

import "./SingleMessage.css";

/**
 * Renders a single chat message
 *
 * Proptypes
 * @param {MessageObject} message
 */
const SingleMessage = (props) => {
  return (
    // TODO (step 1.3): populate SingleMessage
    // (if you have extra time, style it using the classes we wrote for you in SingleMessage.css and utilities.css!)
    <div className="u-flex SingleMessage-container">
      <span className="SingleMessage-sender u-bold">{props.message.sender.name}:</span>
      <span className="SingleMessage-content">{props.message.content}</span>
    </div>
  );
};

export default SingleMessage;
