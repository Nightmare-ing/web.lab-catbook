import React from "react";
import SingleComment from "./SingleComment";
import { NewComment } from "./NewPostInput";

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} creator_name
 * @property {string} content of the story/comment
 */

/**
 * Component that holds all the comments for a story
 *
 * Proptypes
 * @param {ContentObject[]} comments
 * @param {ContentObject} story
 * @param {(value) => void} addNewComment (function) used to update the state in the parent
 */
const CommentsBlock = (props) => {
  let commentsList = null;
  const hasComments = props.comments.length !== 0;
  if (hasComments) {
    commentsList = props.comments.map((commentObj) => (
      <SingleComment
        _id={commentObj._id}
        creator_name={commentObj.creator_name}
        content={commentObj.content}
      />
    ));
  } else {
    commentsList = <div>No comments!</div>;
  }

  return (
    <div className="Card-commentSection">
      <div className="story-comments">
        {commentsList}
        <NewComment storyId={props.story} addNewComment={props.addNewComment} />
      </div>
    </div>
  );
};

export default CommentsBlock;
