import React, { useState, useEffect } from 'react';
import './profile.css';
import Sidebar from '../Components/Sidebar' 

const Profile = () => {
  // State for user data and UI control
  const [user, setUser] = useState({
    name: '',
    email: '',
    profileImage: null,
  });
  const [newImage, setNewImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  // Fetch user data on mount (replace with your API)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Mock API call - replace with your Node.js endpoint
        const mockUser = { name: 'John Doe', email: 'john@example.com', profileImage: null };
        setUser(mockUser);
      } catch (err) {
        setError('Failed to load user data');
      }
    };
    fetchUserData();
  }, []);

  // Handle input changes for name and email
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // Limit to 2MB
        setError('Image size must be under 2MB');
        return;
      }
      setNewImage(URL.createObjectURL(file));
      setError('');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!user.name || !user.email) {
      setError('Name and email are required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(user.email)) {
      setError('Invalid email format');
      return;
    }
    try {
      // Placeholder for API call to update user
      console.log('Updating user:', { ...user, profileImage: newImage });
      // Example: await fetch('/api/update-profile', { method: 'POST', body: JSON.stringify({ ...user, profileImage: newImage }) });
      setIsEditing(false);
      setError('');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  // Handle account deletion
  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This cannot be undone.')) {
      try {
        // Placeholder for API call to delete account
        console.log('Account deleted');
        // Example: await fetch('/api/delete-account', { method: 'DELETE' });
      } catch (err) {
        setError('Failed to delete account');
      }
    }
  };

  return (
    <div className="profile">
      <div className='profile-container'>
        <h2>User Profile</h2>
        {error && <p className="error">{error}</p>}
        <div className="profile-image">
          <img
            src={newImage || user.profileImage || '/default-profile.png'}
            alt="Profile"
            className="profile-img"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="image-upload"
            />
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="form-input"
            />
          </div>
          {isEditing ? (
            <div className="form-actions">
              <button type="submit" className="btn btn-save">Save Changes</button>
              <button type="button" className="btn btn-cancel" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <button type="button" className="btn btn-edit" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          )}
        </form>
        <button
          className="btn btn-delete"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </div> 
    </div>
  );
};

export default Profile;