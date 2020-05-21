import React, {Component} from 'react'

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
                    <li><a href="#"> <i className="lni-home sidebar-nav-menu-icon secondary-dark-font"></i>Home</a></li>
                    <li><a href="#"> <i className="lni-list sidebar-nav-menu-icon secondary-dark-font"></i>About</a></li>
                    <li><a href="#"> <i className="lni-layers sidebar-nav-menu-icon secondary-dark-font"></i>Experience</a></li>
                    <li><a href="#"> <i className="lni-graduation sidebar-nav-menu-icon secondary-dark-font"></i>Qualification</a></li>
                    <li><a href="#"> <i className="lni-book sidebar-nav-menu-icon secondary-dark-font"></i>Education</a></li>
                    <li><a href="#"> <i className="lni-medall-alt sidebar-nav-menu-icon secondary-dark-font"></i>Skills</a></li>
                    <li><a href="#"> <i className="lni-user sidebar-nav-menu-icon secondary-dark-font"></i>Personal Info</a></li>
                </ul>
            </div>
        )
    }
}

export default SidebarComponent
