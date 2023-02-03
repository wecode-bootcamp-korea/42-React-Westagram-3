import React, { useState } from 'react';
import Comment from './Components/Comment';
import './Feed.scss';

const Feeds = ({ props }) => {
  const [input, setInput] = useState('');

  const [commentsList, setCommentsList] = useState([]);

  const {
    profileImg,
    profileText,
    feedImg,
    nickname,
    content,
    likeProfileImg,
    likeProfileText,
  } = props;

  const changeInput = e => {
    setInput(e.target.value);
  };

  const changeLiked = idxOfChangingLiked => e => {
    setCommentsList(
      commentsList.map((comment, idx) => {
        if (idx === idxOfChangingLiked) comment.isLiked = !comment.isLiked;
        return comment;
      })
    );
  };

  const deleteComment = idxOfBeingDeleted => e => {
    setCommentsList(
      commentsList.filter((comment, idx) => {
        return idx !== idxOfBeingDeleted;
      })
    );
  };

  const onSubmit = e => {
    const comment = {
      id: commentsList.length + 1,
      name: 'gmgmgun',
      content: input,
      isLiked: false,
    };
    setCommentsList([...commentsList, comment]);
    setInput('');
    e.preventDefault();
  };

  return (
    <div className="feeds">
      <article>
        <div className="profileCnt">
          <img className="profileImg" alt="logo" src={profileImg} />
          <ul className="profileText">
            <li>{profileText[0]}</li>
            <li>{profileText[1]}</li>
          </ul>
        </div>
        <div className="feedsImgCnt">
          <img className="feedsImg" alt="focus" src={feedImg} />
        </div>
        <div className="btnCnt">
          <ul className="iconCnt">
            <li>
              <button className="heartButton">
                <img
                  className="articleIcon"
                  alt="logo"
                  src="/images/dongmin/full-heart.png"
                />
              </button>
            </li>
            <li>
              <button>
                <img
                  className="articleIcon"
                  alt="logo"
                  src="/images/dongmin/chat.png"
                />
              </button>
            </li>
            <li>
              <button>
                <img
                  className="articleIcon"
                  alt="logo"
                  src="/images/dongmin/upload.png"
                />
              </button>
            </li>
          </ul>
          <div className="iconCnt">
            <button>
              <img
                className="articleIcon"
                alt="logo"
                src="/images/dongmin/bookmark.png"
              />
            </button>
          </div>
        </div>
        <div id="likeAmount" className="likeAmountNotZero">
          <div className="likeCnt">
            <div className="likeProfileCnt">
              <img className="likeProfileImg" alt="logo" src={likeProfileImg} />
              <div className="likeProfileText">{likeProfileText}</div>
            </div>
            <div>님이 좋아합니다.</div>
          </div>
        </div>
        <div className="mainText">
          <div className="nameContentCnt sizeForOverflowHidden">
            <span className="name">{nickname}</span>
            <span className="content">{content}</span>
          </div>
        </div>
        <div>
          <ul>
            {commentsList.map((comment, idx) => (
              <Comment
                key={comment.id}
                index={idx}
                name={comment.name}
                content={comment.content}
                isLiked={comment.isLiked}
                deleteComment={deleteComment}
                changeLiked={changeLiked}
              />
            ))}
          </ul>
        </div>
        <hr />
        <form onSubmit={onSubmit} className="inputCnt">
          <input
            className="inputComment"
            type="text"
            placeholder="댓글 달기.."
            onChange={changeInput}
            value={input}
          />
          <button type="submit">게시</button>
        </form>
      </article>
    </div>
  );
};

export default Feeds;
