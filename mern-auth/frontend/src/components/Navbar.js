import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1> <strong>QuickAuth</strong></h1>
      </div>
      {user && (
        <div className="nav-links">
          <span>Welcome, {user.name}</span>
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;