import React, { Component } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Contact extends Component {

    render = () => {
        return (
            <div id="Contact" className="container" style={{ font: '15px opensans-bold', textAlign: 'left', backgroundColor: '#000524', color: 'white', height: '460px', padding: '70px 70px' }}>
                <u><h4>CONTACT DETAILS</h4></u>
                <br></br>
                <span>
                    <HomeIcon></HomeIcon>&nbsp;503 N 5th St, 
                    <br></br>&emsp;&emsp;&nbsp;&nbsp;Apt 1, Harrison, 
                    <br></br>&emsp;&emsp;&nbsp;&nbsp;New Jersey
                    <br></br>&emsp;&emsp;&nbsp;&nbsp;USA 07029
                    <br></br><br></br>
                    <EmailIcon></EmailIcon>&emsp;shouryapunj93@gmail.com
                    <br></br><br></br>
                    <PhoneAndroidIcon></PhoneAndroidIcon>&emsp;+1 (973)-393-6621
                    <br></br><br></br>
                    <LinkedInIcon></LinkedInIcon>&emsp;<a style={{color: 'white'}} href="https://www.linkedin.com/in/shourya-punj-231a9a149/">Shourya Punj - LinkedIn</a>
                    
                </span>
            </div>
        )
    }
}

export default Contact;