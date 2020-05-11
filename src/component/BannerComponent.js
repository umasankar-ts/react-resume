import React from 'react';
import '../App.css';

function Banner() {
    return (
        //Banner start
        <div id="hero-area" className="hero-area-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div className="contents hero-content-area wow fadeInLeft" data-wow-delay="0.3s">
                            <h6>This is me</h6>
                            <h1 className="head-title">UMASANKAR T S</h1>
                            <h5>Senior Android Developer</h5>
                            <p>Artistic Software Engineer skilled with Solid understanding of full mobile and software
                                development life cycles, UI/UX and Agile Software Development Methodologies including
                                CryptoCurrency Trading, Location Based Blood Request, Social Club Management system and UBER
                                clone apps. </p>
                            <div className="header-button">
                                <a href="#" className="btn btn-common">See My Work</a>
                            </div>
                            <div className="d-none d-lg-block">
                                <span><img src="assets/img/android.png" className="banner-img-pos banner-img1"/> </span>
                                <span><img src="assets/img/chat.png" className="banner-img-pos banner-img2"/> </span>
                                <span><img src="assets/img/mobile.png" className="banner-img-pos banner-img3"/> </span>
                                <span><img src="assets/img/share.png" className="banner-img-pos banner-img4"/> </span>
                                <span><img src="assets/img/settings.png" className="banner-img-pos banner-img5"/> </span>
                                <span><img src="assets/img/security.png" className="banner-img-pos banner-img6"/> </span>
                                <span><img src="assets/img/user.png" className="banner-img-pos banner-img7"/> </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12" align="center">
                        <div className="intro-img wow fadeInDown" data-wow-delay="0.3s">
                            <img className="img-fluid" src="assets/img/banner.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner