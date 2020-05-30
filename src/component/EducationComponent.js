import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';

class EducationComponent extends Component{
	render(){
		return(
			<div className="container-fluid content-light-bg">
                <div className="row">
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-5 sidebar primary-light-bg">
                        <SidebarComponent></SidebarComponent>
                    </div>
                    <div className="col-xl-10 col-lg-8 col-md-8 col-sm-7 content-wrapper">
                	 	<h6 className="fancy-title primary-light-font">Education</h6>
                        <div className="row exp-sec-space">
                            <div className="col-xl-8 col-md-12 edu-sec-space">
                                <div className="edu-card white-bg">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <h6><b>M.Sc</b> (Computer Science & Information Technology)</h6>
                                            <p className="secondary-dark-font">Sourashtra College, Madurai</p>
                                            <p>July 2014 - April 2016</p>
                                        </div>
                                        <div className="col-md-2 vertical-center">
                                        <h5>82%</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="edu-card white-bg">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <h6><b>B.Sc</b> (Computer Science)</h6>
                                            <p className="secondary-dark-font">Sourashtra College, Madurai</p>
                                            <p>July 2014 - April 2016</p>
                                        </div>
                                        <div className="col-md-2 vertical-center">
                                        <h5>72%</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12 vertical-center" align="center">
                                <img src="/images/graduate.png" className="img-fluid"/>
                            </div>
                        </div>
            	 	</div>
        	 	</div>
    	 	</div>
		)
	}

}
export default EducationComponent