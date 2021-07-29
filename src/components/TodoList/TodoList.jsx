import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = (props) => {
    return (
        <div>
            {props.list.map((item) => {
                return (
                    <TodoItem
                        key={item.id}
                        id={item.id} 
                        task={item.task} 
                        checked={item.checked} 
                        item={item} 
                    />
                )
            })}
        </div>
    )
}