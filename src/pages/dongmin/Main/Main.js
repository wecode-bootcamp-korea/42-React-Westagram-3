import React from 'react';
import Feeds from './Feeds/Feeds';
import MainRight from './MainRight/MainRight';
import './Main.scss';

const Main = () => {
  return (
    <>
      {/* <Nav /> */}
      <main>
        <Feeds />
        <MainRight />
      </main>
    </>
  );
};

export default Main;
