import React from "react"

class Content_7_ContactUs extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let line = new Array();
        let rnd = Math.random();
            rnd = Math.round(rnd + 5);
        this.props.cont.forEach((value, index) => {
            let temp = () => {
                if (value[1] === "0")
                    return <p>{value[2]}</p>
                else
                    return <a href={value[1]}>{value[2]}</a>
            };
            line.push(
                <tr key={`${index + rnd}`}>
                    <td>
                        <div style={{
                            backgroundImage: `url(${value[0]})`
                        }}></div>
                    </td>
                    <td>
                        {temp()}
                    </td>
                </tr>
            );
        });
        return(
            <section id="section-7-contact-us-container">
                <h1>CONTACTS</h1>
                <div className="content-container">
                    <div className="content-container-contact-address">
                        <h3>CONTACT ADDRESS</h3>
                        <table className="content-container-contact-address-data">
                            <tbody>
                                {line}
                            </tbody>
                        </table>
                    </div>
                    <div className="content-container-form-send">
                        <h3>LET'S HAVE A FUN</h3>
                        <form>
                            <input type="text" placeholder="Your name" className="form-send-input"/>
                            <input type="email" placeholder="Your email" className="form-send-input"/>
                            <input type="text" placeholder="Your phone" className="form-send-input"/>
                            <textarea className="form-send-textarea" placeholder="Your message"/>
                            <button type="submit" className="download-button home1-headers-download">
                                <span>SEND MESSAGE</span>
                                <span>SEND MESSAGE</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content_7_ContactUs;