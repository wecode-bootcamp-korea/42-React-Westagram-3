import { React } from 'react';
import './CommentList.scss';

function CommentList({ userName, onRemove, commentArr }) {
  const { id, text } = commentArr;
  return (
    <div className="CommentList">
      <div className="CommentListBox">
        <div className="CommentLeft">
          <p className="userName">{userName}</p>
          <div className="userComment">{text}</div>
        </div>
        <div className="CommentRight">
          <button className="likebtn">
            <i className="far fa-heart"></i>
          </button>
          <button className="trashbtn" onClick={() => onRemove(id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
