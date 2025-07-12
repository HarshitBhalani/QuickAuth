import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <h2> <strong> Welcome to Dashboard </strong></h2>
      <div className="user-info">
        <h3>User Information</h3>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>User ID:</strong> {user?._id}</p>
      </div>
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;