import Dropdown from '@/components/ui/Dropdown';
import Icon from '@/components/ui/Icon';
import fetchWrapper from '@/util/fetchWrapper';
import { formatTimeOrDate } from '@/util/helpers';
import { Menu } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import io from 'socket.io-client';

const notifyLabel = (unreadCount) => {
	return (
		<span className="relative lg:h-[32px] lg:w-[32px] lg:bg-slate-100 text-slate-900 lg:dark:bg-slate-900 dark:text-white cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center">
			<Icon icon="heroicons-outline:bell" className="animate-tada" />
			{unreadCount > 0 && (
				<span className="absolute lg:right-0 lg:top-0 -top-2 -right-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
					{unreadCount}
				</span>
			)}
		</span>
	);
};

const Notification = () => {
	const [notifications, setNotifications] = useState([]);
	const [unreadCount, setUnreadCount] = useState(0);
	const { token } = useSelector((state) => state.auth);

	useEffect(() => {
		const fetchNotifications = async () => {
			try {
				const response = await fetchWrapper(`notifications`);
				if (response.data.data.length) {
					const notificationData = response.data.data?.slice(-5).reverse();
					setNotifications(notificationData);

					// calculate unread count
					const undeadNotifications = notificationData.filter(
						(notification) => !notification.isRead
					);
					// console.log(
					// 	'fetchNotifications == undeadNotifications:',
					// 	undeadNotifications
					// );
					setUnreadCount(undeadNotifications.length);
				}
				// setUnreadCount(response.data.unreadCount);
			} catch (error) {
				toast.error('Failed to load notifications.');
			}
		};

		fetchNotifications();

		const socket = io('http://localhost:5000', {
			query: { token: `${token}` },
			// transports: ['websocket'],
		});

		socket.on('bidnotification', (notification) => {
			console.log('useEffect == notification:', notification);
			fetchNotifications();
			toast.success(notification.message, { position: 'top-right' });
		});

		return () => socket.disconnect();
	}, [token]);

	const markAsRead = async (notificationId) => {
		try {
			await fetchWrapper.post(`notifications/${notificationId}/markAsRead`);

			setNotifications((prev) =>
				prev.map((n) => (n._id === notificationId ? { ...n, isRead: true } : n))
			);
			setUnreadCount((prev) => prev - 1);
		} catch (error) {
			toast.error('Failed to mark as read.');
		}
	};

	return (
		<Dropdown
			classMenuItems="md:w-[300px] top-[58px]"
			label={notifyLabel(unreadCount)}
		>
			<div className="flex justify-between px-4 py-4 border-b border-slate-100 dark:border-slate-600">
				<div className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-6">
					Notifications
				</div>
				<div className="text-slate-800 dark:text-slate-200 text-xs md:text-right">
					<Link to="/notifications" className="underline">
						View all
					</Link>
				</div>
			</div>
			<div className="divide-y divide-slate-100 dark:divide-slate-800">
				{notifications?.map((item, i) => (
					<Link
						to={item.link}
						key={i}
						onClick={() => !item.isRead && markAsRead(item._id)}
					>
						<Menu.Item>
							{({ active }) => (
								<div
									className={`block w-full px-4 py-2 text-sm cursor-pointer ${
										active
											? 'bg-slate-100 dark:bg-slate-700 text-slate-800'
											: 'text-slate-600 dark:text-slate-300'
									}`}
								>
									<div className="flex ltr:text-left rtl:text-right">
										{/* <div className='flex-none ltr:mr-3 rtl:ml-3'>
										<div className='h-8 w-8 bg-white rounded-full'>
											<img
												src={item.image}
												alt=''
												className='block w-full h-full object-cover rounded-full border'
											/>
										</div>
									</div> */}
										<div className="flex-1">
											<div className="text-sm">{item.title}</div>
											{/* <div className='text-xs leading-4'>{item.desc}</div> */}
											<div className="text-slate-400 text-xs mt-1">
												{formatTimeOrDate(item.createdAt)}
											</div>
										</div>
										{!item.isRead && (
											<div className="flex-0">
												<span className="h-[10px] w-[10px] bg-danger-500 border border-white dark:border-slate-400 rounded-full inline-block"></span>
											</div>
										)}
									</div>
								</div>
							)}
						</Menu.Item>
					</Link>
				))}
			</div>
		</Dropdown>
	);
};

export default Notification;
