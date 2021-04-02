import React, { Component } from 'react'

class Resume extends Component {


    render = () => {
        return (
            <div className="container-fluid" style={{ textAlign: 'left', backgroundColor: 'white', height: '600px', padding: '70px 70px' }}>
                <u><h4>RESUME</h4></u>
                <br></br>
                <div className="row">
                    <div className="col-sm-3">EDUCATION</div>
                    <div className="col-sm-9">
                        <h5>New Jersey Institute of Technology</h5>
                        <span>Masters in Computer Science &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;August 2019 - May 2021</span>
                        <br></br><br></br>
                        <span>
                            Courses Taken :  <br></br>
                            <div className="row">
                                <div className="col-sm-4">
                                    <ul>
                                        <li>Data Structures and Algorithms</li>
                                        <li>Cloud Computing</li>
                                        <li>Advanced Database System Design</li>
                                        <li>Machine Learning</li>
                                        <li>Data Analytics with R</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <ul>
                                        <li>Database Managment System</li>
                                        <li>Java Programming</li>
                                        <li>Internet and Higher Layer Protocols</li>
                                        <li>Operating Systems</li>
                                        <li>Software Testing and Quality Assurance</li>
                                    </ul>
                                </div>
                            </div>

                        </span>
                        <br></br>
                    </div>
                </div>
                <br></br>

                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
                        <h5>Birla Institute of Technology and Science</h5>
                        <span>M.Sc (Hons) Mathematics and B.E (Hons) Electrical and Electronics&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;August 2013 - May 2018</span>
                        <br></br>
                    </div>
                </div>
                <br></br>
                <hr></hr>
            </div>
        )
    }
}

export default Resume;