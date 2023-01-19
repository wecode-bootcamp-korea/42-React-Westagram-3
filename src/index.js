import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import Login from './pages/chan/Login/Login';
import Main from './pages/chan/Main/Main';
import './styles/common.scss';
import './styles/reset.scss';
import './styles/variables.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
