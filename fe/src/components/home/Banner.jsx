import React from 'react'

export default function Banner() {
    return (
        <div className="container-fluid clear-left clear-right">
            <div className="main-banner">
                <div className="banner-image">
                    <img src="assets/home/img/banner2.jpg" alt="banner-image" />
                </div>
            </div>
            <div className="banner-content">
                <h3>1000+ Jobs For Developers</h3>
                <div className="banner-tags">
                    <ul>
                        <li><a href="#">Java</a></li>
                        <li><a href="#">Python</a></li>
                        <li><a href="#">Tester</a></li>
                        <li><a href="#">QA QC</a></li>
                        <li><a href="#">.NET</a></li>
                        <li><a href="#">Javascript</a></li>
                        <li><a href="#">Business Analyst</a></li>
                        <li><a href="#">Designer</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
