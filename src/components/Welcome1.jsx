import React from 'react';

function Welcome(props) {
  const { username } = props;

  return <h1>Welcome {username ? username : 'Guest...'}</h1>;
}

export default Welcome;

function Welcome1() {
  return (
    <>
      <h1>Welcome</h1>
      <p>Good morning!</p>
    </>
  );
}
