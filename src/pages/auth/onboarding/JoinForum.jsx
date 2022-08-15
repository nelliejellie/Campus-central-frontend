/** @format */

import React from 'react';
import Onboarding from '../../../assets/style/Onboarding.module.css';
import PageHeading from './components/PageHeading';
import { Link } from 'react-router-dom';

const JoinForum = () => {
	return (
		<div className={`${Onboarding.interest} min-h-screen px-4 `}>
			<div className={` flex flex-col justify-center items-center `}>
				<PageHeading>Joing a forum</PageHeading>

				{/* <h1 className={`${Onboarding.green} `}>Join a forum</h1> */}

				<p className=' text-xl px-10 text-center mt-3'>
					Join a community and continue to your dashboard
				</p>
			</div>
			<div className=' flex flex-col w-1/2 mt-10'>
				<div className=' flex flex-row justify-center items-center p-5 border-b border-b-black '>
					<img
						className=' h-10 w-10 rounded-full bg-red-500 outline-none border-none mr-5 justify-self-start self-start'
						src=''
						alt=''
					/>
					<div>
						<h1 className=' text-lg'>Engineering</h1>
						<p className=' w-5/6 text-sm'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
							qui molestiae fugit nostrum, culpa voluptatum!
						</p>
					</div>
					<button className=' w-fit h-fit button-bg px-5 py-1 rounded-3xl shadow-lg shadow-grey-400 text-xl ml-5 font-bold  self-start '>
						Join
					</button>
				</div>
			</div>

			<Link to={'/admin/dashboard'}>
				<button
					className={`button-bg flex flex-col items-center justify-center w-fit h-fit mt-20 px-16 py-2 text-xl font-bold`}>
					Continue
				</button>
			</Link>
		</div>
	);
};

export default JoinForum;
