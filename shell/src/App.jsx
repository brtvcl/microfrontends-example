import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


function App() {
	return (
		<div className="header">
			<div>
				Hello from React! I can update Svelte App state
			</div>
			<div style={{ marginTop: '1rem' }}>
				<button onClick={() => {
					window.increment();
				}}>Click Me</button>
			</div>
			<div style={{ marginTop: '1rem' }}>
				Count will be updated.<br />
				👇

			</div>
		</div>
	)
}

export default App

ReactDOM.render(<App />, document.getElementById("app"));
