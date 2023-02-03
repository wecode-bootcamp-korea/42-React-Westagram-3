import { React } from 'react';
import './Aside.scss';
import Footer from '../Footer/Footer';

function Aside() {
  return (
    <aside>
      <div className="left">
        <div className="side-profile">
          <img
            className="side_profile_image"
            src="images/chan/swim.jpg"
            alt="swim"
          />
          <div>
            <p className="side_profile_id">seung_chann</p>
          </div>
        </div>

        <div className="story-box">
          <p>스토리</p>
          <div className="story-person">
            <img
              className="story_person_image"
              src="images/chan/story1.jpg"
              alt="profile1"
            />
            <p className="side_profile_id">KIM_898</p>
          </div>
          <div className="story-person">
            <img
              className="story_person_image"
              src="images/chan/story2.jpg"
              alt="profile2"
            />
            <p className="side_profile_id">bebe_su__</p>
          </div>
          <div className="story-person">
            <img
              className="story_person_image"
              src="images/chan/story3.png"
              alt="profile3"
            />
            <p className="side_profile_id">sehann_a1</p>
          </div>
          <div className="story-person">
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
            <img
              className="story_person_image"
              src="images/chan/story4.jpg"
              alt="profile4"
            />
            <p className="side_profile_id">KIM_898</p>
          </div>
          <div className="story-person">
            <img
              className="story_person_image"
              src="images/chan/story2.jpg"
              alt="profile2"
            />
            <p className="side_profile_id">bebe_su__</p>
          </div>
          <div className="story-person">
            <img
              className="story_person_image"
              src="images/chan/story3.png"
              alt="profile3"
            />
            <p className="side_profile_id">sehann_a1</p>
          </div>
          <div className="story-person">
            <img
              className="story_person_image"
              src="images/chan/story4.jpg"
              alt="profile4"
            />
            <p className="side_profile_id">apple_apple</p>
          </div>
        </div>
        <Footer />
      </div>
    </aside>
  );
}

export default Aside;
