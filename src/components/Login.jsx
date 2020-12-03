import React, { Component } from 'react';
import reactIcon from '../assets/images/react-icon.svg';

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/style.css';

import Welcome from './Welcome1';

class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false
  };

  handelChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    if (username.length === 0 || password.length === 0) {
      return;
    }

    this.setState({
      isLoggedIn: true
    });
  };

  handelLoginAsGuest = () => {
    this.setState({
      username: '',
      isLoggedIn: true
    });
  };

  render() {
    const { username, password, isLoggedIn } = this.state;

    return (
      <section className='login-wrapper'>
        {!isLoggedIn && (
          <div className='min-width-500'>
            <img
              className='logo'
              src={reactIcon}
              alt='React Icon'
              height='150'
            />
            <form onSubmit={this.login}>
              <div className='form-group'>
                <label>Username</label>
                <input
                  name='username'
                  type='text'
                  className='form-control'
                  placeholder='Enter username'
                  value={username}
                  onChange={this.handelChange}
                />
              </div>

              <div className='form-group'>
                <label>Password</label>
                <input
                  name='password'
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  value={password}
                  onChange={this.handelChange}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                  type='submit'
                  className={
                    username.length && password.length
                      ? 'btn btn-primary'
                      : 'btn btn-primary disabled'
                  }
                >
                  Login
                </button>

                <button
                  onClick={this.handelLoginAsGuest}
                  className='btn btn-outline-primary'
                >
                  Login as Guest
                </button>
              </div>
            </form>
          </div>
        )}

        {isLoggedIn && <Welcome username={username} />}
      </section>
    );
  }
}

export default Login;
