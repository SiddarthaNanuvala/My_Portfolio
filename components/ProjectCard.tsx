'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  name: string;
  category: string;
  image: string;
  description: string;
  githubUrl: string;
  technologies: string[];
}

const ProjectCard = ({ name, category, image, description, githubUrl, technologies }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="card group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-white/80 text-sm">{category}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-monochrome-dark mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-3 py-1 bg-pastel-blue text-primary border border-primary/20 rounded-full text-sm hover:bg-primary/10 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
          <span>View Code</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;