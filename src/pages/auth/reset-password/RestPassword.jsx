/** @format */

import React from 'react';

function RestPassword() {
	return (
		<div className='flex flex-col w-[70%] flex-1 mx-auto mt-32'>
			<div className='cursor-pointer'>
				<h1>Reset Password</h1>
			</div>

			<div>
				<div className='mt-10'>
					<label className='font-semibold'>Create a new password</label>
					<input
						className='pl-5 py-3 border w-full border-gray-400 rounded'
						type='password'
						placeholder='Enter new password'
					/>
				</div>

				<div className='mt-4'>
					<label className='font-semibold'>Confirm password</label>
					<input
						className='pl-5 py-3 border w-full border-gray-400 rounded'
						type='password'
						placeholder='Re-enter password'
					/>
				</div>

				<button className='button-bg w-full mt-10'>Reset Password</button>
			</div>
		</div>
	);
}

export default RestPassword;
