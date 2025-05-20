import React, {useEffect, useState} from "react";
import { fetchUsers } from "../api/api";
import UserCard  from "../components/UserCard";

const HomePage = () => {
  const[users, setUsers] = useState([]);

  useEffect(()=> {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return(
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">SkillSwap</h1>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key = {user._id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default HomePage;