/** @format */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NewMessageDialog = ({currentSelection , setCurrentSelection, chats , setChats}) => {
	const navigate = useNavigate();
    
	const [groupName , setGroupName] = useState('')
	const [groupNameError , setGroupNameError] = useState(false)
	const handleSelection = (text) => {
		if(currentSelection.includes(text)){
			var filtered = currentSelection.filter(x => x !== text)
			setCurrentSelection(filtered)
		} else {
			setCurrentSelection(prev => [...prev,text])
		}
	}
	const handleGroupName = (e) => {
			setGroupNameError(false)
			if(groupName.length < 30 ){
				setGroupName(e.target.value)
			} else {
				let val = (e.target.value).split('')
				val.pop()
				setGroupName(val.join(''))
			}
	}
	const handleStartChat = () => {
		if(!currentSelection)
			return
		if(!groupName && currentSelection > 1){
			setGroupNameError(true)
			return
		}
		const chat = {
			name : currentSelection.join(''),
			to : groupName ? groupName : currentSelection[0],
			messages : []
		}
		setChats(prev => [...prev, chat])
		navigate('/admin/messages/chat-page')



	}

	return (
		<div className='w-[75%] h-[600px] overflow-y-scroll'>
			<div className='w-[90%] mx-auto pb-6'>
				<h4 className='mt-6 font-semibold'>New Chat</h4>
				{ currentSelection.length < 2 ? <div className='mt-6 bg-[#F2F1F3] w-full rounded-2xl py-5 px-4 flex'>
					<img src={require("../../../../assets/images/icon/DMs.png")} alt="" className='mx-8 object-contain'/>
					<div classname="mx-8">
						<h6 className='font-semibold'>Instant Messaging</h6>
						<p className='font-semibold text-sm mt-2'>Meet new friends from various campus</p>
					</div>
				</div> :
				<div>
					<h6 className='mt-4 font-semibold'>Group Name</h6>
					{groupNameError && <span className='text-red-500 mt-2'>*set a group name</span>}
					<div className='mt-6 bg-[#F2F1F3] w-full rounded-2xl flex justify-between items-center shadow-sm  px-10 py-5'>
						<input 
						value={groupName}
						onChange={(e)=> handleGroupName(e)}
						className='bg-[#F2F1F3] w-full py-2 focus:[outline:none]' type="text" placeholder='Enter group name' />
						<p className='font-semibold text-[14px]'>{`${groupName.length}/30`}</p>
					</div>
				</div>}
				
				<h6 className='mt-6 font-semibold'>Search</h6>
				<div className='mt-6 bg-[#F2F1F3] w-full rounded-2xl flex flex-col justify-between items-center shadow-lg'>
					<div className='w-full  py-4'>
						<div className='w-full p-4'>
							<div className='w-full bg-[#EBEAED] rounded-lg relative'>
								<input
									type='text'
									className='w-full bg-[#EBEAED] rounded-lg px-12 py-2 '
								/>
								<FontAwesomeIcon
									className='absolute top-[30%] left-[20px]'
									icon={faSearch}
								/>
							</div>
						</div>

						<div className='w-full mt-4 py-5'>
							<div>
								<div className='flex justify-between px-5'>
									<div className='w-[15%] flex justify-around items-center mt-2'>
										<img
											src={require('../../../../assets/images/icon/userIcon.png')}
											alt=''
										/>
										<p className='font-semibold'>Danny</p>
									</div>
									<input
										onChange={(e) => handleSelection(e.target.value)}
                                        value="Danny"
										type='checkbox'
										className='w-[20px] checked:bg-[#0F6D5F]'
									/>
								</div>
								<hr className='mt-3' />
								<hr />
							</div>
							<div>
								<div className='flex justify-between px-5'>
									<div className='w-[15%] flex justify-around items-center mt-4'>
										<img
											src={require('../../../../assets/images/icon/userIcon.png')}
											alt=''
										/>
										<p className='font-semibold'>Aminat</p>
									</div>
									<input
										onChange={(e) => handleSelection(e.target.value)}
                                        value="Aminat"
										type='checkbox'
										className='w-[20px] checked:bg-[#0F6D5F]'
									/>
								</div>
								<hr className='mt-3' />
								<hr />
							</div>
							<div>
								<div className='flex justify-between px-5'>
									<div className='w-[15%] flex justify-around items-center mt-4'>
										<img
											src={require('../../../../assets/images/icon/userIcon.png')}
											alt=''
										/>
										<p className='font-semibold'>Precious</p>
									</div>
									<input
										onChange={(e) => handleSelection(e.target.value)}
                                        value="Precious"
										type='checkbox'
										className='w-[20px] checked:bg-[#0F6D5F]'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-16 w-full flex items-center justify-end'>
					<div
						onClick={() => navigate('/admin/messages')}
						className='px-10 py-3 [border-width:1px] [border-color:#083730] text-[#083730] rounded-md cursor-pointer'>
						Cancel
					</div>
					<div 
					onClick={handleStartChat}
					className='px-10 py-3 ml-4 bg-[#083730] text-white rounded-md cursor-pointer'>
						{currentSelection.length > 1 ? "Start Group Chat" : "Start Chat"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewMessageDialog;
