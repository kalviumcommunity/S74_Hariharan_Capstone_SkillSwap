import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border p-3 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold"> {user.name} </h2>
      <p> {user.email} </p>
      <div className="mt-2">
        <strong>Skills:</strong>
        <ul className="list-disc ml-4">
          {user.skills.map((skill) => (
            <li key={skill}> {skill} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserCard;