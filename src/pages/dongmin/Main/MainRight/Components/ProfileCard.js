import React from 'react';

const ProfileCard = props => {
  const { name, nickname, time } = props;
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
