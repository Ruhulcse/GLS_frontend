import Card from '@/components/ui/Card';
import fetchWrapper from '@/util/fetchWrapper';
import { formatTimeOrDate } from '@/util/helpers';
import { Menu } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';
const Notifications = () => {
	const [notifications, setNotifications] = useState([]);
	const { token } = useSelector(state => state.auth);
	useEffect(() => {
		const fetchNotifications = async () => {
			try {
				const response = await fetchWrapper(`notifications`);
				if (response.data.data.length) {
					const notificationData = response.data.data?.reverse();
					setNotifications(notificationData);

					// calculate unread count
					const undeadNotifications = notificationData.filter(
						notification => !notification.isRead
					);
					console.log(
						'fetchNotifications == undeadNotifications:',
						undeadNotifications
					);
				}
			} catch (error) {
				toast.error('Failed to load notifications.');
			}
		};

		fetchNotifications();

		const socket = io('http://localhost:5000', {
			query: { token: `${token}` },
		});

		socket.on('bidnotification', notification => {
			fetchNotifications();
			toast.success(notification.message, { position: 'top-right' });
		});

		return () => socket.disconnect();
	}, [token]);

	const markAsRead = async notificationId => {
		try {
			const response = await fetchWrapper.post(
				`notifications/${notificationId}/markAsRead`
			);
			if (response.status === 200) {
				setNotifications(prev =>
					prev.map(n => (n._id === notificationId ? { ...n, isRead: true } : n))
				);
			}
		} catch (error) {
			toast.error('Failed to mark as read.');
		}
	};
	return (
		<div>
			<Card bodyClass='p-0'>
				<div className='flex justify-between px-4 py-4 border-b border-slate-100 dark:border-slate-600'>
					<div className='text-sm text-slate-800 dark:text-slate-200 font-medium leading-6'>
						All Notifications
					</div>
				</div>
				<div className='divide-y divide-slate-100 dark:divide-slate-800'>
					<Menu as={Fragment}>
						{notifications?.map((item, i) => (
							<Link
								to={`/${item.link}`}
								key={i}
								onClick={() => !item.isRead && markAsRead(item._id)}
							>
								<Menu.Item key={i}>
									{({ active }) => (
										<div
											className={`${
												active
													? 'bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 text-slate-800'
													: 'text-slate-600 dark:text-slate-300'
											} block w-full px-4 py-2 text-sm  cursor-pointer`}
										>
											<div className='flex ltr:text-left rtl:text-right'>
												<div className='flex-1'>
													<div
														className={`${
															active
																? 'text-slate-600 dark:text-slate-300'
																: ' text-slate-600 dark:text-slate-300'
														} text-sm`}
													>
														{item.title}
													</div>
													<div
														className={`${
															active
																? 'text-slate-500 dark:text-slate-200'
																: ' text-slate-600 dark:text-slate-300'
														} text-xs leading-4`}
													>
														{item.desc}
													</div>
													<div className='text-slate-400 dark:text-slate-400 text-xs mt-1'>
														{formatTimeOrDate(item.createdAt)}
													</div>
												</div>
												{!item.isRead && (
													<div className='flex-0'>
														<span className='h-[10px] w-[10px] bg-danger-500 border border-white dark:border-slate-400 rounded-full inline-block'></span>
													</div>
												)}
											</div>
										</div>
									)}
								</Menu.Item>
							</Link>
						))}
					</Menu>
				</div>
			</Card>
		</div>
	);
};

export default Notifications;
