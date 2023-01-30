import React, { useState } from 'react';
import './Comment.scss';

const Comment = props => {
  const { index, name, content, deleteCommentFunc } = props;

  const [like, setLike] = useState('/images/dongmin/empty-heart.png');

  const onBtnClickedLike = () => {
    like.includes('empty')
      ? setLike('/images/dongmin/full-heart.png')
      : setLike('/images/dongmin/empty-heart.png');
  };

  const onBtnClickedDelete = () => {
    deleteCommentFunc(index);
  };

  return (
    <li className="comment">
      <div>
        <span className="name">{name}</span>
        <span className="content">{content}</span>
      </div>
      <div className="btnCnt">
        <button className="like" onClick={onBtnClickedLike}>
          <img alt="like" src={like} />
        </button>
        <button className="delete" onClick={onBtnClickedDelete}>
          <img alt="delete" src="/images/dongmin/delete.png" />
        </button>
      </div>
    </li>
  );
};
export default Comment;
