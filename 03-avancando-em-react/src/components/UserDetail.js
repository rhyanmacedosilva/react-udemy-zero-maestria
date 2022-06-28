import React from 'react'

const UserDetail = ({ name, age }) => {
    return (
        <div>
            <b>{name}</b>, {age}
            {age >= 18 && <small> ( This user can take a driver license. )</small>}
        </div>
    )
}

export default UserDetail