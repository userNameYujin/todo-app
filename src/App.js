import { Component} from "react";
import Title from './Title';
import Content from './Content';
import { useState } from "react";

function App() {
	const [value, setValue] = useState('');

	fetch('http://localhost:3001/comments')
		.then((response) => response.json()) // json!!!
		.then((response) => {
			setValue(response) 
			console.log(response) 
		})
		.catch((error) => console.log("error:", error));
		console.log("value:", value);
	return (
		<div>
			<Title text="Todo List" />
			<Content />
		</div>
	)
}


export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
