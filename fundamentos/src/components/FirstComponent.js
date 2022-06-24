import MyComponent from "./MyComponent"

const FirstComponent = () => {
    // this is a comment
    return (
        <div>
            {/* this is a comment in JSX */}
            <h1>Meu primeiro componente!</h1>
            <MyComponent />
        </div>
    )
}

export default FirstComponent