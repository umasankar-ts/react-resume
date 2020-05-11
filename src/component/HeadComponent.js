import React from 'react';
import '../App.css';
import Banner from '../component/BannerComponent'
function Header(){
    return (
        <header id="header-wrap">
             {/*Navbar Start */}
            <nav className="navbar navbar-expand-md bg-inverse top-nav-collapse">
                <div className="container">
                    {/*Brand and toggle get grouped for better mobile display*/}
                    <a href="index.html" className="navbar-brand"><img src="assets/img/logo.png" alt=""/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="lni-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                            <li className="nav-item active">
                                <a className="nav-link" href="#hero-area">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#qualification">
                                    Qualifications
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           {/* Navbar End */}

           {/*Banner Component*/}
           <Banner/>
        </header>
        )
}

export default Header