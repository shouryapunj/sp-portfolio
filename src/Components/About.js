import React, {Component} from 'react'

class About extends Component {


    render = () => {
        return(
            <div className="container" style={{ textAlign: 'left', backgroundColor: 'white', height: '400px', padding: '70px 70px'}}>
                <u><h4>ABOUT ME</h4></u>
                <br></br>
                <span>
                    I am a graduate student at New Jersey Institute of Technology.
                    <br></br>
                    Pursuing a Master's degree in Computer Science and graduating in May 2021.
                    <br></br>
                    I have a two-year work experience in Software Development involving ETL and Web Development projects.
                </span>
            </div>
        )
    }
}

export default About;