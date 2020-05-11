import React from 'react';
import '../App.css';

function About() {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12 info">
                        <div className="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                            <div className="site-heading">
                                <h2 className="section-title">About Myself</h2>
                            </div>
                            <div className="row about-icon-section">
                                <div className="col-lg-2 col-sm-2 col-2 padding-right-none" align="center">
                                    <div className="about-me-icon green-gradient">
                                        <i className="lni-cog"></i>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-sm-10 col-10">
                                    <p> Known for writing efficient, maintainable and reusable code.</p>
                                </div>
                            </div>
                            <div className="row about-icon-section">
                                <div className="col-lg-2 col-sm-2 col-2 padding-right-none" align="center">
                                    <div className="about-me-icon purple-gradient">
                                        <i className="lni-database"></i>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-sm-10 col-10">
                                    <p>Experienced in Google Map api integrations and Firebase Realtime Database
                                        chating. </p>

                                </div>
                            </div>
                            <div className="row about-icon-section">
                                <div className="col-lg-2 col-sm-2 col-2 padding-right-none" align="center">
                                    <div className="about-me-icon orange-gradient">
                                        <i className="lni-layout"></i>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-sm-10 col-10">
                                    <p>Proficient in design, data structures, problem-solving, and debugging.</p>
                                </div>
                            </div>
                            <div className="row about-icon-section">
                                <div className="col-lg-2 col-sm-2 col-2 padding-right-none" align="center">
                                    <div className="about-me-icon pale-green-gradient">
                                        <i className="lni-grid"></i>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-sm-10 col-10">
                                    <p>Expert in the interaction between various devices and versions of Android.
                                    </p>
                                </div>
                            </div>
                            <div className="row about-icon-section">
                                <div className="col-lg-2 col-sm-2 col-2 padding-right-none" align="center">
                                    <div className="about-me-icon pink-gradient">
                                        <i className="lni-mobile"></i>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-sm-10 col-10">
                                    <p>Ability to design for scale and Performance. </p>
                                </div>
                            </div>
                            <div className="row about-icon-section">
                                <div className="col-lg-2 col-sm-2 col-2 padding-right-none" align="center">
                                    <div className="about-me-icon blue-gradient">
                                        <i className="lni-android"></i>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-sm-10 col-10">
                                    <p>Created 3+ fully functional applications for Android devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About