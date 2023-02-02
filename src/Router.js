import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginYujin from './pages/yujin/Login/Login';
import MainYujin from './pages/yujin/Main/Main';
import SignYujin from './pages/yujin/Sign/Sign';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login-yujin" element={<LoginYujin />} />
        <Route path="/Main-yujin" element={<MainYujin />} />
        <Route path="/Sign-yujin" element={<SignYujin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
