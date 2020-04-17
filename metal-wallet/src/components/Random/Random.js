import React from 'react';
import {useActions, useRandomAPI} from '../../features/random';
import classes from './Random.module.css';

const Random = () => {
  /**
   *  Get number, returned  from random.org, and the state of request from Redux store.
   */
  const {number, isLoading, hasError, isFulfilled} = useRandomAPI();

  /** Create incrementCounter action, using custom hook from feature */
  const {getNumber} = useActions();

  /** Define pristine state condition, when user didn't do any actions */
  const isPristine = !isLoading && !hasError && !isFulfilled;

  return (
    <div className={classes.counter}>
      <h2 className={classes.header}>Get Transactions</h2>
      <button
        disabled={isLoading}
        className={classes.button}
        type="button"
        onClick={getNumber}>
        Fetch
      </button>
      {isPristine && <div>Click the button to update transactions</div>}
      {isLoading && <div>Getting number</div>}
      {isFulfilled && (
        <div>
          Transaction History: <strong>{number}</strong>
        </div>
      )}
      {hasError && <div>Ups...</div>}
    </div>
  );
};

export default Random;
