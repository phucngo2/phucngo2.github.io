import React from "react";

import { projects } from "../utils/data/projects";

const Projects = () => {
    const pageId = "projects";

    return (
        <section className="right-content" id={pageId}>
            <h3>Projects</h3>
            <div className="row py-3">
                {projects.map((project) => (
                    <a
                        className="col-6 col-md-4 text-14 text-center mb-3"
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={project.img}
                            alt={project.name}
                            className="w-100"
                        />
                        <div className="opacity-55 pt-1">
                            <b>{project.description}</b>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
