import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PortfolioComponent extends Component{
	render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
/*             responsive: [
                {
                breakpoint: 850,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1                        
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1                        
                    }
                }
            ]*/
        };
		return(
		 	<div>                
                <SidebarComponent></SidebarComponent>                 
                <div>
                    <MessageComponent></MessageComponent>
                </div>
                <div className="content-wrapper">
                    <div className="container-fluid">                        
                    	<div className="row">
                            <h1 className="col-md-12 heading primary-dark-font fancy-heading">My Portfolio</h1>
                            <div className="col-md-12 animated fadeInDown">
                                <Slider {...settings}>
                                    <img src="/images/ui1.png" className="img-fluid" alt="App screenshot1"/>
                                    <img src="/images/ui2.png" className="img-fluid" alt="App screenshot2"/>
                                    <img src="/images/ui3.png" className="img-fluid" alt="App screenshot3"/>
                                    <img src="/images/ui4.png" className="img-fluid" alt="App screenshot4"/>
                                    <img src="/images/ui5.png" className="img-fluid" alt="App screenshot5"/>
                                    <img src="/images/ui6.png" className="img-fluid" alt="App screenshot6"/>
                                    <img src="/images/ui7.png" className="img-fluid" alt="App screenshot7"/>
                                    <img src="/images/ui8.png" className="img-fluid" alt="App screenshot8"/>
                                    <img src="/images/ui9.png" className="img-fluid" alt="App screenshot9"/>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default PortfolioComponent