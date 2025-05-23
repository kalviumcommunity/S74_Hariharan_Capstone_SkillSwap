import axios from "axios";

const API = axios.create({baseURL:'http://localhost:5000'})

export const fetchSkills = () => API.get('/skills');
export const fetchUser = (id) => API.get(`/users/${id}`);
export const sendSwapRequest = (toUserId) => API.post('/requests', {to: toUserId});

export default API;