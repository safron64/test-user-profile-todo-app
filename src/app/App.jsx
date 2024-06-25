import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProfilePage from '../pages/ProfilePage'
import TodoApp from '../features/Todo/TodoApp'
import UsersPage from '../pages/UsersPage/UsersPage'
import UserDetailsPage from '../pages/UsersPage/UserDetailsPage'

const App = () => {
	return (
		<Router>
			<div className="app-container">
				<Routes>
					<Route path="/" element={<ProfilePage />} />
					<Route path="/todo" element={<TodoApp />} />
					<Route path="/users" element={<UsersPage />} />
					<Route path="/users/:id" element={<UserDetailsPage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
