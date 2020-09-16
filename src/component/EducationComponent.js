import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class EducationComponent extends Component{
	render(){
		return(
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
                                <h1 className="col-md-12 heading primary-light-font fancy-heading">Education</h1>
                                <div className="col-xl-8 col-md-12 edu-sec-space">
                                    <div className="edu-card card-bg animated fadeInLeft card-shadow">
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
                                    <div className="edu-card card-bg animated fadeInRight card-shadow">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h6><b>B.Sc</b> (Computer Science)</h6>
                                                <p className="secondary-dark-font">Sourashtra College, Madurai</p>
                                                <p>July 2009 - April 2012</p>
                                            </div>
                                            <div className="col-md-2 vertical-center">
                                            <h5>72%</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-12 vertical-center " align="center">
                                    <img src="/images/graduate.png" className="img-fluid edu-image" alt="Graduation image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
		
		)
	}

}
export default EducationComponent