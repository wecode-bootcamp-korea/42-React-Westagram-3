import React from 'react';
import './Comment.scss';

function Comment({ username, comment, isLiked }) {
  return (
    <div>
      <p>
        <span className="comment_strong_text">{username}</span> {comment}
      </p>
      <img
        className="comment_comment_like"
        src="https://cdn-icons-png.flaticon.com/128/7039/7039142.png"
        alt="댓글좋아요"
      />
    </div>
  );
}

export default Comment;
