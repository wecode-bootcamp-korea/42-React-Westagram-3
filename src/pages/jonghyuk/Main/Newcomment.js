import React, { useState } from 'react';
import './Main.scss';

const Newcomment = ({ comment, delComment }) => {
  const [onClick, setOnClick] = useState(false);

  const onClickLike = () => {
    setOnClick(prev => {
      return !prev;
    });
  };

  const emptyheart = 'images/jonghyuk/heart.png';
  const fullHeart = 'images/jonghyuk/fullheart.png';

  return (
    <div className="commentWraper">
      <p className="newcomment">{comment.text} </p>
      <div comentBoxBtn>
        <img
          className="pushLike"
          alt="like"
          src={onClick ? fullHeart : emptyheart}
          onClick={onClickLike}
        />
        <img
          alt="delete"
          className="deletComment"
          src="images/jonghyuk/delete.png"
          onClick={() => delComment(comment.id)}
        />
      </div>
    </div>
  );
};

export default Newcomment;
