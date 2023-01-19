// import React from "react";
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  return (
    <div className="Login">
      <main>
        <form className="login">
          <h1 className="login-title">Westagram</h1>

          <input
            id="id"
            name="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
          />

          <button
            onClick={() => {
              navigate('/main');
            }}
            className="btn"
          >
            로그인
          </button>
          <div className="login-signup">
            <a className="login-signup-link" href="#">
              비밀번호를 잊으셨나요 ?
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
