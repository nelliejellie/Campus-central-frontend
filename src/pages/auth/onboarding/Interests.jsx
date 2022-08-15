/** @format */

import React, { useState } from 'react';
import Onboarding from '../../../assets/style/Onboarding.module.css';
import PageHeading from './components/PageHeading';
import { Link } from 'react-router-dom';

const Interests = () => {
	const interest = [
		{
			id: 1,
			interest: 'Art',
		},
		{
			id: 2,
			interest: 'Photography',
		},
		{
			id: 3,
			interest: 'ASUU',
		},
		{
			id: 4,
			interest: 'Entertainment',
		},
		{
			id: 5,
			interest: 'Engineering',
		},
		{
			id: 6,
			interest: 'NUGA Competition',
		},
		{
			id: 7,
			interest: 'Comedy',
		},
		{
			id: 8,
			interest: 'Fashion',
		},
		{
			id: 9,
			interest: 'Finance',
		},
		{
			id: 10,
			interest: 'Project topics',
		},
		{
			id: 11,
			interest: 'Comedy',
		},
		{
			id: 12,
			interest: 'Politics',
		},
		{
			id: 13,
			interest: 'Technology',
		},
		{
			id: 14,
			interest: 'Journals',
		},
	];
	// const [click, setClick] = useState(false)
	const [selected, setSelected] = useState([]);

	const handleClick = (item) => {
		let newSelected = selected;
		let filtered = selected.filter((el) => el !== item);

		selected.includes(item) ? (newSelected = filtered) : newSelected.push(item);
		setSelected(newSelected.slice());
	};

	return (
		<div className={`${Onboarding.interest} min-h-screen px-4 `}>
			<div className={` flex flex-col justify-center items-center `}>
				<PageHeading>What are your interests ?</PageHeading>
				<p className=' text-xl w-2/3 px-10 text-center mt-3'>
					Pick one or more of the options below and we would bring a lot of cool
					stuffs to your timeline
				</p>
			</div>
			<div className=' flex flex-row flex-wrap mt-5 mb-5 w-full space-x-3 p-3'>
				{interest.map((el) => (
					<button
						key={el.id}
						className={`${
							Onboarding.btn
						} w-fit h-fit px-3 py-2 mt-3 font-bold text-xl  ${
							selected.includes(el.interest) ? `button-bg` : `button-border`
						}`}
						onClick={() => handleClick(el.interest)}>
						{el.interest}
					</button>
				))}
			</div>
			<Link to={'/auth/join-forum'}>
				<button
					className={`button-bg flex flex-col items-center justify-center w-fit h-fit mt-20 px-16 py-2 text-xl font-bold`}>
					Continue
				</button>
			</Link>
		</div>
	);
};
export default Interests;
