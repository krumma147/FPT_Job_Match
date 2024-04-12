import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
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
                    window.location.href = '/admin';
                } else if (decodedToken.Role === 'JobSeeker' || decodedToken.Role === 'Employer') {
                    window.location.href = '/';
                }
            }
            Cookies.set('token', token, { expires: 7 });
        };

        fetchUser();
    }, [location]);

    return <div>Loading...</div>;
};