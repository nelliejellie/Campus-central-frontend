/** @format */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';
import data from './NotificationData';
import {
	faSearch,
	faBell,
	faTrash,
	faBellSlash
} from '@fortawesome/free-solid-svg-icons';

function Notification() {
	const [notificationsArray, setNotificationsArray] = useState([data]);
	const [notificationSetting, setNotificationSetting] = useState("off");

	const stuff = useRef();

	const handleReset = () =>{
		setNotificationSetting('off')
	}
	const handleNotificationSetting = (e) =>{
		setNotificationSetting(val => val = e.target.id)
	}
	
	return (
		<section className='ml-4 mr-4'>
			<div className='flex flex-row items-center justify-between space-y-8'>
				<p className='text-2xl mt-4 font-extrabold'>Notifications</p>
				<div className='bg-[#EBEAED] pl-3 w-1/3 h-[48px] flex space-x-3 justify-start items-center rounded-md'>
					<span><FontAwesomeIcon className='text-[#737377]' icon={faSearch} /></span>
					<input className='bg-[#EBEAED] outline-0' type="text" placeholder='Make the quick search' />
				</div>
				<div className='flex items-center justify-around space-x-2'>
					<FontAwesomeIcon className='rounded-full p-1 border-2 border-[#EBEAED]' icon={faBell} />
					<img className='w-[48px] h-[48px]' src={require("../../../assets/images/icon/grayKazz.png")} alt="" />
					<span className='font-bold'>Kareem Chigozie</span>
				</div>
			</div>
			<div className='mt-8 flex space-x-2 items-center'>
				<span className='font-bold'>Filter By:</span>
				<select name="" id="" className='border-2 border-[#EBEAED] py-2 px-2'>
					<option value="">None</option>
					<option value="">Date</option>
					<option value="">Read</option>
					<option value="">Unread</option>
				</select>
			</div>
			{
				notificationsArray.length < 1 &&

				<div className='h-[75vh] flex flex-col justify-center items-center'>
					<FontAwesomeIcon className='rounded-full p-4 border bg-[#E7F0EF] text-[#0F6D5F] text-[40px] border-[#EBEAED]' icon={faBell} />
					<div className='flex flex-col justify-center items-center'>
						<span>No Notification</span>
						<span>Available</span>
					</div>	
				</div>
			}
			{
				notificationsArray.length >= 1 &&

				<div className='mt-4'>
					<div className='flex space-x-2'>
						<span className='font-bold'>Unread</span>
						<a href="" className='text-[#0F6D5F] font-extrabold underline'>Mark All As Read</a>
					</div>
					{
						data.map(object => (
							<div key={object.id} className='mt-2 border flex justify-between h-[133px] items-center shadow-sm hover:bg-[#F3F8F7]'>
								<span className='ml-8'><img className='w-[90px] h-[90px]' src={require("../../../assets/images/icon/profile_1.png")} alt="" /></span>
								<div className='flex flex-col justify-between space-y-8'>
									<div className='flex space-x-2'>
										<span className='text-xl font-normal'>{object.recentReaction}</span>
										<span className='text-xl font-extrabold'>{object.resource}</span>
									</div>
									<div className='flex space-x-2 text-sm font-bold'>
										<span>{object.reactions} reactions</span>
										<span>{object.commentsNumber} comments</span>
									</div>
								</div>
								<div className='mr-8 flex flex-col space-y-8' stuff={object.id}>
									<span className='z-10
									'>{object.created} min</span>
									
									{
										notificationSetting == object.id ?  
										<span id={object.id} className='flex flex-col bg-white text-black rounded-md p-4 border space-y-2 border-[#F3F8F7]' onClick={handleReset}>
											<span className='flex space-x-4 cursor-pointer'><FontAwesomeIcon className='text-[green] font-sm' icon={faBellSlash} /><span>Turn Off</span></span>
											<span className='flex space-x-4 cursor-pointer'><FontAwesomeIcon className='text-[red] font-sm' icon={faTrash} /><span>Delete</span></span>
										</span> :
										<span className={`font-bold text-right cursor-pointer`} onClick={handleNotificationSetting} id={object.id} ref={stuff}>...</span>
									}
									
								</div>
							</div>	
						))
					}
					
				</div>
			}
			
		</section>
	);
}

export default Notification;