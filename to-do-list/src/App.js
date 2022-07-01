import Task from './components/Task'
import './App.css'
import Form from './components/Form'
import { useHttp } from './hooks/useHttp'

function App() {
  const { data: tasks } = useHttp('/tasks')

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <Form />
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
