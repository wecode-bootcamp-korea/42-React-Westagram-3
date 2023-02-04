import React from 'react';
import './Suggestion.scss';

const Suggestion = props => {
  const { suggestion, inputSearch, filterText } = props;
  const { profileImg, profileText } = suggestion;
  const includeInputSearch = () => {
    filterText(profileText[1]);
  };
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
