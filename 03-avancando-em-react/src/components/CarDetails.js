import React from 'react'

const CarDetails = ({ brand, color, km }) => {
    return (
        <div>
            <h2>Car Details</h2>
            <ul>
                <li>Brand: {brand}</li>
                <li>Color: {color}</li>
                <li>KM: {km}</li>
            </ul>
        </div>
    )
}

export default CarDetails