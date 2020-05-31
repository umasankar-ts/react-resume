import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class InitialComponent extends	Component{
	render(){
		return(
			<div className="container">
		        <div className="row" align="center">
		            <div className="col-md-12">
		                <div className="fingerprint-section">
		                	<NavLink to="/home"> 
		                    	<img src="../images/fingerprint.png" className="img-fluid finger-print-img"/> 
	                    	</NavLink>                               
		                </div>
		            </div>
		        </div>
    		</div>
		)
	}

}
export default InitialComponent