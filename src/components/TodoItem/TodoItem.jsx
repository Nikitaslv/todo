import React from 'react'

export const TodoItem = (props) => {
    return (
        <div>
            <div className="item" id={props.id}>
                <p>{props.task}</p>
            </div>
        </div>
    )
}