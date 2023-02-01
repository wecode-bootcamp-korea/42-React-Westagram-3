import React, { useState, useEffect } from 'react';
import Feeds from './Feeds/Feeds';
import MainRight from './MainRight/MainRight';
import './Main.scss';

const Main = () => {
  const [feedsArr, setFeedsArr] = useState([]);

  useEffect(() => {
    fetch('/data/dongmin.json')
      .then(result => result.json())
      .then(data => setFeedsArr(data));
  }, []);

  return (
    <>
      {/* <Nav /> */}
      <main>
        <ul>
          {feedsArr.map(feed => {
            return (
              <li key={feed.id}>
                <Feeds feed={feed} />
              </li>
            );
          })}
        </ul>
        <MainRight />
      </main>
    </>
  );
};

export default Main;
