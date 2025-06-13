// frontend/src/components/Login.jsx
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {username, password});
      login(res.data.token);
      setMessage('Logged in successfully');

    } catch(err){
      setMessage('Login failed', err);
    }
  };

  return(
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  )
}

export default Login;