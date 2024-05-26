import React, { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [position, setPosition] = useState("");
  const [techStack, setTechStack] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="portfolio-page">
      <h1>Portfolio</h1>
      <form>
        <div className="form-group">
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}>
            <option value="">Position</option>
            <option value="frontEnd">Front-End Developer</option>
            <option value="backEnd">Back-End Developer</option>
            <option value="fullStack">Full Stack Developer</option>
          </select>
          <select
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}>
            <option value="">Tech Stack</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Please write here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Portfolio;
