import React from "react";
import Contact from "./Contact";
import Education from "./Education";
import Seminar from "./Seminar";
import Skills from "./Skills";

class App extends React.Component{
    render(){
        return(
            
            <div>
                <Contact/>
                <Education/>
                <Skills/>
                <Seminar/>
            </div>

        );
    }
}

export default App;