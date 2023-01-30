import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="top_bar">
      <div className="container_top_left">
        <img
          className="insta_logo"
          src="https://cdn-icons-png.flaticon.com/512/5949/5949057.png"
          alt="인스타그램"
        />
        <img
          className="section"
          src="https://cdn-icons-png.flaticon.com/512/649/649686.png"
          alt="section"
        />
        <img
          className="insta_text"
          src="https://fontmeme.com/images/instagram-new-logo.png"
          alt="인스타그램"
        />
      </div>
      <div className="search">
        <img
          className="search_img"
          src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
          alt="검색"
        />
        <input className="search_text" type="text" placeholder="검색" />
      </div>
      <div className="container_top_right">
        <div className="explore">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="탐색"
          />
        </div>
        <div className="like_icon_top">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="좋아요"
          />
        </div>
        <div className="my_page">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="마이페이지"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
