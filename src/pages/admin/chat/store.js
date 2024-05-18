import { createSlice } from '@reduxjs/toolkit';

export const appChatSlice = createSlice({
	name: 'appchat',
	initialState: {
		openProfile: false,
		openinfo: true,
		activechat: false,
		searchContact: '',
		mobileChatSidebar: false,
		profileinfo: {},
		messFeed: [],
		user: {},
		contacts: [
			// {
			//   id: 1,
			//   fullName: "Kathryn Murphy",
			//   role: "Frontend Developer",
			//   lastmessage: "Hey! there I'm available",
			//   lastmessageTime: "2:30 PM",
			//   unredmessage: Math.floor(Math.random() * 10),
			//   avatar: image2,
			//   status: "offline",
			// },
			// {
			//   id: 2,
			//   fullName: "Felecia Rower",
			//   role: " UI/UX Designer",
			//   lastmessage: "Hey! there I'm available",
			//   lastmessageTime: "2:30 PM",
			//   unredmessage: Math.floor(Math.random() * 10),
			//   avatar: image3,
			//   status: "active",
			// },
			// {
			//   id: 3,
			//   fullName: " Aileen Chavez",
			//   role: " Backend Developer",
			//   lastmessage: "Hey! there I'm available",
			//   lastmessageTime: "2:30 PM",
			//   unredmessage: Math.floor(Math.random() * 10),
			//   avatar: image4,
			//   status: "offline",
			// },
			// {
			//   id: 4,
			//   fullName: "Alec Thompson",
			//   role: " Full Stack Developer",
			//   lastmessage: "Hey! there I'm available",
			//   lastmessageTime: "2:30 PM",
			//   unredmessage: Math.floor(Math.random() * 10),
			//   avatar: image5,
			//   status: "active",
			// },
			// {
			//   id: 5,
			//   fullName: "Murphy Aileen",
			//   role: "Frontend Developer",
			//   lastmessage: "Hey! there I'm available",
			//   lastmessageTime: "2:30 PM",
			//   unredmessage: Math.floor(Math.random() * 10),
			//   avatar: image1,
			//   status: "offline",
			// },
		],
		chats: [
			// {
			//   id: 1,
			//   userId: 1,
			//   messages: [
			//     {
			//       img: image2,
			//       content: "Hey! How are you?",
			//       time: "10:00",
			//       sender: "them",
			//     },
			//     {
			//       img: image2,
			//       content: "Good, I will book the meeting room for you.",
			//       time: "10:02",
			//       sender: "them",
			//     },
			//     {
			//       content: "Hi, I am good, what about you?",
			//       img: image1,
			//       time: "10:01",
			//       sender: "me",
			//     },
			//     {
			//       content: "Thanks, It will be great.",
			//       img: image1,
			//       time: "10:03",
			//       sender: "me",
			//     },
			//     {
			//       img: image2,
			//       content: "Hey! How are you?",
			//       time: "10:00",
			//       sender: "them",
			//     },
			//     {
			//       img: image2,
			//       content: "Good, I will book the meeting room for you.",
			//       time: "10:02",
			//       sender: "them",
			//     },
			//     {
			//       content: "Hi, I am good, what about you?",
			//       img: image1,
			//       time: "10:01",
			//       sender: "me",
			//     },
			//     {
			//       content: "Thanks, It will be great.",
			//       img: image1,
			//       time: "10:03",
			//       sender: "me",
			//     },
			//   ],
			// },
			// {
			//   id: 2,
			//   userId: 2,
			//   messages: [
			//     {
			//       img: image2,
			//       content: "Hey! How are you?",
			//       time: "10:00",
			//       sender: "them",
			//     },
			//     {
			//       img: image2,
			//       content: "Good, I will book the meeting room for you.",
			//       time: "10:02",
			//       sender: "them",
			//     },
			//   ],
			// },
			// {
			//   id: 3,
			//   userId: 3,
			//   messages: [
			//     {
			//       img: image2,
			//       content: "Hey! How are you?",
			//       time: "10:00",
			//       sender: "them",
			//     },
			//     {
			//       img: image2,
			//       content: "Good, I will book the meeting room for you.",
			//       time: "10:02",
			//       sender: "me",
			//     },
			//   ],
			// },
			// {
			//   id: 4,
			//   userId: 4,
			//   messages: [
			//     {
			//       img: image2,
			//       content: "Hey! How are you?",
			//       time: "10:00",
			//       sender: "me",
			//     },
			//     {
			//       img: image2,
			//       content: "Good, I will book the meeting room for you.",
			//       time: "10:02",
			//       sender: "them",
			//     },
			//   ],
			// },
			// {
			//   id: 5,
			//   userId: 5,
			//   messages: [
			//     {
			//       img: image2,
			//       content: "Hey! How are you?",
			//       time: "10:00",
			//       sender: "them",
			//     },
			//     {
			//       img: image2,
			//       content: "Good, I will book the meeting room for you.",
			//       time: "10:02",
			//       sender: "them",
			//     },
			//   ],
			// },
		],
	},
	reducers: {
		openChat: (state, action) => {
			state.activechat = action.payload.activechat;
			state.mobileChatSidebar = !state.mobileChatSidebar;
			state.user = action.payload.contact;

			const existingChat = state.chats.find(
				item => item.userId === action.payload.contact.id
			);
			if (existingChat) {
				existingChat.messages = action.payload.messages;
			} else {
				state.chats.push({
					id: state.chats.length + 1, // Generate a new ID for the chat
					userId: action.payload.contact.id,
					messages: action.payload.messages,
				});
			}

			state.messFeed = action.payload.messages;
		},
		setContacts: (state, action) => {
			state.contacts = action.payload;
		},
		// toggole mobile chat sidebar
		toggleMobileChatSidebar: (state, action) => {
			state.mobileChatSidebar = action.payload;
		},
		infoToggle: (state, action) => {
			state.openinfo = action.payload;
		},
		sendMessage: (state, action) => {
			state.messFeed.push(action.payload);

			const contactIndex = state.contacts.findIndex(
				contact =>
					contact._id === action.payload.receiverId ||
					contact._id === action.payload.senderId
			);
			if (contactIndex !== -1) {
        const updatedContact = state.contacts[contactIndex];
        updatedContact.lastMessage = action.payload.content;
        updatedContact.lastMessageTime = action.payload.time;
        updatedContact.unreadmessage = (updatedContact.unreadmessage || 0) + 1;
        
       
        state.contacts.splice(contactIndex, 1);
       
        state.contacts.unshift(updatedContact);
      }
		},
		toggleProfile: (state, action) => {
			state.openProfile = action.payload;
		},
		setContactSearch: (state, action) => {
			state.searchContact = action.payload;
		},
		toggleActiveChat: (state, action) => {
			state.activechat = action.payload;
		},
	},
});

export const {
	openChat,
	toggleMobileChatSidebar,
	infoToggle,
	sendMessage,
	toggleProfile,
	setContactSearch,
	toggleActiveChat,
	setContacts,
} = appChatSlice.actions;
export default appChatSlice.reducer;
