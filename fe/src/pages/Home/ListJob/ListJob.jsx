import React from 'react'
import Navbar from '../../../components/home/Navbar'
import Search from '../../../components/home/Search'
import JobSupport from '../../../components/home/JobSupport'
import Footer from '../../../components/home/Footer'
import ListJobBody from './ListJobBody'
export default function ListJob() {
    return (
        <div>
            <Navbar page={'another-page'} />
            <div class="clearfix"></div>
            <Search search={{ color: '#000', borderBottom: '1px solid #000;' }} />
            <ListJobBody/>
            <JobSupport />
            <Footer />
        </div>
    )
}
