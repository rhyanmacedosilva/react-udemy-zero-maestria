import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from "./pages/News"
import Favorites from "./pages/Favorites"
import About from "./pages/About"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
