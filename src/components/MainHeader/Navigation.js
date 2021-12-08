import React, { useContext } from 'react';
import classes from './Navigation.module.css';
import { EventContext } from "../../App";

const Navigation = (props) => {

  const option = useContext(EventContext);
  return (
    <>
     <nav className={classes.nav}>
      <ul>
        {option.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {option.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {option.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
   </>
)};
export default Navigation;
