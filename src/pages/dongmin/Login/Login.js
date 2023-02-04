import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [input, setInput] = useState({ id: '', pw: '' });

  const { id, pw } = input;

  // const loginUrl = 'http://10.58.52.229:3000/user/signin';
  const signupUrl = 'http://10.58.52.229:3000/user/signup';

  const navigate = useNavigate();

  const isValid = id.length >= 5 && id.includes('@') && pw.length >= 5;

  const onChangeInput = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onClickBtnSignup = () => {
    fetch(signupUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
        name: 'user135',
        phoneNumber: '010-2333-3333',
        profileImage: '',
      }),
    })
      .then(response => response.json())
      .then(
        (
          data // eslint-disable-next-line no-console
        ) => console.log(data)
      );
  };

  const onClickBtnLogin = () => {
    // 통신 Test용 코드
    // fetch(loginUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({
    //     email: id,
    //     password: pw,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     localStorage.setItem('token', result.accessToken);
    //     if (localStorage.getItem('token') !== 'undefined') {
    //       return navigate('/main-dongmin');
    //     } else {
    //       alert('입력이 틀렸습니다');
    //     }
    //   });
    navigate('/main-dongmin');
  };

  const onClickBtnFacebook = () => {
    window.open(
      'https://www.facebook.com/dialog/oauth?client_id=124024574287414&redirect_uri=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F&state=%7B%22fbLoginKey%22%3A%221jpksqp1veyryd11yb2tw144wms313dh8i3wmio351omwr9112gyt3t%22%2C%22fbLoginReturnURL%22%3A%22%2Ffxcal%2Fdisclosure%2F%3Fnext%3D%252F%22%7D&scope=email&response_type=code%2Cgranted_scopes&locale=ko_KR'
    );
  };

  return (
    <div className="login">
      <div className="main">
        <h1>westagram</h1>
        <div className="inputCnt">
          <input
            name="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="inputId"
            onChange={onChangeInput}
          />
          <input
            name="pw"
            type="password"
            placeholder="비밀번호"
            className="inputPw"
            onChange={onChangeInput}
          />
        </div>
        <button onClick={onClickBtnLogin} disabled={!isValid}>
          로그인
        </button>
        <div className="hrCnt">
          <hr />
          또는 <hr />
        </div>
        <button onClick={onClickBtnFacebook} className="facebookBtn">
          <span>
            <img alt="logo" src="/images/dongmin/facebook.png" />
          </span>
          <span>Facebook으로 로그인</span>
        </button>
        <a
          className="forgetPassword"
          href="https://www.instagram.com/accounts/password/reset/"
        >
          비밀번호를 잊으셨나요?
        </a>
      </div>
      <div className="join">
        <span>계정이 없으신가요?</span>
        <button
          onClick={onClickBtnSignup}
          href="https://www.instagram.com/accounts/emailsignup/"
        >
          가입하기
        </button>
      </div>
      <div className="download">
        <span>앱을 다운로드하세요.</span>
        <div className="imgCnt">
          <button>
            <a
              href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="applestore" src="/images/dongmin/applestore.png" />
            </a>
          </button>
          <button>
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D03D0028F-118C-4B50-A7A3-FEEF66D9C267%26utm_content%3Dlo%26utm_medium%3Dbadge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="googleplay" src="/images/dongmin/googleplay.png" />
            </a>
          </button>
        </div>
      </div>
      <footer>
        <ul>
          {FOOTER_INFO_LIST.map(info => (
            <li key={info.id}>{info.text}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Login;

const FOOTER_INFO_LIST = [
  { id: 1, text: 'Meta' },
  { id: 2, text: '소개' },
  { id: 3, text: '블로그' },
  { id: 4, text: '채용 정보' },
  { id: 5, text: '도움말' },
  { id: 6, text: 'API' },
  { id: 7, text: '개인정보처리방침' },
  { id: 8, text: '약관' },
  { id: 9, text: '인기 계정' },
  { id: 10, text: '위치' },
  { id: 11, text: 'Instagram Lite' },
  { id: 12, text: '연락처 업로드 & 사용자' },
];
