import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    name: "To-Do Application",
    category: "Web Development",
    img: "https://via.placeholder.com/300",
    desc: "A modern, containerized web application for efficient task management. Built with a microservices architecture using React, Node.js, and PostgreSQL.",
    githubUrl: "https://github.com/SiddarthaNanuvala/To-Do-Application",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Express"]
  },
  {
    name: "Prime Numbers Checker",
    category: "Python",
    img: "https://via.placeholder.com/300",
    desc: "A Python-based prime number checker that efficiently determines whether a given number is prime using optimized algorithms. Features comprehensive test coverage and CI/CD pipeline.",
    githubUrl: "https://github.com/SiddarthaNanuvala/Prime-numebers",
    technologies: ["Python", "Pytest", "GitLab CI/CD", "SonarQube"]
  },
  {
    name: "Life Sure Project",
    category: "Insurance Management",
    img: "https://via.placeholder.com/300",
    desc: "An insurance management system project showcasing business logic implementation and data management capabilities.",
    githubUrl: "https://github.com/SiddarthaNanuvala/Life-Sure-Project",
    technologies: ["Java", "Spring Boot", "MySQL"]
  },
  {
    name: "MovieDB Management System",
    category: "Database Management",
    img: "https://via.placeholder.com/300",
    desc: "A comprehensive movie database management system for storing and managing movie information, ratings, and user reviews.",
    githubUrl: "https://github.com/SiddarthaNanuvala/MovieDB-Management-System",
    technologies: ["SQL", "Database Design", "ERD"]
  }
];

export default function Projects() {
  return (
    <section className="container mx-auto py-12 pt-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}