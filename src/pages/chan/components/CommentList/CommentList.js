import { React } from 'react';
import './CommentList.scss';

function CommentList({ userName, userComment }) {
  return (
    <div className="CommentList">
      <div className="userCommentBox">
        <div className="CommentLeft">
          <p className="userName">{userName}</p>
          <div className="userComment">{userComment}</div>
        </div>
        <div className="CommentRight">
          <i className="far fa-heart"></i>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
