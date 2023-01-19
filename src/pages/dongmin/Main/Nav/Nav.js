import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="nav-cnt">
        <ul className="nav-left">
          <li>
            <img
              className="nav-item img-logo"
              alt="logo"
              src={process.env.PUBLIC_URL + '/images/dongmin/logo.png'}
            />
          </li>
          <li className="nav-item line-vertical">|</li>
          <li>
            <h1 className="nav-item">Westagram</h1>
          </li>
        </ul>
        <input className="nav-center" type="text" placeholder="검색" />
        <ul className="nav-right">
          <li>
            <img
              className="nav-item"
              alt="logo"
              src={process.env.PUBLIC_URL + '/images/dongmin/compass.png'}
            />
          </li>
          <li>
            <img
              className="nav-item"
              alt="logo"
              src={process.env.PUBLIC_URL + '/images/dongmin/empty-heart.png'}
            />
          </li>
          <li>
            <img
              className="nav-item"
              alt="logo"
              src={process.env.PUBLIC_URL + '/images/dongmin/user.png'}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
