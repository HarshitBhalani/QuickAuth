import config from '../config';

// Login API
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${config.apiUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Logout API
export const logoutUser = async () => {
  try {
    const response = await fetch(`${config.apiUrl}/api/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return await response.json();
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};
