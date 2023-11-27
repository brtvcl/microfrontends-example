import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


function App() {
	return (
		<div style={{ color: 'mediumturquoise' }}>Hi there, I'm React from Webpack 5.</div>
	)
}

export default App

ReactDOM.render(<App />, document.getElementById("app"));
