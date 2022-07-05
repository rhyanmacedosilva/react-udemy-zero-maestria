import { useState } from 'react'
import './Form.css'

const Form = ({ manageRequestSettings, taskToUpdate, setTaskToUpdate }) => {
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const taskToAdd = { description }
        manageRequestSettings({
            method: 'POST',
            body: taskToAdd,
            id: null
        })
        setDescription('')
        setTaskToUpdate(null)
    }

    const handleChange = (e) => {
        const inputValue = e.target.value
        setDescription(inputValue)
        if (taskToUpdate) {
            taskToUpdate.description = inputValue
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                required
                type="text"
                name="description"
                value={!taskToUpdate ? description : taskToUpdate.description}
                onChange={handleChange}
            />
            <button>Adicionar</button>
        </form>
    )
}

export default Form