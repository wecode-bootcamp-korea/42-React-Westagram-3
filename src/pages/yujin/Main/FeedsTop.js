import React from 'react';
import './FeedsTop.scss';

function FeedsTop({ profileImage, feedsImage, mainImage, feedsId }) {
  return (
    <div className="feeds_top_container">
      <div className="feeds_profile">
        <img
          className="feeds_profile_image"
          src={profileImage}
          alt="피드프로필이미지"
        />
        <div className="feeds_id">{feedsId}</div>
        <img className="feeds_more" src={feedsImage} alt="더보기" />
      </div>
      <img className="main_img" src={mainImage} alt="피드메인이미지" />
    </div>
  );
}

export default FeedsTop;
