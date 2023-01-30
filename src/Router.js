import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import LoginChan from './pages/chan/Login/Login';
import MainChan from './pages/chan/Main/Main';
import LoginDongmin from './pages/dongmin/Login/Login';
import MainDongmin from './pages/dongmin/Main/Main';
import LoginJonghyuk from './pages/jonghyuk/Login/Login';
import MainJonghyuk from './pages/jonghyuk/Main/Main';
import LoginYujin from './pages/yujin/Login/Login';
import MainYujin from './pages/yujin/Main/Main';
import FeedsYujin from './pages/yujin/Main/FeedsPage';
import HeaderYujin from './pages/yujin/Main/Header';
import FeedsTopYujin from './pages/yujin/Main/FeedsTop';
import MainRightYujin from './pages/yujin/Main/MainRight';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/login-chan" element={<LoginChan />} />
        <Route path="/main-chan" element={<MainChan />} />
        <Route path="/login-dongmin" element={<LoginDongmin />} />
        <Route path="/main-dongmin" element={<MainDongmin />} />
        <Route path="/login-jonghyuk" element={<LoginJonghyuk />} />
        <Route path="/main-jonghyuk" element={<MainJonghyuk />} /> */}
        <Route path="/Login-yujin" element={<LoginYujin />} />
        <Route path="/Main-yujin" element={<MainYujin />} />
        <Route path="/Feeds-yujin" element={<FeedsYujin />} />
        <Route path="/Header-yujin" element={<HeaderYujin />} />
        <Route path="/FeedsTop-yujin" element={<FeedsTopYujin />} />
        <Route path="/MainRight-yujin" element={<MainRightYujin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
