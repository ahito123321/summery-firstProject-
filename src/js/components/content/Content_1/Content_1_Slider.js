import React from 'react'

import Slider from './Slider'

class Content_1_Slider extends React.Component{
    render(){
        return(
            <section id="section-1-wrap-slider">
                <Slider
                    imageSrc={["./img/slider/img_1.jpg", "./img/slider/img_2.jpg", "./img/slider/img_3.jpeg"]}
                    currentImage={ 0 }
                    timeChange={ 5000 }
                    timeHide={ 700 }
                    textWrite={["FRONT-END DEVELOPER", "C# DEVELOPER", "BEGGINER UNITY DEVELOPER"]}/>
                <div className="home1-headers-wrap">
                    <h2>HELLO I'AM</h2>
                    <h1>VLADIMIR LIASHINSKY</h1>
                </div>
                <button className="download-button home1-headers-download">
                    <span>DOWNLOAD MY CV</span>
                    <span>DOWNLOAD MY CV</span>
                </button>
            </section>
        );
    }
}

export default Content_1_Slider;