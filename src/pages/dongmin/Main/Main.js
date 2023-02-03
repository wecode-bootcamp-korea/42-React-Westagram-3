import React, { useState, useEffect } from 'react';
import Feed from './Feed/Feed';
import MainRight from './MainRight/MainRight';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/dongmin.json')
      .then(result => result.json())
      .then(data => setFeedList(data));
  }, []);

  return (
    <>
      <Nav />
      <main>
        <ul>
          {feedList.map(feed => {
            return (
              <li key={feed.id}>
                <Feed props={feed} />
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
