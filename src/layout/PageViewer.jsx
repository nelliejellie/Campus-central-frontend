/** @format */

import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import Settings from '../pages/admin/settings/Settings';
import Profile from '../pages/admin/profile/Profile';
import Notification from '../pages/admin/notification/Notification';
import Message from '../pages/admin/message/Message';
import Resources from '../pages/admin/resources/Resource';
import SafeSpace from '../pages/admin/safe-space/SafeSpace';
import CourseCatalog from '../pages/admin/resources/CourseCatalog';
import MyDocument from '../pages/admin/resources/MyDocument';
import AddNewDocument from '../pages/admin/resources/components/AddNewDocument';

const PageViewer = () => {
	return (
		<div>
			<Routes>
				<Route path='dashboard' element={<Dashboard />}></Route>
				<Route path='settings' element={<Settings />}></Route>
				<Route path='profile' element={<Profile />}></Route>
				<Route path='notification' element={<Notification />}></Route>

				<Route path='messages/*' element={<Message />}></Route>
				<Route path='resources' element={<Resources />}></Route>

				<Route path='messages' element={<Message />}></Route>
				<Route path='/resources' element={<Resources />}>
					<Route path='course-catalog' element={<CourseCatalog />} />
					<Route path='my-document' element={<MyDocument />} />
				</Route>
				<Route path='add-document' element={<AddNewDocument />} />

				<Route path='safe-space' element={<SafeSpace />}></Route>
			</Routes>
		</div>
	);
};

export default PageViewer;
