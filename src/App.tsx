import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTimeSlots,
  selectAllTimeSlotsError,
  selectAllTimeSlotsPending
} from './store';
import {
  ErrorContainer,
  PendingContainer
} from './components';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectAllTimeSlotsError);
  const pending = useSelector(selectAllTimeSlotsPending);

  useEffect(() => {
    dispatch(getAllTimeSlots());
  }, [dispatch])

  if (error) {
    return <ErrorContainer />
  }

  if (pending) {
    return <PendingContainer />
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
