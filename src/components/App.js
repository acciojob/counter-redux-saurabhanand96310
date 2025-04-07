
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const state=useSelector((state)=>state)
  const dispatch=useDispatch();
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>Increment</button>
        <button onClick={()=>dispatch({type:"dec"})}>Decrement</button>
    </div>
  )
}

export default App
