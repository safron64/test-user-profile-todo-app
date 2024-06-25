import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './UsersPage.css'

const UsersPage = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setUsers(data))
	}, [])

	return (
		<div className="users-page">
			<h1>Список пользователей</h1>
			<ul className="users-list">
				{users.map(user => (
					<li key={user.id} className="user-item">
						<Link to={`/users/${user.id}`}>{user.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default UsersPage
