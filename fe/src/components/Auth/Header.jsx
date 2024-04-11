import React from 'react'

export default function Header(props) {
    return (
        <div className="login-header">
            <div className="w-login m-auto">
                <div className="login-logo">
                    <h3>
                        <a href="/">
                            <img src="assets/home/img/techjobs_bgw.png" alt="TechJobs" />
                        </a>
                    </h3>
                    <span className="login-breadcrumb"><em>/</em> {props.title}</span>
                </div>
                <div className="login-right">
                    <a href="/" className="btn btn-return">Return Home</a>
                </div>
            </div>
        </div>

    )
}
