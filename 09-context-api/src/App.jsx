import { Routes, Route } from "react-router-dom";
import About from './routes/About'
import Home from './routes/Home'
import Layout from './routes/Layout'
import Products from './routes/Products'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Route >
      </Routes>
    </>
  )
}

export default App
