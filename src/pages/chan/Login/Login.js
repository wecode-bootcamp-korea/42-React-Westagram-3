import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [btnState, setBtnState] = useState(true);

  const goToMain = e => {
    // 온서브밋 이벤트 발생시 메인으로 이동!
    e.preventDefault();
    navigate('/main-chan');
  };

  const handleIdInput = e => {
    console.log('');
    //아이디 input 온체인지 시 state에 아이디 저장!
    setInputId(e.target.value);
  };

  const handlePwInput = e => {
    //비밀번호 input 온체인지 시 state에 비밀번호 저장!
    setInputPw(e.target.value);
  };

  const handleActive = () => {
    //아이디,비밀번호 state의 각각 조건이 맞으면
    inputId.indexOf('@') > -1 && inputPw.length >= 5
      ? setBtnState(false)
      : setBtnState(true);
  };

  console.table(inputId);
  console.table(inputPw);

  return (
    <div className="Login">
      <main>
        <form className="login" onSubmit={goToMain}>
          <h1 className="login-title">Westagram</h1>
          <input
            id="id"
            name="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
            onKeyUp={handleActive}
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            onKeyUp={handleActive}
          />

          <button type="submit" className="btn" disabled={btnState}>
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
