import React from 'react';

import Content_1_Slider from './Content_1/Content_1_Slider';
import Content_2_AboutMe from './Content_2/Content_2_AboutMe';
import Content_3_Skills from './Content_3/Content_3_Skills';
import Content_4_Education from './Content_4/Content_4_Education';
import Content_5_Portfolio from './Content_5/Content_5_Portfolio';
import Content_6_Interests from './Content_6/Content_6_Interests';
import Content_7_ContactUs from './Content_7/Content_7_ContactUs';

class Content extends React.Component{
    render(){
        return(
            <div className="content-app-wrap">
                <Content_1_Slider />
                <hr className="between-section-content" />
                <Content_2_AboutMe /> 
                <hr className="between-section-content" />
                <Content_3_Skills prof={[
                    ["HTML5, CSS3 (SASS)", "70"],
                    ["JavaScript (React)", "65"],
                    ["C# (ASP.NET, WinForms, WebForms)", "45"],
                    ["SQL (SQL Server Express 2017)", "35"],
                    ["UNITY 3d (2D Platformers)", "30"],
                    ["GIT (BitBucket, GitHub)", "40"]
                ]} add={[
                    "English level - A1+"
                ]}/>
                <hr className="between-section-content" />
                <Content_4_Education educ={[
                    ["One month in Streamline XD", "2018"],
                    ["Courses from Awem Games on Unity 3D", "2018"],
                    ["Education in Belarusian-Russian University", "2015-2019"]
                ]}/>
                <hr className="between-section-content" />
                <Content_5_Portfolio /> 
                <hr className="between-section-content" />
                <Content_6_Interests int={
                    [
                        [ "TRAVEL", "./img/interests/travel.png" ],
                        [ 'GAMING', "./img/interests/gaming.png" ],
                        [ 'MUSIC', "./img/interests/music.png" ],
                        [ 'GUITAR', "./img/interests/guitar.png" ],
                        [ 'MOVIES', "./img/interests/movies.png" ]
                    ]
                }/>
                <hr className="between-section-content" />
                <Content_7_ContactUs cont={
                    [
                        ["./img/contact/location.png", "0", "Chausy, 1 lane Frunze, Dom 2"],
                        ["./img/contact/phone.png", "0", "+375 25 753 31 15, +375 29 864 55 96"],
                        ["./img/contact/skype.png", "0", "login: ahito1233211"],
                        ["./img/contact/email.png", "0", "ahito.123321@gmail.com"],
                        ["./img/contact/website.png", "0", "coming soon"],
                        ["./img/contact/vk.png", "https://vk.com/punk_n", "https://vk.com/punk_n"]
                    ]
                }/>
            </div>
        );
    }
};

export default Content;