import React, { Component } from 'react'
// import image1 from '../Images/img-03.jpg'
// import me from '../Images/Me.jpeg'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            linkedIn: "https://www.linkedin.com/in/shourya-punj-231a9a149/"
        }
    }


    render = () => {
        return (
            <div className="home">
                <div className="" style={{ backgroundColor: 'black', height: '600px'}}>
                    
                    <div className="" style={{ position: 'relative' }}>
                        {/* <img alt="me" src={`${me}`} style={{ position: 'absolute', left: '100px', top: '70px', overflow: 'hidden', height:"300px", width:"260px", borderRadius: '100%', margin: '0 auto' }} /> */}
                        <div className="col-lg-12" style={{color: 'white', textAlign: 'right'}}>
                            <div className="inner text" style={{padding: '100px 50px'}}>
                                <ReactTypingEffect style={{fontSize: '50px'}} text={'SHOURYA PUNJ'} speed='200' typingDelay='10' eraseSpeeed='10' />
                                <br></br>
                                <ReactTypingEffect style={{fontSize: '32px'}} text={'MS Computer Science | NJIT |  May 2021'} typingDelay='1000' eraseSpeeed='10' />
                                <br></br>
                                <ReactTypingEffect style={{fontSize: '32px'}} text={'Software Engineer'} typingDelay='1000' eraseSpeed='10' />
                                
                            </div>
                        </div>
                        {/* <a href={this.state.linkedIn}><LinkedInIcon></LinkedInIcon></a> */}
                    </div>
                    {/* <img alt="img-01" src={`${image1}`} style={{ width: '-moz-available', height: '800px', overflow: 'hidden' }} /> */}
                </div>
                <div className="container" style={{ backgroundColor: '#000000', maxWidth: '1020px' }}>
                    <div className="row">

                    </div>
                </div>
            </div>
        );
    }
}

export default Home