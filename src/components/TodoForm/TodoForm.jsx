import React, { useState } from 'react'

export const TodoForm = (props) => {

    const [state, setState] = useState({
        task: '',
    })

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if(state.task !== '' && state.task !== ' ') {
                    props.createTask(state.task)
                    setState((old) => ({
                    ...old,
                    task: '',
                }))
                } 
            }}>
                <input value={state.task} onChange={(e) => {
                    setState((old) => ({
                        ...old,
                        task: e.target.value,
                    }))
                }} type="text" />
                <button>Добавить</button>
            </form>
        </div>
    )
}