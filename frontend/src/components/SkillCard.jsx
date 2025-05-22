const SkillCard = ({skill}) => (
  <div className="border p-4 rounded shadow-md bg-white">
    <p>Category: {skill.category}</p>
    <p>Level: {skill.level}</p>
  </div>
);

export default SkillCard;
