import { React } from 'react';
import './Feeds.scss';
import Comment from '../Comment/Comment';

function Feeds({ feed }) {
  return (
    <div className="Feed">
      <div className="feed_profile">
        <img className="feed_profile_image" src={feed.img} />
        <p className="feed_profile_id">{feed.name}</p>
      </div>

      <div className="feed_photo">
        <img src={feed.postImg} />
      </div>

      <div className="feed_bottom">
        <div className="feed_links">
          <div className="feed_links_left">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="fas fa-paper-plane"></i>
          </div>
          <div className="feed_links_right">
            <i className="far fa-bookmark"></i>
          </div>
        </div>

        <div className="feed_bottom_like">
          <div className="feed_bottom_like_profile">
            <img
              className="feed_bottom_like_profile_image"
              src="images/chan/swim.jpg"
            />
            <span className="feed_bottom_like_comment">
              wecoedworld님 외 93명이 좋아합니다.
            </span>
          </div>
          <div className="feed_comment">
            <div className="userName"> {feed.name} </div>
            <div className="defaultComment"> {feed.defaultComment1} </div>
          </div>
        </div>
      </div>
      <Comment />
    </div>
  );
}

export default Feeds;
