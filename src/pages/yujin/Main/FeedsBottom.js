import React, { useRef, useState } from 'react';
import './FeedsBottom.scss';
import Comment from './Comment';

function FeedsBottom({
  userName,
  likeCount,
  authorName,
  authorFeedContent,
  commentAuthor,
  firstComment,
  uploadTime,
}) {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const nextId = useRef(0);

  const saveComment = () => {
    const newComment = {
      id: nextId.current,
      username: 'user',
      comment: commentInput,
    };

    setComments([...comments, newComment]);

    nextId.current += 1;
    setCommentInput('');
  };

  const onChangeCommentInput = e => {
    setCommentInput(e.target.value);
  };

  const onKeyPressCommentInput = e => {
    if (e.key === 'Enter') {
      saveComment();
    }
  };

  const onClickAddComment = () => {
    saveComment();
  };

  return (
    <div className="feeds_bottom_box">
      <div className="feeds_except_comment">
        <div className="feeds_bottom_container">
          <div className="container_middle">
            <img
              className="like_icon_middle"
              src="https://t4.ftcdn.net/jpg/05/58/62/89/240_F_558628962_hFF16Z0vIpomSrMsR3DG1HHNnI3t4qIF.jpg"
              alt="좋아요버튼"
            />
            <img
              className="comment_icon"
              src="https://cdn-icons-png.flaticon.com/512/2414/2414210.png"
              alt="댓글버튼"
            />
            <img
              className="send"
              src="https://cdn-icons-png.flaticon.com/512/6423/6423903.png"
              alt="공유버튼"
            />
            <img
              className="save"
              src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png"
              alt="저장버튼"
            />
          </div>
          <div className="main_like">
            <span className="strong_text">{userName}</span>님
            <span className="strong_text">외 {likeCount}명</span>이 좋아합니다
          </div>
          <p className="feeds_text">
            <span className="strong_text">{authorName}</span>{' '}
            {authorFeedContent}
          </p>
          <div className="commentList">
            <div className="first_comment">
              <p>
                <span className="strong_text">{commentAuthor}</span>{' '}
                {firstComment}
              </p>
              <img
                className="comment_like"
                src="https://cdn-icons-png.flaticon.com/128/7039/7039142.png"
                alt="댓글좋아요"
              />
            </div>
            {comments.map(comment => (
              <Comment
                key={comment.id}
                username={comment.username}
                comment={comment.comment}
              />
            ))}
          </div>
        </div>
        <p className="upload_time">{uploadTime} 전</p>
      </div>
      <div className="comment_box">
        <input
          className="comment"
          type="text"
          placeholder="댓글 달기..."
          onChange={onChangeCommentInput}
          value={commentInput}
          onKeyDown={onKeyPressCommentInput}
        />
      </div>
      <div>
        <button className="button" type="button" onClick={onClickAddComment}>
          게시
        </button>
      </div>
    </div>
  );
}

export default FeedsBottom;
