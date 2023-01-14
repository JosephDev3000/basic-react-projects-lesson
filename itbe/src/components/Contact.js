import React from 'react';
import Img from "./images/profile.jpg";
import Cp from "./images/contact.png";
import Email from "./images/email.png";

class About extends React.Component{
    render() {
        return (

            <div>
                <h2>Joseph Victor D. Briones
                <img src={Img} alt="pic" align="RIGHT" width="100" height="100"/>
                </h2>
                <img src={Cp} alt="cp" width="20" height="20"/>
                <kbd>0912345679 | </kbd>
                <img src={Email} alt="email" width="20" height="20"/>
                <kbd>jvbriones1999@gmail.com</kbd>
            </div>

        );
    }
}
export default About;