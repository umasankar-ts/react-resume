import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class EducationComponent extends Component{
	render(){
		return(
                <div>
                    <SidebarComponent></SidebarComponent>               
                    <div>
                        <MessageComponent></MessageComponent>
                    </div>
                    <div className="content-wrapper">
                        <div className="container-fluid">                            
                            <div className="row align-items-center">
                                <h1 className="col-md-12 heading primary-dark-font fancy-heading">Education</h1>
                                <div className="col-xl-7 col-lg-8 col-md-12 edu-sec-space">
                                    <div className="edu-card card-bg animated fadeInLeft card-shadow">
                                        <div className="row align-items-center edu-content">
                                            <div className="col-md-12">
                                                <h6><b>M.Sc</b> (Computer Science & Information Technology)</h6>
                                                <p className="secondary-dark-font">Sourashtra College, Madurai</p>
                                                <p className="dark-bg-font">April 2016</p>
                                                <h6>82%</h6>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div className="edu-card card-bg animated fadeInRight card-shadow">
                                        <div className="row align-items-center edu-content">
                                            <div className="col-md-12">
                                                <h6><b>B.Sc</b> (Computer Science)</h6>
                                                <p className="secondary-dark-font">Sourashtra College, Madurai</p>
                                                <p className="dark-bg-font">April 2012</p>
                                                <h6>72%</h6>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div className="edu-card card-bg animated fadeInLeft card-shadow">
                                        <div className="row align-items-center edu-content">
                                            <div className="col-md-12">
                                                <h6><b>HSC</b></h6>
                                                <p className="secondary-dark-font">Sethupathi Higher Secondary School, Madurai</p>
                                                <p className="dark-bg-font">March 2009</p>
                                                <h6>66.07%</h6>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div className="edu-card card-bg animated fadeInRight card-shadow">
                                        <div className="row align-items-center edu-content">
                                            <div className="col-md-12">
                                                <h6><b>SSLC</b></h6>
                                                <p className="secondary-dark-font">Sethupathi Higher Secondary School, Madurai</p>
                                                <p className="dark-bg-font">March 2008</p>
                                                <h6>65.5%</h6>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 col-md-12" align="center">
                                    <img src="/images/graduation.svg" className="img-fluid edu-image animated fadeInUp" alt="Graduation"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
		
		)
	}

}
export default EducationComponent