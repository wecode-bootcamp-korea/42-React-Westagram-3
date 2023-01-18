import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginChan from './pages/chan/Login/Login';
import MainChan from './pages/chan/Main/Main';
import LoginDongmin from './pages/dongmin/Login/Login';
import MainDongmin from './pages/dongmin/Main/Main';
import LoginJonghyuk from './pages/jonghyuk/Login/Login';
import MainJonghyuk from './pages/jonghyuk/Main/Main';
import LoginYujin from './pages/yujin/Login/Login';
import MainYujin from './pages/yujin/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-chan" element={<LoginChan />} />
        <Route path="/main-chan" element={<MainChan />} />
        <Route path="/login-dongmin" element={<LoginDongmin />} />
        <Route path="/main-dongmin" element={<MainDongmin />} />
        <Route path="/login-jonghyuk" element={<LoginJonghyuk />} />
        <Route path="/main-jonghyuk" element={<MainJonghyuk />} />
        <Route path="/login-yujin" element={<LoginYujin />} />
        <Route path="/main-yujin" element={<MainYujin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
