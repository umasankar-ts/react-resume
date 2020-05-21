import React, {Component} from 'react';
import './App.css';
import './css/responsive.css';
import BaseComponent from './component/BaseComponent'

class App extends Component {
    constructor(props) {
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
    }
}

export default App;
