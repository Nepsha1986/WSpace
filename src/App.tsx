import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import ProtectedRoute from './containers/ProtectedRoute/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import AppInit from "./containers/AppInit/AppInit";

function App() {
	return (
		<div className="App">
			<AppInit>
				<BrowserRouter>
					<Routes>
						<Route path='/dashboard'
							   element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
						<Route path='/sign-in' element={<SignIn/>}/>
					</Routes>
				</BrowserRouter>
			</AppInit>
		</div>
	);
}

export default App;
