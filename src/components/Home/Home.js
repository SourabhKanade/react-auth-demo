import React from 'react';
import SignUp from '../Login/SignUp';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      {/* <h1>Welcome this is home component</h1> */}
      <SignUp />
    </Card>
  );
};

export default Home;
