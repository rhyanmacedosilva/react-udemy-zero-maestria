import { useState } from 'react'

const ManageData = () => {
    const [name, setName] = useState('Rhyan')
    let job = 'Developer'

    const changeName = () => {
        setName(
            (name === 'Rhyan' ? 'Pippo' : 'Rhyan')
        )
    }

    return (
        <div>
            <p>Name: {name}</p>
            <p><button onClick={changeName}>Change Name</button></p>
            <p>Job: {job}</p>
            <p><button onClick={() => { job = 'Programmer' }}>Change Job</button></p>
        </div>
    )
}

export default ManageData