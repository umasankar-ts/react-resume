import React from 'react';
import './App.css';
import './css/responsive.css';
import Header from './component/HeadComponent'
import About from './component/AboutComponent'
import Skill from './component/SkillComponent'
import Footer from './component/FooterComponent'

function App() {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Skill></Skill>
            <Footer></Footer>
        </div>
    )
}

export default App;
