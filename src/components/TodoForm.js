import React, {useState} from 'react'
import Button from './Button/Button';


function TodoForm(props) {

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handlSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        })

        setInput('')
    }
    return (
        <form onSubmit={handlSubmit}>
            <input 
                type="text"
                placeholder="Enter Todo"
                value={input}
                name="todo"
                onChange={handleChange}
            />
            <Button opacity="0.7" text="Close Shipment"/>

            {/* <button>Add Todo</button> */}
        </form>
    )
}

export default TodoForm
