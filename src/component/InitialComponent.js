import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class InitialComponent extends	Component{
	lock(){
		window.screen.orientation.lock('landscape').catch(function(error) {
    		console.log('dsfdsfjodsi')
		});
	}
	render(){
		return(
			<div className="initial-bg">
	            <div className="fingerprint-section text-center w-100">
	            	<NavLink to="/home" id="thumb-impression"> 
	                	<img src="../images/fingerprint.png" className="img-fluid finger-print-img" onClick={this.lock} alt="Fingerprint icon"/> 
	            	</NavLink>                               
	            </div>
            </div> 
		)
	}

}
export default InitialComponent

/*console.log('sdjfdsj');
		window.addEventListener("orientationchange", function(event) {
  			console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
		});*/