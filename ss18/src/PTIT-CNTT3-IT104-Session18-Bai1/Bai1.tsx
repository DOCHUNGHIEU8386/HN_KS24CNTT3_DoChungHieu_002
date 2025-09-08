import React, { useReducer } from "react";

const initialState = { count: 0 };

const countReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 }; 
    default:
      return state;
  }
};

export default function Increase() {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: "INCREASE" }); 
  };

  return (
    <div>
      <h1>Ứng dụng tăng số</h1>
      <p>Giá trị hiện tại: {state.count}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
