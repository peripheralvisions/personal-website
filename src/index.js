// R E A C T
import React from 'react';
import ReactDOM from 'react-dom';

// C O M P O N E N T S
import Artworks from './components/workshowcase/Artworks';
import Dash from './components/Dash';
import Eof from './components/Eof';
import GetInTouch from './components/GetInTouch';
import GroupName from './components/GroupName';
import Intro from './components/Intro';
import MoreWillCome from './components/MoreWillCome';
import ProjectLirikLive from './components/workshowcase/ProjectLirikLive'
import TechStack from './components/TechStack';
import TopNavigation from './components/TopNavigation';

import './onLoad';

function App() {
    return (
        <React.Fragment>

            <div className="loading-screen">
                <img src="https://i.giphy.com/media/17mNCcKU1mJlrbXodo/giphy.webp" alt=""/>
            </div>

            <TopNavigation/>
            <Intro/>
            <Dash/>
            <TechStack/>

            <GroupName counter={1} title="PROJECTS"/>
            <ProjectLirikLive/>
            <MoreWillCome/>
            
            <GroupName counter={2} title="GALLERY"/>
            <Artworks/>

            <GroupName counter={3} title="CONTACT"/>
            <GetInTouch/>
            <Eof/>

        </React.Fragment>
    )
}

ReactDOM.render(
    <App/>, document.querySelector("#app"));