import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent'
import HomeComponent from './HomeComponent'
import SkillsComponent from './SkillsComponent'

class BaseComponent extends Component {
    render() {
        return (
            <div className="container-fluid content-light-bg">
                <div className="row">
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-5 sidebar primary-light-bg">
                        <SidebarComponent></SidebarComponent>
                    </div>
                    <div className="col-xl-10 col-lg-8 col-md-8 col-sm-7 content-wrapper">
                          {/*<HomeComponent></HomeComponent>
                          <SkillsComponent></SkillsComponent> */}                   
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseComponent
