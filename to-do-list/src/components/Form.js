import { useState } from 'react'
import './Form.css'

const Form = ({ manageRequestSettings, taskToUpdate, setTaskToUpdate }) => {
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!taskToUpdate) {
            const taskToAdd = { description }
            manageRequestSettings({
                method: 'POST',
                body: taskToAdd,
                id: null
            })
        } else {
            manageRequestSettings({
                method: 'PUT',
                body: { description: taskToUpdate.description },
                id: taskToUpdate.id
            })
        }

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
            <button>{!taskToUpdate ? 'Adicionar' : 'Alterar'}</button>
        </form>
    )
}

export default Form