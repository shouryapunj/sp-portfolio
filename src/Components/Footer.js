import React, { Component } from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import GamilIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';

class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            linkedIn: 'https://www.linkedin.com/in/shourya-punj-231a9a149/',
            github: 'https://www.github.com/shouryapunj',
            gmail: 'mailto:shouryapunj93@gmail.com',
            instagram: 'https://www.instagram.com/shourya_punj/'
        }
    }

    render = () => {
        return (
            <div className="" style={{ position: 'relative', height: '500px' }}>
                <div className="container" style={{   position: 'fixed', bottom: '0px', left: '0px', right: '0px',}}>
                    <div className="row" style={{ backgroundColor: 'black', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                        <a href={this.state.linkedIn} style={{ color: 'white', paddingRight: '30px' }}>
                            <LinkedInIcon style={{ scale: '1' }}></LinkedInIcon><br></br>
                            LinkedIn
                        </a>
                        <a href={this.state.github} style={{ color: 'white', paddingRight: '30px' }}>
                            <GithubIcon style={{ scale: '1' }}></GithubIcon><br></br>
                            Github
                        </a>
                        <a href={this.state.gmail} style={{ color: 'white', paddingRight: '30px' }}>
                            <GamilIcon style={{ scale: '1' }}></GamilIcon><br></br>
                            Gmail
                        </a>
                        <a href={this.state.instagram} style={{ color: 'white', paddingRight: '30px' }}>
                            <InstagramIcon style={{ scale: '1' }}></InstagramIcon><br></br>
                            Instagram
                        </a>
                    </div>
                </div>
            </div >
        )
    }
}

export default Footer