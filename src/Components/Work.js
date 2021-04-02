import React, { Component } from 'react'

class Work extends Component {


    render = () => {
        return (
            <div id="Works" className="container-fluid" style={{ font: '16px opensans-bold', textAlign: 'left', backgroundColor: 'white', height: '700px', padding: '70px 70px' }}>
                <u><h4>WORK</h4></u>
                <br></br>
                <div className="row">
                    <div className="col-sm-3"><strong>ZS Associates</strong><br></br>July 2018 - July 2019</div>
                    <div className="col-sm-9">
                        <h5>Business Technology Analyst</h5>
                        <span>
                            <li>Created the cloud-based data warehousing solution for commercial analytics for Australia based client</li>
                            <li>Primarily worked as ETL developer creating Postgresql queries on AWS cloud databases such as redshift, rds</li>
                            <li>Built the different layers of data warehousing for almost 10 data sources</li>
                            <li>Loaded data from s3 into ec2 machines, orchestrated level 0/1/2 to perform the ETL process by cleaning data, loading into
                            base/stage tables, generating required surrogate keys for dimensions/fact tables and finally generating reporting tables/views
                            for the dashboard which was created using Microstratedy</li>
                            <li>Was involved in the whole software development lifecycle (requirement gathering -> developing -> testing -> deploying) with
                                the other 8 core team members</li>
                        </span>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm-3"><strong>Reflexis Systems</strong><br></br>Jan 2018 - June 2018</div>
                    <div className="col-sm-9">
                        <h5>Software Developer</h5>
                        <span>
                            <li>Programmed Reflexis Workforce Scheduler as a back end and front-end developer in Java and Angular</li>
                            <li>Product was built using Java, Spring Framework, Angular JS, DB2 and SVN was used for version controlling</li>
                            <li>Developed team working skills, gained experience in the field of software development by resolving 2-3 tickets daily</li>
                        </span>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm-3"><strong>Ofbusiness.com</strong><br></br>July 2017 - Dec 2017</div>
                    <div className="col-sm-9">
                        <h5>Software Developer</h5>
                        <span>
                            <li>Coded Tender Crawler Framework as a back-end developer in Java</li>
                            <li>The framework crawled almost 200 tenders per website which helped in keeping the company’s fin-tech application up to date</li>
                            <li>Technologies involved were Java, Spring Boot, Git Hub and IntelliJ was used to develop the product</li>
                        </span>
                        <br></br>
                        <br></br>
                    </div>
                </div>

            </div>
        )
    }
}

export default Work;