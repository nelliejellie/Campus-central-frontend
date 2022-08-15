/** @format */

import React from 'react';
import Modalbig from '../../../../components/Modalbig';
import Modalsmall from '../../../../components/Modalsmall';
import verificationimg from '../../../../assets/images/icon/Vector.png';
import Style from '../../../../assets/style/Modal.module.css';
import { CSSTransition } from 'react-transition-group';
import '../../../../assets/style/Modal.css';

export function Verification({ setIsOpen, isOpen }) {
	return (
		<CSSTransition in={isOpen} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
			<div className='my-16'>
				<div className={`darkBG`} />
				<div className='drop-shadow-xl centered'>
					<span
						className={`closeBtn`}
						onClick={() => setIsOpen(false)}
						style={{ marginBottom: '-3px' }}>
						x
					</span>

					<Modalsmall className='text-center'>
						<div className=''>
							<div className='pt-3'>
								<img
									src={verificationimg}
									alt='verificationimg'
									className={`${Style.verificationimg} m-auto mt-16`}
								/>
							</div>
							<h3 className={`${Style.verificationheading} text-center pt-10`}>
								Almost there!
							</h3>
							<div className='py-10'>
								<p className={`${Style.verificationtext} px-20`}>
									A verification link has been sent to johndoe@gmail.com. Open
									your email account and click on the link to verify your email
									address.
								</p>
							</div>
							<div className='mx-20'>
								<button className={`${Style.verificationbtn} `}>
									Open email app
								</button>
							</div>
						</div>
					</Modalsmall>
				</div>
			</div>
		</CSSTransition>
	);
}

export function TermsOfService({ isTerms, setIsTerms }) {
	return (
		<CSSTransition in={isTerms} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
			<div className='py-16'>
				<div className={`darkBG`}>
					<div className='drop-shadow-xl centered'>
						<span
							className={`closeBtn`}
							onClick={() => setIsTerms(false)}
							style={{ marginBottom: '-3px' }}>
							x
						</span>
						<Modalbig>
							<div className='px-8'>
								<div className='pt-4'>
									<h2 className={`${Style.termsofserviceheading} text-center`}>
										Terms of service
									</h2>
								</div>
								<div className={`${Style.scroll}`}>
									<div className={`${Style.termsofservicepara}`}>
										<p className='pt-10'>Last modified: June 28, 2022</p>
										<p className='pt-5'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Et tortor consequat id porta nibh venenatis. Morbi
											tincidunt augue interdum velit.
										</p>
										<p className='pt-5'>
											Platea dictumst vestibulum rhoncus est pellentesque. Dolor
											sed viverra ipsum nunc aliquet bibendum enim facilisis.
											Dui faucibus in ornare quam viverra orci sagittis. Aenean
											sed adipiscing diam donec adipiscing. Justo nec ultrices
											dui sapien eget mi proin sed. Et magnis dis parturient
											montes nascetur ridiculus. Lorem donec massa sapien
											faucibus et molestie ac feugiat sed. In ante metus dictum
											at tempor commodo ullamcorper.
										</p>
										<p className='pt-5'>
											Varius sit amet mattis vulputate enim nulla. Porta non
											pulvinar neque laoreet suspendisse interdum consectetur.
											Scelerisque fermentum dui faucibus in ornare quam viverra
											orci sagittis. Egestas tellus rutrum tellus pellentesque
											eu tincidunt. Pulvinar neque laoreet suspendisse interdum
											consectetur libero id faucibus. Nunc sed id semper risus
											in hendrerit gravida rutrum. Venenatis a condimentum vitae
											sapien pellentesque habitant morbi.
										</p>
										<p className='pt-5'>
											Sed risus ultricies tristique nulla aliquet enim tortor at
											auctor. Habitant morbi tristique senectus et netus et
											malesuada. Fusce ut placerat orci nulla.
										</p>
									</div>
								</div>
								<div className='flex-row flex justify-between items-center h-20'>
									<button
										className={`${Style.termsofservicebtn} button-border`}>
										Decline
									</button>
									<button className={`${Style.termsofservicebtn} button-bg`}>
										Accept
									</button>
								</div>
							</div>
						</Modalbig>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
}

export function PrivacyPolicy({ isPrivacy, setIsPrivacy }) {
	return (
		<CSSTransition
			in={isPrivacy}
			unmountOnExit
			timeout={{ enter: 0, exit: 300 }}>
			<div className='py-16'>
				<div className={`darkBG`}>
					<div className='drop-shadow-xl centered'>
						<span
							className={`closeBtn`}
							onClick={() => setIsPrivacy(false)}
							style={{ marginBottom: '-3px' }}>
							x
						</span>
						<Modalbig>
							<div className='px-8'>
								<div className='pt-4'>
									<h2 className={`${Style.termsofserviceheading} text-center`}>
										Privacy Policy
									</h2>
								</div>
								<div className={`${Style.scroll}`}>
									<div className={`${Style.termsofservicepara}`}>
										<p className='pt-10'>Last modified: June 28, 2022</p>
										<p className='pt-5'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Et tortor consequat id porta nibh venenatis. Morbi
											tincidunt augue interdum velit.
										</p>
										<p className='pt-5'>
											Platea dictumst vestibulum rhoncus est pellentesque. Dolor
											sed viverra ipsum nunc aliquet bibendum enim facilisis.
											Dui faucibus in ornare quam viverra orci sagittis. Aenean
											sed adipiscing diam donec adipiscing. Justo nec ultrices
											dui sapien eget mi proin sed. Et magnis dis parturient
											montes nascetur ridiculus. Lorem donec massa sapien
											faucibus et molestie ac feugiat sed. In ante metus dictum
											at tempor commodo ullamcorper.
										</p>
										<p className='pt-5'>
											Varius sit amet mattis vulputate enim nulla. Porta non
											pulvinar neque laoreet suspendisse interdum consectetur.
											Scelerisque fermentum dui faucibus in ornare quam viverra
											orci sagittis. Egestas tellus rutrum tellus pellentesque
											eu tincidunt. Pulvinar neque laoreet suspendisse interdum
											consectetur libero id faucibus. Nunc sed id semper risus
											in hendrerit gravida rutrum. Venenatis a condimentum vitae
											sapien pellentesque habitant morbi.
										</p>
										<p className='pt-5'>
											Sed risus ultricies tristique nulla aliquet enim tortor at
											auctor. Habitant morbi tristique senectus et netus et
											malesuada. Fusce ut placerat orci nulla.
										</p>
									</div>
								</div>
								<div className='flex-row flex justify-between items-center h-20'>
									<button
										className={`${Style.termsofservicebtn} button-border`}>
										Decline
									</button>
									<button className={`${Style.termsofservicebtn} button-bg`}>
										Accept
									</button>
								</div>
							</div>
						</Modalbig>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
}

export function CreateYourUsername() {
	return (
		<div className='my-16'>
			<div className='drop-shadow-xl'>
				<Modalsmall className=' text-center'>
					<div className='px-12'>
						<div className='pt-12'>
							<h3 className={`${Style.createusernameheading}`}>
								Create your username
							</h3>
							<p className={`${Style.createusernametext} pt-5`}>
								Your username is unique and you can always change it later.
							</p>
						</div>
						<div className='pt-8'>
							<label htmlFor='username'>Username</label>
							<br />
							<input
								type='text'
								placeholder='@ Username1'
								className={`${Style.createusernameform} w-full p-2`}
							/>
						</div>
						<div className='mt-16'>
							<button className={`${Style.verificationbtn} `}>Save</button>
						</div>
					</div>
				</Modalsmall>
			</div>
		</div>
	);
}
