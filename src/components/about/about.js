//import React, { useEffect, useRef } from "react";
import "./about.css";


const About = () => {
    return (
        <div className="container-about">
            <div className='about-heading'>
                <p>About Me </p>
                <h5> Get to Know Me </h5>
                <p>Learn more about me, what I like, what I know and where I live.</p>

                <div className="container-2">
                    <div className="box-1">

                        <h3>My Profiles</h3>
                        <p>Discover my work, skills, and projects across platforms</p>

                        <div className="profile-box">
                            <button href=""><i class="fa-brands fa-linkedin"><span>Linkedin</span> </i></button>
                            <button href=""><i class="fa-brands fa-github"><span>Github</span> </i></button>
                            <button href=""><i class="fa-brands fa-twitter"><span>Twitter</span> </i></button>
                            <button href=""><i class="fa-brands fa-instagram"><span>Instagram</span> </i></button>
                            <button href=""><i class="fa-brands fa-medium"><span>Medium</span> </i></button>
                        </div>

                    </div>
                    <div className="box-2">

                        <h3>My Tech Stack</h3>
                        <p>Building modern web applications using powerful technologies.</p>

                        <div class="tech-container">
                        <div class="tech-track">
                             <div class="tech-item">
                                <i class="fa-brands fa-react"><span>React</span></i>
                            </div>
                             <div class="tech-item">
                               <i class="fa-brands fa-node-js"><span>Nodejs</span></i>
                            </div>
                             <div class="tech-item">
                               <i class="fa-brands fa-java"><span>Java</span></i>
                            </div>
                              <div class="tech-item">
                                <i class="fa-brands fa-html5"><span>HTML5</span></i>
                            </div>
                             <div class="tech-item">
                                <i class="fa-brands fa-css3-alt"><span>CSS3</span></i>
                            </div>
                            <div class="tech-item">
                                <i class="fa-brands fa-js"><span>Javascript</span></i>
                            </div>
                             <div class="tech-item">
                                <i class="fa-brands fa-bootstrap"><span>Bootstrap</span></i>
                            </div>
                          
                           
                        </div>
                        </div>

                    </div>
                </div>


            </div>


        </div>
    );
};

export default About;