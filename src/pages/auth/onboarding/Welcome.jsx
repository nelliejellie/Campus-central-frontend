/** @format */

import React from 'react';
import Onboarding from '../../../assets/style/Onboarding.module.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<div className={`${Onboarding.container}`}>
			<div className='w-[610px]'>
				<h1 className=' text-5xl font-bold'>Welcome to Campus central</h1>
				<p className={`${Onboarding.grey} text-3xl mt-6 text-left `}>
					Connect with friends from other university. Get to know about trending
					issues happening in other universities, updates on News that interest
					you.
				</p>

				<Link to={'/auth/interests'}>
					<button
						className={`button-white flex flex-col items-center justify-center w-fit h-fit mt-20 px-16 py-2 text-xl font-bold`}>
						Continue
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Welcome;
