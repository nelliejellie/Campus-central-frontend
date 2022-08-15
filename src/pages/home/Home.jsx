/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';


function Home() {
	return (
		<div>

		<Section1 />
		<Section2 />
		<Section3 />
			{/* <Link to={'/auth/sign-in'}>
				<button className='button-border'>Sign In</button>
			</Link>

			<Link to={'/auth/sign-up'}>
				<button className='button-bg'>Sign Up</button>
			</Link> */}
		</div>
	);
}

export default Home;
