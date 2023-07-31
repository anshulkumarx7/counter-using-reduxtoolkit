import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { actions } from "./store/index";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment=()=>{
    dispatch(actions.increment());
  }
  const decrement=()=>{
    dispatch(actions.decrement());
  }
  const reset=()=>{
    dispatch(actions.reset());
  }
  const addBy10=()=>{
    dispatch(actions.addBy10(10));
  }
  return (
    <div className="container">
      <div className="counter">
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={addBy10}>Add By 10</button>
      </div>
    </div>
  );
}

export default App;
