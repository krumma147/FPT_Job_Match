import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { Puff } from 'react-loader-spinner';
export const Callback = () => {
    const location = useLocation();
    useEffect(() => {
        const fetchUser = async () => {
            const params = new URLSearchParams(location.search);
            const token = params.get('token');

            if (token) {
                // Decode the token
                const decodedToken = jwtDecode(token);

                // Check the role and redirect the user
                if (decodedToken.Role === 'Admin') {
                    setTimeout(() => {
                        window.location.href = '/admin';
                    }, 1000);
                } else if (decodedToken.Role === 'JobSeeker' || decodedToken.Role === 'Employer') {
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 1000);
                }
            }
            Cookies.set('token', token, { expires: 7 });
        };

        fetchUser();
    }, [location]);

    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }}>
        <Puff
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
    </div>
};