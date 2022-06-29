import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForm user={{ name: 'Pippo', email: 'pippo@gmail.com', bio: 'Lindo.', role: 'Admin' }} />
    </div>
  )
}

export default App
