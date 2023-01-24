//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-jonghyuk');
  };

  const [id, setId] = useState(' ');
  const saveUserId = event => {
    setId(event.target.value);
  };

  const [pw, setPw] = useState(' ');
  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const isDisabled = id.includes('@') && pw.length >= 5;

  return (
    <div className="login">
      <div className="backGround">
        <h1 className="logo">westagram</h1>
        <div className="container">
          <input
            onChange={saveUserId}
            type="text"
            placeholder="전화번호, 사용자이름 또는 이메일"
            className="login"
          />
          <input
            onChange={saveUserPw}
            type="password"
            placeholder="비밀번호"
            id="pw"
            className="login"
          />
          <button
            id={isDisabled ? 'loginBtn' : 'loginDisabled'}
            className="login"
            onClick={goToMain}
            disabled={isDisabled ? false : true}
          >
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
