/*
    1. Crie um componente chamado Challenge
    2. Importe-o em App.js
    3. No componente crie dois valores tipo number
    4. Imprima estes valores
    5. Crie um evento de click que soma os valores e os exibe no console
*/

const Challenge = () => {
    const x = 14
    const y = 7

    const handleClick = (e) => {
        console.log(x + y)
    }

    return (
        <div>
            <hr />
            <h1>{x}</h1>
            <h1>{y}</h1>
            <button onClick={handleClick}>Somar</button>
            <hr />
        </div>
    )
}

export default Challenge