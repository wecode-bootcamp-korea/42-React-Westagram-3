import React from 'react';
import './Suggestion.scss';

const Suggestion = ({ suggestion }) => {
  const { profileImg, profileText } = suggestion;
  return (
    <li className="suggestion">
      <div className="suggestionWrap">
        <img className="profileImg" alt="profileImage" src={profileImg} />
        <div className="profileText">
          <span>{profileText[0]}</span>
          <span>{profileText[1]}</span>
        </div>
      </div>
    </li>
  );
};

export default Suggestion;
