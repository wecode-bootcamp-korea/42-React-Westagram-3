import React from 'react';
import './Feeds.scss';

const Feeds = () => {
  return (
    <div className="feeds">
      <article>
        <div className="profile-cnt">
          <img
            className="profile-img"
            alt="logo"
            src="/images/dongmin/wecode.png"
          />
          <ul className="profile-text">
            <li>wecode_bootcamp</li>
            <li>WeCode - 위코드</li>
          </ul>
        </div>
        <div className="feeds-img-cnt">
          <img
            className="feeds-img"
            alt="focus"
            src="/images/dongmin/feed.jpg"
          />
        </div>
        <div className="button-cnt">
          <ul className="icon-cnt">
            <li>
              <button className="heart-button">
                <img
                  className="article-icon"
                  alt="logo"
                  src="/images/dongmin/empty-heart.png"
                />
              </button>
            </li>
            <li>
              <button>
                <img
                  className="article-icon"
                  alt="logo"
                  src="/images/dongmin/chat.png"
                />
              </button>
            </li>
            <li>
              <button>
                <img
                  className="article-icon"
                  alt="logo"
                  src="/images/dongmin/upload.png"
                />
              </button>
            </li>
          </ul>
          <div className="icon-cnt">
            <button>
              <img
                className="article-icon"
                alt="logo"
                src="/images/dongmin/bookmark.png"
              />
            </button>
          </div>
        </div>

        <div id="like-amount" className="like-amount-not-zero">
          <div className="like-cnt">
            <div className="like-profile-cnt">
              <img
                className="like-profile-img"
                alt="logo"
                src="/images/dongmin/wecode.png"
              />
              <div className="like-profile-text">wecode_bootcamp</div>
            </div>
            <div>님이 좋아합니다.</div>
          </div>
        </div>
        <div className="name-content-cnt size-for-overflow-hidden">
          <span className="name">chanho_park</span>
          <span className="content">
            제가 LA에 있을때는 말이죠 정말
            제가나다라마바사아자카타파하가나다라마바사아자차카타파하
          </span>
        </div>
        <div>
          <ul className="comment-li"></ul>
        </div>
        <hr />
        <div className="input-cnt">
          <input
            className="input-comment"
            type="text"
            placeholder="댓글 달기.."
          />
          <button className="submit">게시</button>
        </div>
      </article>
    </div>
  );
};

export default Feeds;
