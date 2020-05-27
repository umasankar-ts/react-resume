import React, {Component} from 'react';

class SkillsComponent extends Component{
	render(){
		return(
			<div className="margin-rt-none padding-right-none">
				{/*<div className="row" align="center">
					<div className="col-lg-4 col-md-12">
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
					<div className="col-lg-4 col-md-12">
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
					<div className="col-lg-4 col-md-12">
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
				</div>*/}
				<div className="row">
					<div className="col-md-9 skill-card-outer-space">
						<h6 className="fancy-title primary-light-font">Highlights</h6>
						<div className="skill-card-style white-bg">
							<div className="row">
								<div className="col-md-2 col-3" align="center" >
									<img src="/images/kotlin.png" className="img-fluid skill-icon-size"/>
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
									<img src="/images/java.png" className="img-fluid skill-icon-size"/>
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
									<img src="/images/android.png" className="img-fluid skill-icon-size"/>
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
									<img src="/images/database.png" className="img-fluid skill-icon-size"/>
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
									<img src="/images/nativescript.png" className="img-fluid skill-icon-size"/>
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
									<img src="/images/vuejs.png" className="img-fluid skill-icon-size"/>
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
					<div className="col-md-3 padding-right-none d-none d-sm-block">
						<div className="skill-img-sec">
							<img src="/images/skills-image.png" className="img-fluid skills-vector-image"/>
						</div>
					</div>
				</div>
			</div>

		)
	}
}
export default SkillsComponent