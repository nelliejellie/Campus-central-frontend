/** @format */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserGroup,
	faHeart,
	faEye,
	faBookmark,
	faEnvelope,
	faAngleUp,
	faAngleDown,
	faEllipsis,
	faMagnifyingGlass,
	faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import { EditProfile } from './components/Modal';

function Profile() {
	const [isEdit, setIsEdit] = useState(false);
	const [isMessage, setIsMessage] = useState(false);
	const [isPaul, setIsPaul] = useState(false);
	return (
		<section className='w-full flex flex-row pl-1'>
			{/* profile section starts here */}
			<section className='w-[70%] flex flex-col'>
				<img
					className='w-full h-40'
					src={require('../../../assets/images/icon/UserProfileBg.png')}
					alt='user profile bg'
				/>
				<div className=' p-4'>
					<div>
						<div className='flex flex-row justify-end h-20 items-start relative '>
							<img
								className='absolute -top-14 left-6'
								src={require('../../../assets/images/icon/KareemChigozie.png')}
								alt='profilepicture'
							/>
							<button
								onClick={() => setIsEdit(true)}
								className='button-bg h-fit w-fit px-5 py-2 '>
								Edit profile
							</button>
						</div>
						<h4>Kareem Chigozie</h4>
						<div className='flex flex-row items-center my-4'>
							<p>@karichizi</p>
							<div className='flex ml-8 flex-row items-center p-1'>
								<img
									src={require('../../../assets/images/icon/gradIcon.png')}
									alt='grad icon'
								/>
								<p className='ml-1'>University of Lagos</p>
							</div>
							<div className='flex ml-10 flex-row items-center '>
								<img
									src={require('../../../assets/images/icon/levelIcon.png')}
									alt='level icon'
								/>
								<p className='ml-1'>300 Level</p>
							</div>
							<div className='flex ml-10 flex-row items-center '>
								<FontAwesomeIcon
									icon={faUserGroup}
									className='text-[#0F6D5F] h-7 w-7 '
								/>
								<p className='ml-1'>700</p>
							</div>
						</div>
						<div className='py-2 mb-4'>
							<p>
								HI, I’m kareem an Engineering student at the University of
								Lagos. I am also passionate about photography and fashion.{' '}
							</p>
						</div>
					</div>
					<div className=' flex flex-row items-start mt-12'>
						<div className='w-[50px] h-[50px]'>
							<img
								className=' '
								src={require('../../../assets/images/icon/KareemChigozie.png')}
								alt='profilepicture'
							/>
						</div>
						<div className='w-10/12'>
							<div className='flex flex-row ml-1 '>
								<h6>Kareem Chigozie</h6>{' '}
								<p className='text-gray-500 ml-2'>@karichizi</p>{' '}
							</div>
							<div className='ml-1 mt-2 mb-8 '>
								<p>
									The government needs to start taking us seriously. The strike
									has been going on for too long. Spending about 6 years in the
									university for 4 year course is inhumane. Even those that have
									decided to further their studies abroad cannot apply for their
									transcripts due to NASU strike. How long are we going to
									continue like this?{' '}
									<b className='text-[#0F6D5F]'>#ASSU #NASU #FG #WEARETIRED</b>{' '}
								</p>
							</div>
							<div className='ml-1 w-[15%] flex flex-row pb-6 '>
								<div className='flex flex-row items-center'>
									<p>10</p>
									<img
										className='w-7 h-5 ml-2'
										src={require('../../../assets/images/icon/chat.png')}
										alt='chat icon'
									/>
								</div>
								<div className='flex flex-row  items-center ml-12'>
									<p>20</p>
									<FontAwesomeIcon
										className='text-[#323232CC] w-6 h-6 ml-2'
										icon={faHeart}
									/>
								</div>
								<div className='flex flex-row  items-center ml-8'>
									<p>5</p>
									<FontAwesomeIcon
										className='text-[#323232CC] w-6 h-6 ml-2'
										icon={faEye}
									/>
								</div>
								<div className='flex flex-row  items-center ml-8'>
									<p>1</p>
									<FontAwesomeIcon
										className='text-[#323232CC] w-6 h-6 ml-2'
										icon={faBookmark}
									/>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className=' flex flex-row items-start mt-6'>
						<div className='w-[50px] h-[50px]'>
							<img
								className=' '
								src={require('../../../assets/images/icon/KareemChigozie.png')}
								alt='profilepicture'
							/>
						</div>
						<div className='w-10/12'>
							<div className='flex flex-row ml-1 '>
								<h6>Kareem Chigozie</h6>{' '}
								<p className='text-gray-500 ml-2'>@karichizi</p>{' '}
							</div>
							<div className='ml-1 mt-2 mb-8 '>
								<b className='text-[#0F6D5F]'>#SEXFORGRADES</b>{' '}
								<div className='flex flex-row items-center mt-2 '>
									<img
										className='w-[60%]'
										src={require('../../../assets/images/icon/sexforgrades_one.png')}
										alt=''
									/>
									<img
										className='ml-1 w-[60%]'
										src={require('../../../assets/images/icon/sexforgrades_two.png')}
										alt=''
									/>
								</div>
							</div>
							<div className='ml-1 w-[15%] flex flex-row pb-6 '>
								<div className='flex flex-row items-center'>
									<p>10</p>
									<img
										className='w-7 h-5 ml-2'
										src={require('../../../assets/images/icon/chat.png')}
										alt='chat icon'
									/>
								</div>
								<div className='flex flex-row  items-center ml-12'>
									<p>20</p>
									<FontAwesomeIcon
										className='text-[#323232CC] w-6 h-6 ml-2'
										icon={faHeart}
									/>
								</div>
								<div className='flex flex-row  items-center ml-8'>
									<p>5</p>
									<FontAwesomeIcon
										className='text-[#323232CC] w-6 h-6 ml-2'
										icon={faEye}
									/>
								</div>
								<div className='flex flex-row  items-center ml-8'>
									<p>1</p>
									<FontAwesomeIcon
										className='text-[#323232CC] w-6 h-6 ml-2'
										icon={faBookmark}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* profile section ends here */}

			{/* right sidebar starts here */}
			<section className=' w-min-[30%] flex flex-col py-8 px-4'>
				<div className='grid grid-cols-3  place-content-start '>
					<img
						src={require('../../../assets/images/icon/profileImg_one.png')}
						alt=''
					/>
					<img
						src={require('../../../assets/images/icon/profileImg_two.png')}
						alt=''
					/>
					<img
						src={require('../../../assets/images/icon/profileImg_three.png')}
						alt=''
					/>
					<img
						src={require('../../../assets/images/icon/profileImg_four.png')}
						alt=''
					/>
					<img
						src={require('../../../assets/images/icon/profileImg_5.png')}
						alt=''
					/>
					<img
						src={require('../../../assets/images/icon/profileImg_6.png')}
						alt=''
					/>
				</div>
				<div className='bg-[#F2FBF9] mt-12 py-3 px-3 rounded-[10px]'>
					<b className='text-lg'>People you may know</b>{' '}
					<b className='flex justify-end text-sm text-[#0F6D5F]'>Show all</b>
					<div className='flex flex-col space-y-6 mt-2 '>
						<div className='flex flex-row items-center justify-between'>
							<img
								className='w-10 h-10'
								src={require('../../../assets/images/icon/profile_1.png')}
								alt=''
							/>
							<div className='flex flex-col items-start '>
								<b className='text-sm'>Joseph Chuks </b>
								<b className='text-sm text-[#59585A]'>Attends UNILAG</b>
							</div>

							<button className='button-bg w-fit h-fit px-3 py-1  rounded-full'>
								Request
							</button>
						</div>
						<div className='flex flex-row items-center justify-between'>
							<img
								className='w-10 h-10'
								src={require('../../../assets/images/icon/profile_2.png')}
								alt=''
							/>
							<div className='flex flex-col items-start '>
								<b className='text-sm'>Aminat Danladi</b>
								<b className='text-sm text-[#59585A]'>Attended UNILAG</b>
							</div>

							<button className='button-bg w-fit h-fit px-3 py-1 rounded-full'>
								Request
							</button>
						</div>
						<div className='flex flex-row items-center justify-between'>
							<img
								className='w-10 h-10'
								src={require('../../../assets/images/icon/profile_3.png')}
								alt=''
							/>
							<div className='flex flex-col items-start '>
								<b className='text-sm'>Rose Effiong</b>
								<b className='text-sm text-[#59585A]'>Attends UNIJOS</b>
							</div>

							<button className='button-bg w-fit h-fit px-3 py-1 rounded-full'>
								Request
							</button>
						</div>

						<div className='flex flex-row items-center justify-between'>
							<img
								className='w-10 h-10'
								src={require('../../../assets/images/icon/profile_4.png')}
								alt=''
							/>
							<div className='flex flex-col items-start  '>
								<b className='text-sm'>Dare Folasere</b>
								<b className='text-sm text-[#59585A]  '>Attends LASP...</b>
							</div>

							<button className='button-bg w-fit h-fit px-3 py-1 rounded-full'>
								Request
							</button>
						</div>
					</div>
				</div>

				<div className='bg-[#F2FBF9] mt-12 py-3 px-3 rounded-[10px]'>
					<b className='text-lg'>People you may know</b>{' '}
					<b className='flex justify-end  text-sm text-[#0F6D5F]'>Show all</b>
					<div className='flex flex-col space-y-6 mt-2'>
						<div className='flex flex-row items-center  '>
							<img
								className='w-6 h-6'
								src={require('../../../assets/images/icon/chatIcon.png')}
								alt=''
							/>
							<b className='text-sm pl-2 pl-2'>Engineering</b>
						</div>
						<div className='flex flex-row items-center'>
							<img
								className='w-6 h-6'
								src={require('../../../assets/images/icon/chatIcon.png')}
								alt=''
							/>
							<b className='text-sm pl-2'>Unilag Students Association</b>
						</div>
						<div className='flex flex-row items-center'>
							<img
								className='w-6 h-6'
								src={require('../../../assets/images/icon/chatIcon.png')}
								alt=''
							/>
							<b className='text-sm pl-2'>Engineering Students Forum</b>
						</div>
					</div>
				</div>

				<div
					className={`${
						isMessage ? 'h-[478px] duration-500 ' : ' h-[61px] duration-500  '
					} fixed  w-[353px] left-[72%] bottom-0 rounded-tr-[10px] rounded-tl-[10px] bg-white`}>
					{isPaul ? (
						<div>
							<div className='flex flex-row justify-between items-center py-3 px-6 border-b border-b-gray-400 '>
								<FontAwesomeIcon
									className='hover:cursor-pointer'
									icon={faArrowLeft}
									onClick={() => setIsPaul(!isPaul)}
								/>
								<div className='flex flex-row'>
									<b>Paul Andre</b>
									<p className='pl-1'>@pauldeandre</p>
								</div>
								<FontAwesomeIcon
									className='hover:cursor-pointer'
									icon={faAngleDown}
									onClick={() => {
										setIsPaul(!isPaul);
										setIsMessage(!isMessage);
									}}
								/>
							</div>
							<div className='flex flex-col  h-full'>
								<div>
									<div className='py-8 px-1'>
										<div className='flex flex-row items-start  '>
											<img
												className='w-[40px] h-[40px]'
												src={require('../../../assets/images/icon/message_1.png')}
												alt=''
											/>
											<div className='pl-1'>
												<p className='bg-[#D9D9D94D] rounded-lg p-2 w-[75%] text-sm'>
													{' '}
													When will you get back to me regarding what we talked
													about. I tried reaching you all day but i couldn’t get
													in touch hope all is well with you. Please get back to
													me when you can.
												</p>
												<p className='text-sm text-gray-400'>Today 9:20 am</p>
											</div>
										</div>
									</div>
									<div className='px-1 '>
										<div className='flex flex-row justify-end'>
											<div className='pr-1 flex flex-col items-end'>
												<p className='bg-[#0F6D5F] text-white rounded-lg p-2 w-[75%] text-sm'>
													{' '}
													I’m really sorry bro it’s been a crazy ass week please
													i go buzz you when i enter town.
												</p>
												<p className='text-sm text-gray-400 '>Today 9:34am</p>
											</div>
											<img
												className='w-[40px] h-[40px] '
												src={require('../../../assets/images/icon/KareemChigozie.png')}
												alt=''
											/>
										</div>
									</div>
								</div>
								<div className='mt-16 flex flex-row justify-evenly px-6 items-center '>
									<div className='relative  w-[85%]'>
										<input
											type='text'
											placeholder='Type here'
											className='rounded-full w-full text-sm outline-[#808186] border border-[#808186] pl-4 shadow-md'
										/>
										<img
											className='absolute top-2 right-2 hover:cursor-pointer'
											src={require('../../../assets/images/icon/clip.png')}
											alt=''
										/>
									</div>
									<div className='border-r-2 border-[#4C4E4D] h-4'></div>
									<img
										className='hover:cursor-pointer h-4 w-4'
										src={require('../../../assets/images/icon/send.png')}
										alt=''
									/>
								</div>
							</div>
						</div>
					) : (
						<section>
							<div
								className={`flex flex-row justify-between items-center px-5  border-b-gray-400 ${
									isMessage ? 'border-b pt-3' : 'border-none pt-5  '
								} `}>
								<div className='flex flex-row items-center'>
									{isMessage && (
										<div className='w-[50px] h-[50px]'>
											<img
												className=' '
												src={require('../../../assets/images/icon/KareemChigozie.png')}
												alt='profilepicture'
											/>
										</div>
									)}

									<h6 className='ml-2'>Messages</h6>
								</div>

								<div className='flex flex-row justify-between w-24'>
									<FontAwesomeIcon
										icon={faEnvelope}
										className='cursor-pointer'
									/>
									{isMessage ? (
										<FontAwesomeIcon
											className='cursor-pointer'
											onClick={() => setIsMessage(!isMessage)}
											icon={faAngleDown}
										/>
									) : (
										<FontAwesomeIcon
											className='cursor-pointer'
											onClick={() => setIsMessage(!isMessage)}
											icon={faAngleUp}
										/>
									)}

									<FontAwesomeIcon
										className='cursor-pointer'
										icon={faEllipsis}
									/>
								</div>
							</div>
							{isMessage && (
								<div className='flex flex-col justify-center items-center p-3'>
									<div className='relative p-3 '>
										<input
											type='text'
											placeholder='Search'
											className=' pl-6 pr-16  border border-[#0f6d5f] rounded'
										/>
										<FontAwesomeIcon
											className='absolute left-4 top-4 text-gray-300'
											icon={faMagnifyingGlass}
										/>
									</div>
									<div className='scroll'>
										<div
											onClick={() => setIsPaul(!isPaul)}
											className=' flex flex-row items-center w-full hover:bg-gray-50 hover:cursor-pointer py-2'>
											<img
												className='w-[40px] h-[40px]'
												src={require('../../../assets/images/icon/message_1.png')}
												alt=''
											/>
											<div className='pl-1'>
												<div className='flex flex-row justify-between'>
													<div className='flex flex-row'>
														<b className='text-sm'>Paul Andre</b>
														<p className='text-sm pl-1'>@pauldeandre</p>
													</div>
													<p className='text-sm'>Jan 6</p>
												</div>
												<p className='text-sm'>
													When will you get back to me regarding......
												</p>
											</div>
										</div>
										<div className=' flex flex-row items-center w-full hover:bg-gray-50 hover:cursor-pointer py-3'>
											<img
												className='w-[40px] h-[40px]'
												src={require('../../../assets/images/icon/message_2.png')}
												alt=''
											/>
											<div className='pl-1'>
												<div className='flex flex-row justify-between'>
													<div className='flex flex-row'>
														<b className='text-sm'>Lucy Kabira</b>
														<p className='text-sm pl-1'>@lucykabby</p>
													</div>
													<p className='text-sm'>Jan 6</p>
												</div>
												<p className='text-sm'>
													When will you get back to me regarding......
												</p>
											</div>
										</div>
										<div className=' flex flex-row items-center w-full hover:bg-gray-50 hover:cursor-pointer py-3'>
											<img
												className='w-[40px] h-[40px]'
												src={require('../../../assets/images/icon/message_3.png')}
												alt=''
											/>
											<div className='pl-1'>
												<div className='flex flex-row justify-between'>
													<div className='flex flex-row'>
														<b className='text-sm'>Helen Chidera</b>
														<p className='text-sm pl-1'>@awesomehelen</p>
													</div>
													<p className='text-sm'>Jan 6</p>
												</div>
												<p className='text-sm'>
													When will you get back to me regarding......
												</p>
											</div>
										</div>
										<div className=' flex flex-row items-center w-full hover:bg-gray-50 hover:cursor-pointer py-3'>
											<img
												className='w-[40px] h-[40px]'
												src={require('../../../assets/images/icon/profile_1.png')}
												alt=''
											/>
											<div className='pl-1'>
												<div className='flex flex-row justify-between'>
													<div className='flex flex-row'>
														<b className='text-sm'>Sindara Oluwole</b>
														<p className='text-sm pl-1'>@misssindy</p>
													</div>
													<p className='text-sm'>Jan 6</p>
												</div>
												<p className='text-sm'>
													When will you get back to me regarding......
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</section>
					)}
				</div>
			</section>

			{isEdit && <EditProfile setIsEdit={setIsEdit} isEdit={isEdit} />}
			{/* right sidebar ends here */}
		</section>
	);
}

export default Profile;
