import './AddTask.css'
import { useState } from 'react'

export function AddTask ({ onAddTask }) {
  const [task, setTask] = useState('')

  const handleInputChange = (event) => {
    setTask(event.target.value)
  }

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: crypto.randomUUID(), title: task, completed: false }
      onAddTask(newTask)
      setTask('')
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className='add-task-container'>
      <input type='text' value={task} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder='What are we going to do today?' className='add-task_input'/>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}
