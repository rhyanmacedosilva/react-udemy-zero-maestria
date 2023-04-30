import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorProvider } from './context/TitleColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterContextProvider>
        <TitleColorProvider>
          <App />
        </TitleColorProvider>
      </CounterContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)