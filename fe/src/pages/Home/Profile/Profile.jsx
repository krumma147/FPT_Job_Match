import React from 'react'
import Navbar from '../../../components/home/Navbar'
import JobSupport from '../../../components/home/JobSupport'
import Footer from '../../../components/home/Footer'
import RecuiterNav from './RecuiterNav'
import WidgetandPublished from './WidgetandPublished'

export default function Profile() {
  return (
    <div>
          <Navbar page={'another-page'} />
          <div class="clearfix"></div>
          <RecuiterNav />
          <WidgetandPublished />
          <JobSupport />
          <Footer />
    </div>
  )
}
