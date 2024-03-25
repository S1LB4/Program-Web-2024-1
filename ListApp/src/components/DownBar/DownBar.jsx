import { useState, useEffect } from 'react'
import { Button } from '../Button/Button'
import './DownBar.css'


export function DownBar ({ tasks, onCompleteTasks, onClearAll }) {
  const [completedTasks, setCompletedTasks] = useState('0 completed out of 0')

  useEffect(() => {
    if (tasks) {
      const completedTasksCount = tasks.filter(task => task.completed).length
      setCompletedTasks(`${completedTasksCount} / ${tasks.length} done`)
    }
  }, [tasks])

  return (
    <div>
      <p className='text'>{completedTasks}</p>
      <div>
        <Button title='Complete Tasks' onClick={() => onCompleteTasks()} />
        <Button title='Clear All' onClick={() => onClearAll()} />
      </div>

    </div>
  )
}
