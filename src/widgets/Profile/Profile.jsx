import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
	return (
		<div className="profile-container">
			<img
				src="https://via.placeholder.com/150"
				alt="User Avatar"
				className="profile-avatar"
			/>
			<h1 className="profile-username">Иван Иванов</h1>
			<p className="profile-bio">
				Это краткая биография пользователя. Здесь может быть любая
				информация о пользователе.
			</p>
			<div className="profile-contact">
				<p>Email: ivan.ivanov@example.com</p>
				<p>Телефон: +1234567890</p>
			</div>
			<nav>
				<Link to="/users">Список пользователей</Link>
				<br />
				<Link to="/todo">Список дел</Link>
			</nav>
		</div>
	)
}

export default Profile
