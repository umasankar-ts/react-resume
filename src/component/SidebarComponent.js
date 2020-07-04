import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class SidebarComponent extends Component {
    render() {
        return (
            <div className="sidebar-content">
                <div className="primary-dark-bg profile-pic-section" align="center">
                    <div className="profile-pic-border">
                        <img src="/images/profile-pic.png" className="img-fluid profile-image"/>
                    </div>
                    <h5 className="mt-2 user-name">T.S. Umasankar</h5>
                    <p className="white-font designation">Android Development Team Lead</p>
                </div>
                <ul className="sidebar-nav-menu">
                    <li><NavLink activeClassName='is-active' to="/home"><i className="lni-home sidebar-nav-menu-icon secondary-dark-font"></i>Home</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/experience"><i className="lni-layers sidebar-nav-menu-icon secondary-dark-font"></i>Experience</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/education"><i className="lni-book sidebar-nav-menu-icon secondary-dark-font"></i>Education</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/skills"><i className="lni-medall-alt sidebar-nav-menu-icon secondary-dark-font"></i>Technical Skills</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/qualification"><i className="lni-graduation sidebar-nav-menu-icon secondary-dark-font"></i>Core Qualification</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/uis"><i className="lni lni-brush sidebar-nav-menu-icon secondary-dark-font"></i>UIs</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default SidebarComponent
