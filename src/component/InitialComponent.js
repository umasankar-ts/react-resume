import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class InitialComponent extends	Component{
	lock(){
		 if ((window).width < 830) {
			document.documentElement.requestFullscreen();
			window.screen.orientation.lock('landscape').catch(function(error) {
    			//console.log('')
			});
		}
	}
	render(){
		return(
			<div className="initial-bg primary-dark-bg">
	            <div className="fingerprint-section text-center w-100">
	            	<NavLink to="/home"> 
	                	<img src="../images/fingerprint.png" className="img-fluid finger-print-img" onClick={this.lock} alt="Fingerprint icon"/> 
	            	</NavLink>                               
	            </div>
            </div> 
		)
	}

}
export default InitialComponent
