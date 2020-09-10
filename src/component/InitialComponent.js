import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class InitialComponent extends	Component{
	render(){
		return(
            <div className="fingerprint-section text-center w-100">
            	<NavLink to="/homenew"> 
                	<img src="../images/fingerprint.png" className="img-fluid finger-print-img" alt="Fingerprint icon"/> 
            	</NavLink>                               
            </div>
		)
	}

}
export default InitialComponent