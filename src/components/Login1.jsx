import React, { useState, useEffect, useRef } from 'react';
import reactIcon from '../assets/images/react-icon.svg';

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/style.css';

import Welcome from './Welcome1';

function Login() {
  const usernameRef = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  useEffect(function () {
    usernameRef.current.focus();
  }, []);

  useEffect(
    function () {
      if (username.length > 3) {
        setIsUsernameValid(true);
      } else {
        setIsUsernameValid(false);
      }
    },
    [username]
  );

  const handelChange = (event) => {
    switch (event.target.name) {
      case 'username':
        setUsername(event.target.value);
        break;

      case 'password':
        setPassword(event.target.value);
        break;

      default:
        break;
    }
  };

  function handelLoginAsGuest() {
    setUsername('');
    setIsLoggedIn(true);
  }

  function login(event) {
    event.preventDefault();

    if (username.length === 0 || password.length === 0) {
      return;
    }

    setIsLoggedIn(true);
  }

  return (
    <section className='login-wrapper'>
      {!isLoggedIn && (
        <div className='min-width-500'>
          <img className='logo' src={reactIcon} alt='React Icon' height='150' />
          <form onSubmit={login}>
            <div className='form-group'>
              <label>Username</label>
              <input
                ref={usernameRef}
                name='username'
                type='text'
                className='form-control'
                placeholder='Enter username'
                value={username}
                onChange={handelChange}
              />

              {!isUsernameValid && (
                <small className='form-text' style={{ color: 'red' }}>
                  Enter an valid Username
                </small>
              )}
            </div>

            <div className='form-group'>
              <label>Password</label>
              <input
                name='password'
                type='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={handelChange}
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
                onClick={handelLoginAsGuest}
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

export default Login;
