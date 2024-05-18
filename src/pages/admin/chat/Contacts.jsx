/* eslint-disable react/prop-types */
import fetchWrapper from '@/util/fetchWrapper';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openChat } from './store';

const Contacts = ({ contact }) => {
	const {
		fullName,
		avatar,
		status,
		lastMessage,
		unredmessage,
		lastMessageTime,
		chatId,
		_id,
	} = contact;
	const { _id: loggedInUserId } = useSelector(state => state.user.user);

	const dispatch = useDispatch();

	const getMessage = async chatId => {
		try {
			const { data: messages } = await fetchWrapper.get(`/message/${chatId}`);
			const formattedMessages = messages.map(message => ({
				img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
				content: message.text,
				time: new Date(message.createdAt).toLocaleTimeString(),
				sender: message.senderId === loggedInUserId ? 'me' : 'them',
			}));

			dispatch(
				openChat({
					contact,
					activechat: true,
					messages: formattedMessages,
				})
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Link to={`/chat/${_id}`}>
			<div
				className='block w-full py-5 focus:ring-0 outline-none cursor-pointer group transition-all duration-150 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:bg-opacity-70'
				onClick={() => {
					getMessage(chatId);
				}}
			>
				<div className='flex space-x-3 px-6 rtl:space-x-reverse'>
					<div className='flex-none'>
						<div className='h-10 w-10 rounded-full relative'>
							<span
								className={`  status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0
                ${status === 'active' ? 'bg-success-500' : 'bg-secondary-500'}
              `}
							></span>
							<img
								src={avatar}
								alt=''
								className='block w-full h-full object-cover rounded-full'
							/>
						</div>
					</div>
					<div className='flex-1 text-start flex'>
						<div className='flex-1'>
							<span className='block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px]'>
								{fullName}
							</span>
							<span className='block text-slate-600 dark:text-slate-300 text-xs font-normal'>
								{lastMessage.slice(0, 14) + '...'}
							</span>
						</div>
						<div className='flex-none ltr:text-right rtl:text-end'>
							<span className='block text-xs text-slate-400 dark:text-slate-400 font-normal'>
								{moment(lastMessageTime).fromNow()}
							</span>
							{unredmessage > 0 && (
								<span className='inline-flex flex-col items-center justify-center text-[10px] font-medium w-4 h-4 bg-[#FFC155] text-white rounded-full'>
									{unredmessage}
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Contacts;
