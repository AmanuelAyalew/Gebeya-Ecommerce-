import React, { useState, useEffect } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'user',
  });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:5000/users');
    const data = await response.json();
    setUsers(data);
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = async () => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    setUsers([...users, data]);
    setNewUser({
      name: '',
      email: '',
      role: 'user',
    });
  };

  const handleDeleteUser = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    });
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleEditChange = (e) => {
    setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
  };

  const handleUpdateUser = async () => {
    await fetch(`http://localhost:5000/users/${editingUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingUser),
    });
    setUsers(
      users.map((user) => (user.id === editingUser.id ? editingUser : user))
    );
    setEditingUser(null);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-3">Add New User</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="User Name"
            value={newUser.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="User Email"
            value={newUser.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <select
            name="role"
            value={newUser.role}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          onClick={handleAddUser}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add User
        </button>
      </div>

      {editingUser && (
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-3">Edit User</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="User Name"
              value={editingUser.name}
              onChange={handleEditChange}
              className="border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="User Email"
              value={editingUser.email}
              onChange={handleEditChange}
              className="border p-2 rounded"
            />
            <select
              name="role"
              value={editingUser.role}
              onChange={handleEditChange}
              className="border p-2 rounded"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mt-4">
            <button
              onClick={handleUpdateUser}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
            >
              Update User
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-3">Existing Users</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Role</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b">{user.id}</td>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.role}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
