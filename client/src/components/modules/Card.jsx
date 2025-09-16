import React, { useEffect } from "react";
import { useState } from "react";
import SingleStory from "./SingleStory";
// TODO (step7): import SingleComment
// TODO (step8): import NewComment
// TODO (step9): import CommentsBlock

import "./Card.css";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const Card = (props) => {
  const [comments, setComments] = useState([]);

  // TODO (step8): implement a callback function addNewComment that adds a
  // new comment to the comments state

  useEffect(() => {
    const comment1 = {
      _id: "id1",
      creator_name: "Anonymous User",
      parent: "asdkfjlk",
      content: "dsdcd",
    };
    const comment2 = {
      _id: "id2",
      creator_name: "Anonymous User",
      parent: "asdkfjlk",
      content: "dsdcd",
    };
    const comment3 = {
      _id: "id3",
      creator_name: "Anonymous User",
      parent: "asdkfjlk",
      content: "dsdcd",
    };
    const comment4 = {
      _id: "id3",
      creator_name: "Anonymous User",
      parent: "asdkfjlk",
      content: "dsdcd",
    };
    setComments([comment1, comment2, comment3, comment4]);
  }, []);

  return (
    <div>
      <SingleStory _id={props._id} creator_name={props.creator_name} content={props.content} />
      {JSON.stringify(comments.filter((x) => x._id === props._id))}
    </div>
  );
  // TODO (step7): map comments from state into SingleComment
  // components (refer to Feed)
  // TODO (step8): add in the NewComment component (refer to Feed)
  // TODO (step9): use CommentsBlock
};

export default Card;
