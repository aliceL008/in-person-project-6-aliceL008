// State needed: which filter is active (a string such as 'all').

import { useState } from 'react';

function Projects({ projects }) {
    const [activeFilter, setActiveFilter] = useState('all')
    const filteredProjects =
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.category === activeFilter);


  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="filter-buttons">
          
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>

          <button
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Frontend
          </button>

          <button
            className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setActiveFilter('fullstack')}
          >
            Full-Stack
          </button>

          <button
            className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
            onClick={() => setActiveFilter('design')}
          >
            Design
          </button>

          <button
            className={`filter-btn ${activeFilter === 'webapp' ? 'active' : ''}`}
            onClick={() => setActiveFilter('webapp')}
          >
            Web App
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <img src={project.image} alt={project.imageAlt} />

              <div className="project-content">
                <h3>{project.title}</h3>
                <span className="project-category">
                  {project.categoryLabel}
                </span>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

}
export default Projects;