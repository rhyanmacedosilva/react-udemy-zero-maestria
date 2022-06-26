import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false)
    const [name, setName] = useState('Rhyan')
    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x === true && <p>Se x for <b>true</b>, sim!</p>}
            {x === false && <p>Se x for <b>false</b>, sim!</p>}
            <h1>If Ternário</h1>
            {name === 'Rhyan' ? (
                <p>Name is Rhyan</p>
            ) : (
                <p>Name is <b>not</b> Rhyan</p>
            )}
            <button onClick={() => { setName('Pippo') }}>Change Name</button>
        </div>
    )
}

export default ConditionalRender