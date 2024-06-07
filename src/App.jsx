import React, { useState } from 'react';
import './App.css';

const LoggedIn = ({ toggleLogin }) => (
  <div className="logged-in">
    <h2>Welcome, you are logged in!</h2>
    <button onClick={toggleLogin}>Logout</button>
  </div>
);

const LoggedOut = ({ toggleLogin }) => (
  <div className="logged-out">
    <h2>You are logged out.</h2>
    <button onClick={toggleLogin}>Login</button>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="app">
      {isLoggedIn ? <LoggedIn toggleLogin={toggleLoginState} /> : <LoggedOut toggleLogin={toggleLoginState} />}
    </div>
  );
}

export default App;
