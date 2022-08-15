/** @format */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../../assets/images/icon/Google_svg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useUserAuth } from '../../../hooks/UserAuthContext';
import { Verification, TermsOfService, PrivacyPolicy } from './component/Modal';

function SignUp() {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleCon, setIsVisibleCon] = useState(false);
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [isPrivacy, setIsPrivacy] = useState(false);
	const [isTerms, setIsTerms] = useState(false);
	const { signUp, googleSignIn } = useUserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signUp(email, password);
			navigate('/auth/welcome');
		} catch (err) {
			setError(err.message);
		}
	};

	const handleGoogleSignIn = async (e) => {
		e.preventDefault();
		try {
			await googleSignIn();
			navigate('/auth/welcome');
		} catch (err) {
			setError(err.message);
		}
	};

	const openVerification = (e) => {
		e.preventDefault();
		setIsOpen(true);
	};

	return (
		<>
			<section className='hidden md:flex mx-auto w-[70%] justify-center flex-col items-center'>
				<h1 className='self-start'>Create account</h1>
				<div className='flex flex-col justify-center items-center mt-4 w-full'>
					<button
						onClick={handleGoogleSignIn}
						className='button-border text-[#0f6d5f]
             font-semibold flex flex-row justify-center
             items-center rounded-lg border-2 border-black '>
						<img className='mr-1' src={google} alt='google svg' />
						Sign up with Google
					</button>
					<div className='w-full flex justify-center mt-4'>
						<h6>Or</h6>
					</div>
					<form className='flex flex-col w-full'>
						<div>
							<label className='font-semibold ' htmlFor='fullname'>
								Fullname
							</label>
							<input
								type='text'
								placeholder='Enter fullname'
								name='fullname'
								className='pl-5 py-3 border w-full border-gray-400 rounded'
							/>
						</div>
						<div className='mt-4'>
							<label className='font-semibold ' htmlFor='username'>
								Username
							</label>
							<input
								type='text'
								placeholder='Enter username'
								name='username'
								className='pl-5 py-3 border w-full border-gray-400 rounded'
							/>
						</div>
						<div className='mt-4'>
							<label className='font-semibold' htmlFor='email'>
								Email address
							</label>
							<input
								type='email'
								placeholder='Enter email address'
								name='email'
								className='pl-5 py-3 border w-full border-gray-400 rounded'
							/>
						</div>
						<div className='mt-4'>
							<label className='font-semibold' htmlFor='password'>
								Create password
							</label>
							<div className='relative w-full'>
								<input
									type={isVisible ? 'text' : 'password'}
									placeholder='Enter password'
									name='password'
									className='pl-5 py-3 border w-full  border-gray-400 rounded'
								/>
								{isVisible ? (
									<FontAwesomeIcon
										icon={faEye}
										className='absolute right-3 top-4 cursor-pointer'
										onClick={() => setIsVisible(!isVisible)}
									/>
								) : (
									<FontAwesomeIcon
										icon={faEyeSlash}
										className='absolute right-3 top-4 cursor-pointer'
										onClick={() => setIsVisible(!isVisible)}
									/>
								)}
							</div>
						</div>
						<div className='mt-4'>
							<label className='font-semibold' htmlFor='password'>
								Confirm password
							</label>
							<div className='relative w-full'>
								<input
									type={isVisibleCon ? 'text' : 'password'}
									placeholder='Re-enter password'
									name='password'
									className='pl-5 py-3 border w-full  border-gray-400 rounded'
								/>
								{isVisibleCon ? (
									<FontAwesomeIcon
										icon={faEye}
										className='absolute right-3 top-4 cursor-pointer'
										onClick={() => setIsVisibleCon(!isVisibleCon)}
									/>
								) : (
									<FontAwesomeIcon
										icon={faEyeSlash}
										className='absolute right-3 top-4 cursor-pointer'
										onClick={() => setIsVisibleCon(!isVisibleCon)}
									/>
								)}
							</div>
						</div>
						<div className='flex flex-row items-center self-start py-2 mt-3'>
							<input type='checkbox' name='checkbox' className='w-4 h-4 ' />
							<p className='font-semibold ml-1 text-sm'>
								I have read and accepted the
								<span
									className='text-[#0f6d5f] mx-1 cursor-pointer'
									onClick={() => setIsTerms(true)}>
									Terms of service
								</span>
								and
								<span
									className='text-[#0f6d5f] ml-1 cursor-pointer'
									onClick={() => setIsPrivacy(true)}>
									Privacy Policy
								</span>
							</p>
						</div>
						<div className='flex justify-center flex-col items-center font-semibold w-full mt-8'>
							<button
								className='button-bg font-semibold text-white'
								onClick={(e) => openVerification(e)}>
								Create Account
							</button>
							<p className='font-semibold mt-2'>
								Already have an account?
								<Link className='text-[#0f6d5f] ml-2' to={'/auth/sign-in'}>
									Sign In
								</Link>
							</p>
						</div>

						{isOpen && <Verification setIsOpen={setIsOpen} isOpen={isOpen} />}
						{isTerms && (
							<TermsOfService setIsTerms={setIsTerms} isTerms={isTerms} />
						)}
						{isPrivacy && (
							<PrivacyPolicy
								setIsPrivacy={setIsPrivacy}
								isPrivacy={isPrivacy}
							/>
						)}
					</form>
				</div>
			</section>
		</>
	);
}

export default SignUp;
