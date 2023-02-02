import React, { useEffect } from 'react';
import { useState } from 'react';
import Newfeeds from './Newfeeds';

const Comment = () => {
  const [newFeed, setNewFeed] = useState([]);

  useEffect(() => {
    fetch('/data/Feed.json')
      .then(res => res.json())
      .then(data => {
        setNewFeed(data.feedData);
      });
  }, []);

  return (
    <div>
      {newFeed.map(feed => {
        return <Newfeeds key={feed.feedId} feedData={feed} />;
      })}
    </div>
  );
};

export default Comment;
