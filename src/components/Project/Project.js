import { useState, useEffect } from "react";

// SCSS
import "./Project.scss";

// Components
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";

const Project = ({ item, data }) => {
  return (
    <section className="project snap-element" id={item.id}>
      <h3>{item.title}</h3>
    </section>
  );
};

export default Project;
