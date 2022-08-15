/** @format */

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MessageHome from './messagePages/MessageHome';
import MessageSideBar from './MessageSideBar';
import NewMessageDialog from './messagePages/NewMessageDialog';
import ChatPage from './messagePages/ChatPage';

function Message() {
	const [currentSelection, setCurrentSelection ] = useState([])
	const [chats, setChats] = useState([])
	const [currentChat, setCurrentChat] = useState('')
	return (
		<div className='w-full h-[544px] flex m-0'>
			<MessageSideBar />
			<Routes>
				<Route path='/' element={<MessageHome />} />
				<Route path='new-message' element={<NewMessageDialog 
				chats={chats}
				setChats={setChats}
				currentSelection={currentSelection} 
				setCurrentSelection={setCurrentSelection}
				currentChat={currentChat}
				setCurrentChat={setCurrentChat}
				/>} 
				/>
				<Route path='chat-page' element={<ChatPage 
				chats={chats}
				currentSelection={currentSelection}/>} 
				/>
			</Routes>
		</div>
	);
}

export default Message;
