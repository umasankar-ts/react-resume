import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';
import {NavLink} from 'react-router-dom';
class HomenewComponent extends Component {
    render() {
        return (
        	<div>
        		<div className="sidebar primary-light-bg scrollbar">
	    	 		<SidebarComponent></SidebarComponent>    	 		
	    	 	</div>
	    	 	<div>
	    	 		<MessageComponent></MessageComponent>
	    	 	</div>
	    	 	<div className="content-wrapper">
	    	 		<div className="container">
	    	 			<div className="animate-gif">
	    	 				<img src="images/anim-img1.png" className="img-fluid home-gif1 move-up-down"/>
	    	 				<img src="images/anim-img1.png" className="img-fluid home-gif2 swing-anim"/>
	    	 				<img src="images/anim-img2.png" className="img-fluid home-gif3 running-anim"/>
	    	 				<img src="images/anim-img2.png" className="img-fluid home-gif4 flip-anim"/>
	    	 				<img src="images/anim-img4.png" className="img-fluid home-gif5 rotate-anim"/>
	    	 				<img src="images/anim-img3.png" className="img-fluid home-gif6 rotate-anim"/>
	    	 				<img src="images/anim-img2.png" className="img-fluid home-gif7 rotate-anim"/>
	    	 				<img src="images/anim-img1.png" className="img-fluid home-gif8 run-anim"/>
	    	 			</div>
    	 			 	<div className="row home-sec align-items-center">
    	 			 		<div className="shape-sec1">
    	 			 			<img src="images/home-circle1.svg" className="img-fluid" alt="Circle Shape"/>
    	 			 		</div>
    	 			 		<div className="col-xl-5 col-lg-5 col-md-12">    	 			 			
	 			 				<img src="images/app-installation.svg" className="img-fluid mobileview-none move-up-down" alt="Circle Shape"/>	 			 				
    	 			 		</div>
    	 			 		<div className="col-xl-7 col-lg-7 col-md-12">
    	 			 			<div className="name-sec">
	    	 			 			<h6 className="animated fadeInRight anim-delay-3s">This is me</h6>
	    	 			 			<h1 className="animated fadeInRight anim-delay-3s">UMASANKAR T S</h1>
	    	 			 			<h5 className="animated fadeInRight anim-delay-6s">Android Development Team Lead</h5>
	    	 			 			<p className="animated fadeInRight anim-delay-6s mb-0">Artistic Software Engineer with <b>4 year and 9 months</b> of experience including CryptoCurrency Trading, Location Based Blood Request, Social Club Management system and UBER clone apps. Skilled with Solid understanding of full mobile and software development life cycles, UI/UX and Agile Software Development Methodologies. Experienced in Google Map api integrations and Firebase Realtime Database chating.</p>
	    	 			 			<div className="animated fadeInRight anim-delay-9s mb-5">
	    	 			 				<a href="tel:8807527642" className="font-icon-card"><i className="lni-phone-handset"/></a>
	    	 			 				<a href="mailto:umasankar.tsj@gmail.com" className="font-icon-card">
	    	 			 					<i className="lni lni-envelope"/>
	    	 			 				</a>
    	 			 				</div>
	    	 			 			<div className="cv-btn-sec animated fadeInRight anim-delay-9s">
	    	 			 				<NavLink className="btn card-shadow home-btn-style" to="/files/myresume.pdf" target="_blank" download>Download CV</NavLink>
	    	 			 			</div>
    	 			 			</div>    	 			 			
    	 			 		</div>
    	 			 	</div>
	 			 	</div>
 			 	</div>
        	</div>
    	)
    }
}
export default HomenewComponent