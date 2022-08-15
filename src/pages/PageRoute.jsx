/** @format */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import Mytests from '../pages/admin/dashboard/Mytests';

function PageRoute() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Navigate to='/' replace />} />
				<Route path='/Mytests' element={<Mytests />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default PageRoute;
