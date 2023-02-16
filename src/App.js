import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./componet/slice";

const App = () => {
  const view = useSelector((state) => state.counter.value);
  const dispatch = useDispatch;
  return (
    <div className="pushMinus">
      <h1>Adding the number & Removing the number</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <span>{view}</span>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};
export default App;
