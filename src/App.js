import React, {Component} from 'react';
import './App.css';
import './css/responsive.css';
import './css/animate.css'
import InitialComponent from './component/InitialComponent';
import HomenewComponent from './component/HomenewComponent';
import HomeComponent from './component/HomeComponent';
import SkillsComponent from './component/SkillsComponent';
import QualificationComponent from './component/QualificationComponent';
import ExperienceComponent from './component/ExperienceComponent';
import EducationComponent from './component/EducationComponent';
import UiComponent from './component/UiComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={InitialComponent}/> 
                    <Route path="/homenew" component={HomenewComponent}/> 
                    <Route path="/home" component={HomeComponent}/>
                    <Route path="/experience" component={ExperienceComponent}/>
                    <Route path="/education" component={EducationComponent}/> 
                    <Route path="/skills" component={SkillsComponent}/> 
                    <Route path="/qualification" component={QualificationComponent}/>  
                    <Route path="/mywork" component={UiComponent}/>  

                </Switch>
            </Router>
        )
    }
/*    constructor(props) {
        super(props)
        this.state = {
            isClicked: false
        }
    }

    clickHandler = () => {
        this.setState({
            isClicked: true
        })
    }

    render() {
        return (
            this.state.isClicked ? <BaseComponent></BaseComponent> :
                <div className="container">
                    <div className="row" align="center">
                        <div className="col-md-12">
                            <div className="fingerprint-section">
                                <img src="../images/fingerprint.png" onClick={this.clickHandler} className="img-fluid finger-print-img"/>                                
                            </div>
                        </div>
                    </div>
                </div>
        )
    }*/
}

export default App;
