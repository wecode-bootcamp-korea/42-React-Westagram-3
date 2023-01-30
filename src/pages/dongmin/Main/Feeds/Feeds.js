import React, { useState } from 'react';
import './Feeds.scss';
import Comment from './Components/Comment';
import { v4 as uuidv4 } from 'uuid';

const Feeds = () => {
  const [input, setInput] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const changeInput = e => {
    setInput(e.target.value);
  };

  const deleteComment = idxOfBeingDeleted => {
    setCommentsList(
      commentsList.filter((el, idx) => {
        return idx !== idxOfBeingDeleted;
      })
    );
  };

  const onSubmit = e => {
    const comment = { id: uuidv4(), name: 'gmgmgun', content: input };
    setCommentsList([...commentsList, comment]);
    setInput('');
    e.preventDefault();
  };

  return (
    <div className="feeds">
      <article>
        <div className="profileCnt">
          <img
            className="profileImg"
            alt="logo"
            src="/images/dongmin/wecode.png"
          />
          <ul className="profileText">
            <li>wecode_bootcamp</li>
            <li>WeCode - 위코드</li>
          </ul>
        </div>
        <div className="feedsImgCnt">
          <img
            className="feedsImg"
            alt="focus"
            src="/images/dongmin/feed.jpg"
          />
        </div>
        <div className="btnCnt">
          <ul className="iconCnt">
            <li>
              <button className="heartButton">
                <img
                  className="articleIcon"
                  alt="logo"
                  src="/images/dongmin/empty-heart.png"
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
              <img
                className="likeProfileImg"
                alt="logo"
                src="/images/dongmin/wecode.png"
              />
              <div className="likeProfileText">wecode_bootcamp</div>
            </div>
            <div>님이 좋아합니다.</div>
          </div>
        </div>
        <div className="nameContentCnt sizeForOverflowHidden">
          <span className="name">chanho_park</span>
          <span className="content">
            제가 LA에 있을때는 말이죠 정말
            제가나다라마바사아자카타파하가나다라마바사아자차카타파하
          </span>
        </div>
        <div>
          <ul>
            {commentsList.map((el, idx) => (
              <Comment
                key={el.id}
                index={idx}
                name={el.name}
                content={el.content}
                deleteCommentFunc={deleteComment}
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
