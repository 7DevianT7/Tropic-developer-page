import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import './UsersPage.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    const handleFormSubmit = (userData) => {
        setUsers([...users, { ...userData, id: Date.now() }]);
    };

    return (
        <div className="users-page">
            <h1>User Management</h1>
            <UserForm onSubmit={handleFormSubmit} />
            <UserList users={users} />
        </div>
    );
};

export default UsersPage;