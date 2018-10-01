import React from "react"

import ProgressBar from "./ProgressBar"

class Content_3_Skills extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let profBlock = new Array();

        this.props.prof.forEach((value, index) => {
            profBlock.push(
                <div className="professional-skills" key={`${(value[0])[0]}${value[1]}`}>
                    <h4>
                        <div className="professional-skills-text">
                            {value[0]}
                        </div>
                        <div className="professional-skills-proc">
                            {value[1]}%
                        </div>
                    </h4>
                    <ProgressBar proc={value[1]} />
                </div>
            )
        });
        let addBlock = new Array();

        this.props.add.forEach((value, index) => {
            let rnd = Math.random();
            rnd = Math.round(rnd + 3);
            addBlock.push(
                <div key={`${index + rnd}`}>
                    {value}
                </div>
            );
        });

        return(
            <section id="section-3-skills">
                <h1>SKILLS</h1>
                <div className="skills-container">
                    <div className="additional-skills-container">
                        <h2>
                            <span>
                                ADDITIONAL SKILLS
                            </span>
                        </h2>
                        <div>
                            {addBlock}
                        </div>
                    </div>
                    <div className="professional-skills-container">
                        <h2>
                            <span>
                                PROFESSIONAL SKILLS
                            </span>
                        </h2>
                        {profBlock}
                    </div>
                </div>
            </section>
        );
    }
}

export default Content_3_Skills;