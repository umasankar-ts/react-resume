import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class HobbiesComponent extends Component{
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
                            <h1 className="col-md-12 heading primary-light-font fancy-heading">My Hobbies</h1>
                            <div className="col-md-12 home-section-space">
                            	<h4>My Hobbies Section</h4>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
		)
	}
}

export default HobbiesComponent