import './Form.css'

const Form = () => {
    return (
        <div className="form-container">
            <form>
                <input type="text" name="description" />
                <button>Adicionar</button>
            </form>
        </div>
    )
}

export default Form