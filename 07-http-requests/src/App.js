import './App.css'
import { useState } from 'react'
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {
  // const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const { data, httpConfig, loading, error } = useFetch(url)

  console.log('data', data)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setProducts(data)
  //   }
  //   fetchData()
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name, price
    }

    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // const addedProduct = await response.json()
    // setProducts((prevProducts) => (
    //   [...prevProducts, addedProduct]
    // ))

    httpConfig(product, 'POST')

    setName('')
    setPrice('')
  }

  const handleDelete = (e) => {
    const idToDelete = e.target.getAttribute('data-id')
    httpConfig(idToDelete, 'DELETE')
  }

  return (
    <div className="App">
      <h1>Products List</h1>
      {loading && !error ? <p>Loading...</p> :
        data && data.map((product) => (
          <div key={product.id}>{product.name} - ${product.price}
            <span data-id={product.id}
              className="delete-btn"
              onClick={handleDelete}>[X]</span>
          </div>
        ))
      }
      {!loading && !error &&
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => { setName(e.target.value) }} />
            </label>
            <label>
              <span>Price</span>
              <input
                type="number"
                name="price"
                required
                value={price}
                onChange={(e) => { setPrice(e.target.value) }} />
            </label>
            <input type="submit" value="Save" />
          </form>
        </div>
      }
      {error && <p>{error}</p>}
    </div>
  )
}

export default App
