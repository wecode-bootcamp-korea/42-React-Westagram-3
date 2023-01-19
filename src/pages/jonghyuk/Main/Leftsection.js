import React from 'react';

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

        <div className="comment">
          <div className="like">
            <img
              className="commentImg"
              alt="commentimg"
              src="images/jonghyuk/feedimg.jpg"
            />
            <span className="likeEach">
              <b>aineworld</b>님 <b>외 10명</b>이 좋아합니다
            </span>
          </div>

          <div className="post">
            <div>
              <p>
                <b>canon_mj</b> 위워크에서 진행한 베이킹 클래스...
              </p>
            </div>
            <input className="moreBtn" type="button" value="더 보기" />
          </div>

          <div className="mention">
            <div>
              <b>neceosecius</b> 거봐 좋았잖아~~~~
            </div>
            <img className="like" alt="like" src="images/jonghyuk/heart.png" />
          </div>
          <div className="lastHour">42분 전</div>
        </div>
      </div>
      <div className="makeMention">
        <input
          className="writeMention"
          type="text"
          placeholder="댓글 달기..."
        />
        <input className="writeBtn" type="button" value="게시" />
      </div>
    </section>
  );
};

export default Leftsection;
