import { useEffect, useState } from "react";
import SkillList from "../components/SkillList";
import API from "../api/api";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try{
        const res = await API.get('/skills');
        setSkills(res.data);
      } catch (err) {
        console.error('Failed to fetch skills', err);
      }
    };
    fetchSkills();
  },[]);

  return(
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Skills</h2>
      <SkillList skills={skills} />
    </div>
  )
}

export default Skills;