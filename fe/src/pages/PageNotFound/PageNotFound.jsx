import React from 'react'
import Navbar from '../../components/home/Navbar'
import Footer from '../../components/home/Footer'
import JobSupport from '../../components/home/JobSupport'
export default function PageNotFound(props) {
    return (
        <div>
            <Navbar page={'another-page'}/>
            <div class="clearfix"></div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template mb-5 text-center">
                            <h1 className='text-danger'>Oops! 404 Not Found</h1>
                            <h2>No path found {props.match.url}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <JobSupport />
            <Footer />
        </div>

    )
}
