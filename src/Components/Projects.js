import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch the JSON data using an HTTP request with a relative path
        fetch('/projects.json') // Assuming your public directory is at the root of your project
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div className='projects' id='projects'>
            <p>Projects</p>
            <div className='projects-container'>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        description={project.projectDescription}
                        codelink={project.codeLink}
                        demolink={project.demoLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
