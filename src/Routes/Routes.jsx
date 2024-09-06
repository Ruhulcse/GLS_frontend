import ScrollTop from '@/components/ScrollTop/ScrollTop';
import Blogs from '@/pages/admin/Blogs/Blogs-list';
import CreateBlog from '@/pages/admin/Blogs/Create-Blog';
import DetailsBlog from '@/pages/admin/Blogs/DetailsBlog';
import ShipmentList from '@/pages/admin/shipments/shipment-list';
import CardDetails from '@/pages/guide/subPage/CardDetails';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
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
import Guide from './../pages/guide/Guide';

//import PrivateRoute from "@/authGard/PrivateRoute";
// import Text from '@/components/Text';
import ForgetPassword from '@/auth/ForgetPassword';
import Login from '@/auth/Login';
import ReSetPassword from '@/auth/ResetPassword';
import SignUp from '@/auth/SignUp';
import PrivateRoute from '@/authGard/PrivateRoute';
import PublicRoute from '@/authGard/PublicRoute';
import Insurance from '@/components/Insurance/Insurance';
import Load from '@/pages/Product/Load';
import ProductFinder from '@/pages/Product/ProductFinder';
import GuideDetailsPage from '@/pages/admin/Recources/Guide/GuideBlogDetails';
import GuideListPage from '@/pages/admin/Recources/Guide/GuideList';
import AgentListPage from '@/pages/admin/agents/agent-list';
import BidListPage from '@/pages/admin/bids/bids-list';
import ChatPage from '@/pages/admin/chat';
import NotificationsPage from '@/pages/admin/notifications';
import PlansPage from '@/pages/admin/plans';
import ProfilePage from '@/pages/admin/profile';
import ShipmentViewPage from '@/pages/admin/shipments/shipment-view';
import SuccessPage from '@/pages/admin/success';
import UserListPage from '@/pages/admin/users/user-list';

const ShipmentFormPage = lazy(() =>
	import('@/pages/admin/shipments/shipment-form')
);
const BlogUploadForm = lazy(() =>
	import('@/components/Blogs/form/BlogUploadFrom')
);
const GuideBlogUploadForm = lazy(() =>
	import('@/pages/admin/Recources/Guide/CreateGuide')
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
				element: <Insurance></Insurance>,
			},
			{
				path: '/load',
				element: <Load></Load>,
			},
			{
				path: '/finder',
				element: <ProductFinder></ProductFinder>,
			},
			{
				path: '/signUp',
				element: (
					<PublicRoute>
						<SignUp />
					</PublicRoute>
				),
			},
			{
				path: '/logIn',
				element: (
					<PublicRoute>
						<Login />
					</PublicRoute>
				),
			},
			{
				path: '/forgetPassword',
				element: (
					<PublicRoute>
						<ForgetPassword />
					</PublicRoute>
				),
			},
			{
				path: '/resetPassword',
				element: (
					<PublicRoute>
						<ReSetPassword />
					</PublicRoute>
				),
			},
		],
	},
	{
		element: (
			<PrivateRoute allowedRoles={['admin', 'shipper', 'carrier']}>
				<AdminLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: '/dashboard',
				element: (
					<PrivateRoute allowedRoles={['admin', 'shipper', 'carrier']}>
						<Dashboard />
					</PrivateRoute>
				),
			},
			{
				path: '/shipments',
				element: (
					<PrivateRoute allowedRoles={['admin', 'shipper', 'carrier']}>
						<ShipmentList />
					</PrivateRoute>
				),
			},
			{
				path: '/create-shipment',
				element: (
					<PrivateRoute allowedRoles={['admin', 'shipper']}>
						<ShipmentFormPage />
					</PrivateRoute>
				),
			},
			{
				path: '/profile/:id',
				element: (
					<PrivateRoute allowedRoles={['admin', 'shipper','carrier']}>
						<ProfilePage />
					</PrivateRoute>
				),
			},
			{
				path: '/shipment/:id',
				element: (
					<PrivateRoute allowedRoles={['admin', 'shipper']}>
						<ShipmentViewPage />
					</PrivateRoute>
				),
			},
			{
				path: '/shipment/edit/:id',
				element: (
					<PrivateRoute allowedRoles={['admin', 'shipper']}>
						<ShipmentFormPage />
					</PrivateRoute>
				),
			},
			{
				path: '/plans',
				element: (
					<PrivateRoute allowedRoles={['admin', 'shipper', 'carrier']}>
						<PlansPage />
					</PrivateRoute>
				),
			},
			{
				path: '/success',
				element: <SuccessPage />,
			},
			{
				path: '/blogs',
				element: (
					<PrivateRoute allowedRoles={['admin']}>
						<Blogs />
					</PrivateRoute>
				),
			},
			{
				path: '/blogs-details/:id',
				element: (
					<PrivateRoute allowedRoles={['admin']}>
						<DetailsBlog />
					</PrivateRoute>
				),
			},
			{
				path: '/blog/edit-blog/:id',
				element: (
					<PrivateRoute allowedRoles={['admin']}>
						<BlogUploadForm />
					</PrivateRoute>
				),
			},
			{
				path: '/create-blog',
				element: (
					<PrivateRoute allowedRoles={['admin']}>
						<CreateBlog />
					</PrivateRoute>
				),
			},
			{
				path: '/create-guide',
				element: (
					<PrivateRoute allowedRoles={['admin']}>
						<GuideBlogUploadForm />
					</PrivateRoute>
				),
			},
			{
				path: '/guideblog-list',
				element: (
					<PrivateRoute allowedRoles={['admin']}>
						<GuideListPage />,
					</PrivateRoute>
				),
			},
			{
				path: '/guideblog-details/:id',
				element: (
					<PrivateRoute allowedRoles={['admin']}>
						<GuideDetailsPage />
					</PrivateRoute>
				),
			},
			{
				path: '/guideblog/edit-guideblog/:id',
				element: (
					<PrivateRoute allowedRoles={['admin']}>
						<GuideBlogUploadForm />
					</PrivateRoute>
				),
			},
			{
				path: '/users',
				element: (
					<PrivateRoute allowedRoles={['admin']}>
						<UserListPage />
					</PrivateRoute>
				),
			},
			{
				path: '/notifications',
				element: (
					<PrivateRoute allowedRoles={['admin', 'shipper','carrier']}>
						<NotificationsPage />
					</PrivateRoute>
				),
			},
			{
				path: '/agents',
				element: (
					<PrivateRoute allowedRoles={['admin']}>
						<AgentListPage />
					</PrivateRoute>
				),
			},
			{
				path: '/bids',
				element: (
					<PrivateRoute allowedRoles={['admin', 'carrier']}>
						<BidListPage />
					</PrivateRoute>
				),
			},

			{
				path: '/chat',
				element: (
					<PrivateRoute allowedRoles={['admin', 'shipper','carrier']}>
						{' '}
						<ChatPage />
					</PrivateRoute>
				),
			},
			{
				path: '/chat/:id',
				element: (
					<PrivateRoute allowedRoles={['admin', 'shipper','carrier']}>
						<ChatPage />
					</PrivateRoute>
				),
			},
		],
	},
]);
