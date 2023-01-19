import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const changeId = e => {
    setId(e.target.value);
  };
  const changePw = e => {
    setPw(e.target.value);
  };
  const isValid = id.length === 0 || pw.length === 0 ? false : true;
  const isBtnActive = isValid ? 'button-abled' : 'button-disabled';

  const navigate = useNavigate();
  const onClickButton = () => {
    return navigate('/main-dongmin');
  };

  return (
    <div className="main-cnt">
      <h1>westagram</h1>
      <div className="input-cnt">
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          className="input-id"
          onChange={changeId}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="input-pw"
          onChange={changePw}
        />
      </div>
      <button className={isBtnActive} onClick={onClickButton}>
        로그인
      </button>
      <a href="https://www.instagram.com/accounts/password/reset/">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
};

export default Login;
