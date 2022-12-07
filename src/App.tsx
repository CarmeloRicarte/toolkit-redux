import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./store/slices/counter";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const { counter } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter is: {counter}</h1>
      <div className="card">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value plus 2"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment + 2
        </button>
        <button
          aria-label="Decrement value plus 2"
          onClick={() => dispatch(decrementByAmount(2))}
        >
          Decrement - 2
        </button>
      </div>
    </div>
  );
}

export default App;
