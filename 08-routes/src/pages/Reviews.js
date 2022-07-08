import React from 'react'
import { useParams } from 'react-router-dom'

const Reviews = () => {
    const { id } = useParams()

    return (
        <div>Reviews about the product with id: {id}</div>
    )
}

export default Reviews