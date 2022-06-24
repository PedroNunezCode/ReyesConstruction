import React from 'react';
import NotFound from './components/shared/NotFound';
import Navbar from './components/shared/Navbar';
import HomePage from './pages/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<div className='app-container'>
			<Router>
			<Navbar />
				<Routes>
					<Route path="/" element={<HomePage/>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	)
}