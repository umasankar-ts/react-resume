import React, {Component} from 'react';
import './App.css';
import './css/responsive.css';
import './css/animate.css'
import InitialComponent from './component/InitialComponent';
import HomeComponent from './component/HomeComponent';
import AboutComponent from './component/AboutComponent';
import QualificationComponent from './component/QualificationComponent';
import ExperienceComponent from './component/ExperienceComponent';
import EducationComponent from './component/EducationComponent';
import PortfolioComponent from './component/PortfolioComponent';
import HobbiesComponent from './component/HobbiesComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollTop from './component/ScrollTop'

class App extends Component {
    render(){
        return (            
            <Router>
                <ScrollTop>
                    <Switch>
                        <Route path="/" exact component={InitialComponent}/> 
                        <Route path="/home" component={HomeComponent}/> 
                        <Route path="/about" component={AboutComponent}/>
                        <Route path="/experience" component={ExperienceComponent}/>
                        <Route path="/education" component={EducationComponent}/> 
                        <Route path="/qualification" component={QualificationComponent}/>  
                        <Route path="/portfolio" component={PortfolioComponent}/> 
                        <Route path="/hobbies" component={HobbiesComponent}/> 
                    </Switch>
                </ScrollTop>
            </Router>                
        )
    }
}

export default App;
