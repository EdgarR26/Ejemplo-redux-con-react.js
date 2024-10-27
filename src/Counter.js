import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, decrementar } from "./redux/actions";

const Counter = () => {
  const contador = useSelector((state) => state.contador); // Accede al estado global
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(decrementar())}>Decrementar</button>
    </div>
  );
};

export default Counter;
