import React from 'react';

const Rightsection = () => {
  return (
    <section className="rightSection">
      <aside className="aside">
        <div className="myProfile">
          <div className="profileImage">
            <img
              className="profileImg"
              alt="profileimg"
              src="images/jonghyuk/wecode.png"
            />
          </div>
          <div className="profileId">
            <span className="myid">wecode_bootcamp</span>
            <br></br>
            <span className="introduce">WeCode 위코드</span>
          </div>
        </div>

        <div className="storyBox">
          <div className="storyTitle">
            <span className="story">스토리</span>
            <input className="lookall" type="button" value="모두 보기" />
          </div>

          <div className="storyList">
            <ul className="listWrap">
              <li className="list">
                <div className="storyProfile">
                  <div className="storyImg">
                    <img
                      className="storyUser"
                      alt="profile_img_5"
                      src="images/jonghyuk/profile.png"
                    />
                  </div>

                  <div className="userInfo">
                    <span className="userId">_yum_s</span>
                    <br />
                    <span className="storyTime">16분 전</span>
                  </div>
                </div>
              </li>

              <li className="list1">
                <div className="storyProfile1">
                  <div className="storyIcon1">
                    <img
                      className="storyIcon_img_1"
                      alt="profile_img_2"
                      src="images/jonghyuk/profile.png"
                    />
                  </div>

                  <div className="userInfo1">
                    <span className="userId1">drink_eat_drink</span>
                    <br />
                    <span className="userTime1">3시간 전</span>
                  </div>
                </div>
              </li>

              <li className="list2">
                <div className="storyProfile2">
                  <div className="storyIcon2">
                    <img
                      className="storyIcon_img_2"
                      alt="profile_img_3"
                      src="images/jonghyuk/profile.png"
                    />
                  </div>

                  <div className="userInfo2">
                    <span className="userId2">hyukyc</span>
                    <br />
                    <span className="userTime2">20시간 전</span>
                  </div>
                </div>
              </li>

              <li className="list3">
                <div className="storyProfile3">
                  <div className="storyIcon3">
                    <img
                      class="storyIcon_img_3"
                      alt="profile_img_4"
                      src="images/jonghyuk/profile.png"
                    />
                  </div>

                  <div className="userInfo3">
                    <span className="userId3">jiminkeek</span>
                    <br />
                    <span className="storyTime3">23시간 전</span>
                  </div>
                </div>
              </li>

              <li className="list4">
                <div className="storyProfile4">
                  <div className="storyIcon4">
                    <img
                      className="storyIcon_img_4"
                      alt="profile_img_1"
                      src="images/jonghyuk/profile.png"
                    />
                  </div>
                  <div className="userInfo4">
                    <span className="userId4">laralina</span>
                    <br />
                    <span className="storyTime">3일 전</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="recommendBox">
          <div className="recommendTop">
            <span className="recommendTopLeft">회원님을 위한 추천</span>
            <input
              type="button"
              className="recommendTopRight"
              value="모두 보기"
            />
          </div>
          <div className="recommendBottom">
            <ul className="recommendList">
              <li className="recoList1">
                <div className="recommendProfile1">
                  <div className="recommendIcon1">
                    <img
                      className="recommendIcon_img_1"
                      alt="profile_img_1"
                      src="images/jonghyuk/recomend1.jpg"
                    />
                  </div>

                  <div className="recommendInfo1">
                    <span className="recommendId1">rampart81</span>
                    <br></br>
                    <span className="recommendPeople1">
                      gonia123님 외 2명이...
                    </span>
                  </div>

                  <input
                    type="button"
                    value="팔로우"
                    className="recommendFollow1"
                  />
                </div>
              </li>

              <li className="recoList2">
                <div className="recommendProfile2">
                  <div className="recommendIcon2">
                    <img
                      className="recommendIcon_img_2"
                      alt="profile_img_3"
                      src="images/jonghyuk/recomend2.jpg"
                    />
                  </div>

                  <div className="recommendInfo2">
                    <span className="recommendId2">joojoo98</span>
                    <br></br>
                    <span className="recommendPeople2">
                      ringo.in.seoul님 외 12..
                    </span>
                  </div>

                  <input
                    type="button"
                    value="팔로우"
                    className="recommendFollow2"
                  />
                </div>
              </li>

              <li className="recoList3">
                <div className="recommendProfile3">
                  <div className="recommendIcon3">
                    <img
                      className="recommendIcon_img_3"
                      alt="profile_img_2"
                      src="images/jonghyuk/recomend3.jpg"
                    />
                  </div>

                  <div className="recommendInfo3">
                    <span className="recommendId3">joaaaahye</span>
                    <br></br>
                    <span className="recommendPeople3">
                      laralina님 외 3명이...
                    </span>
                  </div>

                  <input
                    type="button"
                    value="팔로우"
                    class="recommendFollow3"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <footer className="info">
          <span className="links">
            Instagram 정보 . 지원 . 홍보 센터 . API . <br></br> 채용 정보 .
            개인정보처리방침 . 약관 . <br></br> 디렉터리 . 프로필 . 해시태그 .
            언어
          </span>
          <br></br>
          <p className="watermark">Ⓒ 2019 INSTAGRAM</p>
        </footer>
      </aside>
    </section>
  );
};

export default Rightsection;
