import React from 'react';

function Welcome(props) {
  const { username } = props;

  return <h1>Welcome {username ? username : 'Guest...'}</h1>;
}

export default Welcome;
