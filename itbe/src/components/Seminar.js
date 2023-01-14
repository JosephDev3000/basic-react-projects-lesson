import React from "react";
class Seminar extends React.Component{
    render(){
        return(
            <div>
                <h4>Seminars/Webinars Attended:</h4>
                    <ul>
                        <li><b>3D Virtual World Building – March 10, 2022 - </b><i>University of the East</i></li>
                        <li><b>Introduction to Amazon Web Services – December 9, 2021 - </b><i>Trend Micro Inc.</i></li>
                        <li><b>Introduction to Kubernetes – September 30, 2021 - </b><i>Trend Micro Inc.</i></li>
                        <li><b>Password Recovery Using Hashcat in Kali Linux – September 1, 2021 - </b><i>Department of Information and Communications Technology</i></li>
                        <li><b>Cloud Security Best Practices with Microsoft Azure – August 31, 2021 - </b><i>Department of Information and Communications Technology</i></li>

                    </ul>
            </div>
        );
    }
}
export default Seminar;