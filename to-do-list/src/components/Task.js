import './Task.css'

const Task = ({ id, description }) => {
    return (
        <div className="task">
            <span>{description}</span>
            <div className="task-btn">
                <button>Alterar</button>
                <button>Deletar</button>
            </div>
        </div>
    )
}

export default Task