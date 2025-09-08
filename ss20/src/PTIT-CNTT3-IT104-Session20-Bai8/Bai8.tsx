import { useReducer } from "react";
import type { ChangeEvent } from "react";

interface FormState {
  name: string;
  email: string;
}

type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string };


function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

function UserForm() {
  const [state, dispatch] = useReducer(formReducer, { name: "", email: "" });

  return (
    <div>
      <h2>User Form</h2>
      <div>
        <label>Tên: </label>
        <input
          type="text"
          value={state.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={state.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />
      </div>

      <p>Giá trị hiện tại:</p>
      <p>Tên: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  );
}

export default UserForm;
