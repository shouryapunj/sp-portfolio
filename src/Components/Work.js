import React, { Component } from 'react'

class Work extends Component {


    render = () => {
        return (
            <div className="container-fluid" style={{ textAlign: 'left', backgroundColor: 'white', height: '600px', padding: '70px 70px' }}>
                <u><h4>WORK</h4></u>
                <br></br>
                <div className="row">
                    <div className="col-sm-3">ZS Associates</div>
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

                
                <hr></hr>


            </div>
        )
    }
}

export default Work;