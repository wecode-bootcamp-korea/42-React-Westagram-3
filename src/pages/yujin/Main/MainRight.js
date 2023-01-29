import React from 'react';
import './MainRight.scss';

function MainRight() {
  return (
    <div className="main">
      <ul className="story_list">
        <div className="story_text">스토리</div>
        <div className="view_all_story">모두 보기</div>
        <li className="story_box">
          <img
            className="profile_image"
            src="/images/yujin/IMG_2442.JPG"
            alt="프로필"
          />
          <div className="user_id">sogogi</div>
          <div className="story_time">30초 전</div>
        </li>
        <li>
          <div className="story_box">
            <img
              className="profile_image"
              src="/images/yujin/cali.jpg"
              alt="프로필"
            />
            <div className="user_id">fullsquat</div>
            <div className="story_time">16분 전</div>
          </div>
        </li>
        <li>
          <div className="story_box">
            <img
              className="profile_image"
              src="/images/yujin/disneyland.jpg"
              alt="프로필"
            />
            <div className="user_id">chickenandbeer</div>
            <div className="story_time">1시간 전</div>
          </div>
        </li>
        <li>
          <div className="story_box">
            <img
              className="profile_image"
              src="/images/yujin/IMG_9991.jpg"
              alt="프로필"
            />
            <div className="user_id">homesweethome</div>
            <div className="story_time">3시간 전</div>
          </div>
        </li>
        <li>
          <div className="story_box">
            <img
              className="profile_image"
              src="/images/yujin/gracie.png"
              alt="프로필"
            />
            <div className="user_id">protein</div>
            <div className="story_time">7시간 전</div>
          </div>
        </li>
      </ul>
      <ul className="suggest">
        <div className="recomment_text">회원님을 위한 추천</div>
        <div className="view_all_suggestion">모두 보기</div>
        <li>
          <div className="story_box">
            <img
              className="profile_image"
              src="/images/yujin/IMG_6080.jpg"
              alt="프로필"
            />
            <div className="user_id">shoulderpress</div>
            <div className="story_time">19시간 전</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MainRight;
