import React, { useState, useEffect } from 'react';
import Suggestion from './components/Suggestion';
import './Nav.scss';

const Nav = () => {
  const [suggestionArr, setSuggestionArr] = useState([]);

  useEffect(() => {
    fetch('/data/dongmin.json')
      .then(result => result.json())
      .then(data => setSuggestionArr(data));
  }, []);

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
        <div className="suggertionArrWrap">
          <input className="navCenter" type="text" placeholder="검색" />
          <ul>
            {suggestionArr.map((suggestion, idx) => {
              return <Suggestion key={suggestion.id} suggestion={suggestion} />;
            })}
          </ul>
        </div>
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
