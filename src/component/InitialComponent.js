import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class InitialComponent extends	Component{
	render(){
		return(
			<div className="container">
		        <div className="row" align="center">
		            <div className="col-md-12">
		                <div className="fingerprint-section">
		                	<Link to="/home"> 
		                    	<img src="../images/fingerprint.png" onClick={this.clickHandler} className="img-fluid finger-print-img"/> 
	                    	</Link>                               
		                </div>
		            </div>
		        </div>
    		</div>
		)
	}

}
export default InitialComponent