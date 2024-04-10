import React from 'react'
import Navbar from '../../../components/home/Navbar'
import JobSupport from '../../../components/home/JobSupport'
import Footer from '../../../components/home/Footer'
import PostNewBody from './PostNewBody'

export default function PostNews() {
  return (
    <div>
          <Navbar page={'another-page'} />
          <div class="clearfix"></div>
          <PostNewBody />
          <JobSupport />
          <Footer />
    </div>
  )
}
