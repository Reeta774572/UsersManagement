import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(response.data.data);
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      history.push('/users');
    } catch (err) {
      console.error('Error updating user', err);
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={user.first_name} 
          onChange={(e) => setUser({ ...user, first_name: e.target.value })} 
        />
        <input 
          type="text" 
          value={user.last_name} 
          onChange={(e) => setUser({ ...user, last_name: e.target.value })} 
        />
        <input 
          type="email" 
          value={user.email} 
          onChange={(e) => setUser({ ...user, email: e.target.value })} 
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;

