import React from 'react';
import './Comment.scss';

const Comment = props => {
  const { index, name, content, isLiked, changeLiked, deleteComment } = props;

  return (
    <li className="comment">
      <div>
        <span className="name">{name}</span>
        <span className="content">{content}</span>
      </div>
      <div className="btnCnt">
        <button
          className="like"
          onClick={() => {
            changeLiked(index);
          }}
        >
          <img
            alt="like"
            src={
              isLiked
                ? '/images/dongmin/full-heart.png'
                : '/images/dongmin/empty-heart.png'
            }
          />
        </button>
        <button
          className="delete"
          onClick={() => {
            deleteComment(index);
          }}
        >
          <img alt="delete" src="/images/dongmin/delete.png" />
        </button>
      </div>
    </li>
  );
};
export default Comment;
