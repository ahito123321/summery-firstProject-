import React from 'react'

class Content_6_Interests extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let block = new Array()
        let rnd = Math.random();
            rnd = Math.round(rnd + 6);
        this.props.int.forEach((value, index) => {
            block.push(<div className="block-interest-container" key={`${index + rnd}`}>
                <div className="block-interest" style={{backgroundImage: `url(${value[1]})`}}></div>
                <h3>{value[0]}</h3>
            </div>)
        })
        return (
            <section id="section-6-wrap-interests">
                <h1>
                    INTERESTS
                </h1>
                {block}
            </section>
        );
    }
}

export default Content_6_Interests;