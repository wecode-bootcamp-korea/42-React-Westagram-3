import { React, useState } from 'react';
import './Main.scss';

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <div className="logo">
          <a href="login.html">
            <img src="images/chan/insta.png" alt="main_logo" />
          </a>
        </div>
        <div className="input_box">
          {' '}
          <input type="text" placeholder="검색" id="search" />
        </div>
        <nav className="nav">
          <ul className="link_list">
            <li>
              <a href="#">
                <i className="fas fa-compass"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user-circle"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Feeds() {
  return (
    // <article className="article">
    <>
      <div className="feed_profile">
        <a href="#"></a>
        <img className="profile_image" src="images/chan/swim.jpg" />
        <p className="profile_id">seung_chann</p>
      </div>

      <div className="feed_photo">
        <img src="images/chan/flower.PNG" />
      </div>

      <div className="article-bottom">
        <div className="article-links">
          <div className="article-links-left">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="fas fa-paper-plane"></i>
          </div>
          <div className="article-links-right">
            <i className="far fa-bookmark"></i>
          </div>
        </div>

        <div className="article-bottom-like">
          <div className="like-profile">
            <a href="#"></a>
            <img className="like_profile_image" src="images/chan/swim.jpg" />
            <span className="article-bold">
              wecoedworld님 외 93명이 좋아합니다.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function CommentList(props) {
  return (
    <div className="CommentList">
      <div className="userCommentBox">
        <div className="CommentLeft">
          <p className="userName">{props.userName}</p>
          <div className="userComment">{props.userComment}</div>
        </div>
        <div className="CommentRight">
          <i className="far fa-heart"></i>
        </div>
      </div>
    </div>
  );
}

function Comment() {
  const [userName] = useState('JinHee');
  const [comment, setComment] = useState('');
  const [feedCommets, setFeedComments] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const post = e => {
    e.preventDefault();
    const copyFeedComments = [...feedCommets];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  return (
    <div className="Comment">
      {feedCommets.map((commentArr, i) => {
        return (
          <CommentList userName={userName} userComment={commentArr} Key={i} />
        );
      })}
      <form onSubmit={post}>
        <div className="emotion">
          <i className="far fa-smile"></i>
        </div>
        <input
          type="text"
          className="inputComment"
          id="comments-id"
          placeholder="댓글 달기..."
          onChange={e => {
            setComment(e.target.value);
          }}
          onKeyUp={e => {
            e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
          }}
          value={comment}
        />
        <button
          id="comments-submit"
          type="submit"
          className={
            comment.length > 0 ? 'submitCommentActive' : 'submitCommentInactive'
          }
          disabled={isValid ? false : true}
        >
          게시
        </button>
      </form>
    </div>
  );
}

function Aside() {
  return (
    <aside>
      <div className="left">
        <div className="side-profile">
          <a href="#"></a>
          <img className="side_profile_image" src="images/chan/swim.jpg" />
          <p className="side_profile_id">seung_chann</p>
        </div>

        <div className="story-box">
          <p>스토리</p>
          <div className="story-person">
            <a href="#"></a>
            <img className="story_person_image" src="images/chan/story1.jpg" />
            <p className="side_profile_id">KIM_898</p>
          </div>
          <div className="story-person">
            <a href="#"></a>
            <img className="story_person_image" src="images/chan/story2.jpg" />
            <p className="side_profile_id">bebe_su__</p>
          </div>
          <div className="story-person">
            <a href="#"></a>
            <img className="story_person_image" src="images/chan/story3.png" />
            <p className="side_profile_id">sehann_a1</p>
          </div>
          <div className="story-person">
            <a href="#"></a>
            <img className="story_person_image" src="images/chan/story4.jpg" />
            <p className="side_profile_id">apple_apple</p>
          </div>
        </div>

        <div className="recommand-box">
          <p> </p>
          <p>회원님을 위한 추천</p>
          <div className="story-person">
            <a href="#"></a>
            <img className="story_person_image" src="images/chan/story4.jpg" />
            <p className="side_profile_id">KIM_898</p>
          </div>
          <div className="story-person">
            <a href="#"></a>
            <img className="story_person_image" src="images/chan/story2.jpg" />
            <p className="side_profile_id">bebe_su__</p>
          </div>
          <div className="story-person">
            <a href="#"></a>
            <img className="story_person_image" src="images/chan/story3.png" />
            <p className="side_profile_id">sehann_a1</p>
          </div>
          <div className="story-person">
            <a href="#"></a>
            <img className="story_person_image" src="images/chan/story4.jpg" />
            <p className="side_profile_id">apple_apple</p>
          </div>
        </div>

        <div className="last-box">
          <p>소개 도움말 홍보센터 API 개인정보처리방침 약관</p>
          <p>Copyright 2023. SEUNGCHAN KANG</p>
        </div>
      </div>
    </aside>
  );
}

function Main() {
  return (
    <div className="Main">
      <Header />
      <main className="Contents">
        <div className="Left">
          <article className="article">
            <Feeds />
            <Comment />
          </article>
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default Main;
