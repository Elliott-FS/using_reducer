import { useState, useReducer} from 'react';
import "./styles.css";

const ACTIONS = {
  ADD_TODO: 'add-todo'
 
}

function reducer(todos, action){
  switch (action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
  }
 
}

function newTodo(name){
  return {id: Date.now(), name: name, complete: false}

}

export default function App() {
  // const [count, setCount] = useState(0)
  const [todos, dispatch ] = useReducer(reducer,[])
  const [name, setName] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload:{name: name}});
    setName('')
  }

  
  
  return (
    <div className="background">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      </form>
    </div>

  )
}

// export default App
