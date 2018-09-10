import React from 'react';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.stateMenu = false;
        $(window).resize(function(){
            if ($(window).width() > 850){
                $('.menu-logo-wrap').removeAttr('style');
                $('.menu-app-wrap').removeAttr('style');
                $('.menu_items').removeAttr('style');
            }
            else{
                if ($('.menu-app-wrap').css("height") == '48px'){
                    $('.menu_btn').removeClass('menu-btn-close-to-open');
                    $('.menu_btn').addClass('menu-btn-open-to-close');
                }
            } 
        });
    }

    set StateMenu(value){
        this.stateMenu = value;
    }
    buttonClickHendler(){
        if ($('.menu-app-wrap').css("height") == "48px" && this.stateMenu == true)
            this.StateMenu = false;
        if(!this.stateMenu){
            $('.menu-app-wrap').animate({
                "height": "454px",
            }, function(){
                $('.menu_items').css({
                    "display": "block"
                })
            });
            $('.menu_btn').removeClass('menu-btn-open-to-close');
            $('.menu_btn').addClass('menu-btn-close-to-open');
        }
        else{
            $('.menu-app-wrap').animate({
                "height": "48px"
            }, function() {
                $('.menu_items').css({
                    "display": "none"
                });
            });
            $('.menu_btn').removeClass('menu-btn-close-to-open');
            $('.menu_btn').addClass('menu-btn-open-to-close');
        }
        this.StateMenu = (!this.stateMenu) ? true : false;
    }

    render(){
        return(
            <div className="menu-app-wrap">
                <div className="menu-logo-wrap">
                    <div className="menu-logo"></div>
                    <h1 className="menu-text-a">SUMMARY</h1>
                </div>
                <div className="menu_items">
                    <a className="menu_item menu_item-active" href="#section-1-wrap-slider">Home</a>
                    <a className="menu_item" href="#section-2-wrap-about-me">About</a>
                    <a className="menu_item" href="#section-3-skills">Skills</a>
                    <a className="menu_item" href="#section-4-education">Education</a>
                    <a className="menu_item" href="#section-5-portfolio">Portfolio</a>
                    <a className="menu_item" href="#section-6-wrap-interests">Interests</a>
                    <a className="menu_item" href="#section-7-contact-us-container">Contacts</a>
                </div>          
                <div className="menu_footer">
                    <h3>.....................</h3> 
                </div>
                <div className="menu_btn menu-btn-open-to-close" onClick={this.buttonClickHendler.bind(this)}><span></span></div>
            </div>
        );
    }
};

export default Menu;