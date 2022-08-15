/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';

const MessageHome = () => {
	const navigate = useNavigate();
	return (
		<div className='w-[75%]  overflow-y-scroll'>
			<div className='w-full flex flex-col justify-center items-center'>
				<div className='w-50% mt-10 flex justify-center items-center'>
					<img
						src={require('../../../../assets/images/pana.png')}
						alt='banner'
					/>
				</div>
				<div>
					<h4 className='font-semibold text-center'>Meet new friends</h4>
					<div>
						<p className='text-center my-2 text-sm'>
							Now send and receive messages from friends in different campus
						</p>
						<p className='text-center my-2 text-sm'>
							Communicate with each other via real time chat group
						</p>
						<p className='text-center my-2 text-sm'>
							Unlimited file sharing and audio messaging
						</p>
					</div>
				</div>
			</div>
			<div className='w-full flex justify-end pr-28 '>
				<div
					onClick={() => navigate('new-message')}
					className='bg-[#083730] w-[120px] text-white text-sm py-4 px-6 flex justify-center items-center rounded-md cursor-pointer'>
					New chat
				</div>
			</div>
		</div>
	);
};

export default MessageHome;
