import { useState } from 'react'
import './Form.css'

const Form = ({ manageRequestSettings }) => {
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const taskToAdd = { description }
        manageRequestSettings({
            method: 'POST',
            body: taskToAdd
        })
        setDescription('')
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => (setDescription(e.target.value))}
                />
                <button>Adicionar</button>
            </form>
        </div>
    )
}

export default Form