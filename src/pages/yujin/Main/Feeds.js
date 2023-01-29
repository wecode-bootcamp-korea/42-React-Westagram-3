import React from 'react';
import FeedsBottom from './FeedsBottom';
import FeedsTop from './FeedsTop';

function Feeds() {
  const profileImage = '/images/yujin/IMG_0153.jpg';
  const feedsImage = 'https://cdn-icons-png.flaticon.com/128/2354/2354557.png';
  const mainImage = '/images/yujin/IMG_0883.JPG';
  const feedsId = 'califivepm';

  const userName = 'westagram';
  const likeCount = '10,379';
  const authorName = 'skylover';
  const authorFeedContent = 'Pink Sky ☁️💗';
  const commentAuthor = 'coding_yumyum';
  const firstComment = 'how beautiful🫧';
  const uploadTime = '30초';

  return (
    <div>
      <FeedsTop
        profileImage={profileImage}
        feedsImage={feedsImage}
        mainImage={mainImage}
        feedsId={feedsId}
      />
      <FeedsBottom
        userName={userName}
        likeCount={likeCount}
        authorName={authorName}
        authorFeedContent={authorFeedContent}
        commentAuthor={commentAuthor}
        firstComment={firstComment}
        uploadTime={uploadTime}
      />
    </div>
  );
}

export default Feeds;
