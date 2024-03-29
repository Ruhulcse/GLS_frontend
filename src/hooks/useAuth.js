import { useSelector } from 'react-redux';

function useAuth() {
	const { isLoggedIn } = useSelector(state => state.auth);

	if (isLoggedIn) {
		return true;
	} else {
		return null;
	}
}

export default useAuth;
