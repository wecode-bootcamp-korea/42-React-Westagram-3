import React from 'react';
import { useState } from 'react';

const Comment = () => {
  const [comment, setComment] = useState('');
  const hendleComment = event => {
    const { value } = event.target;
    setComment(value);
  };
  const [commentArray, setCommentArray] = useState([]);
  const eventComment = () => {
    const result = [...commentArray];
    result.push(comment);
    setCommentArray(result);
    setComment('');
  };

  return (
    <div className="comment">
      <div className="like">
        <img
          className="commentImg"
          alt="commentimg"
          src="images/jonghyuk/feedimg.jpg"
        />
        <span className="likeEach">
          <b>aineworld</b>님 <b>외 10명</b>이 좋아합니다
        </span>
      </div>

      <div className="post">
        <div>
          <p>
            <b>canon_mj</b> 위워크에서 진행한 베이킹 클래스...
          </p>
        </div>
        <input className="moreBtn" type="button" value="더 보기" />
      </div>

      <div className="mention">
        <div>
          <b>neceosecius</b> 거봐 좋았잖아~~~~
        </div>
        <img className="like" alt="like" src="images/jonghyuk/heart.png" />
      </div>
      <div className="lastHour">42분 전</div>
      <ul className="comment-ul">
        {commentArray.map(function (a, i) {
          return <p>{commentArray[i]}</p>;
        })}
      </ul>
      <div className="makeMention">
        <input
          className="writeMention"
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={hendleComment}
        />
        <input
          className="writeBtn"
          type="button"
          value="게시"
          onClick={eventComment}
        />
      </div>
    </div>
  );
};

export default Comment;
