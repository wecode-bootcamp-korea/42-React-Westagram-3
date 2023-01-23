import React from 'react';

const CommentsList = props => {
  const { name, content } = props;
  return (
    <ul>
      <li>
        <span>{name}</span>
        <span>{content}</span>
      </li>
    </ul>
  );
};
export default CommentsList;
