import React from 'react';
import logo from './logo.svg';
import Counter from '../Counter';
import Random from '../Random';
import classes from './App.module.css';

// Allow the user to enter, save, or change the id used for the program
// Display the current balance for that user
// Display a list of all transactions for this user, including sender and recipient

const App = () => (
  <div className={classes.container}>
    <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo" />
      <p>Gear Wallet for Metal Coin.</p>
      <p>Solid.</p>
      <a
        className={classes.link}
        href="https://github.com/IXLives"
        target="_blank"
        rel="noopener noreferrer">
        👉Author👈
      </a>
    </header>
    <div className={classes.cards}>
      <Counter />
      <Random />
    </div>
  </div>
);

export default App;
