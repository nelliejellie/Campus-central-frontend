/** @format */

import React from 'react';
import Style from '../assets/style/Header.module.css';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import icoN from '../assets/images/icon/Logo.png';

export function Header() {
	return (
		<nav className=' flex flex-row justify-between  items-center px-11 shadow-md'>
			<Link to='/'>
				<img className='' src={icoN} alt='' />
			</Link>

			<div className=' flex flex-row items-center'>
				<div className=' space-x-12 text-[16px] mr-20'>
					<Link className={` ${Style.green} font-bold`} to='/'>
						Home
					</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</div>

				<div className=' flex flex-row items-center space-x-8'>
					<Link to='/auth/sign-in'>Log in</Link>
					<Link to={'/auth/sign-up'}>
						<button className='button-bg h-fit py-4 px-6 text-[16px]'>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export function DashboardHeader() {
	const location = useLocation();
	return (
		<nav className={'flex items-center flex-wrap p-3 w-full'}>
			<div className={'w-1/5'}>
				{location?.pathname?.split('/')[2]?.toLocaleUpperCase()}
			</div>
			<div className={'w-3/5'}>
				<form>
					<input type='search' placeholder='search' className={Style.input} />
				</form>
			</div>
			<div className={'w-1/5 text-right'}>
				<Link to='/admin/notification'>
					<FontAwesomeIcon icon={faBell} className={Style.icon} />
				</Link>
				<Link to='/admin/profile'>
					<FontAwesomeIcon icon={faUser} className={Style.icon} />
				</Link>
			</div>
		</nav>
	);
}
