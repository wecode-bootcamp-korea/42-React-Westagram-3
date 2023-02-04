import React, { useState, useEffect } from 'react';
import Suggestion from './components/Suggestion';
import './Nav.scss';

const Nav = () => {
  const [suggestionArr, setSuggestionArr] = useState([]);

  const [inputSearch, setInputSearch] = useState('');

  const filterText = searchStr => {
    return searchStr.includes(inputSearch);
  };

  const onChangeSearch = e => {
    setInputSearch(e.target.value);
  };

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
        <div className="suggestionArrWrap">
          <input
            className="navCenter"
            type="text"
            placeholder="검색"
            onChange={onChangeSearch}
            value={inputSearch}
          />
          <ul className="suggestionArr">
            {/* {suggestionArr.map((suggestion, idx) => {
              return <Suggestion key={suggestion.id} suggestion={suggestion} />;
            })} */}
            {inputSearch ? (
              suggestionArr.map(suggestion => (
                <Suggestion
                  key={suggestion.id}
                  suggestion={suggestion}
                  inputSearch={inputSearch}
                  filterText={filterText}
                />
              ))
            ) : (
              // suggestionArr.filter(suggestion =>
              //   suggestion.profileText[1].includes(inputSearch)
              //     ?  <Suggestion
              //     key={suggestion.id}
              //     suggestion={suggestion}
              //     inputSearch={inputSearch}
              //     filterText={filterText}
              //   />
              //     : void 0
              // )
              <div></div>
            )}
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
