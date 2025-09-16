import React, { useState, useEffect } from "react";
import SingleStory from "./SingleStory";
import SingleComment from "./SingleComment";
import { NewComment } from "./NewPostInput";
import CommentsBlock from "./CommentsBlock";

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

  // updates the comments state so that the new comment is added immediately
  const addNewComment = (comment) => {
    setComments(comments.concat(comment));
  };

  useEffect(() => {
    const comment1 = {
      _id: "commentid1",
      creator_name: "person1",
      parent: "id1",
      content: "comment1",
    };
    const comment2 = {
      _id: "commentid2",
      creator_name: "person2",
      parent: "id2",
      content: "comment2",
    };
    const comment3 = {
      _id: "commentid3",
      creator_name: "person3",
      parent: "id3",
      content: "comment3",
    };
    const hardcodedComments = [comment1, comment2, comment3];

    setComments(hardcodedComments.filter((comment) => comment.parent == props._id));
  }, []);

  return (
    <div className="Card-container">
      <SingleStory _id={props._id} creator_name={props.creator_name} content={props.content} />
      <CommentsBlock comments={comments} story={props._id} addNewComment={addNewComment} />
    </div>
  );
  // TODO (step9): use CommentsBlock
};

export default Card;
