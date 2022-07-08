import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
    const [searchParams] = useSearchParams()
    const url = 'http://localhost:3000/products?q=' +
        searchParams.get('q')
    const { data: items, loading, error } = useFetch(url)

    return (
        <div>
            <h1>Resultados Disponíveis</h1>
            {error && <p>Error: {error}</p>}
            {loading && <p>Loading...</p>}
            <ul className='products'>
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>${item.price}</p>
                        <Link
                            to={'/products/' + item.id}>
                            Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search