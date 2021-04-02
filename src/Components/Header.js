import React, { Component } from 'react'
import { AppBar, Link, Toolbar } from '@material-ui/core'

class Header extends Component {


    render = (props) => {

        //const image1 = require('../Images/img-01.jpg')

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
            alignItems: 'center',
            backgroundColor: '#333333',
            width: '-moz-available'
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
            color: '#ffff',
            letterSpacing: '2px',
            transition: 'color .2s ease-in-out'
        }

        return (
            <div className="">
                <AppBar position="sticky" style={appbarStyle}>
                    <Toolbar style={toolbarStyle}>
                        <Link component="button" style={headerLinkStyle}>HOME</Link>
                        <Link component="button" style={headerLinkStyle}>ABOUT</Link>
                        <Link component="button" style={headerLinkStyle}>RESUME</Link>
                        <Link component="button" style={headerLinkStyle}>WORKS</Link>
                        <Link component="button" style={headerLinkStyle}>CONTACT</Link>
                    </Toolbar>
                </AppBar>    
            </div>
        )
    }
}

export default Header;