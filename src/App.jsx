import { useState, useReducer} from 'react';
import "./styles.css";
import Todo from"./Todo.jsx";

//Actions
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
 
}
//Reducer
function reducer(todos, action){
  //Main switch
  switch (action.type){
    
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id){
          return { ...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos

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

  
  console.log(todos)
  return (
    <div className="background">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      </form>
      {
        todos.map(todo => {return <Todo key={todo.id} todo={todo} dispatch={dispatch} />})
      }
    </div>

  )
}

// export default App
