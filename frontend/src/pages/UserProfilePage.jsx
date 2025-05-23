import { useState, useEffect } from "react";
import API from "../api/api";
import { ExplainableCursor } from "mongodb";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try{
        const res = await API.get('/users/123');
        setProfile(res.data);
      } catch(err){
        console.error('Error fetching profile', err);
      }
    };
    fetchProfile();
  }, []);

  if(!profile) return <p className="p-6">Loading...</p>;

  return(
    <div className="p-6">
      <h2 className="text-2xl font-bold">{profile.name}'s Profile</h2>
      <p>Email: {profile.email}</p>
      <h3 className="text-xl mt-4">Skills Offered:</h3>
      <ul className="list-disc list-inside">
        {profile.skills.map((skill, i) => <li key={i}>{skill}</li> )}
      </ul>
    </div>
  )
}

export default Profile;