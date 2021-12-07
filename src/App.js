import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const EventContext = React.createContext();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storageInfo = localStorage.getItem('LoggedIn');

    if(storageInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password But it's just a dummy/ demo anyways!
    localStorage.setItem('LoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('LoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <>
    <EventContext.Provider Value={{isLoggedIn : isLoggedIn}}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </EventContext.Provider>
    </>
  );
};

export default App;
export { EventContext };
