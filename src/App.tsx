import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTimeSlots,
  selectAllTimeSlotsError,
  selectAllTimeSlotsPending
} from './store';
import {
  ErrorContainer,
  PendingContainer,
  SchedulerContainer,
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
      <h1 className="main__title">Scheduler</h1>
      <SchedulerContainer />
    </div>
  );
}

export default App;
