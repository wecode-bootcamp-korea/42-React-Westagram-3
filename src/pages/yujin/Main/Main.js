import React from 'react';
import FeedsTop from './FeedsTop';
import Feeds from './FeedsBottom';
import Header from './Header';
import MainRight from './MainRight';
import './Main.scss';

function Main() {
  return (
    <div>
      <Header />
      <FeedsTop />
      <Feeds />
      <MainRight />
    </div>
  );
}
// function Main() {
//   return (
//     <>
//       <header className="top_bar">
//         <div className="container_top_left">
//           <img
//             className="insta_logo"
//             src="https://cdn-icons-png.flaticon.com/512/5949/5949057.png"
//             alt="인스타그램"
//           />
//           <img
//             className="section"
//             src="https://cdn-icons-png.flaticon.com/512/649/649686.png"
//             alt="section"
//           />
//           <img
//             className="insta_text"
//             src="https://fontmeme.com/images/instagram-new-logo.png"
//             alt="인스타그램"
//           />
//         </div>
//         <div className="search">
//           <img
//             className="search_img"
//             src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
//             alt="검색"
//           />
//           <input className="search_text" type="text" placeholder="검색" />
//         </div>
//         <div className="container_top">
//           <div className="explore">
//             <img
//               src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
//               alt="탐색"
//             />
//           </div>
//           <div className="like_icon_top">
//             <img
//               src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
//               alt="좋아요"
//             />
//           </div>
//           <div className="mypage">
//             <img
//               src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
//               alt="마이페이지"
//             />
//           </div>
//         </div>
//       </header>

//       <div className="feeds">
//         <img className="main_img" src="IMG_0107.JPG" alt="피드메인이미지" />
//         <div className="container_mclassNamedle">
//           <img
//             className="like_icon_mclassNamedle"
//             src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
//             alt="좋아요버튼"
//           />
//           <img
//             className="comment_icon"
//             src="https://cdn-icons-png.flaticon.com/512/2414/2414210.png"
//             alt="댓글버튼"
//           />
//           <img
//             className="send"
//             src="https://cdn-icons-png.flaticon.com/512/6423/6423903.png"
//             alt="공유버튼"
//           />
//         </div>
//         <div className="main_like">
//           <strong>westagram</strong>님 <strong>외 10,379명</strong>이 좋아합니다
//         </div>
//         <p>
//           <strong>disney_lover</strong> Disneyland California 🍭💛
//         </p>
//         <p>
//           <strong>coding_yumyum</strong> how beautiful!
//         </p>
//         <p className="upload_time">30초 전</p>
//         <div className="comment_box">
//           <p className="comment"> 댓글 달기...</p>
//         </div>
//       </div>

//       <div className="main">
//         <div className="story">
//           <ul className="story_list">
//             <li className="story_box">
//               <div className="profile_image">
//                 <img src="../_.jpeg" alt="프로필" />
//                 <span>sogogi</span>
//               </div>
//             </li>
//             <li>
//               <div className="story_box">
//                 <div className="profile_image">
//                   <img src="../France inspiration_.jpeg" alt="프로필" />
//                   <span>pinkye</span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div className="story_box">
//                 <div className="profile_image">
//                   <img
//                     src="../26 Cool Places in Los Angeles To Rock Your Travels.jpeg"
//                     alt="프로필"
//                   />
//                   <span>chickenandbeer</span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div className="story_box">
//                 <div className="profile_image">
//                   <img
//                     src="../A Walk Through the Tuileries Garden in the Spring.jpeg"
//                     alt="프로필"
//                   />
//                   <span>homesweethome</span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div className="story_box">
//                 <div className="profile_image">
//                   <img
//                     src="../College Aesthetic, Study Aesthetic, Study Motivation, School Motivation.jpeg"
//                     alt="프로필"
//                   />
//                   <span>nolja</span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div className="story_box">
//                 <div className="profile_image">
//                   <img src="../Los Angeles.jpeg" alt="프로필" />
//                   <span>namename</span>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//   );
// }

export default Main;
