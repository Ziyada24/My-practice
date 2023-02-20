import React from 'react'

const TodoList = (props) => {

  let style ={
    color: 'red',
    listStyleType: 'none'
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul style={style}>
        {/* {props.todos.map(item => (
          <li key={item.id} className={item.status ? 'completed' : ''}>
            <input type="checkbox" onChange={() => props.changeStatus(item.id)}/>
            {item.task}
            <button onClick={() => props.getEditedObj(item.id)}>Edit</button>
            <button onClick={() => props.deleteTask(item.id)}>Delete</button>
          </li>
        ))} */}
      </ul>
    </div>
  )
}

export default TodoList