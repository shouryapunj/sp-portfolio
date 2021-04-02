import React, { Component } from 'react'
import javaIcon from '../Images/java.png'
import reactIcon from '../Images/react.png'
import jsIcon from '../Images/javascript.png'
import pythonIcon from '../Images/python.png'
import rIcon from '../Images/r.png'
import htmlIcon from '../Images/html.png'
import cssIcon from '../Images/css.png'
import sqlIcon from '../Images/sql.png'
import awsIcon from '../Images/aws.png'
import gitIcon from '../Images/git.png'
import dockerIcon from '../Images/docker.png'
import programmerImage from '../Images/programmer.png'

class Resume extends Component {


    render = () => {
        return (
            <div id="Resume" className="container-fluid" style={{ font: '16px opensans-bold', display: 'inline-block', textAlign: 'left', backgroundColor: 'white', height: '900px', padding: '70px 70px' }}>
                <u><h4>RESUME</h4></u>
                <br></br>
                <div className="row">
                    <div className="col-lg-3"><strong>EDUCATION</strong></div>
                    <div className="col-lg-9">
                        <h5>New Jersey Institute of Technology</h5>
                        <span>Masters in Computer Science &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;August 2019 - May 2021</span>
                        <br></br><br></br>
                        <span>
                            Courses :  <br></br>
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
                        <br></br><br></br>
                        <span>
                            Relevant Courses :  <br></br>
                            <div className="row">
                                <div className="col-sm-4">
                                    <ul>
                                        <li>Computer Programming</li>
                                        <li>Discrte Mathematics</li>
                                        <li>Optimization</li>
                                        <li>Operations Research</li>
                                        <li>Graphs and Networks</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <ul>
                                        <li>Object Oriented Programming</li>
                                        <li>Number Theory</li>
                                        <li>Ordinary Differential Equations</li>
                                        <li>Partial Differential Equations</li>
                                        <li>Number Theory</li>
                                    </ul>
                                </div>
                            </div>

                        </span>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <div className="row">
                    <div className="col-sm-3"><strong>TECHNICAL SKILLS</strong></div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="Java" src={`${javaIcon}`}></img><br></br>
                            <h6>Java</h6>
                        </span>
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="ReactJS" src={`${reactIcon}`}></img><br></br>
                            <h6>ReactJS</h6>
                        </span>
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="JavaScript" src={`${jsIcon}`}></img><br></br>
                            <h6>JavaScript</h6>
                        </span>
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="Python" src={`${pythonIcon}`}></img><br></br>
                            <h6>Python</h6>
                        </span>
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="R" src={`${rIcon}`}></img><br></br>
                            <h6>R</h6>
                        </span>
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="Html" src={`${htmlIcon}`}></img><br></br>
                            <h6>Html</h6>
                        </span>
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="Css" src={`${cssIcon}`}></img><br></br>
                            <h6>Css</h6>
                        </span>
                    </div>

                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm-3" style={{ backgroundSize: '100%', backgroundPosition: 'center', backgroundImage: `url(${programmerImage})`, height: '90px', width: '400px' }}>
                        
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="Sql" src={`${sqlIcon}`}></img><br></br>
                            <h6>Sql</h6>
                        </span>
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="Aws" src={`${awsIcon}`}></img><br></br>
                            <h6>AWS</h6>
                        </span>
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="Git" src={`${gitIcon}`}></img><br></br>
                            <h6>Git</h6>
                        </span>
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'center' }}>
                        <span>
                            <img alt="Docker" src={`${dockerIcon}`}></img><br></br>
                            <h6>Docker</h6>
                        </span>
                    </div>
                </div>
                <br></br><br></br>
                <hr></hr>
            </div>
        )
    }
}

export default Resume;