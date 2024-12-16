import React from "react";
import Questions from "./modules/Questions/main.jsx";
import img from './static/background.png';
import {SideBar} from './modules/SideBar/index.js'
import {ChoiseContainer} from './modules/ChoiseContainer/index.js'

import "./app.css";


function App() {
    return (
        <>
            <img className="app__background" src={img} />
            <div className="app">
                <SideBar />
                {/* <Questions /> */}
                <ChoiseContainer />
                
            </div>
        </>
    );
}

export default App;