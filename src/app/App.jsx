import React from 'react'
import ProfilePage from '../pages/ProfilePage'
import TodoApp from '../features/Todo/TodoApp'

const App = () => {
	return (
		<div className="app-container">
			<ProfilePage />
			<TodoApp />
		</div>
	)
}

export default App
