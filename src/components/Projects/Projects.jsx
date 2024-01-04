import React from "react";
import Slider from "react-slick";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 3, // Set the number of projects you want to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Slider {...sliderSettings}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
