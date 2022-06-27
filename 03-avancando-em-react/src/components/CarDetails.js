import React from 'react'

const CarDetails = ({ brand, color, km, newCar }) => {
    return (
        <div>
            <h2>Car Details</h2>
            <ul>
                <li>Brand: {brand}</li>
                <li>Color: {color}</li>
                <li>KM: {km}</li>
            </ul>
            {newCar === true && <p><b>This is a new car!</b></p>}
        </div>
    )
}

export default CarDetails