import { useReducer } from "react";

interface CounterState {
  count: number;
}

type CounterAction = { type: "increment" } | { type: "decrement" };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Giảm</button>
    </div>
  );
}

export default Counter;
