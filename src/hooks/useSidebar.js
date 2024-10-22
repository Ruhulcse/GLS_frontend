import { handleSidebarCollapsed } from '@/store/layout';
import { useDispatch, useSelector } from 'react-redux';

const useSidebar = () => {
	const dispatch = useDispatch();
	const collapsed = useSelector((state) => state.layout.isCollapsed);
	// console.log("useSidebar == collapsed:", collapsed)

	// ** Toggles Menu Collapsed
	const setMenuCollapsed = (val) => dispatch(handleSidebarCollapsed(val));

	return [collapsed, setMenuCollapsed];
};

export default useSidebar;
