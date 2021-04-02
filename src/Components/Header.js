import React, { Component } from 'react'
import { AppBar, Link, Toolbar } from '@material-ui/core'
import { Link as L } from 'react-scroll'


class Header extends Component {

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

        const appbarStyle = {
            display: 'flex',
            alignItems: 'center',
            // backgroundColor: '#333333',
            // backgroundColor: '#12232E',
            // backgroundColor: '#203647',
            backgroundColor: '#FFDF6C',
            width: '-moz-available',
            position: 'fixed'
        }

        const toolbarStyle = {
            height: '48px',
            // width: 'auto',
        }

        const headerLinkStyle = {
            display: 'inline-block',
            font: '14px opensans-bold',
            lineHeight: '32px',
            fontWeight: 'bold',
            padding: '8px 13px',
            textDecoration: 'none',
            textAlign: 'left',
            // color: '#ffff',
            color: 'black',
            letterSpacing: '2px',
            transition: 'color .2s ease-in-out'
        }

        return (
            <div id="Header" className="">
                <AppBar style={appbarStyle}>
                    <Toolbar style={toolbarStyle}>
                        <Link component="button" style={headerLinkStyle}>
                            <L activeClass="active" to="Home" spy={true} smooth={true}>HOME</L>
                        </Link>
                        <Link component="button" style={headerLinkStyle}>
                            <L to="About" spy={true} smooth={true}>ABOUT</L>
                        </Link>
                        <Link component="button" style={headerLinkStyle}>
                            <L to="Resume" spy={true} smooth={true}>RESUME</L>
                        </Link>
                        <Link component="button" style={headerLinkStyle}>
                            <L to="Works" spy={true} smooth={true}>WORKS</L>
                        </Link>
                        <Link component="button" style={headerLinkStyle}>
                            <L to="Contact" spy={true} smooth={true}>CONTACT</L>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;