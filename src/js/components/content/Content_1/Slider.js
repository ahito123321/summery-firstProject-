import React from 'react'

import Typed from './Typed'

class Slider extends React.Component{
    constructor(props){
        super(props);

        //images array
        this.imageSrc = this.props.imageSrc,
        this.key = this.imageSrc.length;
        //count images
        this.prevIndex = this.imageSrc.length - 1;
        this.nextIndex = 1;

        //hash setInteraval()
        this.timeOutHash = 0;

        //times
        this.timeChange = this.props.timeChange;
        this.timeHide = this.props.timeHide;

        this.mount = true;

        this.state = {
            currentImage: this.props.currentImage,
        }

    }

    buttonClickHendler(index){
        if (index != this.state.currentImage){
            clearTimeout(this.timeOutHash);
            if (index - this.state.currentImage > 0){
                this.nextAnimate(index - this.state.currentImage);
            }
            else{
                this.prevAnimate(index - this.state.currentImage);
            }
        }
        
    }

    changeState(num){
        let now = this.state.currentImage;
        this.prevIndex = (now + this.key - 1 + num) % this.key;
        this.nextIndex =  (now + this.key + 1 + num) % this.key;
        this.setState({currentImage: (now + this.key + num) % this.key});
        $(".slider-image-next").css({
            left: "100%"
        });
        $(".slider-image-prev").css({
            left: "-100%"
        });
    }

    nextAnimate(num){
        $(".slider-image-next").css({
            backgroundImage: `url(${this.imageSrc[(this.state.currentImage + this.key + num) % this.key]})`
        }).animate({
            left: "0px"
        }, this.timeHide, "linear", ()=>{
            this.changeState(num);
        });
    }

    prevAnimate(num){
        $(".slider-image-prev").css({
            backgroundImage: `url(${this.imageSrc[(this.state.currentImage + this.key + num) % this.key]})`
        }).animate({
            left: "0px"
        }, this.timeHide, "linear", ()=>{
            this.changeState(num);
        });
    }


    componentDidMount(){
        this.timeOutHash = setTimeout(()=>{
            this.nextAnimate(1);
        }, this.timeChange - this.timeHide)
    }

    componentDidUpdate(prevProps, prevState){
        this.timeOutHash = setTimeout(()=>{
            this.nextAnimate(1);
        }, this.timeChange - this.timeHide)
    }


    render(){
        let block = new Array();
        return(
            <div className="slider-wrap">
                <div className="slider-image-prev" style={{
                    backgroundImage: 'url(' + this.imageSrc[this.prevIndex] + ')'
                }}></div>
                <div className="slider-image-current" style={{
                    backgroundImage: 'url(' + this.imageSrc[this.state.currentImage] + ')'
                }}></div> 
                <div className="slider-image-next" style={{
                    backgroundImage: 'url(' + this.imageSrc[this.nextIndex] + ')'
                }}></div>
                <div className="home1-headers-wrap">
                    <h2>HELLO I'AM</h2>
                    <h1>VLADIMIR LIASHINSKY</h1>
                    <Typed speed={this.timeChange - this.timeHide} index={this.state.currentImage} textWrite={this.props.textWrite}/>
                </div>
                <div className="slider-image-overlay"></div>
                <div className="slider-controls">
                    {
                        this.imageSrc.map((item, index) => {
                            let styles = (index == this.state.currentImage)? "slider-control-btn slider-control-btn-active" : "slider-control-btn"; 
                            block.push(<div key={`img${ index }`} className={ styles } onClick={this.buttonClickHendler.bind(this, index)}></div>)
                        })
                    }
                    {block}
                </div>
            </div>
        );
    }
}

export default Slider;