/** @format */

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Style from '../../assets/style/AuthView.module.css';

function AuthView() {
	return (
		<div>
			<div className='flex flex-wrap items-center h-screen'>
				<div className={`w-3/6`}>
					<div className={`${Style.left} w-3/6`}>
						<div className='w-full text-center'>
							<Link to='/' className='flex flex-row justify-center'>
								<img
									src={require('../../assets/images/icon/Frame.png')}
									alt='logo'
									className={`${Style.img}`}
								/>
							</Link>

							<h5>
								Campus Central helps you connect and share your experience and
								knowledge with students from different schools. It also creates
								a safes-pace to discuss this happening around you.
							</h5>
						</div>
					</div>
				</div>
				<div className='w-3/6 p-0'>
					<div className='flex flex-wrap items-center'>
						<div className='w-full'>
							<div className='flex flex-wrap items-center justify-between'>
								<div className='w-3/6 text-left'>
									<div className={Style.circleYellow}></div>
								</div>
								<div className='w-3/6 text-right'>
									<div className={`${Style.circleGreen} ml-auto`}></div>
								</div>
							</div>
						</div>
						<div className={`${Style.scroll} `}>
							<div className='w-full'>
								<Outlet />
							</div>
						</div>
						<div className='w-full'>
							<div className='flex flex-wrap items-center justify-between'>
								<div className='w-3/6 text-left'>
									<div className={Style.circleGreen}></div>
								</div>
								<div className='w-3/6 text-right'>
									<div className={`${Style.circleYellow} ml-auto`}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthView;
