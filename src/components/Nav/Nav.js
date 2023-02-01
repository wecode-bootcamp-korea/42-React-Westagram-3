import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <div className="navCnt">
        <ul className="navLeft">
          <li>
            <img
              className="navItem"
              alt="logo"
              src="/images/dongmin/logo.png"
            />
          </li>
          <li className="navItem lineVertical">|</li>
          <li>
            <h1 className="navItem">Westagram</h1>
          </li>
        </ul>
        <input className="navCenter" type="text" placeholder="검색" />
        <ul className="navRight">
          <li>
            <img
              className="navItem"
              alt="logo"
              src="/images/dongmin/compass.png"
            />
          </li>
          <li>
            <img
              className="navItem"
              alt="logo"
              src="/images/dongmin/empty-heart.png"
            />
          </li>
          <li>
            <img
              className="navItem"
              alt="logo"
              src="/images/dongmin/user.png"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
