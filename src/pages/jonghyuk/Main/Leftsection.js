import React from 'react';
import Comment from './Comment';

const Leftsection = () => {
  return (
    <section className="leftSection">
      <div className="title">
        <div className="imgId">
          <img
            className="titleImg"
            alt="titleimg"
            src="images/jonghyuk/mainimg.jpg"
          />
        </div>
        <span className="userId">yuri_leejh</span>
        <img className="more" alt="more" src="images/jonghyuk/more.png" />
      </div>

      <div className="feedandMention">
        <img
          className="feedImg"
          alt="feedimg"
          src="images/jonghyuk/feedimg.jpg"
        />
        <div className="button">
          <div className="feedBtn">
            <img
              className="feedBtnImg"
              alt="like"
              src="images/jonghyuk/red heart.png"
            />
            <img
              className="feedBtnImg"
              alt="comment"
              src="images/jonghyuk/comment.png"
            />
            <img
              className="feedBtnImg"
              alt="save"
              src="images/jonghyuk/save.png"
            />
          </div>
          <img
            className="bookmark"
            alt="bookmark"
            src="images/jonghyuk/bookmark.png"
          />
        </div>
        <Comment />
      </div>
      {/* <Mention /> */}
    </section>
  );
};

export default Leftsection;
