import React, { Component } from 'react'
import myPicture from '../Images/Me-y.png';

class About extends Component {


    render = () => {
        return (
            <div id="About" className="container" style={{ font: '16px opensans-bold', display: 'inline-block', textAlign: 'left', backgroundColor: 'white', height: '520px', paddingTop: '70px' }}>
                <u><h4>ABOUT ME</h4></u>
                <br></br>
                <div className="row" style={{paddingTop: '40px', paddingBottom: '50px' }}>
                    <div className="col-sm-3" style={{ }}>
                        <img alt="shourya punj" src={`${myPicture}`} style={{ borderRadius: '80%', height: '180px', width: '150px', scale: '1.5'}}></img>
                    </div>
                    <br></br>
                    <div className="col-lg-9">
                        <span style={{ float: 'right' , textAlign: 'justify'}}>
                            I am a graduate student at New Jersey Institute of Technology, pursuing a Master's degree in Computer Science and graduating in May 2021.
                            I have two years of work experience in Software Development involving ETL and Web Development projects. I like working and learning about new
                            technologies. I also enjoy watching horror and comedy content.
                        </span>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;