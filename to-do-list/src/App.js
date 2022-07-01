import Task from './components/Task'
import './App.css'
import Form from './components/Form'
import { useHttp } from './hooks/useHttp'

const url = 'http://localhost:3000/tasks'

function App() {
  const { data: tasks, manageRequestSettings } = useHttp({ url })

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <Form manageRequestSettings={manageRequestSettings} />
      <div className="tasks">
        {tasks && tasks.map((task) => (
          <Task
            key={task.id}
            description={task.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App
