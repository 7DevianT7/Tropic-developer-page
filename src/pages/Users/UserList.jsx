const UserList = ({ users }) => {
    return (
        <div className="user-list">
            <h2>Users ({users.length})</h2>
            {users.length === 0 ? (
                <p className="empty-message">No users added yet.</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id} className="user-item">
                            <p><strong>Name:</strong> {user.fullName}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;