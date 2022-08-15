/** @format */

import React from 'react';
import { Verification } from './auth/sign-up/component/Modal';
import { TermsOfService } from './auth/sign-up/component/Modal';
import { PrivacyPolicy } from './auth/sign-up/component/Modal';
import { CreateYourUsername } from './auth/sign-up/component/Modal';

const Modalpopup = () => {
	return (
		<div>
			<Verification></Verification>
			<TermsOfService></TermsOfService>
			<PrivacyPolicy></PrivacyPolicy>
			<CreateYourUsername></CreateYourUsername>
		</div>
	);
};

export default Modalpopup;
