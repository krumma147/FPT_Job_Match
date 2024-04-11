import React from 'react'

export default function RecuiterNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-recuitment">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNava" aria-controls="navbarNava" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse container" id="navbarNava">
                <ul className="navbar-nav nav-recuitment-li">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Quản lý hồ sơ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Việc làm của tôi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Việc làm đã lưu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Quản lý hồ sơ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cài đặt</a>
                    </li>
                </ul>
                <ul className="rec-nav-right">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tạo hồ sơ</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
