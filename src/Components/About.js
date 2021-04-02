import React, { Component } from 'react'
import myPicture from '../Images/Me-y.png';

class About extends Component {


    render = () => {
        return (
            <div id="About" className="container" style={{ font: '16px opensans-bold', display: 'inline-block', textAlign: 'left', backgroundColor: 'white', height: '500px', padding: '70px 70px' }}>
                <u><h4>ABOUT ME</h4></u>
                <br></br>
                <div className="row" style={{paddingTop: '50px', paddingBottom: '50px'}}>
                    <div className="col-lg-4" style={{}}>
                        <img alt="shourya punj" src={`${myPicture}`} style={{ borderRadius: '80%', height: '180px', width: '150px', scale: '1.5'}}></img>
                    </div>
                    
                    <div className="col-lg-8">
                        <span style={{ float: 'right' , textAlign: 'justify'}}>
                            I am a graduate student at New Jersey Institute of Technology. Pursuing a Master's degree in Computer Science and graduating in May 2021.
                            I have a two-year work experience in Software Development involving ETL and Web Development projects.
                        </span>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;