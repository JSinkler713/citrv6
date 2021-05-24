const Pet = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h2", {}, props.name),
            React.createElement("h3", {}, props.animal),
            React.createElement("h3", {}, props.breed),
        ]
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Piper", animal: "Dog", breed: "Terrier"}),
            React.createElement(Pet, { name: "Pippa", animal: "Dog", breed: "Australian Shepherd"}),
        ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
