import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';
class AboutComponent extends Component {
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
		            		<h1 className="col-md-12 col-12 heading primary-light-font fancy-heading">About Me</h1> 
		            		<div className="col-md-12 col-12 home-section-space">
		            			<div className="card-bg animated fadeInDown card-shadow">
		            				<div className="about-card"> 
	                                    <div className="row align-items-center">
	                                    	<div className="col-xl-2 col-lg-4 col-md-5 col-12" align="center">
                                    			<div className="about-profile-pic card-shadow">
                                    				<img src="images/profile.png" className="img-fluid"/>
                                    			</div>
	                                    	</div>
	                                    	<div className="col-xl-10 col-lg-8 col-md-7 col-12 profile-details">
	                                			<div className="about-card-content ">
                                    				<h5 className="primary-dark-font about-name">UMASANKAR T S</h5>
                                    				<p className="about-designation">Android Development Team Lead</p>
                                    				<p><i className="lni lni-envelope align-middle primary-light-font"/> <a href="mailto:umasankar.tsj@gmail.com" className="secondary-dark-font">umasankar.tsj@gmail.com</a></p>
                                    				<p><i className="lni-phone-handset align-middle primary-light-font"/> <a href="tel:8807527642" className="secondary-dark-font"> 8807527642</a></p>
                                    			</div>
	                                    	</div>	                                    	
	                                    </div>
	                                </div>
	                            </div>
                            </div>
		            	</div>
		            	<div className="row">	    	 				
		            		<div className="col-xl-8 col-lg-7 col-md-12 home-section-space">
                                <h6 className="fancy-title primary-light-font mb-0">Personal Info</h6>
                                <div className="row">
                                	<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mt-5">
                                		<div className="card-bg card-shadow personal-detail-card animated fadeInLeft anim-delay-3s">
						            		<p className="personal-info-content text-center mb-0">T.R. Surendran</p>
        									<p className="primary-dark-bg mb-0 personal-detail-title text-center white-font">Father Name</p>
        								</div>
                                	</div>
                                	<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mt-5">
                                		<div className="card-bg card-shadow personal-detail-card animated fadeInLeft anim-delay-3s">
						            		<p className="personal-info-content text-center mb-0">June 04, 1992</p>
        									<p className="primary-dark-bg mb-0 personal-detail-title text-center white-font">DOB</p>
        								</div>
                                	</div>
                                	<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mt-5">
                                		<div className="card-bg card-shadow personal-detail-card animated fadeInLeft anim-delay-3s">
						            		<p className="personal-info-content text-center mb-0">Male</p>
        									<p className="primary-dark-bg mb-0 personal-detail-title text-center white-font">Gender</p>
        								</div>
                                	</div>
                                	<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5">
                                		<div className="card-bg card-shadow personal-detail-card animated fadeInLeft anim-delay-3s">
						            		<p className="personal-info-content text-center mb-0">Married</p>
        									<p className="primary-dark-bg mb-0 personal-detail-title text-center white-font">Marital Status</p>
        								</div>
                                	</div>
                                	<div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 mt-5">
                                		<div className="card-bg card-shadow personal-detail-card animated fadeInLeft anim-delay-3s">
						            		<p className="personal-info-content text-center mb-0">99, Valluvar Colony, <br/>P&T Nagar road, Madurai - 625014</p>
        									<p className="primary-dark-bg mb-0 personal-detail-title text-center white-font">Address</p>
        								</div>
                                	</div>
                                </div>		            			
		            		</div>
		            		<div className="col-xl-4 col-lg-5 col-md-12 home-section-space">
		            			<div className="animated fadeInRight anim-delay-3s">
				            		<h6 className="fancy-title primary-light-font">Technical Skills</h6>
				            		<div className="card-bg card-shadow mb-3">
				            			<div className="tech-skill-card-content">
				            				<div className="row align-items-center">
				            					<div className="col-md-3 col-3">
				            						<img src="images/kotlin.png" className="img-fluid"/>
				            					</div>
				            					<div className="col-md-5 col-5 px-0">
				            						<p className="mb-0 tech-skill-name">Kotlin</p>
				            					</div>
				            					<div className="col-md-4 col-4" align="center">
				            						<h6 className="mb-0 tech-percent">90%</h6>
				            					</div>
				            				</div>			            				
				            			</div>			            			
				            		</div>
			            		</div>
			            		<div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-6s">
			            			<div className="tech-skill-card-content">
			            				<div className="row align-items-center">
			            					<div className="col-md-3 col-3">
			            						<img src="images/java.png" className="img-fluid"/>
			            					</div>
			            					<div className="col-md-5 col-5 px-0">
			            						<p className="mb-0 tech-skill-name">Java</p>
			            					</div>
			            					<div className="col-md-4 col-4" align="center">
			            						<h6 className="mb-0 tech-percent">95%</h6>
			            					</div>
			            				</div>
		            				</div>
	            				</div>
	            				<div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-9s">
			            			<div className="tech-skill-card-content">
			            				<div className="row align-items-center">
			            					<div className="col-md-3 col-3">
			            						<img src="images/android.png" className="img-fluid"/>
			            					</div>
			            					<div className="col-md-5 col-5 px-0">
			            						<p className="mb-0 tech-skill-name">Android NDK</p>
			            					</div>
			            					<div className="col-md-4 col-4" align="center">
			            						<h6 className="mb-0 tech-percent">97%</h6>
			            					</div>
			            				</div>
		            				</div>
	            				</div>
	            				<div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-12s">
			            			<div className="tech-skill-card-content">
			            				<div className="row align-items-center">
			            					<div className="col-md-3 col-3">
			            						<img src="images/xml.png" className="img-fluid"/>
			            					</div>
			            					<div className="col-md-5 col-5 px-0">
			            						<p className="mb-0 tech-skill-name">XML</p>
			            					</div>
			            					<div className="col-md-4 col-4" align="center">
			            						<h6 className="mb-0 tech-percent">95%</h6>
			            					</div>
			            				</div>
		            				</div>
	            				</div>
	            				<div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-15s">
			            			<div className="tech-skill-card-content">
			            				<div className="row align-items-center">
			            					<div className="col-md-3 col-3">
			            						<img src="images/database.png" className="img-fluid"/>
			            					</div>
			            					<div className="col-md-5 col-5 px-0">
			            						<p className="mb-0 tech-skill-name">Couchbase DB</p>
			            					</div>
			            					<div className="col-md-4 col-4" align="center">
			            						<h6 className="mb-0 tech-percent">90%</h6>
			            					</div>
			            				</div>
		            				</div>
	            				</div>
	            				<div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-18s">
			            			<div className="tech-skill-card-content">
			            				<div className="row align-items-center">
			            					<div className="col-md-3 col-3">
			            						<img src="images/nativescript.png" className="img-fluid"/>
			            					</div>
			            					<div className="col-md-5 col-5 px-0">
			            						<p className="mb-0 tech-skill-name">NativeScript</p>
			            					</div>
			            					<div className="col-md-4 col-4" align="center">
			            						<h6 className="mb-0 tech-percent">85%</h6>
			            					</div>
			            				</div>
		            				</div>
	            				</div>
	            				<div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-21s">
			            			<div className="tech-skill-card-content">
			            				<div className="row align-items-center">
			            					<div className="col-md-3 col-3">
			            						<img src="images/vuejs.png" className="img-fluid"/>
			            					</div>
			            					<div className="col-md-5 col-5 px-0">
			            						<p className="mb-0 tech-skill-name">VueJS</p>
			            					</div>
			            					<div className="col-md-4 col-4" align="center">
			            						<h6 className="mb-0 tech-percent">70%</h6>
			            					</div>
			            				</div>
		            				</div>
	            				</div>
	            			</div>			            	
		            	</div>
		            	<div className="row home-section-space">
		            		<div className="col-xl-4 col-lg-12 col-md-12 mt-3 animated fadeInLeft anim-delay-6s">
                        		<div className="card-style primary-light-bg card-shadow">
					            	<h6 className="fancy-title white-font mb-0 text-center">Motivations</h6>
			            			<div className="personal-info-sec">
			            				<div className="row">
				            				<div className="col-md-12 display-inline">
				               					<i className="lni-android objective-icon secondary-dark-font"></i>
				               					<p className="white-font">Being Friendly</p>
				                			</div>
			                			</div>
			                			<div className="row">
				            				<div className="col-md-12 display-inline">
				               					<i className="lni-android objective-icon secondary-dark-font"></i>
				               					<p className="white-font">Learning new stuff & evolving</p>
				                			</div>
			                			</div>
			            				<div className="row">
				            				<div className="col-md-12 display-inline">
				               					<i className="lni-android objective-icon secondary-dark-font"></i>
				               					<p className="white-font">Meeting new People</p>
				                			</div>
			                			</div>
			                			<div className="row">
				            				<div className="col-md-12 display-inline">
				               					<i className="lni-android objective-icon secondary-dark-font"></i>
				               					<p className="white-font">Making Brave Decisions</p>
				                			</div>
			                			</div>
			                			<div className="row">
				            				<div className="col-md-12 display-inline">
				               					<i className="lni-android objective-icon secondary-dark-font"></i>
				               					<p className="white-font">Making a work of Art</p>
				                			</div>
			                			</div>
			            			</div>
			            			<img src="/images/motivation.svg" className="img-fluid motivation-img move-up-down" alt="Breaking Barrier"/>
		            			</div>
                        	</div>
                        	<div className="col-xl-8 col-lg-12 col-md-12 animated fadeInRight mt-3 anim-delay-9s">
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
	            		</div>
	    	 		</div>
		 		</div>
	 		</div>    	 	
        )
    }
}

export default AboutComponent
