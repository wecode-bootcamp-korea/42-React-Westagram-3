import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';

function Main() {
  return (
    <main className="main">
      <Leftsection />
      <Rightsection />
    </main>
  );
}

export default Main;
