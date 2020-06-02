import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class UiComponent extends Component{
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
                        <h6 className="fancy-title primary-light-font">Project UIs</h6>
                    	<div className="row">
                            <div className="col-md-12">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

		)
	}
}

export default UiComponent