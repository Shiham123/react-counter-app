import { useDispatch, useSelector } from 'react-redux';
import './app.scss';
import { actions } from './store';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const customValue = () => {
    dispatch(actions.customValue(5));
  };

  return (
    <div>
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={customValue}>Add Custom value</button>
    </div>
  );
}

export default App;
