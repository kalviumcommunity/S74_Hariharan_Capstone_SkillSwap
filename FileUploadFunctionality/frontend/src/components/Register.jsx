// frontend / src/ components/Register.jsx
import { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/api/auth/register', {username, password});
      setMessage('Registered successfully');
    } catch (err) {
      setMessage('Registration failed', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}
export default Register;