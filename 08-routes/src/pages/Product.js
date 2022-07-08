import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import './Product.css'

const Product = () => {
    const { id } = useParams()
    const url = 'http://localhost:3000/products/' + id
    const { data: product, loading, error } = useFetch(url)

    console.log(product)

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {loading && <p>Loading...</p>}
            {product &&
                <div className="product-details">
                    <p>Product: <strong>{product.name}</strong></p>
                    <p>Price: ${product.price}</p>
                    <Link
                        to={'/products/' + product.id + '/reviews'}>
                        See Reviews
                    </Link>
                </div>
            }
        </div>
    )
}

export default Product