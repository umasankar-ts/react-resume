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
            	 	</div>
        	 	</div>
    	 	</div>
		)
	}
}
export default ExperienceComponent