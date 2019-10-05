import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import EnergyCurrent from "./components/energycurrent";
import EnergyStored from "./components/energystored";
import EnergyUsed from "./components/energyused";

class App extends React.Component {
	render() {
		return (
				<div className="App">
				
				<h1>Household Energy Live </h1>
				<EnergyCurrent/>
				<ul>
					<li><EnergyUsed/></li>
					<li><EnergyStored/></li>
				</ul>
				</div>
		);
	}
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
