import React from 'react';
import './Main.scss';
import Nav from './Nav/Nav';
const Main = () => {
  return (
    <>
      <Nav />
      <main>
        <Feeds />
        <MainRight />
      </main>
    </>
  );
};

const Feeds = () => {
  return (
    <div className="feeds">
      <article>
        <div className="profile-cnt">
          <img
            className="profile-img"
            alt="logo"
            src={process.env.PUBLIC_URL + '/images/dongmin/wecode.png'}
          />
          <ul className="profile-text">
            <li>wecode_bootcamp</li>
            <li>WeCode - 위코드</li>
          </ul>
        </div>
        <div className="img-focus-cnt">
          <img
            className="img-focus"
            alt="focus"
            src={process.env.PUBLIC_URL + '/images/dongmin/feed.jpg'}
          />
        </div>
        <div className="button-cnt">
          <ul className="icon-cnt">
            <li>
              <button className="heart-button">
                <img
                  className="article-icon"
                  alt="logo"
                  src={
                    process.env.PUBLIC_URL + '/images/dongmin/empty-heart.png'
                  }
                />
              </button>
            </li>
            <li>
              <button>
                <img
                  className="article-icon"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/chat.png'}
                />
              </button>
            </li>
            <li>
              <button>
                <img
                  className="article-icon"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/upload.png'}
                />
              </button>
            </li>
          </ul>
          <div className="icon-cnt">
            <button>
              <img
                className="article-icon"
                alt="logo"
                src={process.env.PUBLIC_URL + '/images/dongmin/bookmark.png'}
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
                src={process.env.PUBLIC_URL + '/images/dongmin/wecode.png'}
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
            제가나다라마바사아자카타파하아자차카타파하
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

const MainRight = () => {
  return (
    <div className="main-right">
      <aside>
        <div className="profile-cnt">
          <img
            className="profile-img"
            alt="logo"
            src={process.env.PUBLIC_URL + '/images/dongmin/wecode.png'}
          />
          <ul className="profile-text">
            <li>wecode_bootcamp</li>
            <li>WeCode - 위코드</li>
          </ul>
        </div>
        <div className="story-wrap">
          스토리
          <span className="show-all">모두 보기</span>
          <ul className="story-li">
            <li>
              <div className="side-profile-cnt">
                <img
                  className="side-profile-img"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/junhyun.jpg'}
                />
                <ul className="side-profile-text">
                  <li>junwise.park</li>
                  <li>16분 전</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="side-profile-cnt">
                <img
                  className="side-profile-img"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/junhyun.jpg'}
                />
                <ul className="side-profile-text">
                  <li>junwise.park</li>
                  <li>3시간 전</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="side-profile-cnt">
                <img
                  className="side-profile-img"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/junhyun.jpg'}
                />
                <ul className="side-profile-text">
                  <li>junwise.park</li>
                  <li>6시간 전</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="side-profile-cnt">
                <img
                  className="side-profile-img"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/junhyun.jpg'}
                />
                <ul className="side-profile-text">
                  <li>junwise.park</li>
                  <li>12시간 전</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="recommend-wrap">
          회원님을 위한 추천
          <span className="show-all">모두 보기</span>
          <ul className="story-li">
            <li>
              <div className="side-profile-cnt">
                <img
                  className="side-profile-img"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/soohyun.png'}
                />
                <ul className="side-profile-text">
                  <li>watervillage.kim</li>
                  <li>dongmin.lee 외 2명이 알고 있을지도 모르고 있을지도</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="side-profile-cnt">
                <img
                  className="side-profile-img"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/soohyun.png'}
                />
                <ul className="side-profile-text">
                  <li>watervillage.kim</li>
                  <li>dongmin.lee 외 2명이 알고 있을지도 모르고 있을지도</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="side-profile-cnt">
                <img
                  className="side-profile-img"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/soohyun.png'}
                />
                <ul className="side-profile-text">
                  <li>watervillage.kim</li>
                  <li>dongmin.lee 외 2명이 알고 있을지도 모르고 있을지도</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="side-profile-cnt">
                <img
                  className="side-profile-img"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/soohyun.png'}
                />
                <ul className="side-profile-text">
                  <li>watervillage.kim</li>
                  <li>dongmin.lee 외 2명이 알고 있을지도 모르고 있을지도</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="side-profile-cnt">
                <img
                  className="side-profile-img"
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/dongmin/soohyun.png'}
                />
                <ul className="side-profile-text">
                  <li>watervillage.kim</li>
                  <li>dongmin.lee 외 2명이 알고 있을지도 모르고 있을지도</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <footer>
        <ul>
          <li>Instagram 정보</li>
          <li>지원</li>
          <li>홍보 센터</li>
          <li>API</li>
          <li>채용 정보</li>
          <li>개인정보처리방침</li>
          <li>약관</li>
          <li>디렉터리</li>
          <li>프로필</li>
          <li>해시태그</li>
          <li>언어</li>
        </ul>
        <span>&copy; 2023 INSTAGRAM</span>
      </footer>
    </div>
  );
};

export default Main;
