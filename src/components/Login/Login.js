import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const inputisvalid = enteredEmail.includes('@') && enteredPassword.trim().length > 6;
 

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // console.log(event.target.value);
    setFormIsValid(inputisvalid);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // console.log(event.target.value);
    setFormIsValid(inputisvalid);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
    setEmailIsTouched(true);
    // const emailistouched = false;
    // if(inputisvalid) {
    //   emailistouched = true;
    // }
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    props.onLogin(enteredEmail, enteredPassword);
    setEmailIsTouched(true);
  };
 
  const invalidinput = emailIsValid === emailIsTouched ? classes.invalid : '' ;
  return (
  
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
      <h1> Login </h1>
        <div
          className={`${classes.control} ${invalidinput}`}  >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : '' }`} >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
