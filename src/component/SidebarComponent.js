import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class SidebarComponent extends Component {
    render() {
        return (
            <div className="sidebar scrollbar">
                <div className="logo-section" align="center">                    
                    <h5 className="mt-2 user-name secondary-light-font">T.S. Umasankar</h5>
                    <p className="white-font designation mb-0">Android Development Team Lead</p>
                </div>
                <ul className="sidebar-nav-menu">
                    <li><NavLink activeClassName='is-active' to="/home"><i className="lni-home sidebar-nav-menu-icon secondary-light-font"></i>Home</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/about"><i className="lni-user sidebar-nav-menu-icon secondary-light-font"></i>About</NavLink></li> 
                    <li><NavLink activeClassName='is-active' to="/experience"><i className="lni-layers sidebar-nav-menu-icon secondary-light-font"></i>Experience</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/education"><i className="lni-graduation sidebar-nav-menu-icon secondary-light-font"></i>Education</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/qualification"><i className="lni-book sidebar-nav-menu-icon secondary-light-font"></i>Core Qualification</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/portfolio"><i className="lni-android sidebar-nav-menu-icon secondary-light-font"></i>Portfolio</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/hobbies"><i className="lni-paint-roller sidebar-nav-menu-icon secondary-light-font"></i>Hobbies</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default SidebarComponent
