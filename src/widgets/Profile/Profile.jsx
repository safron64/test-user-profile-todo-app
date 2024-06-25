import React from 'react'
import './Profile.css'

const Profile = () => {
	return (
		<div className="profile-container">
			<img
				src="https://via.placeholder.com/75"
				alt="User Avatar"
				className="profile-avatar"
			/>
			<h1 className="profile-username">John Doe</h1>
			<p className="profile-bio">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
				non urna nec sapien suscipit aliquet.
			</p>
			<div className="profile-contact">
				<p>Email: john.doe@example.com</p>
				<p>Phone: +1234567890</p>
			</div>
		</div>
	)
}

export default Profile
