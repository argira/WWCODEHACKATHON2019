import React, {Component} from 'react';
import './energycurrent.css'

//Upates based on currently energy. Will update energy color
//based on the data obtained. Also, button to update energy
//to decrease/increase based on data
class EnergyCurrent extends Component {
	constructor(){
		super();
		this.state={
				//this will be a prop
				currentData: 13,
		};
	}

	updateEnergy(){
		console.log("hello World");
	}

	render() {
		const {currentData}= this.state;
		if(currentData > 12 || currentData < 3) { 
			console.log("non");
			return (
					<div className="energyC">
					<h2 style={{color:'red'}}>Current Energy</h2>
						<button className="btn btn-secondary btn-lg btn-block" onClick={this.updateEnergy.bind(this)}>Update</button>
					</div>
			);
		}
		else {
			console.log("hello");
			return (
			<div className="energyC">
			<h2 style={{color:'green'}}>Current Energy</h2>
			<button className="btn btn-secondary btn-lg btn-block" onClick={this.updateEnergy.bind(this)}>Update</button>
			</div>
		);
		}
	}
}
export default EnergyCurrent;