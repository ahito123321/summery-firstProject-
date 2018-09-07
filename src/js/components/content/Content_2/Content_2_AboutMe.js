import React from 'react';

class Content_2_AboutMe extends React.Component{
    render(){
        return(
            <section id="section-2-wrap-about-me">
                <h1>
                    ABOUT ME
                </h1>
                <div className="section-2-contaier-about-me">
                    <div className="section-2-photo">
                        <div>I'm developer with over 2 years of experience. Experienced 
                            with all stages of the development projects. Having an 
                            indepth knowledge including C++, C#, HTML5, CSS3, 
                            JavaScript (more details below).</div>
                        <button className="download-button ">
                            <span>DOWNLOAD MY CV</span>
                            <span>DOWNLOAD MY CV</span>
                        </button>
                    </div>
                    <div className="section-2-text">
                        <h1>
                            HI I'M&nbsp;
                            <span>VLADIMIR LIASHINSKY</span>
                        </h1>
                        <h3>
                            WEB DEVELOPER, C# DEVELOPER,<br />BEGGINER UNITY DEVELOPER
                        </h3>
                        <p>
                            I'm developer with over 2 years of experience. Experienced 
                            with all stages of the development projects. Having an 
                            indepth knowledge including C++, C#, HTML5, CSS3, 
                            JavaScript (more details below).
                        </p>
                        <p>
                            My objectives are increasing my knowledge in computer 
                            science fields and new technologies especially, web 
                            development and web Design field. Always looking forward 
                            to learn new technologies and be a part of a huge change 
                            in the world.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content_2_AboutMe;