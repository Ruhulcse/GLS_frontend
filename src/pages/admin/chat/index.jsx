/* eslint-disable no-unused-vars */
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import useWidth from '@/hooks/useWidth';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import Blank from './Blank';
import Chat from './Chat';
import Contacts from './Contacts';
import MyProfile from './MyProfile';

import fetchWrapper from '@/util/fetchWrapper';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import {
	sendMessage,
	setContactSearch,
	setContacts,
	toggleMobileChatSidebar,
} from './store';
const ChatPage = () => {
	const { id } = useParams();
	const { token } = useSelector(state => state.auth);
	const socket = useRef(null);
	const { width, breakpoints } = useWidth();
	const dispatch = useDispatch();
	const { activechat, openinfo, mobileChatSidebar, contacts, searchContact } =
		useSelector(state => state.chat);

	const { _id } = useSelector(state => state.user.user);

	const searchContacts = contacts?.filter(item =>
		item.fullName.toLowerCase().includes(searchContact.toLowerCase())
	);

	const getUserChats = async id => {
		try {
			const { data } = await fetchWrapper(`/chat/${id}`);
			console.log('getUserChats == data:', data);
			const filteredMembers = data.flatMap(item =>
				item.members
					.filter(member => member._id !== _id)
					.map(member => ({
						...member,
						chatId: item._id,
						avatar:
							'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
					}))
			);
			console.log('getUserChats == filteredMembers:', filteredMembers);

			if (filteredMembers?.length) {
				dispatch(setContacts(filteredMembers));
			}
		} catch (error) {
			console.error;
		}
	};

	useEffect(() => {
		// Connect to Socket.IO server
		socket.current = io('http://localhost:5000', {
			query: { token: `${token}` },
		});

		socket.current.on('rcvmsg', message => {
			console.log('useEffect == message:', message);

			dispatch(
				sendMessage({
					content: message.text,
					sender: 'them',
					// img: image1,
					receiverId: message.senderId,
					time: moment(),
				})
			);
		});

		return () => {
			socket.current.disconnect();
		};
	}, [token, dispatch]);

	useEffect(() => {
		_id && getUserChats(_id);
	}, [_id]);

	return (
		<div className='flex lg:space-x-5 chat-height overflow-hidden relative rtl:space-x-reverse'>
			<div
				className={`transition-all duration-150 flex-none min-w-[260px] 
        ${
					width < breakpoints.lg
						? 'absolute h-full top-0 md:w-[260px] w-[200px] z-[999]'
						: 'flex-none min-w-[260px]'
				}
        ${
					width < breakpoints.lg && mobileChatSidebar
						? 'left-0 '
						: '-left-full '
				}
        `}
			>
				<Card
					bodyClass=' relative p-0 h-full overflow-hidden '
					className='h-full'
				>
					<div className='border-b border-slate-100 dark:border-slate-700 pb-4'>
						<MyProfile />
					</div>
					<div className='border-b border-slate-100 dark:border-slate-700 py-1'>
						<div className='search px-3 mx-6 rounded flex items-center space-x-3 rtl:space-x-reverse'>
							<div className='flex-none text-base text-slate-900 dark:text-slate-400'>
								<Icon icon='bytesize:search' />
							</div>
							<input
								onChange={e => dispatch(setContactSearch(e.target.value))}
								placeholder='Search...'
								className='w-full flex-1 block bg-transparent placeholder:font-normal placeholder:text-slate-400 py-2 focus:ring-0 focus:outline-none dark:text-slate-200 dark:placeholder:text-slate-400'
							/>
						</div>
					</div>
					<SimpleBar className='contact-height'>
						{searchContacts?.map((contact, i) => (
							<Contacts key={i} contact={contact} />
						))}
					</SimpleBar>
				</Card>
			</div>

			{/* overlay */}
			{width < breakpoints.lg && mobileChatSidebar && (
				<div
					className='overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter
         backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md'
					onClick={() => dispatch(toggleMobileChatSidebar(!mobileChatSidebar))}
				></div>
			)}

			{/* mai  chat box*/}
			<div className='flex-1'>
				<div className='parent flex space-x-5 h-full rtl:space-x-reverse'>
					{/* main message body*/}
					<div className='flex-1'>
						<Card bodyClass='p-0 h-full' className='h-full'>
							{id || activechat ? (
								<div className='divide-y divide-slate-100 dark:divide-slate-700 h-full'>
									<Chat firstId={_id} secondId={id} />
								</div>
							) : (
								<Blank />
							)}
						</Card>
					</div>
					{/* right side information*/}
					{/* {width > breakpoints.lg && openinfo && activechat && (
            <div className="flex-none w-[285px]">
              <Card bodyClass="p-0 h-full" className="h-full">
                <Info />
              </Card>
            </div>
          )} */}
				</div>
			</div>
		</div>
	);
};

export default ChatPage;
