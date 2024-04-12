import React from 'react'
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export const checkAccess = (allowedRoles) => {
    const token = Cookies.get('token');

    if (!token) {
        return false;
    }

    const decodedToken = jwtDecode(token);

    return allowedRoles.includes(decodedToken.Role);
};

export const getUserId = () => {
    const token = Cookies.get('token');

    if (!token) {
        return null;
    }

    const decodedToken = jwtDecode(token);

    return decodedToken.UserId;
};
