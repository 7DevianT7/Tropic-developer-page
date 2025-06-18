import { useState } from 'react';
import InputForm from './components/InputForm';
import DisplayUsers from './components/DisplayUsers';
import './users.style.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    const handleFormSubmit = (userData) => {
        setUsers([...users, { ...userData, id: Date.now() }]);
    };

    return (
        <div className='users-wrapper'>
            <InputForm onSubmit={handleFormSubmit} />
            <DisplayUsers users={users} />
        </div>
    );
};

export default Users;
