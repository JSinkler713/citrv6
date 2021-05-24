import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Piper" animal="Dog" breed="Terrier" />
            <Pet name="Pippa" animal="Dog" breed="Australian Shepherd" />
            <SearchParams />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
