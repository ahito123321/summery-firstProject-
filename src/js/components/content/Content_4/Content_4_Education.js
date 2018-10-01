import React from 'react'

class Content_4_Education extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        let block = new Array();
        let rnd = Math.random();
            rnd = Math.round(rnd + 4);
        this.props.educ.forEach((value, index) => {
            let key = (index % 2 == 0) ? true : false; 
            block.push(
                <div className="section-4-record" key={`${index + rnd}`}>
                    <div className="section-4-description section-4-description-left" style={{opacity: (key) ? "1" : "0"}}>
                        {(key) ? value[0] : ""}
                        <div className="section-4-triangle section-4-triangle-left"></div>
                    </div>
                    <div className="section-4-date-wrap">
                        <div className="section-4-date-pole"></div>
                        <div className="section-4-date">{value[1]}</div>
                    </div>
                    <div className="section-4-description section-4-description-right" style={{opacity: (key) ? "0" : "1"}}>
                        {(!key) ? value[0] : ""}
                        <div className="section-4-triangle section-4-triangle-right"></div>
                    </div>
                </div>
            )
        });
        return(
            <section id="section-4-education">    
                <h1>EDUCATION</h1>   
                {block}            
            </section>
        );
    }
}

export default Content_4_Education;