import { menuItems } from '@/constant/data';
import useSemiDark from '@/hooks/useSemiDark';
import useSidebar from '@/hooks/useSidebar';
import useSkin from '@/hooks/useSkin';
import { selectCurrentUserType } from '@/store/api/auth/authSlice';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import SidebarLogo from './Logo';
import Navmenu from './Navmenu';

const Sidebar = () => {
	const userType =
		useSelector(selectCurrentUserType) ||
		JSON.parse(localStorage.getItem('auth')).userType;
	const scrollableNodeRef = useRef();
	const [scroll, setScroll] = useState(false);

	// Adjust the menu selection based on user type
	let selectedMenu = menuItems;

	// Shipper-specific menu
	if (userType === 'shipper') {
		selectedMenu = menuItems.filter((item) =>
			['Dashboard', 'Shippers', 'My Plans'].includes(item.title)
		);
		// Carrier-specific menu
	}
	else if(userType === 'agent') {
		selectedMenu = menuItems.filter((item) =>[
			'Dashboard',"My Plans"].includes(item.title)
		)
	}
	else if(userType === 'broker') {
		selectedMenu = menuItems
			.map((item) => {
				// if (item.title === 'Shippers') {
				// 	// Filter 'Shippers' to include only 'Shipments' and exclude 'Create Shipment'
				// 	return {
				// 		...item,
				// 		child: item.child.filter(
				// 			(childItem) => childItem.childtitle === 'Shipments'
				// 		),
				// 	};
				// }
				if(item.title === 'Users'){
					return {
						...item,
						child: item.child.filter(
							(childItem) => childItem.childtitle === 'User List'
						)
					}
				}
				// Allow Dashboard, My Bids, and My Plans for carrier
				if (['Dashboard','Shippers', 'Assign loads', 'My Plans'].includes(item.title)) {
					return item;
				}
				// Return null for items not allowed
				return null;
			})
			.filter(Boolean); // Remove any null items from the menu
	}
	 else if (userType === 'carrier') {
		selectedMenu = menuItems
			.map((item) => {
				if (item.title === 'Shippers') {
					// Filter 'Shippers' to include only 'Shipments' and exclude 'Create Shipment'
					return {
						...item,
						child: item.child.filter(
							(childItem) => childItem.childtitle === 'Shipments'
						),
					};
				}
				// Allow Dashboard, My Bids, and My Plans for carrier
				if (['Dashboard',"Broker", 'My Bids', 'My Plans'].includes(item.title)) {
					return item;
				}
				// Return null for items not allowed
				return null;
			})
			.filter(Boolean); // Remove any null items from the menu
	} else if (userType === 'supperadmin') {
		selectedMenu = menuItems
			.map((item) => {
				if (!['Assign loads'].includes(item.title)) {
					return item;
				}
				return null;
			})
			.filter(Boolean); 
	}

	useEffect(() => {
		const handleScroll = () => {
			if (scrollableNodeRef.current.scrollTop > 0) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};
		scrollableNodeRef.current.addEventListener('scroll', handleScroll);
	}, [scrollableNodeRef]);

	const [collapsed, setMenuCollapsed] = useSidebar();
	const [menuHover, setMenuHover] = useState(false);

	const [isSemiDark] = useSemiDark();
	const [skin] = useSkin();

	return (
		<div className={isSemiDark ? 'dark' : ''}>
			<div
				className={`sidebar-wrapper bg-white dark:bg-slate-800 ${
					collapsed ? 'w-[72px] close_sidebar' : 'w-[248px]'
				}
					${menuHover ? 'sidebar-hovered' : ''}
					${
						skin === 'bordered'
							? 'border-r border-slate-200 dark:border-slate-700'
							: 'shadow-base'
					}
				`}
				onMouseEnter={() => setMenuHover(true)}
				onMouseLeave={() => setMenuHover(false)}
			>
				<SidebarLogo menuHover={menuHover} />
				<div
					className={`h-[60px] absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none ${
						scroll ? ' opacity-100' : ' opacity-0'
					}`}
				></div>

				<SimpleBar
					className="sidebar-menu px-4 h-[calc(100%-80px)]"
					scrollableNodeProps={{ ref: scrollableNodeRef }}
				>
					<Navmenu menus={selectedMenu} />
				</SimpleBar>
			</div>
		</div>
	);
};

export default Sidebar;
