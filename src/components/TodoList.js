import React, { useState } from 'react'
// import TodoForm from './TodoForm'
// import Todo from './Todo';
import '../style.css'

// import './Button.css'




function TodoList({ items, completeTodo }) {

    const [item, setItem] = useState(items)

    const onItemClick = todo => {

        let rest = item.find(itms => todo.id === itms.id)

        let temp_todo = { ...rest, done: !rest.done }


        var filtered = item.filter(function (value, indexs, arr) {
            return value.id !== todo.id;
        })

        let newIitem = [...filtered, temp_todo]

        setItem(newIitem)

    }

    return item.map((itm) => itm.done ? <div key={itm.id}>
        <button key={itm.id} onClick={() => onItemClick(itm)} className="large-Button">{itm.text}</button>
    </div> : <div key={itm.id}>
        <button key={itm.id} onClick={() => onItemClick(itm)} disabled className="done">{itm.text}</button>
    </div>
    )
}

export default TodoList
