import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';
class SkillsComponent extends Component{
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
                    	<h6 className="fancy-title primary-light-font">Technical Skills</h6>
                        {/*<div className="d-none d-xl-block">
                            <div className="row skills-sec-space animated fadeInUp" align="center">
                                <div className="col-xl-4">
                                    <div className="kotlin-card card-style white-bg skill-card-width">
                                        <img src="/images/kotlin.png" className="img-fluid" alt="Kotlin"/>
                                        <h5>Kotlin</h5>
                                        <p className="skill-percent">90%</p>
                                    </div>  
                                    <div className="java-card card-style white-bg skill-card-width">
                                        <img src="/images/java.png" className="img-fluid" alt="Java"/>
                                        <h5>Java</h5>
                                        <p className="skill-percent">95%</p>
                                    </div>                  
                                </div>
                                <div className="col-xl-4">
                                    <div className="android-card card-style white-bg skill-card-width">
                                        <img src="/images/android.png" className="img-fluid" alt="Android"/>
                                        <h5>Android NDK</h5>
                                        <p className="skill-percent">97%</p>
                                    </div>  
                                    <div className="db-card card-style white-bg skill-card-width">
                                        <img src="/images/database.png" className="img-fluid" alt="Couchbase DB"/>
                                        <h5>Couchbase DB</h5>
                                        <p className="skill-percent">90%</p>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="nativescript-card card-style white-bg skill-card-width">
                                        <img src="/images/nativescript.png" className="img-fluid" alt="Nativescript"/>
                                        <h5>NativeScript</h5>
                                        <p className="skill-percent">85%</p>
                                    </div>
                                    <div className="vuejs-card card-style white-bg skill-card-width">
                                        <img src="/images/vuejs.png" className="img-fluid" alt="Vuejs"/>
                                        <h5>VueJs</h5>
                                        <p className="skill-percent">70%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-xl-none">
                            <div className="row skills-sec-space animated fadeInUp" align="center">
                                <div className="skill-card-style white-bg">
                                    <div className="row">
                                        <div className="col-md-2 col-3" align="center" >
                                            <img src="/images/kotlin.png" className="img-fluid skill-icon-size" alt="Kotlin"/>
                                        </div>
                                        <div className="col-md-7 col-6 vertical-center text-left">
                                            <span>Kotlin</span>
                                        </div>
                                        <div className="col-md-3 col-3 vertical-center" align="right">
                                            <span>90%</span>
                                        </div>
                                    </div>                                                  
                                </div>
                                <div className="skill-card-style white-bg"> 
                                    <div className="row">
                                        <div className="col-md-2 col-3" align="center" >
                                            <img src="/images/java.png" className="img-fluid skill-icon-size" alt="Java"/>
                                        </div>
                                        <div className="col-md-7 col-6 vertical-center text-left">
                                            <span>Java</span>
                                        </div>
                                        <div className="col-md-3 col-3 vertical-center" align="right">
                                            <span>95%</span>
                                        </div>
                                    </div>  
                                </div>
                                <div className="skill-card-style white-bg"> 
                                    <div className="row">
                                        <div className="col-md-2 col-3" align="center" >
                                            <img src="/images/android.png" className="img-fluid skill-icon-size" alt="Android"/>
                                        </div>
                                        <div className="col-md-7 col-6 vertical-center text-left">
                                            <span>Android NDK</span>
                                        </div>
                                        <div className="col-md-3 col-3 vertical-center" align="right">
                                            <span>97%</span>
                                        </div>
                                    </div>  
                                </div>  
                                <div className="skill-card-style white-bg"> 
                                    <div className="row">
                                        <div className="col-md-2 col-3" align="center" >
                                            <img src="/images/database.png" className="img-fluid skill-icon-size" alt="Couchbase DB"/>
                                        </div>
                                        <div className="col-md-7 col-6 vertical-center text-left">
                                            <span>Couchbase DB</span>
                                        </div>
                                        <div className="col-md-3 col-3 vertical-center" align="right">
                                            <span>90%</span>
                                        </div>
                                    </div>  
                                </div>
                                <div className="skill-card-style white-bg"> 
                                    <div className="row">
                                        <div className="col-md-2 col-3" align="center" >
                                            <img src="/images/nativescript.png" className="img-fluid skill-icon-size" alt="Nativescript"/>
                                        </div>
                                        <div className="col-md-7 col-6 vertical-center text-left">
                                            <span>NativeScript</span>
                                        </div>
                                        <div className="col-md-3 col-3 vertical-center" align="right">
                                            <span>85%</span>
                                        </div>
                                    </div>  
                                </div>
                                <div className="skill-card-style white-bg"> 
                                    <div className="row">
                                        <div className="col-md-2 col-3" align="center" >
                                            <img src="/images/vuejs.png" className="img-fluid skill-icon-size" alt="Vuejs"/>
                                        </div>
                                        <div className="col-md-7 col-6 vertical-center text-left">
                                            <span>VueJS</span>
                                        </div>
                                        <div className="col-md-3 col-3 vertical-center" align="right">
                                            <span>70%</span>
                                        </div>
                                    </div>  
                                </div>              
                            </div>
                        </div>*/}
                        <div className="row skills-sec-space animated fadeInUp" align="center">
                            <div className="col-md-4 col-sm-6 col-12 mt-5">
                                <div className="skill-cards-style pink-grad-bg">
                                    <div className="text-left">
                                        <img src="/images/kotlin.png" className="img-fluid skill-icon " alt="Kotlin"/>
                                    </div>
                                    <div className="skill-icon-bg pink-icon-bg text-left" align="left"></div>
                                    <div className="skill-content">
                                        <h5 className="text-left white-font skills-name">Kotlin</h5>
                                        <p className="skill-percent text-left">90%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12 mt-5">
                                <div className="skill-cards-style blue-grad-bg">
                                    <div className="text-left">
                                        <img src="/images/java.png" className="img-fluid skill-icon" alt="Java"/>
                                    </div>
                                    <div className="skill-icon-bg blue-icon-bg text-left" align="left"></div>
                                    <div className="skill-content">
                                        <h5 className="text-left white-font skills-name">Java</h5>
                                        <p className="skill-percent text-left">95%</p>
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-4 col-sm-6 col-12 mt-5">
                                <div className="skill-cards-style yellow-grad-bg">
                                    <div className="text-left">
                                       <img src="/images/android.png" className="img-fluid skill-icon" alt="Android"/>
                                    </div>
                                    <div className="skill-icon-bg yellow-icon-bg text-left" align="left"></div>
                                    <div className="skill-content">
                                        <h5 className="text-left white-font skills-name">Android NDK</h5>
                                        <p className="skill-percent text-left">97%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12 mt-5">
                                <div className="skill-cards-style green-grad-bg">
                                    <div className="text-left">
                                       <img src="/images/database.png" className="img-fluid skill-icon" alt="Couchbase DB"/>
                                    </div>
                                    <div className="skill-icon-bg green-icon-bg text-left" align="left"></div>
                                    <div className="skill-content">
                                        <h5 className="text-left white-font skills-name">Couchbase DB</h5>
                                        <p className="skill-percent text-left">90%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12 mt-5">
                                <div className="skill-cards-style orange-grad-bg">
                                    <div className="text-left">
                                       <img src="/images/nativescript.png" className="img-fluid skill-icon" alt="Nativescript"/>
                                    </div>
                                    <div className="skill-icon-bg orange-icon-bg text-left" align="left"></div>
                                    <div className="skill-content">
                                        <h5 className="text-left white-font skills-name">NativeScript</h5>
                                        <p className="skill-percent text-left">85%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12 mt-5">
                                <div className="skill-cards-style violet-grad-bg">
                                    <div className="text-left">
                                       <img src="/images/vuejs.png" className="img-fluid skill-icon" alt="Vuejs"/>
                                    </div>
                                    <div className="skill-icon-bg violet-icon-bg text-left" align="left"></div>
                                    <div className="skill-content">
                                        <h5 className="text-left white-font skills-name">VueJs</h5>
                                        <p className="skill-percent text-left">70%</p>
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
export default SkillsComponent