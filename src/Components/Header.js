import React, { Component } from 'react'
import { AppBar, Container, Link, Toolbar } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            linkedIn: "https://www.linkedin.com/in/shourya-punj-231a9a149/"
        }
    }

    render = (props) => {
        if (this.props.data) {
            // var name = this.props.data.name;
            // var occupation = this.props.data.occupation;
            // var description = this.props.data.description;
            // var city = this.props.data.address.city;
            // var networks = this.props.data.social.map(function (network) {
            //     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            // })
        }

        var appbarStyle = {
            alignItems: 'center',
            backgroundColor: '#333333'
        }

        var toolbarStyle = {
            height: '48px',
            width: 'auto',
        }

        var headerLinkStyle = {
            display: 'inline-block',
            font: '14px opensans-bold',
            lineHeight: '32px',
            fontWeight: 'bold',
            padding: '8px 13px',
            textDecoration: 'none',
            textAlign: 'left',
            color: '#ffff',
            letterSpacing: '2px',
            transition: 'color .2s ease-in-out'
        }

        const image1 = `require(${'../Images/img-01.png'})`
        //const image1 = `url(${'../Images/img-01.png'})`

        return (
            <div className="header">
                <AppBar position="sticky" style={appbarStyle}>
                    <Toolbar style={toolbarStyle}>
                        <Link component="button" style={headerLinkStyle}>HOME</Link>
                        <Link component="button" style={headerLinkStyle}>ABOUT</Link>
                        <Link component="button" style={headerLinkStyle}>RESUME</Link>
                        <Link component="button" style={headerLinkStyle}>WORKS</Link>
                        <Link component="button" style={headerLinkStyle}>CONTACT</Link>
                    </Toolbar>
                </AppBar>

                <Container style={{ backgroundImage: image1, height: '600px', padding: '10px 10px' }}>
                    <p>
                        <h3>Hi! I'm Shourya</h3>
                        <span>Based in New Jersey, I'm pursuing a Master's in Computer Science
                        and I'm graduating in May 2021.
                        </span>
                    </p>

                    <a href={this.state.linkedIn}><LinkedInIcon></LinkedInIcon></a>
                </Container>

            </div>
        )
    }
}

export default Header;