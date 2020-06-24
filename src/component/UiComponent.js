import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class UiComponent extends Component{
	render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
             responsive: [
                {
                breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1                        
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1                        
                    }
                }
            ]
        };
		return(
		 	<div>
                <div className="sidebar primary-light-bg scrollbar">
                    <SidebarComponent></SidebarComponent>               
                </div>
                <div>
                    <MessageComponent></MessageComponent>
                </div>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <h6 className="fancy-title primary-light-font">Project UIs</h6>
                    	<div className="row">
                            <div className="col-md-12">
                                <Slider {...settings}>
                                    <img src="/images/ui1.png" className="img-fluid"/>
                                    <img src="/images/ui2.png" className="img-fluid"/>
                                    <img src="/images/ui3.png" className="img-fluid"/>
                                    <img src="/images/ui4.png" className="img-fluid"/>
                                    <img src="/images/ui5.png" className="img-fluid"/>
                                    <img src="/images/ui6.png" className="img-fluid"/>
                                    <img src="/images/ui7.png" className="img-fluid"/>
                                    <img src="/images/ui8.png" className="img-fluid"/>
                                    <img src="/images/ui9.png" className="img-fluid"/>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default UiComponent