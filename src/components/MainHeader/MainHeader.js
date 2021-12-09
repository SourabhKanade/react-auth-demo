import React from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import img from '../Images/Fish420.png';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      {/* <h1>Welcome Page</h1> */}
     <a href="/" rel="noopener noreferrer">
        <img src={img} alt="logo"/>
      </a>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
