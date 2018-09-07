import React from 'react'

class Typed extends React.Component{
    constructor(props){
        super(props);
        this.textWrite = this.props.textWrite[this.props.index];
        this.speed = this.props.speed;

        this.interval;
    }

    writeText(){
        let $ele = $(".typed-text"),
            text = String(this.textWrite),
            txt = text.split("");
    
        this.interval = setInterval(function(){
    
            if(!txt[0]){
                clearInterval(this.interval);
            };
            
            $ele.append(txt.shift());
        }, (this.speed != undefined && (this.speed / String(this.textWrite).length < 100)) ? (this.speed / String(this.textWrite).length) : 100);

    };

    componentDidMount(){
        $(".typed-text").html("");
        this.writeText();
    }

    componentDidUpdate(){
        clearInterval(this.interval);
        this.textWrite = this.props.textWrite[this.props.index];
        $(".typed-text").html("");
        this.writeText();
    }

    render(){
        return (
            <h2 className="typed-text">
                
            </h2>
        );
    }
}

export default Typed;