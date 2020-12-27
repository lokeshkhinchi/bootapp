import React, { Component, useState } from 'react';
import { Redirect, useHistory, NavLink, withRouter, Route } from 'react-router-dom';


const LogIn = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const changeHandler = (e) => {
    e.target.name === 'userName' ? 
    setUserName(e.target.value) : 
    setPassword(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    sessionStorage.setItem('sessionData', JSON.stringify({userName, password}));
    let userData = sessionStorage.getItem('sessionData');
    userData = JSON.parse(userData);
    history.push('/');

  }

  return (
    <>
    <div className="login-cointainer">
    <form className="user-form login-form" onSubmit={submitHandler}>
      <div class="form-group">
        <label for="inputUserName">User Name</label>
        <input 
        type="text" 
        name="userName" 
        class="form-control" 
        id="inputUserName"
        value={userName} 
        onChange={changeHandler}
        required />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="inputPassword1">Password</label>
        <input 
        type="password" 
        name="password" 
        class="form-control" 
        id="inputPassword1"
        value={password} 
        onChange={changeHandler}
        required />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="checkMe" />
        <label class="form-check-label" for="checkMe">Check me out</label>
      </div>
      <button type="submit" class="btn btn-outline-primary btn-block">Submit</button>
    </form>
    </div>
    </>
  )
}

export default LogIn;
