import { React } from 'react';
import Header from '../components/Header/Header';
import Feeds from '../components/Feeds/Feeds';
import Comment from '../components/Comment/Comment';
import Aside from '../components/Aside/Aside';
import './Main.scss';

function Main() {
  return (
    <div className="Main">
      <Header />
      <div className="Contents">
        <div className="Left">
          <article className="article">
            <Feeds />
            <Comment />
          </article>
        </div>
        <Aside />
      </div>
    </div>
  );
}

export default Main;
