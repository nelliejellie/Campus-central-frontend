/** @format */

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Subheader from './components/Subheader';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CourseCatalog from './CourseCatalog';
import MyDocument from './MyDocument';

const Resource = () => {
	const [showAdd, setShowAdd] = useState(false);

	return (
		<div>
			<div className='flex flex-col justify-between items-center px-4 py-3'>
				<div className='w-full'>
					<h1 className='text-xl'>Resource</h1>
				</div>
				<div className='w-[100%] mt-4'>
					<Tabs>
						<TabList className='w-full h-10 rounded flex items-center justify-end'>
							<Tab className='cursor-pointer px-10 py-2'>Purchase Order</Tab>
							<Tab className='cursor-pointer px-10 py-2'>Sales Order</Tab>
						</TabList>
						<div className='mt-6'>
							<TabPanel>
								<Subheader />
								<CourseCatalog />
							</TabPanel>
							<TabPanel>
								<Subheader />
								<MyDocument />
							</TabPanel>
						</div>
					</Tabs>
				</div>
			</div>

			<div>
				<Outlet showAdd={showAdd} setShowAdd={setShowAdd} />
			</div>
		</div>
	);
};

export default Resource;
