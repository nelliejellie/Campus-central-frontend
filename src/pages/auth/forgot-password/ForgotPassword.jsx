/** @format */
import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../../../assets/style/VerifyToken.module.css';

function ForgotPassword() {
	return (
		<section
			className={`${Style.section} flex justify-center w-3/5 m-auto items-center`}>
			<div className='w-full'>
				<p className='font-bold mt-4 mb-4'>Forgot password?</p>
				<article className='mt-4 mb-4 font-semibold text-left'>
					Don't worry, it happens. Enter the email address associated with your
					account to request for password reset instructions.
				</article>
				<label htmlFor='Email' className='font-semibold mt-4'>
					Email address
				</label>
				<input
					className='border border-gray-400 rounded w-full pl-5 py-3'
					type='email'
					name=''
					id=''
					placeholder='Enter email address'
				/>

				<button className='button-bg w-full mt-4'>Send</button>
				<div className='w-full flex justify-end mt-4'>
					<Link className='text-[#0f6d5f] ml-2' to={'/auth/sign-in'}>
						Back to Sign In
					</Link>
				</div>
			</div>
		</section>
	);
}

export default ForgotPassword;
