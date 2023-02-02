import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [id, setId] = useState(' ');
  const [pw, setPw] = useState(' ');
  const navigate = useNavigate();

  const saveUserId = event => {
    setId(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const goToMain = () => {
    navigate('/main-jonghyuk');
    // fetch('http://10.58.52.229:3000/user/signin', {
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
    //   .then(data => {
    //     localStorage.setItem('token', data.accessToken); // 로컬스토리지에 setItem메소드를 이용하여 키는 token 벨류는 data.accessToken(데이터의 accessToken)으로 지정
    //     if (localStorage.getItem('token') !== 'undefined') {
    //       // 로컬스토리지에 있는 token을 getItem메서드로 가져오고 token이 undefined가 아니면 페이지 이동
    //       navigate('/main-jonghyuk');
    //     } else {
    //       alert('이이디 또는 비밀번호가 들렸습니다.');
    //     }
    //   });
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
