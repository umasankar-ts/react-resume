import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';

class ExperienceComponent extends Component{
	render(){
		return(
			<div className="container-fluid content-light-bg">
                <div className="row">
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-5 sidebar primary-light-bg">
                        <SidebarComponent></SidebarComponent>
                    </div>
                    <div className="col-xl-10 col-lg-8 col-md-8 col-sm-7 content-wrapper">
                	 	<h6 className="fancy-title primary-light-font">Experience</h6>
                	 	<div className="row exp-sec-space">
                	 		<div className="col-xl-3 col-lg-5 col-md-5 margin-t-20">
                	 			<div className="exp-card white-bg">
                	 				<h6 className="text-center fancy-title primary-light-font">Trioangle Technologies</h6>
                	 				<p className="text-center secondary-dark-font">Senior Software Engineer / Android Mobile Application Developer ( Dec 2018 - Current )</p>
                	 				<div className="company-img">
                	 					<img src="/images/company1.png" className="img-fluid"/>
            	 					</div>
                	 				<p className="text-center margin-t-20">Near to Anna Nilayam Busttand, Madurai</p>
            	 				</div>
                	 		</div>
                	 		<div className="col-xl-9 col-lg-7 col-md-7 margin-t-20">
            	 				<h6 className="fancy-title primary-light-font">Role</h6>
                	 			<div className="exp-card white-bg">
                	 				<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
                	 					<p>Senior developer of mobile development team as well as worked as part of team to define problems, implement solutions and new technologies</p>
            	 					</div>
                	 			</div>
                	 			<h6 className="fancy-title primary-light-font margin-t-20">Tasks and Achievements</h6>
                	 			<div className="exp-card white-bg">    
                	 				<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>            	 				
                	 					<p>Ensure every clone app working properly according to client requirement</p>
            	 					</div>
            	 					<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
                	 					<p>Integrating realtime chat based on Firebase Realtime Database</p>
            	 					</div>
            	 					<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
                	 					<p>Wrote clean, clear, efficient, and maintainable code</p>
            	 					</div>
            	 					<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
                	 					<p>Created weekly reports outlining bugs fixes and usability improvements.</p>
            	 					</div>
            	 					<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
                	 					<p>Track CPU, Memory and Network performances consumed by App</p>
            	 					</div>
                	 			</div>
                	 		</div>
                	 	</div>
                	 	<div className="row exp-sec-space">
                	 		<div className="col-xl-9 col-lg-7 col-md-7 margin-t-20">
            	 				<h6 className="fancy-title primary-light-font">Role</h6>
                	 			<div className="exp-card white-bg">
                	 				<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
                	 					<p>Project lead of Mobile Development team as well as worked as part of team to define problems, implement solutions and new technologies</p>
            	 					</div>
                	 			</div>
                	 			<h6 className="fancy-title primary-light-font margin-t-20">Tasks and Achievements</h6>
                	 			<div className="exp-card white-bg">    
                	 				<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>            	 				
                	 					<p>Ensure applications are properly integrated with Android APIs</p>
            	 					</div>
            	 					<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
                	 					<p>Integrating Secured and Encrypted Storage & DB(SQLcipher)</p>
            	 					</div>
            	 					<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
                	 					<p>Wrote clean, clear, efficient, and maintainable code</p>
            	 					</div>
            	 					<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
                	 					<p>Communicated with Management and co-developers to understand existing problems and analyze possible solutions</p>
            	 					</div>
            	 					<div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
                	 					<p>Track CPU, Memory and Network performances consumed by App</p>
            	 					</div>
                	 			</div>
                	 		</div>
                	 		<div className="col-xl-3 col-lg-5 col-md-5 margin-t-20">
                	 			<div className="exp-card white-bg">
                	 				<h6 className="text-center fancy-title primary-light-font">Jovee Infotech</h6>
                	 				<p className="text-center secondary-dark-font">Software Engineer / Android Mobile Application Developer ( Jan 2016 - Dec 2018 )</p>
                	 				<div className="company-img2">
                	 					<img src="/images/company2.png" className="img-fluid"/>
            	 					</div>
                	 				<p className="text-center margin-t-20">KK nagar, Madurai</p>
            	 				</div>
                	 		</div>                	 		
                	 	</div>
            	 	</div>
        	 	</div>
    	 	</div>
		)
	}
}
export default ExperienceComponent