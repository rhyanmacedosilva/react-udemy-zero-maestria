import './Task.css'

const Task = ({ id, description, completed, manageRequestSettings, prepareToUpdateTask }) => {
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

    const handleTaskClick = (id) => {
        manageRequestSettings({
            method: 'PUT',
            body: { description: description, completed: !completed },
            id: id
        })
    }

    return (
        <div className={completed ? 'task task-completed' : 'task'}>
            <span onClick={() => handleTaskClick(id)}>{description}</span>
            <div className="task-btn">
                <button onClick={() => { handleUpdate(id) }}>Alterar</button>
                <button onClick={() => { handleDelete(id) }}>Deletar</button>
            </div>
        </div>
    )
}

export default Task