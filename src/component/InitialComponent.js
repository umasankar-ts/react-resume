import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class InitialComponent extends	Component{
	render(){
		return(
			<div className="initial-bg">
	            <div className="fingerprint-section text-center w-100">
	            	<NavLink to="/home" id="thumb-impression"> 
	                	<img src="../images/fingerprint.png" className="img-fluid finger-print-img" alt="Fingerprint icon"/> 
	            	</NavLink>                               
	            </div>
            </div>
		)
	}

}
export default InitialComponent