import SkillCard from "./SkillCard";

const SkillList = ({skills}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {skills.map((skill) => (
      <SkillCard key={skill._id} skill={skill} />
    ))}
  </div>
)

export default SkillList;