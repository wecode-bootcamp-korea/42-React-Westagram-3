import React, { useEffect, useState } from 'react';
import './Login.scss';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  const saveUserId = event => {
    setId(event.target.value);
  };

  const saveUserPw = event => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (id.indexOf('@') >= 0 && password.length >= 5) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [id, password]);

  return (
    <div className="container">
      <div>
        {/* westagram */}
        <img
          className="insta_img"
          src="https://fontmeme.com/images/instagram-new-logo.png"
          alt="인스타그램"
        />
      </div>
      <div className="containerBox">
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          className="login_id"
          onChange={saveUserId}
          value={id}
        />
        <input
          type="text"
          placeholder="비밀번호"
          className="password"
          onChange={saveUserPw}
          value={password}
        />
        <button
          type="submit"
          className={`login_btn ${isActive ? 'active' : ''}`}
          disabled={!isActive}
        >
          로그인
        </button>
        <div className="passwordForgot">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}

export default Login;
