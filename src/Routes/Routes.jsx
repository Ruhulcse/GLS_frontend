import ScrollTop from '@/components/ScrollTop/ScrollTop';
import ShipmentList from '@/pages/admin/shipments/shipment-list';
import CardDetails from '@/pages/guide/subPage/CardDetails';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Login from '../auth/Login';
import Learn from '../components/CarrierSections/Learn';
import Register from '../components/CarrierSections/Register';
import BlogPage from '../pages/Blog/BlogPage';
import AboutDetails from '../pages/Blog/subPage/AboutDetails';
import BlogDetails from '../pages/Blog/subPage/BlogDetails';
import BlogListPage from '../pages/Blog/subPage/BlogListPage';
import Home from '../pages/Home/Home';
import Brokers from '../pages/Solutions/Brokers';
import Carrier from '../pages/Solutions/Carrier';
import Contact from '../pages/Solutions/Contact';
import Shippers from '../pages/Solutions/Shippers';
import AdminLayout from '../pages/admin/layout/Layout';
import SignUp from './../auth/SignUp';
import Guide from './../pages/guide/Guide';

//import PrivateRoute from "@/authGard/PrivateRoute";
// import Text from '@/components/Text';

import PrivateRoute from '@/authGard/PrivateRoute';
import Insurance from '@/components/Insurance/Insurance';
import ProfilePage from '@/pages/admin/profile';
import UserListPage from '@/pages/admin/users/user-list';
import Load from '@/pages/Product/Load';
import ProductFinder from '@/pages/Product/ProductFinder';

const ShipmentFormPage = lazy(() =>
	import('@/pages/admin/shipments/shipment-form')
);
const Dashboard = lazy(() => import('@/pages/dashboard'));
//test commit updated
export const router = createBrowserRouter([
	{
		element: (
			<>
				<ScrollTop></ScrollTop>
				<Layout></Layout>
			</>
		),
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/carriers',
				element: <Carrier></Carrier>,
			},
			{
				path: '/brokers',
				element: <Brokers></Brokers>,
			},
			{
				path: '/shippers',
				element: <Shippers></Shippers>,
			},
			{
				path: '/guide',
				element: <Guide />,
			},
			{
				path: '/guide/:id',
				element: <CardDetails />,
			},
			{
				path: '/blog',
				element: <BlogPage></BlogPage>,
			},
			{
				path: '/blog/:id',
				element: <BlogDetails />,
			},
			{
				path: '/about/:id',
				element: <AboutDetails />,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			{
				path: '/learn',
				element: <Learn></Learn>,
			},
			{
				path: '/contact',
				element: <Contact></Contact>,
			},
			{
				path: '/blogs/:category',
				element: <BlogListPage />,
			},
			{
				path: '/blog/:id',
				element: <BlogDetails />,
			},
			{
				path: '/insurance',
				element: <Insurance></Insurance>
			},
			{
				path:'/load',
				element:<Load></Load>
			},
			{
				path:'/finder',
				element:<ProductFinder></ProductFinder>
			},
			{
				path: '/signUp',
				element: <SignUp />,
			},
			{
				path: '/logIn',
				element: <Login />,
			},
			{
				path: '/hello',
				element: <Text />,
			},
		],
	},
	{
		element: <AdminLayout />,
		children: [
			{
				path: '/dashboard',
				element: <PrivateRoute element={Dashboard} />,
			},
			{
				path: '/shipments',
				element: <PrivateRoute element={ShipmentList} />,
			},
			{
				path: '/create-shipment',
				element: <PrivateRoute element={ShipmentFormPage} />,
			},
			{
				path: '/users',
				element: <PrivateRoute element={UserListPage} />,
			},
			{
				path: '/profile/:id',
				element: <PrivateRoute element={ProfilePage} />,
			},
		],
	},

	// {
	//   path: "/blog",
	//   element: <Layout></Layout>,
	//   children: [
	//     {
	//       path: "/blog",
	//       element: <BlogPage></BlogPage>,
	//     },
	//     {
	//       path: "/blog/:id",
	//       element: <BlogDetails />,
	//     },
	//     {
	//       path: "/about/:id",
	//       element: <AboutDetails />,
	//     },
	//   ],
	// },
	//       path: '/blogs/:category',
	//       element: <BlogListPage/>
	//     },

	//   ],
	// },

	//   {
	//     path:'/signUp',
	//     element:<SignUp/>
	//   },
	//   {
	//     path:'/logIn',
	//     element:<Login/>
	//   },
]);
