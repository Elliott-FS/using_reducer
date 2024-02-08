import { useState, useReducer} from 'react';
import "./styles.css";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  CLEAR: 'clear',
}

function reducer(state, action){
  switch (action.type){
    case ACTIONS.INCREMENT: 
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    case  ACTIONS.CLEAR:
      return {count: 0}
    default:
      return state;

  }
}


export default function App() {
  // const [count, setCount] = useState(0)
  const [state, dispatch ] = useReducer(reducer,{count: 0})
  function Increment(){
    dispatch({type: ACTIONS.INCREMENT});
  }

  function Decrement(){
    dispatch({type: ACTIONS.DECREMENT})
  }

  function Clear(){
    dispatch({type: ACTIONS.CLEAR})
  }
  return (
    <div className='background'>
      <div className="counter">
        <h2>{state.count}</h2>
        <button onClick={Increment}> Increment +</button>
        <button onClick={Decrement}>Decrement -</button>
        <button onClick={Clear}>Clear</button>
      </div>
    </div>

  )
}

// export default App
