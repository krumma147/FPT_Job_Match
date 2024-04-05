import React, {  } from 'react';

const SignUpHeader = () => {
    
    return (
        <div class="login-header">
			<div class="w-login m-auto">
				<div class="login-logo">
					<h3>
						<a href="#">Tech<span class="txb-logo">Jobs.</span></a>
						<a href="#">
							<img src="./assets/images/techjobs_bgw.png" alt="TechJobs" />
						</a>
					</h3>
					<span class="login-breadcrumb"><em>/</em> Register</span>
				</div>
				<div class="login-right">
					<a href="#" class="btn btn-return">Return Home</a>
				</div>
			</div>
		</div>
    )
}

export default SignUpHeader;