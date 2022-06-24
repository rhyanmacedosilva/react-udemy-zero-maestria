import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Rhyan', 'Pippo', 'Naiana'])

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender