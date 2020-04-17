import React, {useState} from 'react';
import {useCountValue, useActions} from '../../features/counter';
import classes from './Counter.module.css';

//https://levelup.gitconnected.com/fetch-an-api-with-react-hooks-79d509a052a0
//https://www.robinwieruch.de/react-hooks-fetch-data
//https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd
//https://blog.bitsrc.io/making-api-calls-with-react-hooks-748ebfc7de8c

const IdForm = props => {
  const [id, setid] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Submitting ID ${id}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      ID:
      <input
        type="text"
        name="ID"
        value={id}
        onChange={e => setid(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

const Counter = () => {
  /**
   *  Get count value from Redux store. We defined selector
   *  (state => state.counter.value) inside counter feature folder,
   *  to make component global state agnostic
   */
  const count = useCountValue();

  /** Create incrementCounter action, using custom hook from feature */
  const {incrementCounter} = useActions();

  return (
    <div className={classes.counter}>
      <h2 className={classes.header}>Enter ID</h2>
      <IdForm />
      <button
        className={classes.button}
        type="button"
        onClick={incrementCounter}>
        Submit + Get Balance
      </button>
      <div>
        Total Coins: <strong>{count}</strong>
      </div>
    </div>
  );
};

export default Counter;
