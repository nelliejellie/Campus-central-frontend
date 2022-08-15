/** @format */

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Style from '../../../assets/style/VerifyToken.module.css';

function Verification() {
	const [input1, setInput1] = useState('');
	const [input2, setInput2] = useState('');
	const [input3, setInput3] = useState('');
	const [input4, setInput4] = useState('');
	const [input5, setInput5] = useState('');

	const inputOne = useRef();
	const inputTwo = useRef();
	const handleInput = (e) => {
		setInput1(e.target.value);
		inputOne.current.disabled = true;
		inputTwo.current.focus();
	};
	const inputThree = useRef();
	const handleInputTwo = (e) => {
		setInput2(e.target.value);
		inputTwo.current.disabled = true;
		inputThree.current.focus();
	};
	const inputFour = useRef();
	const handleInputThree = (e) => {
		setInput3(e.target.value);
		inputThree.current.disabled = true;
		inputFour.current.focus();
	};
	const inputFive = useRef();
	const handleInputFour = (e) => {
		setInput4(e.target.value);
		inputFour.current.disabled = true;
		inputFive.current.focus();
	};
	const handleInputFive = (e) => {
		setInput5(e.target.value);
		// inputFive.current.disabled = true
		inputOne.current.focus();
	};
	const verify = () => {
		let code = input1 + input2 + input3 + input4 + input5;
		console.log(code);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Backspace') {
			inputOne.current.disabled = false;
			setInput1('');
			inputOne.current.focus();
		}
	};
	const handleKeyDownThree = (event) => {
		if (event.key === 'Backspace') {
			inputTwo.current.disabled = false;
			setInput2('');
			inputTwo.current.focus();
		}
	};
	const handleKeyDownFour = (event) => {
		if (event.key === 'Backspace') {
			inputThree.current.disabled = false;
			setInput3('');
			inputThree.current.focus();
		}
	};
	const handleKeyDownFive = (event) => {
		if (event.key === 'Backspace') {
			setInput5('');
			setInput4('');
			inputFour.current.disabled = false;
			inputFour.current.focus();
		}
	};
	return (
		<section
			className={`${Style.section} flex justify-center w-3/5 m-auto items-center`}>
			<div className='w-full'>
				<p className='font-bold mt-4 mb-4'>Email Verification?</p>
				<article className='mt-4 mb-4 font-semibold text-left'>
					Enter the 5 digit verification code sent to your email. it is only
					active for 5 minutes.
				</article>
				<div className='flex justify-between'>
					<input
						onChange={handleInput}
						ref={inputOne}
						className='border border-gray-400 rounded  h-14 w-14 mb-6 px-5'
						type='email'
						name=''
						id=''
					/>
					<input
						onChange={handleInputTwo}
						ref={inputTwo}
						onKeyDown={handleKeyDown}
						className='border border-gray-400 rounded  h-14 w-14 mb-6 px-5'
						type='email'
						name=''
						id=''
					/>
					<input
						onChange={handleInputThree}
						ref={inputThree}
						onKeyDown={handleKeyDownThree}
						className='border border-gray-400 rounded  h-14 w-14 mb-6 px-5'
						type='email'
						name=''
						id=''
					/>
					<input
						onChange={handleInputFour}
						ref={inputFour}
						onKeyDown={handleKeyDownFour}
						className='border border-gray-400 rounded  h-14 w-14 mb-6 px-5'
						type='email'
						name=''
						id=''
					/>
					<input
						onChange={handleInputFive}
						ref={inputFive}
						onKeyDown={handleKeyDownFive}
						value={input5}
						className='border border-gray-400 rounded  h-14 w-14 mb-6 px-5'
						type='email'
						name=''
						id=''
					/>
				</div>
				<button
					className='button-bg w-full mt-4'
					value='Continue'
					onClick={verify}>
					Continue
				</button>
				<p className='text-center text-sm mt-4'>
					Didn't get code?
					<span className='text-[#036D5F] font-semibold ml-1'>
						<Link to=''>Resend</Link>
					</span>
				</p>
			</div>
		</section>
	);
}

export default Verification;
