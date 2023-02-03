import { React } from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <div className="logo">
          <a href="login.html">
            <img src="images/chan/insta.png" alt="main_logo" />
          </a>
        </div>
        <div className="input_box">
          {' '}
          <input type="text" placeholder="검색" id="search" />
        </div>
        <nav className="nav">
          <ul className="link_list">
            <li>
              <a href="#">
                <i className="fas fa-compass"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user-circle"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
