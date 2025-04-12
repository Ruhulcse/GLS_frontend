/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import image1 from "@/assets/images/users/user-1.jpg";
import Dropdown from "@/components/ui/Dropdown";
import Icon from "@/components/ui/Icon";
import useWidth from "@/hooks/useWidth";
import fetchWrapper from "@/util/fetchWrapper";
import { swalError } from "@/util/helpers";
import moment from "moment";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { openChat, sendMessage, toggleMobileChatSidebar } from "./store";

const chatAction = [
  {
    label: "Remove",
    link: "#",
  },
  {
    label: "Forward",
    link: "#",
  },
];
const time = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const hours12 = hours % 12 || 12;
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  return hours12 + ":" + minutesStr + " " + ampm;
};

const Chat = ({ firstId, secondId }) => {
  const { id } = useParams();
  const { activechat, openinfo, mobileChatSidebar, messFeed, user } =
    useSelector((state) => state.chat);
	
	
  const { contacts } = useSelector((state) => state.chat);
  const { width, breakpoints } = useWidth();
  const dispatch = useDispatch();
  const socket = useRef(null);
  const { chatId } = useSelector((state) => state.chat.user);
  console.log("Chat == chatId:", chatId);
  // const [chatId, setChatId] = useState();

  const sentMessage = async (value) => {
    const payload = {
      receiverId: secondId,
      chatId: chatId,
      text: value,
    };

    try {
      const { data } = await fetchWrapper.post("/message", payload);
    } catch (error) {
      swalError(error);
    }
  };

  // find chat between users
  const getConvBetweenIds = async (firstId, secondId) => {
    try {
      const { data } = await fetchWrapper.get(
        `/chat/find/${firstId}/${secondId}`
      );
      if (!data) {
        createChats(secondId);
      }
    } catch (error) {
      swalError(error);
    }
  };

  const createChats = async (id) => {
    const payload = {
      receiverId: id,
    };
    try {
      const { data } = await fetchWrapper.post(`/chat`, payload);

      // setChatId(data._id);
    } catch (error) {
      swalError(error);
    }
  };

  useEffect(() => {
    if (firstId && secondId) {
      getConvBetweenIds(firstId, secondId);
    }
  }, [firstId, secondId]);

  useEffect(() => {}, [contacts]);

  const getMessage = async () => {
    try {
      const contact = contacts.filter((contact) => {
        return contact._id === id;
      });
      const { data: messages } = await fetchWrapper.get(
        `/message/${contact[0].chatId}`
      );
      const formattedMessages = messages.map((message) => ({
        img: "https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg",
        content: message.text,
        time: new Date(message.createdAt).toLocaleTimeString(),
        sender: message.senderId === firstId ? "me" : "them",
      }));

      dispatch(
        openChat({
          contact: contact[0],
          activechat: true,
          messages: formattedMessages,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMessage();
  }, [firstId, id]);

  const handleSendMessage = async (e) => {
    if (e.target.value) {
      await sentMessage(e.target.value);
      dispatch(
        sendMessage({
          content: e.target.value,
          sender: "me",
          img: image1,
          receiverId: id,
          // time: moment(),
        })
      );
    }
    e.target.value = "";
  };
  const chatheight = useRef(null);
  useEffect(() => {
    chatheight.current.scrollTop = chatheight.current.scrollHeight;
  }, [messFeed]);

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    // Connect to Socket.IO server
    socket.current = io("http://localhost:5000", {
      query: { token: `${token}` },
    });

    socket.current.on("rcvmsg", (message) => {
      console.log("useEffect == message:", message);

      dispatch(
        sendMessage({
          content: message.text,
          sender: "them",
          img: image1,
          receiverId: message.senderId,
          // time: moment(),
        })
      );
    });

    return () => {
      socket.current.disconnect();
    };
  }, [token, dispatch]);

  return (
    <div className="h-full">
      <header className="border-b border-slate-100 dark:border-slate-700">
        <div className="flex py-6 md:px-6 px-3 items-center">
          <div className="flex-1">
            <div className="flex space-x-3 rtl:space-x-reverse">
              {width <= breakpoints.lg && (
                <span
                  onClick={() => dispatch(toggleMobileChatSidebar(true))}
                  className="text-slate-900 dark:text-white cursor-pointer text-xl self-center ltr:mr-3 rtl:ml-3"
                >
                  <Icon icon="heroicons-outline:menu-alt-1" />
                </span>
              )}
              <div className="flex-none">
                <div className="h-10 w-10 rounded-full relative">
                  <span
                    className={` status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0
                  ${
                    user.status === "active"
                      ? "bg-success-500"
                      : "bg-secondary-500"
                  }
                  `}
                  ></span>
                  <img
                    src={user.avatar}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="flex-1 text-start">
                <span className="block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px] truncate">
                  {user.fullName}
                </span>
                <span className="block text-slate-500 dark:text-slate-300 text-xs font-normal">
                  Active now
                </span>
              </div>
            </div>
          </div>
          {/* <div className="flex-none flex md:space-x-3 space-x-1 items-center rtl:space-x-reverse">
            <div className="msg-action-btn">
              <Icon icon="heroicons-outline:phone" />
            </div>
            <div className="msg-action-btn">
              <Icon icon="heroicons-outline:video-camera" />
            </div>

            <div
              onClick={() => dispatch(infoToggle(!openinfo))}
              className="msg-action-btn"
            >
              <Icon icon="heroicons-outline:dots-horizontal" />
            </div>
          </div> */}
        </div>
      </header>
      <div className="chat-content parent-height">
        <div
          className="msgs overflow-y-auto msg-height pt-6 space-y-6"
          ref={chatheight}
        >
          {messFeed.map((item, i) => (
            <div className="block md:px-6 px-4" key={i}>
              {item.sender === "them" && (
                <div className="flex space-x-2 items-start group rtl:space-x-reverse">
                  <div className="flex-none">
                    <div className="h-8 w-8 rounded-full">
                      <img
                        src={item.img}
                        alt=""
                        className="block w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex space-x-4 rtl:space-x-reverse">
                    <div>
                      <div className="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all">
                        {item.content}
                      </div>
                      <span className="font-normal text-xs text-slate-400 dark:text-slate-400">
                        12:20 pm
                      </span>
                    </div>
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                      <Dropdown
                        classMenuItems=" w-[100px] top-0"
                        items={chatAction}
                        label={
                          <div className="h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full">
                            <Icon icon="heroicons-outline:dots-horizontal" />
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* sender */}
              {item.sender === "me" && (
                <div className="flex space-x-2 items-start justify-end group w-full rtl:space-x-reverse">
                  <div className="no flex space-x-4 rtl:space-x-reverse">
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                      <Dropdown
                        classMenuItems=" w-[100px] left-0 top-0  "
                        items={chatAction}
                        label={
                          <div className="h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900">
                            <Icon icon="heroicons-outline:dots-horizontal" />
                          </div>
                        }
                      />
                    </div>

                    <div className="whitespace-pre-wrap break-all">
                      <div className="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1">
                        {item.content}
                      </div>
                      <span className="font-normal text-xs text-slate-400">
                        {time()}
                      </span>
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className="h-8 w-8 rounded-full">
                      <img
                        src={user.avatar}
                        alt=""
                        className="block w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* me */}
            </div>
          ))}
        </div>
      </div>
      <footer className="md:px-6 px-4 sm:flex md:space-x-4 sm:space-x-2 rtl:space-x-reverse border-t md:pt-6 pt-4 border-slate-100 dark:border-slate-700">
        <div className="flex-none sm:flex hidden md:space-x-3 space-x-1 rtl:space-x-reverse">
          <div className="h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full">
            <Icon icon="heroicons-outline:link" />
          </div>
          <div className="h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full">
            <Icon icon="heroicons-outline:emoji-happy" />
          </div>
        </div>
        <div className="flex-1 relative flex space-x-3 rtl:space-x-reverse">
          <div className="flex-1">
            <textarea
              type="text"
              placeholder="Type your message..."
              className="focus:ring-0 focus:outline-0 block w-full bg-transparent dark:text-white resize-none"
              // v-model.trim="newMessage"
              // @keydown.enter.exact.prevent="sendMessage"
              // @keydown.enter.shift.exact.prevent="newMessage += '\n'"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
            />
          </div>
          <div className="flex-none md:pr-0 pr-3">
            <button
              type="button"
              className="h-8 w-8 bg-slate-900 text-white flex flex-col justify-center items-center text-lg rounded-full"
            >
              <Icon
                icon="heroicons-outline:paper-airplane"
                className="transform rotate-[60deg]"
              />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Chat;
