import React from 'react';
import FeedsBottom from './FeedsBottom';
import FeedsTop from './FeedsTop';

function Feeds(props) {
  const {
    mainImage,
    feedsId,
    authorFeedContent,
    profileImage,
    commentAuthor,
    firstComment,
    userName,
    likeCount,
    uploadTime,
  } = props;

  const feedsImage = 'https://cdn-icons-png.flaticon.com/128/2354/2354557.png';

  return (
    <div>
      <FeedsTop
        profileImage={profileImage}
        feedsImage={feedsImage}
        mainImage={mainImage}
        feedsId={feedsId}
        // topMainImg={topMainImg}
      />
      <FeedsBottom
        userName={userName}
        likeCount={likeCount}
        authorName={feedsId}
        authorFeedContent={authorFeedContent}
        commentAuthor={commentAuthor}
        firstComment={firstComment}
        uploadTime={uploadTime}
      />
    </div>
  );
}

export default Feeds;
