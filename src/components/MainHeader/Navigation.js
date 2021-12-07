import React from 'react';
import classes from './Navigation.module.css';
import { EventContext } from "../../App";

const Navigation = (props) => {
  return (
    <EventContext.Consumer>
    {(option) => {
    return (
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
  ) }};
    </EventContext.Consumer>
)};
export default Navigation;
