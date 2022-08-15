/** @format */

import React from 'react';
import Meet from '../../../assets/images/icon/MeetNewPeople.png';
import Virtual from '../../../assets/images/icon/Virtual.png';
import Share from '../../../assets/images/icon/Share.png';
import Arrow from '../../../assets/images/icon/Arrow.png';

const Section2 = () => {
	return (
		<>
			<section className=' mt-32 flex flex-col justify-center px-[101px] mb-5'>
				<h1 className=' text-center'>What we offer</h1>
				<div className=' grid md:grid-cols-4 gap-8 mt-[70px] '>
					<div className=' relative p-6'>
						<p className=' text-3xl font-bold mt-2 text-left leading-[43px] '>
							Connect with fellow Nigerian students
						</p>
						<img
							src={Arrow}
							className='absolute right-[10%] bottom-[27%] w-8'
							alt=''
						/>
					</div>

					<div className='px-5 py-7 space-y-7 bg-gray-300 shadow-lg rounded-lg'>
						<img className=' h-9 w-9' src={Virtual} alt='' />
						<h1 className=' text-2xl font-bold'>Virtual Resources</h1>
						<p className=' text-sm text-left'>
							Gain access to a large database of academic materials, course
							outlines, books on our e-library portal.
						</p>
					</div>

					<div className='px-5 py-7 space-y-7 bg-gray-300 shadow-lg rounded-lg'>
						<img className=' h-9 w-9' src={Share} alt='' />
						<h1 className=' text-2xl font-bold'>Share you story</h1>
						<p className=' text-sm text-left'>
							Report issues happening on campus anonymously and get help from
							therapist and counselors
						</p>
					</div>

					<div className='px-5 py-7 space-y-7 bg-gray-300 shadow-lg rounded-lg'>
						<img className=' h-9 w-9' src={Meet} alt='' />
						<h1 className=' text-2xl font-bold'>Meet new people</h1>
						<p className=' text-sm text-left'>
							Chat with fellow students and get realtime feedbak, directly or in
							groups.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Section2;
