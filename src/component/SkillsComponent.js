import React, {Component} from 'react';
import SidebarComponent from '../component/SidebarComponent';
class SkillsComponent extends Component{
	render(){
		return(
			<div className="container-fluid content-light-bg">
                <div className="row">
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-5 sidebar primary-light-bg">
                        <SidebarComponent></SidebarComponent>
                    </div>
                    <div className="col-xl-10 col-lg-8 col-md-8 col-sm-7 content-wrapper">
                    	<div className="d-none d-xl-block">
							<div className="row skills-sec-space" align="center">
								<div className="col-xl-4">
									<div className="kotlin-card card-style white-bg skill-card-width">
										<img src="/images/kotlin.png" className="img-fluid"/>
										<h5>Kotlin</h5>
										<p className="skill-percent">90%</p>
									</div>	
									<div className="java-card card-style white-bg skill-card-width">
										<img src="/images/java.png" className="img-fluid"/>
										<h5>Java</h5>
										<p className="skill-percent">95%</p>
									</div>					
								</div>
								<div className="col-xl-4">
									<div className="android-card card-style white-bg skill-card-width">
										<img src="/images/android.png" className="img-fluid"/>
										<h5>Android NDK</h5>
										<p className="skill-percent">97%</p>
									</div>	
									<div className="db-card card-style white-bg skill-card-width">
										<img src="/images/database.png" className="img-fluid"/>
										<h5>Couchbase DB</h5>
										<p className="skill-percent">90%</p>
									</div>
								</div>
								<div className="col-xl-4">
									<div className="nativescript-card card-style white-bg skill-card-width">
										<img src="/images/nativescript.png" className="img-fluid"/>
										<h5>NativeScript</h5>
										<p className="skill-percent">85%</p>
									</div>
									<div className="vuejs-card card-style white-bg skill-card-width">
										<img src="/images/vuejs.png" className="img-fluid"/>
										<h5>VueJs</h5>
										<p className="skill-percent">70%</p>
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