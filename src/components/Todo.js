import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo({todos, completeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const handleDelete =  todo => {
        alert(todo.id)
    }
    return  todos.map((todo, index) => (
        <div key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
                <button key={todo.id} onClick={handleDelete}>delete</button>
                <button>edit</button>

            </div> 
        </div>
    ))
}

export default Todo
