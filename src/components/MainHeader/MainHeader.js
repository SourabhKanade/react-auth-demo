import React from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import img from '../Images/Fish420.png';
// import SignUp from '../Login/SignUp';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      {/* <h1>Welcome Page</h1> */}
     <a href="/" rel="noopener noreferrer">
        <img src={img} alt="logo"/>
      </a>
    <button> Signup</button>
    <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
