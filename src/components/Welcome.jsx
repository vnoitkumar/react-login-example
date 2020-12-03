import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { username } = this.props;

    return <h1>Welcome {username ? username : 'Guest'}</h1>;
  }
}

export default Welcome;
