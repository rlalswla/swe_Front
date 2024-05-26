import React from "react";
import "./PostCard.css";

function PostCard({ title, location, description, roles, recruitingInfo }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <h3>{title}</h3>
        <span>{location}</span>
      </div>
      <p>{description}</p>
      <div className="roles">
        {roles.map((role) => (
          <button key={role}>{role}</button>
        ))}
      </div>
      <div className="actions">
        <span>{recruitingInfo}</span>
        <button>Edit</button>
        <button>Delete</button>
        <button>Close</button>
      </div>
    </div>
  );
}
export default PostCard;
