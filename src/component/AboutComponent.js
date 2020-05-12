import React from 'react';

function About() {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 info">
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
                    <div className="col-lg-6 col-md-6 col-12">
                        <ul className="skills-bar-container">
                            <li>
                                <div className="progressbar-title">
                                    <h3>Kotlin</h3>
                                    <span className="percent dark-font" id="kotlin-percent"></span>
                                </div>
                                <div className="bar-container">
                                    <span className="progressbar progressblue" id="progress-kotlin"></span>
                                </div>
                            </li>
                            <li>
                                <div className="progressbar-title">
                                    <h3>Java</h3>
                                    <span className="percent dark-font" id="java-percent"></span>
                                </div>
                                <div className="bar-container">
                                    <span className="progressbar progressblue" id="progress-java"></span>
                                </div>
                            </li>
                            <li>
                                <div className="progressbar-title">
                                    <h3>Android NDK</h3>
                                    <span className="percent dark-font" id="android-percent"></span>
                                </div>
                                <div className="bar-container">
                                    <span className="progressbar progressblue" id="progress-android"></span>
                                </div>
                            </li>
                            <li>
                                <div className="progressbar-title">
                                    <h3>Couchbase DB</h3>
                                    <span className="percent dark-font" id="db-percent"></span>
                                </div>
                                <div className="bar-container">
                                    <span className="progressbar progressblue" id="progress-db"></span>
                                </div>
                            </li>
                            <li>
                                <div className="progressbar-title">
                                    <h3>Nativescript</h3>
                                    <span className="percent dark-font" id="nativescript-percent"></span>
                                </div>
                                <div className="bar-container">
                                    <span className="progressbar progressblue" id="progress-nativescript"></span>
                                </div>
                            </li>
                            <li>
                                <div className="progressbar-title">
                                    <h3>Vuejs</h3>
                                    <span className="percent dark-font" id="vuejs-percent"></span>
                                </div>
                                <div className="bar-container">
                                    <span className="progressbar progressblue" id="progress-vuejs"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About