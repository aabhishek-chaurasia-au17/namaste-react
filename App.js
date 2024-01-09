const root = ReactDOM.createRoot(document.getElementById("root"))

const heading = React.createElement("h1", {class:"test"}, [ 
    React.createElement("div", { id: "child"},[
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]),
    React.createElement("div", { id: "child2"},[
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ])
])
console.log(heading);
root.render(heading)