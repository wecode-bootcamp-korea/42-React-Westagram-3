import React, { useState } from 'react';
import Newcomment from './Newcomment';

const Newfeeds = ({ feedData }) => {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  const [onClick, setOnClick] = useState(false);
  const isCommentFilled = comment.length > 0;

  const deletComment = id => {
    const removeComment = commentArray.filter(comment => comment.id !== id);
    setCommentArray(removeComment);
  };

  const onClickLike = () => {
    setOnClick(prev => {
      return !prev;
    });
  };

  const hendleComment = event => {
    setComment(event.target.value);
  };

  const eventComment = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    const result = [
      ...commentArray,
      { id: commentArray.length + 1, text: comment },
    ];
    setCommentArray(result);
    setComment('');
  };

  return (
    <section className="leftSection">
      <div className="title">
        <div className="imgId">
          <img className="titleImg" alt="titleimg" src={feedData.userImg} />
        </div>
        <span className="userId">{feedData.username}</span>
        <img className="more" alt="more" src="images/jonghyuk/more.png" />
      </div>

      <div className="feedandMention">
        <img
          className="feedImg"
          alt="feedimg"
          src={feedData.feedImages[0].imgUrl}
        />
        <div className="button">
          <div className="feedBtn">
            <img
              className="feedBtnImg"
              alt="like"
              src="images/jonghyuk/red heart.png"
            />
            <img
              className="feedBtnImg"
              alt="comment"
              src="images/jonghyuk/comment.png"
            />
            <img
              className="feedBtnImg"
              alt="save"
              src="images/jonghyuk/save.png"
            />
          </div>
          <img
            className="bookmark"
            alt="bookmark"
            src="images/jonghyuk/bookmark.png"
          />
        </div>
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
                <b>{feedData.username}</b> {feedData.content}
              </p>
            </div>
            <input className="moreBtn" type="button" value="더 보기" />
          </div>

          <div className="mention">
            <div>
              <b>{feedData.otherUserName}</b> {feedData.comment}
            </div>
            <button className="likeBtn" type="button" onClick={onClickLike}>
              <img
                className="like"
                alt="like"
                src={onClick ? feedData.likeImg : feedData.disLikeImg}
              />
            </button>
          </div>
          <div className="lastHour">42분 전</div>
          <ul className="comment-ul">
            {commentArray.map(function (comment, id) {
              return (
                <Newcomment
                  key={id}
                  comment={comment}
                  delComment={deletComment}
                />
              );
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
              className={isCommentFilled ? 'changeColorBtn' : 'writeBtn'}
              type="button"
              value="게시"
              onClick={eventComment}
              disabled={isCommentFilled ? false : true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newfeeds;