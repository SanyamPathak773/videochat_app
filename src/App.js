import React from 'react';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';
import './Navbar.css';

function App() {
    return (
        <div className = "container">
            <div className = "header">
                <h1 className = "by">VIDEOCHAT</h1>
                <h5 className = "by">-BY SANYAM PATHAK</h5>
            </div>
            <VideoPlayer/>
            <Options>
                <Notifications/> 
            </Options>
        </div>
    )
}

export default App;