import { React } from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Feeds from '../components/Feeds/Feeds';
import Aside from '../components/Aside/Aside';
import './Main.scss';

function Main() {
  useEffect(() => {
    fetch('/data/feedData.json')
      .then(response => response.json())
      .then(result => setFeedDataList(result));
  }, []);

  const [feedDataList, setFeedDataList] = useState([]);

  return (
    <div className="Main">
      <Header />
      <div className="Contents">
        <div className="ContentInner">
          <article className="article">
            {feedDataList.map((result, i) => {
              const feed = feedDataList[i];
              return <Feeds key={i} feed={feed} />;
            })}
          </article>
        </div>
        <div>
          <Aside />
        </div>
      </div>
    </div>
  );
}

export default Main;
