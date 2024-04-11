import React from 'react'
import Navbar from '../../components/home/Navbar'
import Search from '../../components/home/Search'
import Banner from '../../components/home/Banner'
import SideBar from '../../components/home/SideBar'
import JobBoard from '../../components/home/JobBoard'
import TopEmployer from '../../components/home/TopEmployer'
import JobSalary from '../../components/home/JobSalary'
import News from '../../components/home/News'
import JobSupport from '../../components/home/JobSupport'
import Footer from '../../components/home/Footer'

export default function home() {
  return (
    <div>
      <Navbar />
      <div class="clearfix"></div>
      <Banner />
      <Search searchHome={{ marginTop: '-11rem' }} />
      <SideBar />
      <div class="clearfix"></div>
      <JobBoard />
      <div class="clearfix"></div>
      <TopEmployer />
      <div class="clearfix"></div>
      <JobSalary />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-ads">
                <a href="#">
                  <img src="assets/home/img/hna2.jpg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <News />
      <JobSupport />
      <Footer />
    </div>
  )
}
