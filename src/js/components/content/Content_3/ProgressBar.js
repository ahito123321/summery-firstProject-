import React from "react"

class ProgressBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="progressBar-container">
                <div className="progressBar-inside" style={{width: `${this.props.proc}%`}}></div>
            </div>
        );
    }
}

export default ProgressBar;