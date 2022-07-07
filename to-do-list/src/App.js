import Task from './components/Task'
import './App.css'
import Form from './components/Form'
import { useHttp } from './hooks/useHttp'
import { useState } from 'react'

const url = 'http://localhost:3000/tasks'

function App() {
  const { data: tasks, manageRequestSettings } = useHttp({ url })
  const [taskToUpdate, setTaskToUpdate] = useState()
  console.log('App' + (new Date()).getMilliseconds())

  const prepareToUpdateTask = (id) => {
    const task = tasks.filter((task) => (task.id === id))
    setTaskToUpdate(...task)
  }

  return (
    <div className="App">
      <h1>- Task Tracker -</h1>
      <Form
        manageRequestSettings={manageRequestSettings}
        taskToUpdate={taskToUpdate}
        setTaskToUpdate={setTaskToUpdate}
      />
      <div className="tasks">
        {tasks && tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            description={task.description}
            completed={task.completed}
            manageRequestSettings={manageRequestSettings}
            prepareToUpdateTask={prepareToUpdateTask}
          />
        ))}
      </div>
    </div>
  )
}

export default App
