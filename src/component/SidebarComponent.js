import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SidebarComponent extends Component {
    render() {
        return (
            <div className="sidebar-content">
                <div className="primary-dark-bg profile-pic-section" align="center">
                    <div className="profile-pic-border">
                    <img src="/images/profile-pic.png" className="img-fluid profile-image"/>
                    </div>
                    <h5 className="white-font margin-t-20">T.S. UMASANKAR</h5>
                    <p className="white-font">umasankar.tsj@gmail.com</p>
                </div>
                <ul className="sidebar-nav-menu">
                    <li><Link to="/home"><i className="lni-home sidebar-nav-menu-icon secondary-dark-font"></i>Home</Link></li>
                    <li><Link to="/experience"><i className="lni-layers sidebar-nav-menu-icon secondary-dark-font"></i>Experience</Link></li>
                    <li><Link to="/education"><i className="lni-book sidebar-nav-menu-icon secondary-dark-font"></i>Education</Link></li>
                    <li><Link to="/skills"><i className="lni-medall-alt sidebar-nav-menu-icon secondary-dark-font"></i>Technical Skills</Link></li>
                    <li><Link to="/qualification"><i className="lni-graduation sidebar-nav-menu-icon secondary-dark-font"></i>Core Qualification</Link></li>
                </ul>
            </div>
        )
    }
}

export default SidebarComponent
