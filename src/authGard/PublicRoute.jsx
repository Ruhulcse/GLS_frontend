/* eslint-disable react/prop-types */
import { selectCurrentToken } from '@/store/api/auth/authSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
	const token = useSelector(selectCurrentToken);
	return token ? <Navigate to='/dashboard' replace /> : children;
}

export default PublicRoute;
