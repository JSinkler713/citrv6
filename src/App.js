import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Piper",
            animal: "Dog",
            breed: "Terrier",
        }),
        React.createElement(Pet, {
            name: "Pippa",
            animal: "Dog",
            breed: "Australian Shepherd",
        }),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
