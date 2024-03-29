import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Nav from '../shared/Navbar/Nav';

const Layout = () => {
	const navigate = useNavigate();
	const isLoggedIn = useAuth();
	useEffect(() => {
		if (isLoggedIn) {
			navigate('/dashboard');
		}
	}, [isLoggedIn, navigate]);
	return (
		<div>
			<div>
				<Nav></Nav>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Layout;
