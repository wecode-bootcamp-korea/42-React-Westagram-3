import React from 'react';

const ProfileCard = profile => {
  const { name, nickname, time } = profile;
  return (
    <li>
      <div className="sideProfileCnt">
        <img
          className="sideProfileImg"
          alt="logo"
          src={`/images/dongmin/${name}.png`}
        />
        <ul className="sideProfileText">
          <li>{nickname}</li>
          <li>{time}</li>
        </ul>
      </div>
    </li>
  );
};

export default ProfileCard;
