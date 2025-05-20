import axios from "axios";

const API_URL = 'http://localhost:5000/api';

// Fetch all users
export const fetchUsers = async () => {
  try{
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
};

// Create a new user
export const createUser = async (userData) => {
  try{
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error){
    console.error('Error creating user:', error.message);
  }
};