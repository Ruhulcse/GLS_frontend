/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';

import Icon from '@/components/ui/Icon';
import { menuItems } from '@/constant/data';
import useDarkMode from '@/hooks/useDarkMode';
import useMobileMenu from '@/hooks/useMobileMenu';
import useSemiDark from '@/hooks/useSemiDark';
import useSkin from '@/hooks/useSkin';
import { selectCurrentUserType } from '@/store/api/auth/authSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import Navmenu from './Navmenu';

// import images
// import MobileLogoWhite from '@/assets/images/logo/logo-c-white.svg';
// import MobileLogo from '@/assets/images/logo/logo-c.svg';

const MobileMenu = ({ className = 'custom-class' }) => {
	const userType =
		useSelector(selectCurrentUserType) ||
		JSON.parse(localStorage.getItem('auth')).userType;
	const scrollableNodeRef = useRef();
	const [scroll, setScroll] = useState(false);
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

	const [isSemiDark] = useSemiDark();
	// skin
	const [skin] = useSkin();
	const [isDark] = useDarkMode();
	const [mobileMenu, setMobileMenu] = useMobileMenu();

	// Adjust the menu selection based on user type
	let selectedMenu = menuItems;

	// Shipper-specific menu
	if (userType === 'shipper') {
		selectedMenu = menuItems.filter((item) =>
			['Dashboard', 'Shippers', 'My Plans'].includes(item.title)
		);
		// Carrier-specific menu
	} else if (userType === 'carrier') {
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
				if (['Dashboard', 'My Bids', 'My Plans'].includes(item.title)) {
					return item;
				}
				// Return null for items not allowed
				return null;
			})
			.filter(Boolean); // Remove any null items from the menu
	}

	return (
		<div
			className={`${className} fixed  top-0 bg-white dark:bg-slate-800 shadow-lg  h-full   w-[248px]`}
		>
			<div className="logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] h-[85px]  px-4 ">
				<Link to="/dashboard">
					<div className="flex items-center space-x-4">
						<div className="logo-icon">
							{/* {!isDark && !isSemiDark ? (
								<img src={MobileLogo} alt='' />
							) : (
								<img src={MobileLogoWhite} alt='' />
							)} */}
						</div>
						<div>
							<h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
								GLS
							</h1>
						</div>
					</div>
				</Link>
				<button
					type="button"
					onClick={() => setMobileMenu(!mobileMenu)}
					className="cursor-pointer text-slate-900 dark:text-white text-2xl"
				>
					<Icon icon="heroicons:x-mark" />
				</button>
			</div>

			<div
				className={`h-[60px]  absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none ${
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
	);
};

export default MobileMenu;
