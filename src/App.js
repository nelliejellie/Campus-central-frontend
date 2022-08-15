/** @format */
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import AuthRoute from './pages/AuthRoute';
import { UserAuthContextProvider } from './hooks/UserAuthContext';
import ProtectedRoute from './hooks/protectedRoute';
import { NotFound } from './components/NotFound';

import SplashScreen from './pages/auth/splash-screen/SplashScreen';
import PageRoute from './pages/PageRoute';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	return (
		<div>
			<UserAuthContextProvider>
				{isLoading ? (
					<SplashScreen />
				) : (
					<Routes>
						{/* page route */}
						<Route path='/*' element={<PageRoute />} />

						{/* auth route */}
						<Route path='/auth/*' element={<AuthRoute />} />
						<Route
							path='/auth'
							element={<Navigate to={'/auth/sign-in'} replace />}
						/>

						{/* Admin route */}
						<Route
							path='/admin/*'
							element={
								<ProtectedRoute>
									<Layout />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/admin'
							element={<Navigate to={'/admin/dashboard'} replace />}
						/>

						<Route path='*' element={<NotFound />} />
					</Routes>
				)}
			</UserAuthContextProvider>
		</div>
	);
}

export default App;
