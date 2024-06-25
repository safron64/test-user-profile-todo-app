import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetailsPage.css';

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="user-details">
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Телефон:</strong> {user.phone}</p>
      <p><strong>Вебсайт:</strong> {user.website}</p>
      <p><strong>Компания:</strong> {user.company.name}</p>
      <p><strong>Адрес:</strong> {user.address.city}, {user.address.street}, {user.address.suite}</p>
    </div>
  );
};

export default UserDetailsPage;
