import { React, useState } from 'react';
import CommentList from '../CommentList/CommentList';
import './Comment.scss';

function Comment() {
  const [userName] = useState('JinHee');
  const [comment, setComment] = useState('');
  const [feedCommets, setFeedComments] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const post = e => {
    e.preventDefault();
    const copyFeedComments = [...feedCommets];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  return (
    <div className="Comment">
      {feedCommets.map((commentArr, i) => {
        return (
          <CommentList userName={userName} userComment={commentArr} Key={i} />
        );
      })}
      <form onSubmit={post}>
        <div className="emotion">
          <i className="far fa-smile"></i>
        </div>
        <input
          type="text"
          className="inputComment"
          id="comments-id"
          placeholder="댓글 달기..."
          onChange={e => {
            setComment(e.target.value);
          }}
          onKeyUp={e => {
            e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
          }}
          value={comment}
        />
        <button
          id="comments-submit"
          type="submit"
          className={
            comment.length > 0 ? 'submitCommentActive' : 'submitCommentInactive'
          }
          disabled={isValid ? false : true}
        >
          게시
        </button>
      </form>
    </div>
  );
}

export default Comment;
