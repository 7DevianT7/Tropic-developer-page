import { useState } from 'react';
import GlobalButton from '../../../components/globalbutton/GlobalButton';
import '../users.style.css'

const InputForm = ({ onSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName.trim() && email.trim()) {
            onSubmit({ fullName, email });
            console.log(fullName, email)
            setFullName('');
            setEmail('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='input-forms'>
            <h3 className='users-title'>User Activity</h3>
            <div className='input-form-item'>
                <label >Full name:</label>
                <input
                    type='text'
                    value={fullName}
                    placeholder='Enter full name'
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
            </div>
            <div className='input-form-item'>
                <label>Email:</label>
                <input
                    type='email'
                    value={email}
                    placeholder='Enter email address'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <GlobalButton
                displayText='Add User'
                extClass='add-user-button'
                type='submit'
            />
        </form>
    )
};

export default InputForm;