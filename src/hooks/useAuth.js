import { useSelector } from 'react-redux';

function useAuth() {
	const { isLoggedIn } = useSelector(state => state.auth);
	console.log('i an auth hook', isLoggedIn);
	if (isLoggedIn) {
		return true;
	} else {
		return false;
	}
}

export default useAuth;
