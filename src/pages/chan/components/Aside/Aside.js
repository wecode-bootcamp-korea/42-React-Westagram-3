import { React } from 'react';
import './Aside.scss';

function Aside() {
  return (
    <aside>
      <div className="left">
        <div className="side-profile">
          <link href="#"></link>
          <img
            className="side_profile_image"
            src="images/chan/swim.jpg"
            alt="swim"
          />
          <p className="side_profile_id">seung_chann</p>
        </div>

        <div className="story-box">
          <p>스토리</p>
          <div className="story-person">
            <link href="#"></link>
            <img
              className="story_person_image"
              src="images/chan/story1.jpg"
              alt="profile1"
            />
            <p className="side_profile_id">KIM_898</p>
          </div>
          <div className="story-person">
            <link href="#"></link>
            <img
              className="story_person_image"
              src="images/chan/story2.jpg"
              alt="profile2"
            />
            <p className="side_profile_id">bebe_su__</p>
          </div>
          <div className="story-person">
            <link href="#"></link>
            <img
              className="story_person_image"
              src="images/chan/story3.png"
              alt="profile3"
            />
            <p className="side_profile_id">sehann_a1</p>
          </div>
          <div className="story-person">
            <link href="#"></link>
            <img
              className="story_person_image"
              src="images/chan/story4.jpg"
              alt="profile4"
            />
            <p className="side_profile_id">apple_apple</p>
          </div>
        </div>

        <div className="recommand-box">
          <p> </p>
          <p>회원님을 위한 추천</p>
          <div className="story-person">
            <link href="#"></link>
            <img
              className="story_person_image"
              src="images/chan/story4.jpg"
              alt="profile4"
            />
            <p className="side_profile_id">KIM_898</p>
          </div>
          <div className="story-person">
            <link href="#"></link>
            <img
              className="story_person_image"
              src="images/chan/story2.jpg"
              alt="profile2"
            />
            <p className="side_profile_id">bebe_su__</p>
          </div>
          <div className="story-person">
            <link href="#"></link>
            <img
              className="story_person_image"
              src="images/chan/story3.png"
              alt="profile3"
            />
            <p className="side_profile_id">sehann_a1</p>
          </div>
          <div className="story-person">
            <link href="#"></link>
            <img
              className="story_person_image"
              src="images/chan/story4.jpg"
              alt="profile4"
            />
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

export default Aside;
