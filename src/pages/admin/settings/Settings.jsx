/** @format */

import React, { useState } from 'react';
import lady from '../../../assets/images/settings/Ellipse.png';
import { useUserAuth } from '../../../hooks/UserAuthContext';

function Settings() {
	const { user } = useUserAuth();
	console.log(user);
	const [receiveCalls, setReceiveCalls] = useState('Everyone');
	const [whoCanSendMeMessage, setWhoCanSendMeMessages] =
		useState('My Followers');
	const [MakeMyProfileVisibleTo, setMakeMyProfileVisibleTo] =
		useState('My Followers');
	const [GroupCall, setGroupCall] = useState('My Followers');
	const [AddGroupCall, setAddGroupCall] = useState('My Followers');

	function OnChangeValue(event) {
		setReceiveCalls(event.target.value);
	}
	function OnChangeValueMessages(event) {
		setWhoCanSendMeMessages(event.target.value);
	}
	function OnChangeValueVisible(event) {
		setMakeMyProfileVisibleTo(event.target.value);
	}
	function OnChangeValueGroup(event) {
		setGroupCall(event.target.value);
	}
	function OnChangeValueAdd(event) {
		setAddGroupCall(event.target.value);
	}
	return (
		<section>
			<div className=' flex py-5 border mb-[25px]' >
				<p className=' text-3xl font-bold mx-auto'>Settings</p>
			</div>
			<section className='flex flex-col justify-between ml-4  '>
				<p className='font-bold mb-[12px]'>Personal Settings</p>

				<img
					src={user?.photoURL}
					alt='profile'
					className='w-[100px] h-[100px] rounded-full ml-4'
				/>

				<form action=''>
					<div className='flex flex-col ml-4 mt-4'>
						<label htmlFor='First Name' className='font-bold'>
							First Name
						</label>
						<input
							type='text'
							placeholder='Molly'
							className='border border-gray-400 pl-4 rounded-sm h-14 w-2/4'
							defaultValue={user?.displayName?.split(' ')[0]}
						/>
					</div>
					<div className='flex flex-col ml-4 mt-4'>
						<label htmlFor='Last Name' className='font-bold'>
							Last Name
						</label>
						<input
							type='text'
							placeholder='Sandra'
							className='border border-gray-400 pl-4 rounded-sm h-14 w-2/4'
							defaultValue={user?.displayName?.split(' ')[1]}
						/>
					</div>
					<div className='flex flex-col ml-4 mt-4'>
						<label htmlFor='Email Address' className='font-bold'>
							Email Address
						</label>
						<input
							type='text'
							placeholder='Mollysandra@gmail.com'
							className='border border-gray-400 pl-4 rounded-sm h-14 w-2/4'
							defaultValue={user.email}
						/>
					</div>
					<div className='flex flex-col ml-4 mt-4'>
						<label htmlFor='Anonymous Name' className='font-bold'>
							Anonymous Name
						</label>
						<input
							type='text'
							placeholder='User10234'
							className='border border-gray-400 pl-4 rounded-sm h-14 w-2/4'
						/>
					</div>
					<div className='flex flex-col ml-4 mt-4'>
						<label htmlFor='Name of School' className='font-bold'>
							Name of School
						</label>
						<input
							type='text'
							placeholder='University of Illorin'
							className='border border-gray-400 pl-4 rounded-sm h-14 w-2/4'
						/>
					</div>
					<div className='flex flex-col ml-4 mt-4'>
						<label htmlFor='Level' className='font-bold'>
							Level
						</label>
						<input
							type='text'
							placeholder='200'
							className='border border-gray-400 pl-4 rounded-sm h-14 w-2/4'
						/>
					</div>
					<div className='flex flex-col ml-4 mt-4'>
						<label htmlFor='Location' className='font-bold'>
							Location
						</label>
						<input
							type='text'
							placeholder='Illorin'
							className='border border-gray-400 pl-4 rounded-sm h-14 w-2/4'
						/>
					</div>
				</form>
			</section>
			<section className='mt-8 ml-4'>
				<p className='font-extrabold'>Message Settings</p>
				<div className='flex flex-wrap justify-between shadow-md w-[100%] lg:w-[46%] md:w-[60%] p-4 mt-4'>
					<div className='font-bold text-md sm:w-[100%] lg:w-[50%]'>
						Receive calls from
					</div>
					<div onChange={OnChangeValue} className='sm:w-[100%] lg:w-[50%]'>
						<div>
							<input
								type='radio'
								value='Everyone'
								name='recieveCalls'
								id=''
								className=''
								defaultChecked={receiveCalls === 'Everyone'}
							/>
							<label htmlFor='Everyone' className='ml-2'>
								Everyone
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='My Followers'
								name='recieveCalls'
								id=''
								defaultChecked={receiveCalls === 'My Followers'}
							/>
							<label htmlFor='My Followers' className='ml-2'>
								My Followers
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='My Followers Except'
								name='recieveCalls'
								id=''
								defaultChecked={receiveCalls === 'My Followers Except'}
							/>
							<label htmlFor='My Followers Except' className='ml-2'>
								My Followers Except
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='Nobody'
								name='recieveCalls'
								id=''
								defaultChecked={receiveCalls === 'Nobody'}
							/>
							<label htmlFor='Nobody' className='ml-2'>
								Nobody
							</label>
						</div>
					</div>
				</div>
				<div className='flex justify-between shadow-md w-[100%] lg:w-[46%] md:w-[60%] p-4 mt-4'>
					<div className='font-bold text-md'>Who can send me messages</div>
					<div onChange={OnChangeValueMessages}>
						<div>
							<input
								type='radio'
								value='Everyone'
								name='whoCanSendMeMessage'
								id=''
								className=''
								defaultChecked={whoCanSendMeMessage === 'Everyone'}
							/>
							<label htmlFor='Everyone' className='ml-2'>
								Everyone
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='My Followers'
								name='whoCanSendMeMessage'
								id=''
								defaultChecked={whoCanSendMeMessage === 'My Followers'}
							/>
							<label htmlFor='My Followers' className='ml-2'>
								My Followers
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='My Followers Except'
								name='whoCanSendMeMessage'
								id=''
								defaultChecked={whoCanSendMeMessage === 'My Followers Except'}
							/>
							<label htmlFor='My Followers Except' className='ml-2'>
								My Followers Except
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='Nobody'
								name='whoCanSendMeMessage'
								id=''
								defaultChecked={whoCanSendMeMessage === 'Nobody'}
							/>
							<label htmlFor='Nobody' className='ml-2'>
								Nobody
							</label>
						</div>
					</div>
				</div>
				<div className='flex justify-between shadow-md w-[100%] lg:w-[46%] md:w-[60%] p-4 mt-4'>
					<div className='font-bold text-md'>Make my profile visible to</div>
					<div onChange={OnChangeValueVisible}>
						<div>
							<input
								type='radio'
								value='Everyone'
								name='MakeMyProfileVisibleTo'
								id=''
								className=''
								defaultChecked={MakeMyProfileVisibleTo === 'Everyone'}
							/>
							<label htmlFor='Everyone' className='ml-2'>
								Everyone
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='My Followers'
								name='MakeMyProfileVisibleTo'
								id=''
								defaultChecked={MakeMyProfileVisibleTo === 'My Followers'}
							/>
							<label htmlFor='My Followers' className='ml-2'>
								My Followers
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='My Followers Except'
								name='MakeMyProfileVisibleTo'
								id=''
								defaultChecked={
									MakeMyProfileVisibleTo === 'My Followers Except'
								}
							/>
							<label htmlFor='My Followers Except' className='ml-2'>
								My Followers Except
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='Nobody'
								name='MakeMyProfileVisibleTo'
								id=''
								defaultChecked={MakeMyProfileVisibleTo === 'Nobody'}
							/>
							<label htmlFor='Nobody' className='ml-2'>
								Nobody
							</label>
						</div>
					</div>
				</div>
				<div className='flex justify-between shadow-md w-[100%] lg:w-[46%] md:w-[60%] p-4 mt-4'>
					<div className='font-bold text-md'>Who can add me to the group</div>
					<div onChange={OnChangeValueGroup}>
						<div>
							<input
								type='radio'
								value='Everyone'
								name='GroupCall'
								id=''
								className=''
								defaultChecked={GroupCall === 'Everyone'}
							/>
							<label htmlFor='Everyone' className='ml-2'>
								Everyone
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='My Followers'
								name='GroupCall'
								id=''
								defaultChecked={GroupCall === 'My Followers'}
							/>
							<label htmlFor='My Followers' className='ml-2'>
								My Followers
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='My Followers Except'
								name='GroupCall'
								id=''
								defaultChecked={GroupCall === 'My Followers Except'}
							/>
							<label htmlFor='My Followers Except' className='ml-2'>
								My Followers Except
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='Nobody'
								name='GroupCall'
								id=''
								defaultChecked={GroupCall === 'Nobody'}
							/>
							<label htmlFor='Nobody' className='ml-2'>
								Nobody
							</label>
						</div>
					</div>
				</div>
				<div className='flex justify-between shadow-md w-[100%] lg:w-[46%] md:w-[60%] p-4 mt-4'>
					<div className='font-bold text-md'>Who can add me to a call</div>
					<div onChange={OnChangeValueAdd}>
						<div>
							<input
								type='radio'
								value='Everyone'
								name='AddGroupCall'
								id=''
								className=''
								defaultChecked={AddGroupCall === 'Everyone'}
							/>
							<label htmlFor='Everyone' className='ml-2'>
								Everyone
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='My Followers'
								name='AddGroupCall'
								id=''
								defaultChecked={AddGroupCall === 'My Followers'}
							/>
							<label htmlFor='My Followers' className='ml-2'>
								My Followers
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='My Followers Except'
								name='AddGroupCall'
								id=''
								defaultChecked={AddGroupCall === 'My Followers Except'}
							/>
							<label htmlFor='My Followers Except' className='ml-2'>
								My Followers Except
							</label>
						</div>
						<div>
							<input
								type='radio'
								value='Nobody'
								name='AddGroupCall'
								id=''
								defaultChecked={AddGroupCall === 'Nobody'}
							/>
							<label htmlFor='Nobody' className='ml-2'>
								Nobody
							</label>
						</div>
					</div>
				</div>
			</section>

			<button className='button-bg w-[33%] mt-16'>Save</button>
		</section>
	);
}

export default Settings;
