import React from 'react';

class Menu extends React.Component{
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
                <div className="menu_btn menu-btn-open-to-close"><span></span></div>
            </div>
        );
    }
};

export default Menu;