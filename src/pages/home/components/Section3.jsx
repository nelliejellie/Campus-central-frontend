/** @format */

import React from 'react';
import SafeSpace from '../../../assets/images/icon/SafeSpace.png';
import AccessVirtual from '../../../assets/images/icon/AccessVirtual.png';
import Speak from '../../../assets/images/icon/Speak.png';
import Instant from '../../../assets/images/icon/instant.png';
import { Link } from 'react-router-dom';

const Section3 = () => {
	return (
		<>
			<section className=' '>
				<div className=' bg-gray-100 mt-[176px]'>
					<div className=' w-[65%] mx-auto flex flex-row gap-20 items-center justify-center'>
						<img
							src={SafeSpace}
							alt=''
							className='w[444px] -mt-[56px] mb-[46px] rounded-sm object-contain'
						/>
						<div className=' flex flex-col text-left space-y-[25px]'>
							<h2 className=' text-3xl'>Safe Space</h2>
							<p className=' text-left'>
								Report issues happening on campus anonymously and get help from
								therapist and counselors
							</p>

							<Link to='/'>
								<button className='button-border w-fit h-fit px-5 py-3'>
									Start Here
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className=' bg-gray-100 mt-[176px]'>
					<div className=' w-[65%] mx-auto flex flex-row gap-20 items-center justify-center'>
						<div className=' flex flex-col text-left space-y-[25px]'>
							<h2 className=' text-3xl'>Access to a Virtual Books</h2>
							<p className=' text-left'>
								Gain access to a large database of academic materials, course
								outlines, books on our e-library portal.
							</p>
							<Link to='/'>
								<button className='button-border w-fit h-fit px-5 py-3'>
									Click Here
								</button>
							</Link>
						</div>
						<img
							src={AccessVirtual}
							alt=''
							className='w[444px] -mt-[56px] mb-[46px] rounded-sm object-contain'
						/>
					</div>
				</div>

				<div className=' bg-gray-100 mt-[176px]'>
					<div className=' w-[65%] mx-auto flex flex-row gap-20 items-center justify-center'>
						<img
							src={Speak}
							alt=''
							className='w[444px] -mt-[56px] mb-[46px] rounded-sm object-contain'
						/>
						<div className=' flex flex-col text-left space-y-[25px]'>
							<h2 className=' text-3xl'>Speak to a therapist or counselor</h2>
							<p className=' text-left'>
								Discuss your personal issues to a professional and get the help
								you need
							</p>
							<Link to='/'>
								<button className='button-border w-fit h-fit px-5 py-3'>
									Get Started
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className=' bg-gray-100 mt-[176px]'>
					<div className=' w-[65%] mx-auto flex flex-row gap-20 items-center justify-center'>
						<div className=' flex flex-col text-left space-y-[25px]'>
							<h2 className=' text-3xl'>Instant Messaging</h2>
							<p className=' text-left'>
								Gain access to a large database of academic materials, course
								outlines, books on our e-library portal.
							</p>

							<Link to='/'>
								<button className='button-border w-fit h-fit px-5 py-3'>
									Chat Now
								</button>
							</Link>
						</div>
						<img
							src={Instant}
							alt=''
							className='w[444px] -mt-[56px] mb-[46px] rounded-sm object-contain'
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Section3;
