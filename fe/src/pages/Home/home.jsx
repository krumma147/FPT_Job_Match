import React from 'react'
import Spinner from '../../components/home/Spinner'
import Navbar from '../../components/home/Navbar '
import Carousel from '../../components/home/Carousel'
import Search from '../../components/home/Search'
import Category from '../../components/home/Category'
import About from '../../components/home/About'
import Job from '../../components/home/Job'
import Testimonial from '../../components/home/Testimonial'
import HomeFooter from '../../Share/Footer/HomeFooter'

export default function home() {
  return (
    <div className="container-xxl bg-white p-0">
      {/* <Spinner /> */}
      <Navbar />
      <Carousel />
      <Search />
      <Category />
      <About />
      <Job />
      <Testimonial />
      <HomeFooter />
    </div>

  )
}
