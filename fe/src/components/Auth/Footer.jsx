import React from 'react'

export default function Footer() {
    return (
        <footer className="login-footer">
            <div className="w-login m-auto">
                <div className="row">
                    {/* login footer left */}
                    <div className="col-md-6 col-sm-12 col-12 login-footer-left">
                        <div className="login-copyright">
                            <p>Copyright © 2024 <a href="#"> TechJobs</a>. All Rights Reserved.</p>
                        </div>
                    </div>
                    {/* login footer right */}
                    <div className="col-md-6 col-sm-12 col-12 login-footer-right">
                        <ul>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}
