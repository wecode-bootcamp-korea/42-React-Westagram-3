import React from 'react';
import './Comment.scss';

const Comment = comment => {
  const { index, name, content, isLiked, deleteComment, changeLiked } = comment;

  const onBtnClickedLike = () => {
    changeLiked(index);
  };

  const onBtnClickedDelete = () => {
    deleteComment(index);
  };

  return (
    <li className="comment">
      <div>
        <span className="name">{name}</span>
        <span className="content">{content}</span>
      </div>
      <div className="btnCnt">
        <button className="like" onClick={onBtnClickedLike}>
          <img
            alt="like"
            src={
              isLiked
                ? '/images/dongmin/full-heart.png'
                : '/images/dongmin/empty-heart.png'
            }
          />
        </button>
        <button className="delete" onClick={onBtnClickedDelete}>
          <img alt="delete" src="/images/dongmin/delete.png" />
        </button>
      </div>
    </li>
  );
};
export default Comment;
