import React from 'react';
import './Comment.scss';

const Comment = props => {
  const { key, index, name, content, deleteCommentFunc } = props;

  const isHeartEmpty = src => (src.indexOf('empty') !== -1 ? true : false);

  const onBtnClickedLike = e => {
    isHeartEmpty(e.target.src)
      ? (e.target.src = '/images/dongmin/full-heart.png')
      : (e.target.src = '/images/dongmin/empty-heart.png');
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
      <div className="btn-cnt">
        <button className="like" onClick={onBtnClickedLike}>
          <img alt="like" src="/images/dongmin/empty-heart.png" />
        </button>
        <button className="delete" onClick={onBtnClickedDelete}>
          <img alt="delete" src="/images/dongmin/delete.png" />
        </button>
      </div>
    </li>
  );
};
export default Comment;
