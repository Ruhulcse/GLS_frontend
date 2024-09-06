/* eslint-disable react/prop-types */
import {
	selectCurrentToken,
	selectCurrentUserRole,
} from '@/store/api/auth/authSlice';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children, allowedRoles }) {
	const token = useSelector(selectCurrentToken);
	const location = useLocation();
	const role = useSelector(selectCurrentUserRole);

	console.log(role, allowedRoles);

	if (!token) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return allowedRoles?.includes(role) ? (
		children
	) : (
		<Navigate to='/unauthorized' state={{ from: location }} replace />
	);

	// return token ? (
	// 	children
	// ) : (
	// 	<Navigate to='/login' state={{ from: location }} replace />
	// );
}

export default PrivateRoute;
