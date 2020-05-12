import React from 'react';

function Banner() {
    return (
        //Banner start
        <div id="hero-area" className="hero-area-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
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
                                <span><img src="/images/android.png" className="banner-img-pos banner-img1" alt="Android icon"/> </span>
                                <span><img src="/images/chat.png" className="banner-img-pos banner-img2" alt="Chat icon"/> </span>
                                <span><img src="/images/mobile.png" className="banner-img-pos banner-img3" alt="Mobile icon"/> </span>
                                <span><img src="/images/share.png" className="banner-img-pos banner-img4" alt="Share icon"/> </span>
                                <span><img src="/images/settings.png" className="banner-img-pos banner-img5" alt="Settings icon"/> </span>
                                <span><img src="/images/security.png" className="banner-img-pos banner-img6" alt="Security icon"/> </span>
                                <span><img src="/images/user.png" className="banner-img-pos banner-img7" alt="User icon"/> </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12" align="center">
                        <div className="intro-img wow fadeInDown" data-wow-delay="0.3s">
                            <img className="img-fluid" src="/images/banner.png" alt="Banner image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner