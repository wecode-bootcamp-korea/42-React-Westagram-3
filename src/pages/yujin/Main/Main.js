import React, { useEffect, useState } from 'react';
import Feeds from './Feeds';
import Header from './Header';
import MainRight from './MainRight';
import './Main.scss';

function Main() {
  const [feedBox, setFeedBox] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(data => setFeedBox(data));
  }, []);

  return (
    <div>
      <Header />
      {/* <Feeds /> */}
      <MainRight />
      {feedBox.map(feed => {
        return <Feeds key={feed.id} {...feed} />;
      })}
    </div>
  );
}

export default Main;
