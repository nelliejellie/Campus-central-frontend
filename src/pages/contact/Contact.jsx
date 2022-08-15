/** @format */

import React from 'react';
import PageName from '../component/PageName';
import plane from '../../assets/images/icon/paper-plane.png'
import greylogo from '../../assets/images/icon/greylogo.png'
import greyemail from '../../assets/images/icon/greyemail.png'
import greylocation from '../../assets/images/icon/greylocation.png'
import { Link } from 'react-router-dom';


function Contact() {
	return <div className=''>
		<PageName> Contact Us</PageName>
		<div className=' flex flex-row items-center w-[85vw] mx-auto -mt-[76px] mb-[145px] pl-[126px] rounded-t-[20px] bg-white shadow-md'>

			<div className=' w-[70%] pr-[66px] mt-[71px]'>
				<h2 className=' text-[32px]'>Get In Touch</h2>
				<form className=' mt-[44px] space-y-[40px] mb-[130px]'>
					<div className=' flex flex-col'>
						<label htmlFor="Username" className=' text-[16px]'>Username</label>
						<input type="text" placeholder='Enter username' className=' py-[14px] bg-[#EBEAED] outline-none pl-[26px]' />
					</div>

					<div className=' flex flex-col'>
						<label htmlFor="Username" className=' text-[16px]'>Email address</label>
						<input type="text" placeholder='Enter email address' className=' py-[14px] bg-[#EBEAED] outline-none pl-[26px]' />
					</div>

					<div className=' flex flex-col'>
						<label htmlFor="Username" className=' text-[16px]'>Subject</label>
						<input type="text" placeholder='Enter username' className=' py-[14px] bg-[#EBEAED] outline-none pl-[26px]' />
					</div>

					<div className=' flex flex-col'>
						<label htmlFor="Username" className=' text-[16px]'>Details</label>
						<textarea name="" className=' bg-[#EBEAED] outline-none pl-[26px] py-[14px]' placeholder='Please describe your request' id="" cols="30" rows="10"></textarea>
					</div>

					<button className='button-bg mt-[30px] text-[20px] font-bold'>Submit</button>
				</form>
			</div>

			<div className=' w-[3px] h-[420px] bg-[#D9D9D9] '></div>

			<div className=' w-[29%] flex flex-col justify-center items-start self-start mt-[70px] '>
				<img src={plane} alt="" className=' mx-auto mb-[45px]' />

				<div className=' mx-auto'>
					<img src={greylogo} alt="" />

					<div className=' flex flex-col mt-[35px] text-[#808186] '>

						<div className=' flex flex-row justify-start items-center space-x-4'>
							<img src={greyemail} alt="" className=' h-8 self-center lead-[19px]' />
							<p className=' text-[14px] text-left'>38 Afaba Uqua Road, Eket <br /> Akwa-Ibom State</p>
						</div>

						<div className=' flex flex-row justify-start items-center mt-[18px] space-x-4'>
							<img src={greylocation} alt="" className=' h-8 self-center lead-[19px]' />
							<p className=' text-[14px] text-left'>support@campuscentral.com</p>
						</div>
					</div>

				</div>

				<Link to= '/' className=' mx-auto mt-[79px] underline text-blue-700'>Click to explore our FAQs</Link>
			</div>

		</div>
	</div>;
}

export default Contact;
