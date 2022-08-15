/** @format */

import React, { useState } from 'react';
import Style from '../../../assets/style/Dashboard.module.css';
import createimage from '../../../assets/images/icon/AccessVirtual.png';
import comment from '../../../assets/images/icon/screenh2.png';
import like from '../../../assets/images/icon/screenh1.png';
import share from '../../../assets/images/icon/screenh4.png';
import itemdropdown from '../../../assets/images/icon/screenh3.png';
import searchicon from '../../../assets/images/icon/searchicon.png';
import notification from '../../../assets/images/icon/notify.png';
import profile from '../../../assets/images/icon/profileicon.png'
import { Link } from 'react-router-dom';
import { Createapost, Searchmodal } from './Dashboardmodals';
import emotion from '../../../assets/images/icon/emoji_emotions.png';
import picture from '../../../assets/images/icon/post1.png';
import Dashboardleftsidebar from './Dashboardleftsidebar';

function Dashboard() {

	const [iscreatepost, setIscreatepost] = useState(false);
	const [issearchpost, setIssearchpost] = useState(false);
	const [issharedropdown, setIssharedropdown] = useState(false);
	const [islike, setIslike] = useState(0);
	const [iscommentdropdown, setIscommentdropdown ] = useState(false);

	const sharedropdown = () => {
		setIssharedropdown(!issharedropdown);
	}

	const likeadd = () => {
		setIslike(islike + 1);
	}

	const commentdropdown = () =>{
		setIscommentdropdown(!iscommentdropdown);
	}

	
	return <div >

		<div className=' '>
			<nav className='shadow-md'>
				<div className='flex flex-row justify-between px-5 pt-5 '>
					<div className='flex flex-row justify-items-center justify-center items-center'>
						<h1 className={`${Style.home}`} >Home</h1>
						<img src={searchicon} alt="search-icon" className='relative w-6 h-6 left-8 ' />
						<input type="text" placeholder='Search' 
							className={`${Style.foruminput} outline-none w-full pl-10 py-2 pr-72`} 
							onClick={ () => {setIssearchpost(true)}}
						/> 
					</div>

					<div className='flex flex-row justify-items-center items-center '>
						<img src={notification} alt="notification" className='pr-10' />
						<img src={profile} alt="profile" className='pr-10' />
					</div>
					{issearchpost && (<Searchmodal issearchpost={issearchpost} setIssearchpost={setIssearchpost} />)}
				</div>
			</nav>
		</div>

		<div className=''>
			<div className='grid grid-cols-3 gap-6 mt-5'>
				<div className='col-span-2'>
					<div className={`${Style.createpostcontainer} p-4 flex items-center mb-6`}>
						<img src={createimage} alt=""  className='w-12 h-12 rounded-full object-cover'/>
						<input 
							type="text"  
							placeholder='Create a post' 
							className={`${Style.createpostinput} py-3 pl-3 rounded-md w-10/12 ml-5 outline-none`} 
							onClick={() => {setIscreatepost(true) }}
						/>

					</div>

					<div>
						<ul className='flex shadow-sm border-b-2 pt-4'>
							<div className='flex flex-col justify-center items-center'>
								<Link to="#" className={`${Style.hot}  relative cursor-pointer `} >Hot</Link>
								<div className={`${Style.hotunderline} `} ></div>
							</div>
							<Link  to="#" className={`${Style.trend} px-6 cursor-pointer`}>Trending</Link>
							<Link to="#" className={`${Style.trend} cursor-pointer`} >Latest</Link>
						</ul>
					</div>

					<div className='px-4 pt-6 pb-10 shadow-sm border-b'>
						<div className='flex flex-row items-center justify-between'>
							<img src={createimage} alt="createimage"  className='w-12 h-12 rounded-full object-cover'/>
							<h3 className={`${Style.hotheading} pr-80 mr-14`} >Lucy Ade <span className={`${Style.hotheadspan1} pl-2`} >@thatlucybabe</span> <span className='pl-2 text-gray-300 font-extrabold'>.</span><span className={`${Style.hotheadspan2} pl-2`}>1 min</span></h3>
							<img src={itemdropdown} alt="itemdropdown" className=' ' />
						</div>

						<div className='px-16'>
							<p className={`${Style.hotpara}`} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper elit nisl mauris dolor duis urna, 
								sit sed bibendum. Imperdiet vivamus iaculis ut quis enim, aliquet luctus. Vehicula donec feugiat 
								in facilisis maecenas phasellus tristique. Mattis eu etiam purus, tincidunt id ac.
							</p>
						</div>

						<div className='flex flex-row px-16 mt-5 items-center cursor-pointer'>
							<span className='pr-2'>10</span><img src={comment} alt="hot-comment" className='pr-8' onClick={commentdropdown} />
							<span className='pr-2'>{islike}</span><img src={like} alt="hot-like" className='pr-8' onClick={likeadd} />
							<span className='pr-2'>5</span><img src={share} alt="hot-share" onClick={sharedropdown} />

							{issharedropdown ? (
								<div className='shadow-md rounded-md' >
									<ul className={`${Style.sharedropdown} py-2 cursor-pointer`} >
										<li className='border-b py-2 px-5 '>Copy link</li>
										<li className='border-b py-2 px-5 '>Repost</li>
										<li className='py-2 px-5 '>Share to chat</li>
									</ul>
								</div>
							): null}

						</div>


						{iscommentdropdown? (
							<div>
								<div className='justify-items-center items-center justify-between px-16 mt-3' >
									<div >
										<div className={`p-4 flex items-center mb-6 border-b`}>
											<img src={createimage} alt=""  className='w-12 h-12 rounded-full object-cover'/>
											<input type="text" placeholder='Add your comment' className={` ${Style.comentinput1} py-3 pl-3  w-full ml-5 outline-none`}/>
											<div className={`${Style.comentinput2} flex flex-row items-center px-10 py-2 `} >
												<img src={emotion} alt="emotion emoji" className='w-8 h-8 mr-3'/>
												<img src={picture} alt="upload a pictures'" className='w-6 h-6 ' />
											</div>
										</div>
									</div>
								</div>

								<div className='px-16'>
									<h3 className={`${Style.commentdropdown} py-5`} >Comments</h3>
									<div>
										<div className='flex flex-row  justify-between'>
											<img src={createimage} alt="createimage"  className='w-12 h-12 rounded-full object-cover mr-3'/>
											<div className={`${Style.comentdropdowntext} py-3 pl-3 pr-12`}>
												<div className='flex flex-row items-center justify-between'>
													<h3 className={`${Style.hotheading} pb-2`} >Lucy Ade <span className={`${Style.hotheadspan1} pl-2`} >@thatlucybabe</span> <span className='pl-2 text-gray-300 font-extrabold'>.</span><span className={`${Style.hotheadspan2} pl-2`}>1 min</span></h3>
												</div>
												<p className={`${Style.comentdropdowntext} `} >
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper elit nisl mauris dolor duis urna, sit sed bibendum. 
													Imperdiet vivamus iaculis ut quis enim, aliquet luctus. 
												</p>
											</div>
										</div>

										<div className='flex flex-row justify-items-center items-center pl-20 '>
											<p className={`${Style.commentreply} cursor-pointer`} >Like</p>
											<div className={`${Style.commentvertcalline}`} ></div>
											<p className={`${Style.commentreply} cursor-pointer`}>Reply</p>
										</div>
									</div>

									<div className='pl-16 pt-4'>
										<div>
											<div className='flex flex-row  justify-between'>
												<img src={createimage} alt="createimage"  className='w-12 h-12 rounded-full object-cover mr-3'/>
												<div className={`${Style.comentdropdowntext} py-3 pl-3 pr-12`}>
													<div className='flex flex-row items-center justify-between'>
														<h3 className={`${Style.hotheading} pb-2`} >Lucy Ade <span className={`${Style.hotheadspan1} pl-2`} >@thatlucybabe</span> <span className='pl-2 text-gray-300 font-extrabold'>.</span><span className={`${Style.hotheadspan2} pl-2`}>1 min</span></h3>
													</div>
													<p className={`${Style.comentdropdowntext} `} >
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper elit nisl mauris dolor duis urna, sit sed bibendum. 
														Imperdiet vivamus iaculis ut quis enim, aliquet luctus. 
													</p>
												</div>
											</div>

											<div className='flex flex-row justify-items-center items-center pl-20 '>
												<p className={`${Style.commentreply} cursor-pointer`} >Like</p>
												<div className={`${Style.commentvertcalline}`} ></div>
												<p className={`${Style.commentreply} cursor-pointer`}>Reply</p>
											</div>

											<div className={`p-4 flex items-center mb-6`}>
												<img src={createimage} alt=""  className='w-12 h-12 rounded-full object-cover'/>
												<input type="text" placeholder='Add your comment' className={` ${Style.comentinput1} py-3 pl-3  w-full ml-5 outline-none`}/>
												<div className={`${Style.comentinput2} flex flex-row items-center px-10 py-2 `} >
													<img src={emotion} alt="emotion emoji" className='w-8 h-8 mr-3'/>
													<img src={picture} alt="upload a pictures'" className='w-6 h-6 ' />
												</div>
											</div>
										</div>

									</div>
								</div>

							</div>
						):null}
					</div>

					<div className='px-4 pt-6 pb-10 shadow-sm border-b'>
						<div className='flex flex-row items-center justify-between'>
							<img src={createimage} alt="createimage"  className='w-12 h-12 rounded-full object-cover'/>
							<h3 className={`${Style.hotheading} pr-80 mr-14`} >Lucy Ade <span className={`${Style.hotheadspan1} pl-2`} >@thatlucybabe</span> <span className='pl-2 text-gray-300 font-extrabold'>.</span><span className={`${Style.hotheadspan2} pl-2`}>1 min</span></h3>
							<img src={itemdropdown} alt="itemdropdown" className=' ' />
						</div>

						<div className='px-16'>
							<p className={`${Style.hotpara}`} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper elit nisl mauris dolor duis urna, 
								sit sed bibendum. Imperdiet vivamus iaculis ut quis enim, aliquet luctus. Vehicula donec feugiat 
								in facilisis maecenas phasellus tristique. Mattis eu etiam purus, tincidunt id ac.
							</p>
						</div>

						<div className='px-16 flex flex-row justify-between mt-3'>
							<img src={createimage} alt="" className={`${Style.hotimg}`} />
							<img src={createimage} alt="" className={`${Style.hotimg2} pl-2`} />
						</div>

						<div className='flex flex-row px-16 mt-5 items-center cursor-pointer'>
							<span className='pr-2'>10</span><img src={comment} alt="hot-comment" className='pr-8' onClick={commentdropdown} />
							<span className='pr-2'>{islike}</span><img src={like} alt="hot-like" className='pr-8 ' onClick={likeadd} />
							<span className='pr-2'>5</span><img src={share} alt="hot-share" onClick={sharedropdown} className='' />

							{issharedropdown ? (
								<div className='shadow-md rounded-md ' >
									<ul className={`${Style.sharedropdown} py-2`} >
										<li className='border-b py-2 px-5 cursor-pointer'>Copy link</li>
										<li className='border-b py-2 px-5 cursor-pointer'>Repost</li>
										<li className='py-2 px-5 cursor-pointer'>Share to chat</li>
									</ul>
								</div>
							): null}
						</div>

						{iscommentdropdown? (
							<div>
								<div className='justify-items-center items-center justify-between px-16 mt-3' >
									<div >
										<div className={`p-4 flex items-center mb-6 border-b`}>
											<img src={createimage} alt=""  className='w-12 h-12 rounded-full object-cover'/>
											<input type="text" placeholder='Add your comment' className={` ${Style.comentinput1} py-3 pl-3  w-full ml-5 outline-none`}/>
											<div className={`${Style.comentinput2} flex flex-row items-center px-10 py-2 `} >
												<img src={emotion} alt="emotion emoji" className='w-8 h-8 mr-3'/>
												<img src={picture} alt="upload a pictures'" className='w-6 h-6 ' />
											</div>
										</div>
									</div>
								</div>

								<div className='px-16'>
									<h3 className={`${Style.commentdropdown} py-5`} >Comments</h3>
									<div>
										<div className='flex flex-row  justify-between'>
											<img src={createimage} alt="createimage"  className='w-12 h-12 rounded-full object-cover mr-3'/>
											<div className={`${Style.comentdropdowntext} py-3 pl-3 pr-12`}>
												<div className='flex flex-row items-center justify-between'>
													<h3 className={`${Style.hotheading} pb-2`} >Lucy Ade <span className={`${Style.hotheadspan1} pl-2`} >@thatlucybabe</span> <span className='pl-2 text-gray-300 font-extrabold'>.</span><span className={`${Style.hotheadspan2} pl-2`}>1 min</span></h3>
												</div>
												<p className={`${Style.comentdropdowntext} `} >
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper elit nisl mauris dolor duis urna, sit sed bibendum. 
													Imperdiet vivamus iaculis ut quis enim, aliquet luctus. 
												</p>
											</div>
										</div>

										<div className='flex flex-row justify-items-center items-center pl-20 '>
											<p className={`${Style.commentreply} cursor-pointer`} >Like</p>
											<div className={`${Style.commentvertcalline}`} ></div>
											<p className={`${Style.commentreply} cursor-pointer`}>Reply</p>
										</div>
									</div>

									<div className='pl-16 pt-4'>
										<div>
											<div className='flex flex-row  justify-between'>
												<img src={createimage} alt="createimage"  className='w-12 h-12 rounded-full object-cover mr-3'/>
												<div className={`${Style.comentdropdowntext} py-3 pl-3 pr-12`}>
													<div className='flex flex-row items-center justify-between'>
														<h3 className={`${Style.hotheading} pb-2`} >Lucy Ade <span className={`${Style.hotheadspan1} pl-2`} >@thatlucybabe</span> <span className='pl-2 text-gray-300 font-extrabold'>.</span><span className={`${Style.hotheadspan2} pl-2`}>1 min</span></h3>
													</div>
													<p className={`${Style.comentdropdowntext} `} >
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper elit nisl mauris dolor duis urna, sit sed bibendum. 
														Imperdiet vivamus iaculis ut quis enim, aliquet luctus. 
													</p>
												</div>
											</div>

											<div className='flex flex-row justify-items-center items-center pl-20 '>
												<p className={`${Style.commentreply} cursor-pointer`} >Like</p>
												<div className={`${Style.commentvertcalline}`} ></div>
												<p className={`${Style.commentreply} cursor-pointer`}>Reply</p>
											</div>

											<div className={`p-4 flex items-center mb-6`}>
												<img src={createimage} alt=""  className='w-12 h-12 rounded-full object-cover'/>
												<input type="text" placeholder='Add your comment' className={` ${Style.comentinput1} py-3 pl-3  w-full ml-5 outline-none`}/>
												<div className={`${Style.comentinput2} flex flex-row items-center px-10 py-2 `} >
													<img src={emotion} alt="emotion emoji" className='w-8 h-8 mr-3'/>
													<img src={picture} alt="upload a pictures'" className='w-6 h-6 ' />
												</div>
											</div>
										</div>

									</div>
								</div>

							</div>
						):null}

					</div>

					{iscreatepost && (
						<Createapost setIscreatepost={setIscreatepost} iscreatepost={iscreatepost} />
					)}
					
				</div>
				
				{/* left sidebar */}
				<Dashboardleftsidebar />
			</div>
		</div>
	</div>;
}

export default Dashboard;
