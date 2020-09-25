import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class HobbiesComponent extends Component{
	render(){
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
                        <div className="row">
                            <h1 className="col-md-12 heading primary-light-font fancy-heading">Fashion Designer</h1>
                            <div className="col-md-12 home-section-space" align="center">                            	
                                <div class="masonry">
                                    <div class="grid animated fadeInDown anim-delay-3s">
                                        <img src="images/fashion/fashion1.webp" alt="Fashion Design1"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-6s">
                                        <img src="images/fashion/fashion2.webp" alt="Fashion Design2"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-9s">
                                        <img src="images/fashion/fashion3.webp" alt="Fashion Design3"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-12s">
                                        <img src="images/fashion/fashion4.webp" alt="Fashion Design4"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-15s">
                                        <img src="images/fashion/fashion5.webp" alt="Fashion Design5"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-18s">
                                        <img src="images/fashion/fashion6.webp" alt="Fashion Design6"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-21s">
                                        <img src="images/fashion/fashion7.webp" alt="Fashion Design7"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-24s">
                                        <img src="images/fashion/fashion8.webp" alt="Fashion Design8"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-27s">
                                        <img src="images/fashion/fashion9.webp" alt="Fashion Design9"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-30s">
                                        <img src="images/fashion/fashion10.webp" alt="Fashion Design10"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-33s">
                                        <img src="images/fashion/fashion11.webp" alt="Fashion Design11"/>                                        
                                    </div>
                                    <div class="grid animated fadeInDown anim-delay-36s">
                                        <img src="images/fashion/fashion12.webp" alt="Fashion Design12"/>                                        
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
		)
	}
}

export default HobbiesComponent