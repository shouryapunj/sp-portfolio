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
            <div className="container-fluid" style={{ height: '300px', backgroundColor: 'black', color: 'white' }}>
                <div className="container">
                    <div className="row" style={{ alignItems: 'center', padding: '80px 20px' }}>
                        <div className="col-sm-3">
                            <a href={this.state.linkedIn} style={{ color: 'white' }}>
                                <LinkedInIcon style={{ scale: '1.5' }}></LinkedInIcon><br></br><br></br>
                                <h6>LinkedIn</h6>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href={this.state.github} style={{ color: 'white' }}>
                                <GithubIcon style={{ scale: '1.5' }}></GithubIcon><br></br><br></br>
                                <h6>Github</h6>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href={this.state.gmail} style={{ color: 'white' }}>
                                <GamilIcon style={{ scale: '1.5' }}></GamilIcon><br></br><br></br>
                                <h6>Gmail</h6>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href={this.state.instagram} style={{ color: 'white' }}>
                                <InstagramIcon style={{ scale: '1.5' }}></InstagramIcon><br></br><br></br>
                                <h6>Instagram</h6>
                            </a>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default Footer