import { React, useState } from 'react';
import CommentList from '../CommentList/CommentList';
import './Comment.scss';

function Comment() {
  const [userName] = useState('JinHee');
  const [comment, setComment] = useState('');
  const [feedCommets, setFeedComments] = useState([]);
  const isValid = comment.length !== 0;

  const post = e => {
    e.preventDefault();
    setFeedComments(currentArray => [
      ...currentArray,
      { id: Date.now(), text: comment },
    ]);
    setComment('');
  };

  const onRemove = id => {
    setFeedComments(
      feedCommets.filter(comment => {
        return comment.id !== id;
      })
    );
  };

  return (
    <div className="Comment">
      {feedCommets.map((commentArr, id) => {
        return (
          <CommentList
            userName={userName}
            commentArr={commentArr}
            Key={id}
            onRemove={onRemove}
          />
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
          value={comment}
        />
        <button
          id="comments-submit"
          type="submit"
          className={
            comment.length > 0 ? 'submitCommentActive' : 'submitCommentInactive'
          }
          disabled={!isValid}
        >
          게시
        </button>
      </form>
    </div>
  );
}

export default Comment;
