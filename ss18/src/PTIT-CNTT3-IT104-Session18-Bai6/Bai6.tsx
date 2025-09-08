import React, { useReducer } from "react";

export default function Bai6() {
  const reducer = (state: string, action: { type: string; payload: string }) => {
    if (action.type === "CHANGE") return action.payload;
    return state;
  };

  const [state, dispatch] = useReducer(reducer, "Nam");

  return (
    <div>
      <h1>Bai6: InputRadio đơn giản</h1>

      <label>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={state === "Nam"}
          onChange={e => dispatch({ type: "CHANGE", payload: e.target.value })}
        /> Nam
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Nữ"
          checked={state === "Nữ"}
          onChange={e => dispatch({ type: "CHANGE", payload: e.target.value })}
        /> Nữ
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Khác"
          checked={state === "Khác"}
          onChange={e => dispatch({ type: "CHANGE", payload: e.target.value })}
        /> Khác
      </label>

      <p>Giới tính đang chọn: {state}</p>
    </div>
  );
}
