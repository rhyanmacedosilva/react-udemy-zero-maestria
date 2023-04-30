import { createContext, useContext, useReducer } from "react"

const TasksContext = createContext(null)
export const useTasks = () => useContext(TasksContext)

const tasksReducer = (tasks, action) => {
    const { type } = action
    switch (type) {
        case "delete":
            return tasks.filter(task => task.id != action.id)
        case "create":
            return [action.newTask, ...tasks]
    }
}

export const TasksProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

    return (
        <TasksContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TasksContext.Provider>
    )
}

const initialTasks = [
    {
        id: 0,
        text: "Task A",
        done: false
    },
    {
        id: 1,
        text: "Task B",
        done: false
    },
    {
        id: 2,
        text: "Task C",
        done: false
    }
]