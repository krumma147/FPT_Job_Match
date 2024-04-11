import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="container-fluid footer-wrap  clear-left clear-right">
                <div className="container footer">
                    <div className="row">
                        <div className="col-md-4 col-sm-8 col-12">
                            <h2 className="footer-heading">
                                <span>About</span>
                            </h2>
                            <p className="footer-content">
                                Discover the best way to find houses, condominiums, apartments and HDBs for sale and rent in Singapore with JobsOnline, Singapore's Fastest Growing Jobs Portal.
                            </p>
                            <ul className="footer-contact">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-phone fticn" /> +123 456 7890
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-envelope fticn" />
                                        hello@123.com
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-map-marker fticn" />
                                        33 Xô Viết Nghệ Tĩnh, Đà Nẵng
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-4 col-12">
                            <h2 className="footer-heading">
                                <span>Ngôn ngữ nổi bật</span>
                            </h2>
                            <ul className="footer-list">
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">Java</a></li>
                                <li><a href="#">Frontend</a></li>
                                <li><a href="#">SQL Server</a></li>
                                <li><a href="#">.NET</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 col-12">
                            <h2 className="footer-heading">
                                <span>Tất cả ngành nghề</span>
                            </h2>
                            <ul className="footer-list">
                                <li><a href="#">Lập trình viên</a></li>
                                <li><a href="#">Kiểm thử phần mềm</a></li>
                                <li><a href="#">Kỹ sư cầu nối</a></li>
                                <li><a href="#">Quản lý dự án</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 col-12">
                            <h2 className="footer-heading">
                                <span>Tất cả hình thức</span>
                            </h2>
                            <ul className="footer-list">
                                <li><a href="#">Nhân viên chính thức</a></li>
                                <li><a href="#">Nhân viên bán thời gian</a></li>
                                <li><a href="#">Freelancer</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-12 col-12">
                            <h2 className="footer-heading">
                                <span>Tất cả tỉnh thành</span>
                            </h2>
                            <ul className="footer-list">
                                <li><a href="#">Hồ Chính Minh</a></li>
                                <li><a href="#">Hà Nội</a></li>
                                <li><a href="#">Đà Nẵng</a></li>
                                <li><a href="#">Buôn Ma Thuột</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="container-fluid copyright-wrap">
                <div className="container copyright">
                    <p className="copyright-content">
                        Copyright © 2024 <a href="/"> Tech<b>Job</b></a>. All Right Reserved.
                    </p>
                </div>
            </footer>
        </div>

    )
}
