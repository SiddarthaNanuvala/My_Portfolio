'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProjectCard from '@/components/ProjectCard';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import PageTransition from '@/components/PageTransition';
import CertificateModal from '@/components/CertificateModal';
import Navbar from '@/components/Navbar';

// Hero Section
const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
    {/* Cyber background */}
    <div className="absolute inset-0 bg-cyber-gradient opacity-90"></div>
    
    {/* Matrix overlay */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
    
    {/* Animated cyber elements */}
    <motion.div
      className="absolute top-20 left-20 w-[500px] h-[500px] bg-cyber-blue/20 rounded-full mix-blend-screen filter blur-xl"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    <motion.div
      className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-cyber-electric/20 rounded-full mix-blend-screen filter blur-xl"
      animate={{
        scale: [1.2, 1, 1.2],
        rotate: [180, 0, 180],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    <div className="container-width relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <motion.span 
              className="inline-block text-cyber-neon font-mono text-lg bg-cyber-dark/50 px-4 py-2 rounded-lg border border-cyber-electric/30 shadow-cyber"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              > Hello_World
            </motion.span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-cyber-white font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            I'm{" "}
            <span className="text-cyber-electric animate-text-flicker">
              Siddartha Nanuvala
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-cyber-white/80 mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A <span className="text-cyber-neon">Cybersecurity</span> and{" "}
            <span className="text-cyber-electric">Cloud Computing</span> professional
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-cyber-blue text-cyber-white rounded-lg font-mono border border-cyber-electric shadow-cyber hover:shadow-cyber-strong transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View_Projects()
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-transparent text-cyber-neon border border-cyber-neon rounded-lg font-mono hover:bg-cyber-neon/10 shadow-neon hover:shadow-neon-strong transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact_Me()
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-[400px] h-[400px] mx-auto">
            <motion.div
              className="absolute inset-0 bg-cyber-gradient rounded-2xl animate-cyber-pulse"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.img
              src="/images/profile.jpg"
              alt="Siddartha Nanuvala"
              className="relative w-full h-full object-cover rounded-2xl border-2 border-cyber-electric shadow-cyber"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, -1, 0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Cyber decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-cyber-blue/20 rounded-lg backdrop-blur-sm border border-cyber-electric/30"
              animate={{
                y: [-10, 10],
                rotate: [0, 360],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyber-neon/20 rounded-lg backdrop-blur-sm border border-cyber-neon/30"
              animate={{
                y: [10, -10],
                rotate: [360, 0],
              }}
              transition={{
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="section-padding relative overflow-hidden bg-cyber-gray">
    {/* Matrix overlay */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
    
    <motion.div
      className="absolute -top-40 -right-40 w-96 h-96 bg-cyber-blue/20 rounded-full mix-blend-screen filter blur-xl animate-cyber-float"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 45, 0],
      }}
      transition={{ duration: 10, repeat: Infinity }}
    />
    
    <div className="container-width relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <motion.h2 
            className="text-4xl font-bold mb-6 text-cyber-electric font-mono"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            > About_Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-cyber-white/80 text-lg font-mono leading-relaxed">
              I'm a highly motivated <span className="text-cyber-neon">Cybersecurity</span> and{" "}
              <span className="text-cyber-electric">Cloud Computing</span> professional with hands-on experience in cloud infrastructure,
              network security, containerization, and decentralized storage technologies.
            </p>
            <p className="text-cyber-white/80 text-lg font-mono leading-relaxed">
              My expertise spans across <span className="text-cyber-neon">Docker</span>,{" "}
              <span className="text-cyber-electric">MongoDB</span>, and{" "}
              <span className="text-cyber-blue">DevOps</span> practices, with a strong foundation in forensics and penetration testing.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative p-8 bg-cyber-dark/50 backdrop-blur-xl rounded-lg border border-cyber-electric/30 shadow-cyber">
            <h3 className="text-2xl font-bold text-cyber-neon mb-6 font-mono">> Education</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative pl-6 border-l-2 border-cyber-electric"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-electric shadow-cyber"></div>
                <h4 className="text-xl font-semibold text-cyber-white font-mono">Master in Cyber Security & Cloud Computing</h4>
                <p className="text-cyber-electric font-mono">Ecole Supérieure d'Ingénieurs Léonard de Vinci, Paris</p>
                <p className="text-cyber-white/50 mt-2 font-mono">Present</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative pl-6 border-l-2 border-cyber-neon"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-neon shadow-neon"></div>
                <h4 className="text-xl font-semibold text-cyber-white font-mono">Bachelor of Science (MPCs)</h4>
                <p className="text-cyber-neon font-mono">Thushara Degree College, Warangal</p>
                <p className="text-cyber-white/50 mt-2 font-mono">2021</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Experience Section
const Experience = () => (
  <section id="experience" className="section-padding relative overflow-hidden bg-cyber-dark">
    {/* Matrix overlay */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
    
    <motion.div
      className="absolute top-40 right-40 w-96 h-96 bg-cyber-blue/20 rounded-full mix-blend-screen filter blur-xl animate-cyber-float"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 45, 0],
      }}
      transition={{ duration: 10, repeat: Infinity }}
    />

    <div className="container-width relative z-10">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-cyber-electric font-mono"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        > Professional_Experience
      </motion.h2>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-8 bg-cyber-dark/50 backdrop-blur-xl rounded-lg border border-cyber-electric/30 shadow-cyber hover:shadow-cyber-strong transition-all duration-300"
        >
          <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-cyber-electric shadow-cyber"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-2xl font-bold text-cyber-neon font-mono">Software Engineer</h3>
            <span className="text-cyber-electric font-mono">2021 - Present</span>
          </div>
          <p className="text-cyber-blue font-mono mb-4">Tech Mahindra, Hyderabad, India</p>
          <ul className="space-y-3 text-cyber-white/80">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-2 font-mono"
            >
              <span className="w-2 h-2 bg-cyber-electric rounded-full shadow-cyber"></span>
              <span>Developed and maintained <span className="text-cyber-neon">full-stack applications</span> using Angular and Node.js</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-2 font-mono"
            >
              <span className="w-2 h-2 bg-cyber-neon rounded-full shadow-neon"></span>
              <span>Implemented <span className="text-cyber-electric">CI/CD pipelines</span> using GitHub Actions and GitLab</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-2 font-mono"
            >
              <span className="w-2 h-2 bg-cyber-blue rounded-full shadow-cyber"></span>
              <span>Worked on <span className="text-cyber-blue">cloud infrastructure</span> and containerization using Docker</span>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative p-8 bg-cyber-dark/50 backdrop-blur-xl rounded-lg border border-cyber-neon/30 shadow-neon hover:shadow-neon-strong transition-all duration-300"
        >
          <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-cyber-neon shadow-neon"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-2xl font-bold text-cyber-electric font-mono">Software Development Intern</h3>
            <span className="text-cyber-neon font-mono">2020 - 2021</span>
          </div>
          <p className="text-cyber-blue font-mono mb-4">Tech Mahindra, Hyderabad, India</p>
          <ul className="space-y-3 text-cyber-white/80">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-2 font-mono"
            >
              <span className="w-2 h-2 bg-cyber-electric rounded-full shadow-cyber"></span>
              <span>Developed and tested <span className="text-cyber-neon">web applications</span> using React and Node.js</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-2 font-mono"
            >
              <span className="w-2 h-2 bg-cyber-neon rounded-full shadow-neon"></span>
              <span>Worked on <span className="text-cyber-electric">database management</span> and optimization</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

// Certifications Section
const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    imageUrl: string;
  } | null>(null);

  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      imageUrl: "/certificates/aws-cloud-practitioner.jpg"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker",
      date: "2023",
      imageUrl: "/certificates/docker-certified-associate.jpg"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB",
      date: "2023",
      imageUrl: "/certificates/mongodb-certified-developer.jpg"
    },
    {
      title: "PostgreSQL Certified Professional",
      issuer: "PostgreSQL",
      date: "2023",
      imageUrl: "/certificates/postgresql-certified-professional.jpg"
    },
    {
      title: "Angular Advanced Developer",
      issuer: "Angular",
      date: "2023",
      imageUrl: "/certificates/angular-advanced-developer.jpg"
    },
    {
      title: "Node.js Certified Developer",
      issuer: "Node.js",
      date: "2023",
      imageUrl: "/certificates/nodejs-certified-developer.jpg"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-secondary">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-12 text-primary">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{cert.title}</h3>
                  <p className="text-monochrome-gray">{cert.issuer}</p>
                  <p className="text-sm text-monochrome-light mt-2">Issued: {cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <CertificateModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        imageUrl={selectedCertificate?.imageUrl || ''}
        title={selectedCertificate?.title || ''}
      />
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "To-Do Application",
      description: "A modern, containerized web application for efficient task management. Built with a microservices architecture using React, Node.js, and PostgreSQL.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "Express"],
      link: "https://github.com/SiddarthaNanuvala/To-Do-Application",
      features: [
        "Microservices architecture",
        "Real-time task updates",
        "User authentication",
        "Docker containerization"
      ]
    },
    {
      title: "Prime Numbers Checker",
      description: "A Python-based prime number checker with optimized algorithms, featuring comprehensive test coverage and automated CI/CD pipeline.",
      tech: ["Python", "GitLab CI/CD", "SonarQube", "Pytest"],
      link: "https://github.com/SiddarthaNanuvala/Prime-numebers",
      features: [
        "Efficient prime number checking algorithm",
        "Comprehensive test suite",
        "Code quality checks (Flake8, Pylint, Bandit)",
        "CI/CD pipeline with GitLab"
      ]
    },
    {
      title: "LifeSure Insurance Analysis",
      description: "A comprehensive data analysis and visualization project for insurance risk assessment and charge analysis with interactive dashboard.",
      tech: ["Python", "Dash/Plotly", "Pandas", "NumPy"],
      link: "https://github.com/SiddarthaNanuvala/Life-Sure-Project",
      features: [
        "Interactive dashboard with real-time filtering",
        "Multiple visualization types",
        "Risk assessment tools",
        "Customer distribution analysis"
      ]
    },
    {
      title: "MovieDB Management System",
      description: "A comprehensive movie database management system for storing and managing movie information, ratings, and user reviews.",
      tech: ["SQL", "Database Design", "ERD"],
      link: "https://github.com/SiddarthaNanuvala/MovieDB-Management-System",
      features: [
        "Complex database schema design",
        "Optimized query performance",
        "User rating system",
        "Movie metadata management"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-cyber-dark">
      {/* Matrix overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-cyber-blue/20 rounded-full mix-blend-screen filter blur-xl animate-cyber-float"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-width relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-cyber-electric font-mono"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          > Featured_Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-cyber-dark/50 backdrop-blur-xl rounded-lg border border-cyber-electric/30 shadow-cyber hover:shadow-cyber-strong transition-all duration-300"
            >
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <h3 className="text-2xl font-bold text-cyber-neon font-mono mb-4 group-hover:text-cyber-electric transition-colors">
                  {project.title}
                </h3>
                <p className="text-cyber-white/80 font-mono mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyber-blue/10 text-cyber-electric border border-cyber-electric/30 rounded-full font-mono text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center space-x-2 text-cyber-white/70 font-mono"
                    >
                      <span className="w-1.5 h-1.5 bg-cyber-neon rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Participation Section
const Participation = () => {
  const events = [
    {
      title: "ESILV Hackathon 2023",
      role: "Team Lead",
      description: "Led a team of 4 in developing an AI-powered cybersecurity solution for real-time threat detection.",
      achievements: [
        "Secured 2nd place among 20+ teams",
        "Implemented machine learning algorithms for pattern recognition",
        "Developed a real-time monitoring dashboard"
      ]
    }
  ];

  return (
    <section id="participation" className="section-padding relative overflow-hidden bg-cyber-gray">
      {/* Matrix overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      <motion.div
        className="absolute top-40 right-40 w-96 h-96 bg-cyber-neon/20 rounded-full mix-blend-screen filter blur-xl animate-cyber-float"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-width relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-cyber-electric font-mono"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          > Hackathon_Participation
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-cyber-dark/50 backdrop-blur-xl rounded-lg border border-cyber-neon/30 shadow-neon hover:shadow-neon-strong transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-cyber-neon font-mono mb-2">
                {event.title}
              </h3>
              <p className="text-cyber-electric font-mono mb-4">
                {event.role}
              </p>
              <p className="text-cyber-white/80 font-mono mb-6">
                {event.description}
              </p>
              <ul className="space-y-3">
                {event.achievements.map((achievement) => (
                  <motion.li
                    key={achievement}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-2 font-mono"
                  >
                    <span className="w-2 h-2 bg-cyber-neon rounded-full shadow-neon"></span>
                    <span className="text-cyber-white/80">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skills = [
    { 
      category: "Programming Languages", 
      items: [
        { name: "Python", url: "https://www.python.org/about/gettingstarted/" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        { name: "Bash", url: "https://www.gnu.org/software/bash/manual/bash.html" },
        { name: "HTML & CSS", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
        { name: "Angular", url: "https://angular.io/docs" },
        { name: "Bootstrap", url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" }
      ]
    },
    { 
      category: "Database Management", 
      items: [
        { name: "PostgreSQL", url: "https://www.postgresql.org/docs/current/tutorial.html" },
        { name: "MongoDB", url: "https://university.mongodb.com/" },
        { name: "MySQL", url: "https://dev.mysql.com/doc/refman/8.0/en/" },
        { name: "Neo4j", url: "https://neo4j.com/developer/get-started/" },
        { name: "Cassandra", url: "https://cassandra.apache.org/doc/latest/cassandra/getting_started/index.html" }
      ]
    },
    { 
      category: "Cloud & DevOps", 
      items: [
        { name: "Docker", url: "https://docs.docker.com/get-started/" },
        { name: "GitHub Actions", url: "https://docs.github.com/en/actions/learn-github-actions" },
        { name: "GitLab CI/CD", url: "https://docs.gitlab.com/ee/ci/quick_start/" }
      ]
    },
    { 
      category: "Cybersecurity", 
      items: [
        { name: "TLS/HTTPS security analysis", url: "https://www.ssllabs.com/projects/documentation/" },
        { name: "Volatility 3", url: "https://volatility3.readthedocs.io/en/latest/getting-started.html" },
        { name: "Penetration Testing", url: "https://www.offensive-security.com/pwk-oscp/" }
      ]
    },
    { 
      category: "Decentralized Storage", 
      items: [
        { name: "IPFS", url: "https://docs.ipfs.tech/concepts/what-is-ipfs/" },
        { name: "Pinata", url: "https://docs.pinata.cloud/getting-started" }
      ]
    },
    { 
      category: "Soft Skills", 
      items: [
        { name: "Problem-solving", url: "https://www.coursera.org/learn/problem-solving" },
        { name: "Research", url: "https://www.coursera.org/learn/research-methods" },
        { name: "Collaboration", url: "https://www.coursera.org/learn/collaboration" },
        { name: "Troubleshooting", url: "https://www.coursera.org/learn/technical-troubleshooting" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-gradient-to-br from-elegant-dark via-elegant-secondary to-elegant-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-elegant-accent1 rounded-full mix-blend-multiply filter blur-[128px] animate-float"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-elegant-accent1 via-elegant-accent2 to-elegant-accent3 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-elegant-glass backdrop-blur-xl rounded-2xl border border-elegant-light/10 shadow-xl hover:border-elegant-accent1/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-elegant-accent1">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-elegant-glass backdrop-blur-sm rounded-full border border-elegant-light/10 
                               text-elegant-light hover:text-elegant-accent2 hover:border-elegant-accent2/50 
                               transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => (
  <section id="contact" className="section-padding relative overflow-hidden bg-gradient-to-tr from-elegant-primary via-elegant-secondary to-elegant-dark">
    {/* Animated background elements */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
    
    <motion.div
      className="absolute -top-40 -right-40 w-96 h-96 bg-elegant-accent1 rounded-full mix-blend-multiply filter blur-[128px] animate-float"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 45, 0],
      }}
      transition={{ duration: 10, repeat: Infinity }}
    />
    
    <div className="container-width relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-elegant-accent1 via-elegant-accent2 to-elegant-accent3 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 bg-elegant-glass backdrop-blur-xl rounded-2xl border border-elegant-light/10 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-elegant-accent1 mb-4">Contact Details</h3>
            <div className="space-y-4 text-left">
              <p className="text-elegant-light flex items-center space-x-3">
                <span className="text-elegant-accent2">📧</span>
                <a href="mailto:siddartha.nanuvala@gmail.com" className="hover:text-elegant-accent1 transition-colors">
                  siddartha.nanuvala@gmail.com
                </a>
              </p>
              <p className="text-elegant-light flex items-center space-x-3">
                <span className="text-elegant-accent3">📱</span>
                <a href="tel:+33771092972" className="hover:text-elegant-accent2 transition-colors">
                  +33 771092972
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 bg-elegant-glass backdrop-blur-xl rounded-2xl border border-elegant-light/10 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-elegant-accent2 mb-4">Social Links</h3>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://linkedin.com/in/siddartha-nanuvala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-elegant-accent1 hover:text-elegant-accent2 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                href="https://github.com/SiddarthaNanuvala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-elegant-accent3 hover:text-elegant-accent4 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={32} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <main className="bg-cyber-dark min-h-screen">
        <div className="fixed inset-0 bg-[url('/matrix.svg')] opacity-10 pointer-events-none animate-matrix-rain"></div>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Participation />
        <Skills />
        <Contact />
      </main>
    </PageTransition>
  );
}