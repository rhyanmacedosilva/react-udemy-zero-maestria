const TemplateExpressions = () => {
    const pessoa = {
        name: 'Rhyan',
        job: 'Developer'
    }
    return (
        <div>
            <p>My name is {pessoa.name.toUpperCase()}</p>
            <p>I work as a {pessoa.job}</p>
        </div>
    )
}

export default TemplateExpressions