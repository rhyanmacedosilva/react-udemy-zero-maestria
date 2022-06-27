import React from 'react'

const Container = ({ children, name }) => {
    return (
        <div>
            <h2>This is the Container Title</h2>
            {children}
            <p>Name: {name}</p>
        </div>
    )
}

export default Container