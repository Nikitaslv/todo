import React, { useState } from 'react'
import { TodoForm } from '../TodoForm/TodoForm'
import { TodoList } from '../TodoList/TodoList';

export const Main = () => {

    const [state, setState] = useState({
        list : [
            {
                id: Math.floor(Math.random() * 5000),
                task: "Nikita",
                checked: false,
            }
        ]
    })

    console.log(state);

    const createTask = (value) => {
        let list = state.list;
        const data = {
            id: Math.floor(Math.random() * 5000),
            task: value,
            checked: false,
        }
        setState((old) => ({
            ...old,
            list: [...list, data],
        }))

    }

    return (
        <div>
            <TodoForm  createTask={createTask} />
            <TodoList list={state.list} />
        </div>
    )
}