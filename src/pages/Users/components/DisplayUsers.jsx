import '../users.style.css';

const DisplayUsers = ({ users }) => {
    return (
        <div className="users-list">
            <h2>Registered Users ({users.length})</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="user-item">
                            <p><strong>Name:</strong> {user.fullName}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-users">No users registered yet.</p>
            )}
        </div>
    );
};

export default DisplayUsers;