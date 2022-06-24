import React from 'react'

const Events = () => {
    const handleMyEvent = (e) => {
        console.log(console.log(e))
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Rendering this!</h1>
        } else {
            return <h1>Rendering that!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click Here 0!</button>
            </div>
            <div>
                <button
                    onClick={() => {
                        console.log('inline function callled')
                    }}>
                    Click Here 1!
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events