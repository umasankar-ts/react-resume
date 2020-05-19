import React, {Component} from 'react';
import SidebarComponent from '../component/SidebarComponent'
import HomeComponent from '../component/HomeComponent'
class BaseComponent extends Component {
    render() {
        return (
            <div className="container-fluid content-light-bg">
                <div className="row">
                    <div className="col-md-2 sidebar primary-dark-bg">
                        <SidebarComponent></SidebarComponent>
                    </div>
                    <div className="col-md-10 content-wrapper">
                        <HomeComponent></HomeComponent>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseComponent