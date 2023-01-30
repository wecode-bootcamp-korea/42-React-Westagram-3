import { React } from 'react';
import './Feeds.scss';

function Feeds() {
  return (
    <>
      <div className="feed_profile">
        <link href="#"></link>
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
            <link href="#"></link>
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

export default Feeds;
