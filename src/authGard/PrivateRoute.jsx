import useAuth from '@/hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ element:Element }) {
    const isLoggedIn = useAuth();
    return isLoggedIn ? <Element/> : <Navigate to='/logIn' />;
}

export default PrivateRoute;


