import './Task.css'

const Task = ({ id, description, manageRequestSettings, prepareToUpdateTask }) => {
    const handleDelete = (id) => {
        manageRequestSettings({
            method: 'DELETE',
            body: null,
            id: id
        })
    }

    const handleUpdate = (id) => {
        prepareToUpdateTask(id)
    }

    return (
        <div className="task">
            <span>{description}</span>
            <div className="task-btn">
                <button onClick={() => { handleUpdate(id) }}>Alterar</button>
                <button onClick={() => { handleDelete(id) }}>Deletar</button>
            </div>
        </div>
    )
}

export default Task