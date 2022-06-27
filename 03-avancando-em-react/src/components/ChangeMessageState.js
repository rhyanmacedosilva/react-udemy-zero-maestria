import React from 'react'

const ChangeMessageState = ({ handleMessage }) => {
    const messages = ['Hello', 'Sorry', 'How are you?']
    return (
        <div>
            <button
                onClick={() => handleMessage(messages[0])}>
                Show Message Number 0
            </button>
            <button
                onClick={() => handleMessage(messages[1])}>
                Show Message Number 1
            </button>
            <button
                onClick={() => handleMessage(messages[2])}>
                Show Message Number 2
            </button>
        </div>
    )
}

export default ChangeMessageState