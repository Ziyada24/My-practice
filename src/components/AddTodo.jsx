import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTodo = (props) => {
const [ task, setTask ] = useState('')
const navigate = useNavigate();

function handleInp(e){
  setTask(e.target.value)
  console.log(task);
};

const handleAdd = () => {
  if(!task){
    alert('Поля пустые!');
    return;
  };

  let newTask = {
    task: task,
    status: false,
    id: Date.now()
  };

  props.addTask(newTask, navigate);
  // addTask()

  setTask('');
  
}

  return (
    <>
    <h2>Наши тудушки</h2>
    <input type="text" placeholder='введите...' onChange={(e) => setTask (e.target.value)} value={task}/>
    <button onClick={handleAdd}>Добавить таск</button>
    </>
  )
}

export default AddTodo