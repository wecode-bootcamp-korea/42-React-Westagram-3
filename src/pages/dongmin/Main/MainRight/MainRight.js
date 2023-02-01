import React from 'react';
import ProfileCard from './Components/ProfileCard';
import './MainRight.scss';
const MainRight = () => {
  return (
    <div className="mainRight">
      <aside>
        <div className="profileCnt">
          <img
            className="profileImg"
            alt="logo"
            src="/images/dongmin/wecode.png"
          />
          <ul className="profileText">
            <li>wecode_bootcamp</li>
            <li>WeCode - 위코드</li>
          </ul>
        </div>
        <div className="storyWrap">
          <div className="sticky">
            <span>스토리</span>
            <span className="showAll">모두 보기</span>
          </div>
          <ul className="storyLi">
            {PROFILE_INFO_LIST[0].map(info => (
              <ProfileCard
                key={info.id}
                name={info.name}
                nickname={info.nickname}
                time={info.time}
              />
            ))}
          </ul>
        </div>
        <div className="recommendWrap">
          <div className="sticky">
            <span>회원님을 위한 추천</span>
            <span className="showAll">모두 보기</span>
          </div>
          <ul className="storyLi">
            {PROFILE_INFO_LIST[1].map(info => (
              <ProfileCard
                key={info.id}
                name={info.name}
                nickname={info.nickname}
                time={info.time}
              />
            ))}
          </ul>
        </div>
      </aside>
      <footer>
        <ul>
          <li>Instagram 정보</li>
          <li>지원</li>
          <li>홍보 센터</li>
          <li>API</li>
          <li>채용 정보</li>
          <li>개인정보처리방침</li>
          <li>약관</li>
          <li>디렉터리</li>
          <li>프로필</li>
          <li>해시태그</li>
          <li>언어</li>
        </ul>
        <span>&copy; 2023 INSTAGRAM</span>
      </footer>
    </div>
  );
};

export default MainRight;

const PROFILE_INFO_LIST = [
  [
    { id: 1, name: 'junhyun', nickname: 'junwise.park', time: '24초 전' },
    { id: 2, name: 'junhyun', nickname: 'junwise.park', time: '42초 전' },
    { id: 3, name: 'junhyun', nickname: 'junwise.park', time: '24분 전' },
    { id: 4, name: 'junhyun', nickname: 'junwise.park', time: '42분 전' },
    { id: 5, name: 'junhyun', nickname: 'junwise.park', time: '43분 전' },
    { id: 6, name: 'junhyun', nickname: 'junwise.park', time: '44분 전' },
    { id: 7, name: 'junhyun', nickname: 'junwise.park', time: '45분 전' },
    { id: 8, name: 'junhyun', nickname: 'junwise.park', time: '45분 전' },
    { id: 9, name: 'junhyun', nickname: 'junwise.park', time: '46분 전' },
    { id: 10, name: 'junhyun', nickname: 'junwise.park', time: '47분 전' },
    { id: 11, name: 'junhyun', nickname: 'junwise.park', time: '48분 전' },
  ],
  [
    { id: 1, name: 'soohyun', nickname: 'watervillage.kim', time: '24초 전' },
    { id: 2, name: 'soohyun', nickname: 'watervillage.kim', time: '42초 전' },
    { id: 3, name: 'soohyun', nickname: 'watervillage.kim', time: '24분 전' },
    { id: 4, name: 'soohyun', nickname: 'watervillage.kim', time: '42분 전' },
    { id: 5, name: 'soohyun', nickname: 'watervillage.kim', time: '43분 전' },
    { id: 6, name: 'soohyun', nickname: 'watervillage.kim', time: '44분 전' },
    { id: 7, name: 'soohyun', nickname: 'watervillage.kim', time: '45분 전' },
    { id: 8, name: 'soohyun', nickname: 'watervillage.kim', time: '45분 전' },
    { id: 9, name: 'soohyun', nickname: 'watervillage.kim', time: '46분 전' },
    { id: 10, name: 'soohyun', nickname: 'watervillage.kim', time: '47분 전' },
    { id: 11, name: 'soohyun', nickname: 'watervillage.kim', time: '48분 전' },
  ],
];
