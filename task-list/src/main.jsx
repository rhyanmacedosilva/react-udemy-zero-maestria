import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { TasksProvider } from './contexts/TasksContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider theme={createTheme({ type: "dark" })}>
    <TasksProvider>
      <App />
    </TasksProvider>
  </NextUIProvider >
)
