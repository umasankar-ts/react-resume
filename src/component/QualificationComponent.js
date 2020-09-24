import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class QualificationComponent extends Component{
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
                            <h1 className="col-md-12 heading primary-light-font fancy-heading">Core Qualification</h1>
                        </div>
                        <div className="qualify-desk-view">                            
                            <div className="row qualify-sec-space">                                
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 animated fadeInLeft">
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row">
                                        	<div className="col-md-10 col-9 vertical-center text-right">
                                                <span>Native Android Development</span>
                                            </div>
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-android secondary-dark-font"></i>
                                            </div>                                                                              
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row">
                            				 <div className="col-md-10 col-9 vertical-center text-right">
                                                <span>User Experience Design</span>
                                            </div> 
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-laptop-phone secondary-dark-font"></i>
                                            </div>                                                                            
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row">                                        
                                            <div className="col-md-10 col-9 vertical-center text-right">
                                                <span>Agile Software Development Methodologies</span>
                                            </div> 
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-list secondary-dark-font"></i>
                                            </div>                                     
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row">                                        
                                            <div className="col-md-10 col-9 vertical-center text-right">
                                                <span>Hybrid Android Development (Native Script)</span>
                                            </div>
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-rocket secondary-dark-font"></i>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row">                                       
                                            <div className="col-md-10 col-9 vertical-center text-right">
                                                <span>Android vector based animation</span>
                                            </div> 
                                             <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-select secondary-dark-font"></i>
                                            </div>                                     
                                        </div>  
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-12 col-sm-12 animated fadeInDown qualify-img-sec" align="center">
                                    <div className="qualify-image">
                                        <img src="/images/qualification-mockup.svg" className="img-fluid " alt="Mobile app screen"/>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 animated fadeInRight">
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-indent-increase secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center">
                                                <span>Websocket Implementation</span>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-control-panel secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center">
                                                <span>HTTP Error codes based API processing</span>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-leaf secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center">
                                                <span>Handle app related API in Single place</span>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-layers secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center">
                                                <span>Experienced with MVVM and MVP Architectures</span>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-key secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center">
                                                <span>Experienced in Google API keys integrations</span>
                                            </div>                                      
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="qualify-mob-view">
                            <div className="row qualify-sec-space">
                                <div className="col-sm-6 col-6">                            
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                         <div className="row">                                            
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-android secondary-dark-font"></i>
                                            </div> 
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Native Android Development</p>
                                            </div>                                                                             
                                        </div> 
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row">                                             
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-laptop-phone secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">User Experience Design</p>
                                            </div>                                                                            
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row">                                            
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-list secondary-dark-font"></i>
                                            </div>  
                                             <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Agile Software Development Methodologies</p>
                                            </div>                                   
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-rocket secondary-dark-font"></i>
                                            </div>                                         
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Hybrid Android Development<br/>(Native Script)</p>
                                            </div>                                                                                 
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row">
                                             <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-select secondary-dark-font"></i>
                                            </div>                                        
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Android vector based animation</p>
                                            </div>                                                                               
                                        </div> 
                                    </div>
                                </div>
                                <div className="col-sm-6 col-6">                              
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                       <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-indent-increase secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Websocket Implementation</p>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-control-panel secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                               <p className="mb-0">HTTP Error codes based API processing</p>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                         <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-leaf secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                               <p className="mb-0">Handle app related API in Single place</p>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-layers secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Experienced with MVVM and MVP Architectures</p>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                       <div className="row">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i class="lni-key secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Experienced in Google API keys integrations</p>
                                            </div>                                      
                                        </div>  
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

export default QualificationComponent