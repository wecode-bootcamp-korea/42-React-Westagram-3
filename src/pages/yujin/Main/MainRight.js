import React from 'react';
import './MainRight.scss';

function MainRight() {
  return (
    <div className="main">
      <img
        className="top_profile_image"
        src="/images/yujin/cali.jpg"
        alt="프로필"
      />
      <div className="top_user_id">sogogi_medium</div>
      <div className="top_user_name">뇸뇸</div>
      <ul className="story_list">
        <div className="story_text">스토리</div>
        <div className="view_all_story">모두 보기</div>
        <div className="story_box_container">
          <li>
            <div className="story_box">
              <img
                className="profile_image"
                src="/images/yujin/IMG_2442.JPG"
                alt="프로필"
              />
              <div className="user_id">fullsquat</div>
              <div className="story_time">30초 전</div>
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
              <div className="story_time">16분 전</div>
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
        </div>
      </ul>
      <ul className="suggest">
        <div className="recomment_text">회원님을 위한 추천</div>
        <div className="view_all_suggestion">모두 보기</div>
        <li>
          <div className="story_box">
            <img
              className="profile_image"
              src="/images/yujin/hun.png"
              alt="프로필"
            />
            <div className="user_id">shoulderpress</div>
            <div className="story_time">1_tokyo님 외 17명이 팔...</div>
            <div className="follow">팔로우</div>
          </div>
        </li>
        <li>
          <div className="story_box">
            <img
              className="profile_image"
              src="/images/yujin/pa.png"
              alt="프로필"
            />
            <div className="user_id">jmt_jmt</div>
            <div className="story_time">eclipse님 외 2명이 팔로...</div>
            <div className="follow">팔로우</div>
          </div>
        </li>
        <li>
          <div className="story_box">
            <img
              className="profile_image"
              src="/images/yujin/longbeach.png"
              alt="프로필"
            />
            <div className="user_id">listening</div>
            <div className="story_time">re_adiin_.g님 외 30명이...</div>
            <div className="follow">팔로우</div>
          </div>
        </li>
        <li>
          <div className="story_box">
            <img
              className="profile_image"
              src="/images/yujin/IMG_6080.jpg"
              alt="프로필"
            />
            <div className="user_id">speaking</div>
            <div className="story_time">writing_s님 외 9명이 팔...</div>
            <div className="follow">팔로우</div>
          </div>
        </li>
      </ul>
      <div>
        <div className="data">
          Instagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침
          · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
        </div>
        {/* <div className='data'>
          {footer.map(data => {
            return <span>{data.id} {data.text}</span>
            })}
        </div> */}
        {/* const data = footer.map(data => {return <span>footer.text</span>}) */}
      </div>
    </div>
  );
}

export default MainRight;
