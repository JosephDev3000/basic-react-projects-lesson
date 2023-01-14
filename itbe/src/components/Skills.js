import React from "react";
class Skills extends React.Component{
    render(){
        return(
            <div>
                <h4>Skills:</h4>
                <ul>
                    <li>Programming
                        <ul>
                            <li>Advanced Level</li>
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                            </ul>
                            <li>Beginner Level</li>
                            <ul>
                                <li>C#</li>
                                <li>Perl</li>
                                <li>Javascript</li>
                            </ul>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Skills;