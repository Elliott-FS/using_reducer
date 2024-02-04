import { useState, useReducer} from 'react';
import "./styles.css";


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <button onClick={() =>{setCount(count - 1)}}>-</button>
      <span>{count}</span>
      <button onClick={() => {setCount(count + 1)}}>+</button>
    </div>
  )
}

// export default App
