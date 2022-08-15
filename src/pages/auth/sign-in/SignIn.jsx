/** @format */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../../hooks/UserAuthContext';

function SignIn() {
	const [error, setError] = useState('');
	let { logIn, googleSignIn } = useUserAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordShown, setPasswordShown] = useState(false);
	let navigate = useNavigate();

	const handlePasswordToggle = () => {
		setPasswordShown((prev) => !prev);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await logIn(email, password);
			navigate('/admin/dashboard');
		} catch (err) {
			setError(err.message);
		}
	};

	const handleGoogleSignIn = async (e) => {
		e.preventDefault();
		try {
			await googleSignIn();
			navigate('/admin/dashboard');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className='flex flex-col flex-1 w-[70%] mx-auto justify-center'>
			<div className='cursor-pointer'>
				<h1>Sign In</h1>
				<div className='flex flex-col justify-center items-center mt-4 w-full'>
					<button
						onClick={handleGoogleSignIn}
						className='button-border text-[#0f6d5f] 
						font-semibold flex flex-row justify-center
						 items-center rounded-lg border-2 border-black '>
						<img
							className='mr-1'
							src={require('../../../assets/images/icon/Googlesvg.png')}
							alt='google svg'
						/>
						Sign up with Google
					</button>
				</div>
			</div>

			<div className='w-full flex justify-center mt-4'>
				<h6>Or</h6>
			</div>
			<form>
				<div>
					<label className='font-semibold'>Email address</label>
					<input
						className='border border-gray-400 rounded w-full pl-5 py-3'
						type='email'
						placeholder='Enter email address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='mt-4'>
					<label className='font-semibold'>Password</label>
					<div className='w-full relative'>
						<input
							className='border border-gray-400 rounded w-full pl-5 py-3'
							type={passwordShown ? 'text' : 'password'}
							placeholder='Enter email address'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{passwordShown && (
							<FontAwesomeIcon
								onClick={handlePasswordToggle}
								icon={faEye}
								className='cursor-pointer absolute right-4 top-[30%]'
							/>
						)}
						{!passwordShown && (
							<FontAwesomeIcon
								onClick={handlePasswordToggle}
								icon={faEyeSlash}
								className='cursor-pointer absolute right-4 top-[30%]'
							/>
						)}
					</div>
				</div>
				<div className='w-full flex justify-end mt-4'>
					<Link className='text-[#0f6d5f] ml-2' to={'/auth/forgot-password'}>
						Forgot password?
					</Link>
				</div>
				<div>
					<button className='button-bg w-full mt-4'>Sign In</button>
					<p className='mt-2 text-center'>
						Don't have an account?
						<Link className='text-[#0f6d5f] ml-2' to={'/auth/sign-up'}>
							Sign Up
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}

export default SignIn;
