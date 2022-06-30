import './App.css'
import { useState, useEffect } from 'react'

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  console.log(products)

  return (
    <div className="App">
      <h1>Products List</h1>
      {products.map((product) => (
        <div key={product.id}>{product.name} - ${product.price}</div>
      ))}
    </div>
  )
}

export default App
