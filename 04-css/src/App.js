import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const dynamicCSS = true
  const dynamicClass = false

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS Componente */}
      <MyComponent />
      <p>Texto do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", textDecoration: "line-through" }}>
        Inline CSS
      </p>
      {/* CSS Inline Dinâmico */}
      <h1
        style={(dynamicCSS === true ? { color: "red" } : { color: "blue" })}>
        CSS Dinâmico
      </h1>
      {/* Classe Dinâmica */}
      <h1
        className={dynamicClass === true ? "red-title" : "yellow-title"}>
        Classe Dinâmica
      </h1>
      {/* CSS Modules */}
      <Title />
      <h1 className="my_title">My Title Testando</h1>
    </div>
  )
}

export default App
