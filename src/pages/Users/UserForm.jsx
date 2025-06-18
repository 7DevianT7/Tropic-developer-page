import { useState } from 'react';

const UserForm = ({ onSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName.trim() && email.trim()) {
            onSubmit({ fullName, email });
            setFullName('');
            setEmail('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
                <label>Full Name:</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="submit-btn">
                Add User
            </button>
        </form>
    );
};

export default UserForm;