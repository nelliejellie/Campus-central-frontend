/** @format */

import React from 'react';
import { useState } from 'react';

const MessageSideBar = () => {
	const [currentNav, setCurrentNav] = useState('all');

	return (
		<div className='w-[25%] flex flex-col h-[544px] overflow-y-scroll'>
			<div className='w-full h-16 flex bg-[#0F6D5F] justify-between py-4 px-6 items-center'>
				<div>
					<img
						src={require('../../../assets/images/icon/userIcon.png')}
						alt='userIcon'
					/>
				</div>
				<div className=' flex w-[25%] justify-between'>
					<img
						src={require('../../../assets/images/icon/bell.png')}
						alt='bell-icon'
					/>
					<img
						src={require('../../../assets/images/icon/messages.png')}
						alt='messages-icon'
					/>
				</div>
			</div>
			<div className='flex h-20 p-4 justify-between items-center'>
				<h4>Chats</h4>
				<ul className='flex w-[55%] justify-around items-center'>
					<li
						onClick={() => setCurrentNav('all')}
						className={
							currentNav === 'all'
								? 'bg-[#0F6D5F] rounded-2xl text-white w-1/3 text-center text-sm h-[30px] flex justify-center items-center cursor-pointer'
								: ' w-1/3 text-center text-sm h-[30px] flex justify-center items-center cursor-pointer'
						}>
						All
					</li>
					<li
						onClick={() => setCurrentNav('dms')}
						className={
							currentNav === 'dms'
								? 'bg-[#0F6D5F] rounded-2xl text-white w-1/3 text-center text-sm h-[30px] flex justify-center items-center cursor-pointer'
								: ' w-1/3 text-center text-sm h-[30px] flex justify-center items-center cursor-pointer'
						}>
						DMs
					</li>
					<li
						onClick={() => setCurrentNav('group')}
						className={
							currentNav === 'group'
								? 'bg-[#0F6D5F] rounded-2xl text-white w-1/3 text-center text-sm h-[30px] flex justify-center items-center cursor-pointer'
								: ' w-1/3 text-center text-sm h-[30px] flex justify-center items-center cursor-pointer'
						}>
						Group
					</li>
				</ul>
			</div>
			<div>
				<hr />
				<hr />
			</div>
			<p className='text-[12px] px-2 text-center mt-4'>
				All chat conversations you are in will appear here
			</p>
		</div>
	);
};

export default MessageSideBar;
