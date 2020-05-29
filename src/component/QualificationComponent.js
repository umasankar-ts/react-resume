import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';

class QualificationComponent extends Component{
	render(){
		return(
			<div className="container-fluid content-light-bg">
                <div className="row">
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-5 sidebar primary-light-bg">
                        <SidebarComponent></SidebarComponent>
                    </div>
                    <div className="col-xl-10 col-lg-8 col-md-8 col-sm-7 content-wrapper">
                	 	<h6 className="fancy-title primary-light-font">Core Qualification</h6>
                	 	<div className="row qualify-sec-space">
                	 		<div className="col-xl-4 col-md-12 col-sm-12">
                	 			<div className="qualify-card white-bg">	
                	 				<div className="row">
										<div className="col-md-2 col-3" align="center" >
											<i class="lni-android secondary-dark-font"></i>
										</div>
										<div className="col-md-10 col-9 vertical-center">
											<span>Native Android Development</span>
										</div>										
									</div>	
                	 			</div>
                	 			<div className="qualify-card white-bg">	
                	 				<div className="row">
										<div className="col-md-2 col-3" align="center" >
											<i class="lni-laptop-phone secondary-dark-font"></i>
										</div>
										<div className="col-md-10 col-9 vertical-center">
											<span>User Experience Design</span>
										</div>										
									</div>	
                	 			</div>
                	 			<div className="qualify-card white-bg">	
                	 				<div className="row">
										<div className="col-md-2 col-3" align="center" >
											<i class="lni-list secondary-dark-font"></i>
										</div>
										<div className="col-md-10 col-9 vertical-center">
											<span>Agile Software Development Methodologies</span>
										</div>										
									</div>	
                	 			</div>
                	 			<div className="qualify-card white-bg">	
                	 				<div className="row">
										<div className="col-md-2 col-3" align="center" >
											<i class="lni-rocket secondary-dark-font"></i>
										</div>
										<div className="col-md-10 col-9 vertical-center">
											<span>Hybrid Android Development (Native Script)</span>
										</div>										
									</div>	
                	 			</div>
                	 			<div className="qualify-card white-bg">	
                	 				<div className="row">
										<div className="col-md-2 col-3" align="center" >
											<i class="lni-select secondary-dark-font"></i>
										</div>
										<div className="col-md-10 col-9 vertical-center">
											<span>Android vector based animation</span>
										</div>										
									</div>	
                	 			</div>
                	 		</div>
                	 		<div className="col-xl-4 col-md-12 col-sm-12" align="center">
                	 			<div className="qualify-image">
                	 				<img src="/images/qualification-mockup.png" className="img-fluid "/>
                	 			</div>
                	 		</div>
                	 		<div className="col-xl-4 col-md-12 col-sm-12">
                	 			<div className="qualify-card white-bg">	
                	 				<div className="row">
										<div className="col-md-2 col-3" align="center" >
											<i class="lni-indent-increase secondary-dark-font"></i>
										</div>
										<div className="col-md-10 col-9 vertical-center">
											<span>Websocket Implementation</span>
										</div>										
									</div>	
                	 			</div>
                	 			<div className="qualify-card white-bg">	
                	 				<div className="row">
										<div className="col-md-2 col-3" align="center" >
											<i class="lni-control-panel secondary-dark-font"></i>
										</div>
										<div className="col-md-10 col-9 vertical-center">
											<span>HTTP Error codes based API processing</span>
										</div>										
									</div>	
                	 			</div>
                	 			<div className="qualify-card white-bg">	
                	 				<div className="row">
										<div className="col-md-2 col-3" align="center" >
											<i class="lni-leaf secondary-dark-font"></i>
										</div>
										<div className="col-md-10 col-9 vertical-center">
											<span>Handle app related API in Single place</span>
										</div>										
									</div>	
                	 			</div>
                	 			<div className="qualify-card white-bg">	
                	 				<div className="row">
										<div className="col-md-2 col-3" align="center" >
											<i class="lni-layers secondary-dark-font"></i>
										</div>
										<div className="col-md-10 col-9 vertical-center">
											<span>Experienced with MVVM and MVP Architectures</span>
										</div>										
									</div>	
                	 			</div>
                	 			<div className="qualify-card white-bg">	
                	 				<div className="row">
										<div className="col-md-2 col-3" align="center" >
											<i class="lni-key secondary-dark-font"></i>
										</div>
										<div className="col-md-10 col-9 vertical-center">
											<span>Experienced in Google API keys integrations</span>
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

export default QualificationComponent