/** @format */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './auth/sign-in/SignIn';
import SignUp from './auth/sign-up/SignUp';
import ForgotPassword from './auth/forgot-password/ForgotPassword';
import RestPassword from './auth/reset-password/RestPassword';
import Verification from './auth/verify-token/Verification';
import AuthView from './auth/AuthView';
import Interests from './auth/onboarding/Interests';
import Welcome from './auth/onboarding/Welcome';
import JoinForum from './auth/onboarding/JoinForum';

function AuthRoute() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<AuthView />}>
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
					<Route path='/reset-password' element={<RestPassword />} />
					<Route path='/verify-token' element={<Verification />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Route>
				<Route path='/welcome' element={<Welcome />} />
				<Route path='/interests' element={<Interests />} />
				<Route path='/join-forum' element={<JoinForum />} />
			</Routes>
		</div>
	);
}

export default AuthRoute;
