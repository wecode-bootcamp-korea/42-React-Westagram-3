import React from 'react';
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-jonghyuk');
  };

  return (
    <div className="login">
      <div className="backGround">
        <h1 className="logo">westagram</h1>
        <div className="container">
          <input
            type="text"
            placeholder="전화번호, 사용자이름 또는 이메일"
            className="login"
          />
          <input
            type="password"
            placeholder="비밀번호"
            id="pw"
            className="login"
          />
          <button id="loginBtn" className="login" onClick={goToMain}>
            로그인
          </button>
        </div>
        <a
          className="forgotPw"
          href="https://www.instagram.com/accounts/password/reset/"
        >
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
