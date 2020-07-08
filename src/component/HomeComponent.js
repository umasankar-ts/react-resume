import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';
class HomeComponent extends Component {
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
	    	 		<div className="container-fluid">
    	 			 	<div className="row">
    	 			 		<div className="col-md-12 animated fadeInDown">
					            <div className="card-style card-bg card-shadow">
					            	<h6 className="fancy-title primary-light-font">Objective</h6>
					                <div className="display-inline">
					               		<i className="lni-android objective-icon secondary-dark-font"></i>
					               		<p>Artistic Software Engineer with <b>3 year and 9 months</b> of experience including CryptoCurrency Trading, Location Based Blood Request, Social Club Management system and UBER clone apps.</p>
					                </div>
					                <div className="display-inline">
					                	<i className="lni-android objective-icon secondary-dark-font"></i>
					                	<p>Skilled with Solid understanding of full mobile and software development life cycles, UI/UX and Agile Software Development Methodologies.</p>
					            	</div>
					        	 	<div className="display-inline">
					                	<i className="lni-android objective-icon secondary-dark-font"></i>
					                	<p>Experienced in Google Map api integrations and Firebase Realtime Database chating,</p>
					            	</div>
					            </div>
				            </div>
	    	 			</div>
	    	 			<div className="row">
			            	<div className="col-xl-8 col-lg-12 col-md-12 home-section-space animated fadeInLeft">
			            		<h6 className="fancy-title primary-light-font">Highlights</h6>
			            		<div className="highlight-card card-shadow card-bg">
				            		<div className="highlight-view highlight-card-top-border">
				            			<div className="highlight-content highlight-bottomview highlight-view-left highlight-view-right">
				            				<div className="row">
				            					<div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
													<div className="highlight-icon green-gradient">
			                                			<i className="lni-cog"></i>
			                            			</div>
				            					</div>
				            					<div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
				            						<p className="highlight-text-center">Known for writing efficient, maintainable and reusable code</p>
				            					</div>
				            				</div>
				            			</div>
				        			</div>
				            		<div className="dashed-border"></div>
				            		<div className="highlight-view highlight-topview highlight-view-left highlight-view-right">
				            			<div className="highlight-content highlight-bottomview highlight-view-left highlight-view-right">
				            				<div className="row">
				            					<div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
					            					<div className="highlight-icon orange-gradient">
				                                		<i className="lni-layout"></i>
				                            		</div>
				            					</div>
				            					<div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
				            						<p className="highlight-text-center">Proficient in design, data structures, problem-solving, and debugging</p>
				            					</div>
				            				</div>
				            			</div>
				        			</div>
				        			<div className="dashed-border"></div>
				        			<div className="highlight-view highlight-topview highlight-view-left highlight-view-right">
				            			<div className="highlight-content highlight-bottomview highlight-view-left highlight-view-right">
				            				<div className="row">
				            					<div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
					            					<div className="highlight-icon pale-green-gradient">
						                                <i className="lni-grid"></i>
						                            </div>
				            					</div>
				            					<div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
				            						<p className="highlight-text-center">Expert in the interaction between various devices and versions of Android</p>
				            					</div>
				            				</div>			            			
				            			</div>
				        			</div>
				        			<div className="dashed-border"></div>
				        			<div className="highlight-view highlight-topview highlight-view-left highlight-view-right">
				            			<div className="highlight-content highlight-bottomview highlight-view-left highlight-view-right">
				            				<div className="row">
				            					<div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
			            							<div className="highlight-icon pink-gradient">
			                                			<i className="lni-mobile"></i>
			                            			</div>
				            					</div>
				            					<div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
				            						<p className="highlight-text-center">Ability to design for scale and Performance</p>
				            					</div>
			    							</div>
				            			</div>
				        			</div>
				        			<div className="dashed-border"></div>
				        			<div className="highlight-view highlight-topview highlight-view-left highlight-view-right highlight-card-bottom-border">
				            			<div className="highlight-content">
				            				<div className="row">
				            					<div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
			            							<div className="highlight-icon blue-gradient">
			                                			<i className="lni-android"></i>
			                        				</div>
				            					</div>
				            					<div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
				            						<p className="highlight-text-center">Created 3+ fully functional applications for Android devices</p>
				            					</div>
			    							</div>
				            			</div>
				        			</div>
			        			</div>
			            	</div>
			            	<div className="col-xl-4 col-lg-8 col-md-12 home-section-space animated fadeInRight ">
			            		<div className="card-style primary-light-bg card-shadow">
					            	<h6 className="fancy-title white-font mb-0">Personal Info</h6>
					            	<hr className="secondary-dark-bg personal-info-hr"/>
					            	<div className="personal-info-sec">
						            	<div className="row">
						            		<div className="col-md-6 col-sm-6">
						            			<span className="dark-bg-font">Name</span>
						            		</div>
						            		<div className="col-md-6 col-sm-6">
						            			<p className="white-font">T.S. Umasankar</p>
					            			</div>
						            	</div>
						            	<div className="row">
						            		<div className="col-md-6 col-sm-6">
						            			<span className="dark-bg-font">Father Name</span>
						            		</div>
						            		<div className="col-md-6 col-sm-6">
						            			<p className="white-font">T.R. Surendran</p>
					            			</div>
						            	</div>
						            	<div className="row">
						            		<div className="col-md-6 col-sm-6">
						            			<span className="dark-bg-font">Date of Birth</span>
						            		</div>
						            		<div className="col-md-6 col-sm-6">
						            			<p className="white-font">04/June/1992</p>
					            			</div>
						            	</div>
						            	<div className="row">
						            		<div className="col-md-6 col-sm-6">
						            			<span className="dark-bg-font">Marital Status</span>
						            		</div>
						            		<div className="col-md-6 col-sm-6">
						            			<p className="white-font">Married</p>
					            			</div>
						            	</div>
						            	<div className="row">
						            		<div className="col-md-6 col-sm-6">
						            			<span className="dark-bg-font">Gender</span>
						            		</div>
						            		<div className="col-md-6 col-sm-6">
						            			<p className="white-font">Male</p>
					            			</div>
						            	</div>
						            	<div className="row">
						            		<div className="col-md-6 col-sm-6">
						            			<span className="dark-bg-font">Mobile Number</span>
						            		</div>
						            		<div className="col-md-6 col-sm-6">
						            			<p><a className="white-font link-style" href="tel:8807527642">8807527642</a></p>
					            			</div>
						            	</div>
						            	<div className="row">
						            		<div className="col-md-6 col-sm-6">
						            			<span className="dark-bg-font">Email</span>
						            		</div>
						            		<div className="col-md-6 col-sm-6">
						            			<p><a className="white-font link-style text-word-br" href="mailto:umasankar.tsj@gmail.com">umasankar.tsj@gmail.com</a></p>
					            			</div>
						            	</div>
						            	<div className="row">
						            		<div className="col-md-6 col-sm-6">
						            			<span className="dark-bg-font">Address</span>
						            		</div>
						            		<div className="col-md-6 col-sm-6">
						            			<p className="white-font">99, Valluvar Colony, P&T Nagar road, Madurai - 625014</p>
					            			</div>
						            	</div>
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

export default HomeComponent
