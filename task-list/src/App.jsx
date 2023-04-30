import { Container, Table, Button, Text, Input } from '@nextui-org/react'
import './App.css'
import { useTasks } from './contexts/TasksContext'
import { useState } from 'react'

function App() {
  const { tasks, dispatch } = useTasks()
  const [taskToAdd, setTaskToAdd] = useState("")

  const handleSubmit = (e) => {
    const newTask = {
      id: new Date().getTime(),
      text: taskToAdd,
      done: false
    }
    setTaskToAdd("")
    dispatch({ type: "create", newTask })
  }

  return (
    <Container>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Task List
      </Text>
      <form className="form">
        <div className="input">
          <Input onChange={e => setTaskToAdd(e.target.value)} value={taskToAdd} placeholder="Add a new task..." />
        </div>
        <Button onClick={handleSubmit}>Add</Button>
      </form>
      <Table>
        <Table.Header>
          <Table.Column>TASK</Table.Column>
          <Table.Column>ACTIONS</Table.Column>
        </Table.Header>
        <Table.Body>
          {tasks.map(task => (
            <Table.Row key={task.id}>
              <Table.Cell>
                {task.text}
              </Table.Cell>
              <Table.Cell>
                <Button
                  color="error"
                  size="sm"
                  onClick={() => dispatch({ type: "delete", id: task.id })}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  )
}

export default App
