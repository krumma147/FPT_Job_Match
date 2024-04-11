import React from 'react'
import Navbar from '../../../components/home/Navbar'
import Search from '../../../components/home/Search'
import JobSupport from '../../../components/home/JobSupport'
import Footer from '../../../components/home/Footer'
import JobDetailBody from './JobDetailBody'
export default function JobDetail() {
  return (
      <div>
          <Navbar page={'another-page'} />
          <div class="clearfix"></div>
          <JobDetailBody/>
          <JobSupport />
          <Footer />
      </div>
  )
}
