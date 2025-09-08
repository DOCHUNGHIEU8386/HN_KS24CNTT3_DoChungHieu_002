import React, { useReducer } from "react";

export default function Bai5() {
  const reducer = (state: string, action: { type: string; payload: string }) => {
    console.log("action = ", action);
    if (action.type === "CHANGE") {
      return action.payload; 
    }
    return state; 
  };

  const [state, dispatch] = useReducer(reducer, "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE", payload: e.target.value });
  };

  return (
    <div>
      <h1>Ứng dụng InputText đơn giản</h1>
      <input
        type="text"
        value={state}
        onChange={handleChange}
        placeholder="Nhập nội dung ở đây"
      />
      <p>Nội dung hiện tại: {state}</p>
    </div>
  );
}
