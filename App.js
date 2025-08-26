import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // Skills data
  const technicalSkills = [
    'HTML', 'CSS', 'JavaScript', 'Basic Python', 'Git/GitHub', 'Web Designing', 'UI/UX Design', 'Computer Knowledge'
  ];

  const softSkills = [
    'Problem-Solving', 'Project Management', 'Critical Thinking', 'Creativity and Innovation'
  ];

  // Projects data
  const projects = [
    {
      title: 'My Portfolio',
      description: 'Personal portfolio website showcasing my web development skills',
      link: 'https://shehzeen-avl7yrgxr1clw4yl.builder-preview.com',
      github: 'https://github.com/shehzeen858/Web-developer-.git',
      category: 'Personal'
    },
    {
      title: 'Interior Designer\'s Website',
      description: 'Professional website for interior design business',
      link: 'https://designheavenstudio.in',
      category: 'Client Work'
    },
    {
      title: 'Interior Designer\'s Portfolio 1',
      description: 'Elegant portfolio showcase for interior design work',
      link: 'https://portfolio-for-interior-design-mv0w8ep260ca30od.builder-preview.com',
      category: 'Portfolio'
    },
    {
      title: 'Interior Designer\'s Portfolio 2',
      description: 'Modern portfolio design with sophisticated layouts',
      link: 'https://royalblue-lobster-ynqb4noojese5jll.builder-preview.com',
      category: 'Portfolio'
    },
    {
      title: 'Photo Gallery',
      description: 'Interactive photo gallery with modern UI design',
      link: 'https://photo-gallery-ybg76nvggecwgdnq.builder-preview.com',
      category: 'Internship'
    },
    {
      title: 'Pet-friendly City Campaign',
      description: 'Campaign website promoting pet-friendly urban environments',
      link: 'https://shehzeen-pfc-m5kn47wayqhq6ond.builder-preview.com',
      category: 'Internship'
    },
    {
      title: 'AI Chatbot',
      description: 'Interactive chatbot implementation using modern web technologies',
      link: 'https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/06/06/09/20250606093339-Q5JZWRWR.json',
      category: 'Internship'
    },
    {
      title: 'Digital Literacy Campaign',
      description: 'Educational platform promoting digital literacy awareness',
      link: 'https://floralwhite-dotterel-755296.hostingersite.com/',
      category: 'Internship'
    },
    {
      title: 'Seniors Go Digital',
      description: 'Learning platform designed specifically for elderly users to master digital tools',
      link: 'https://seniors-go-digital-ae0r08poe7hp3qq4.builder-preview.com/',
      category: 'Internship'
    }
  ];

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-dark-800/95 backdrop-blur-sm shadow-lg z-50 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-400">Shahzin</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary-600 text-white'
                        : 'text-secondary-300 hover:text-primary-400 hover:bg-dark-700'
                    }`}
                  >
                    {item.label}
                  </ScrollLink>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-secondary-300 hover:text-primary-400 hover:bg-dark-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-800 border-t border-dark-700">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-primary-600 text-white'
                      : 'text-secondary-300 hover:text-primary-400 hover:bg-dark-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Element name="home" className="element">
        <section className="pt-16 pb-20 gradient-bg min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Hi, I'm <span className="text-primary-400">Shahzin</span>
                </h1>
                <p className="text-xl md:text-2xl text-secondary-200 mb-8 max-w-3xl mx-auto">
                  Frontend Developer & UI/UX Designer
                </p>
                <p className="text-lg text-secondary-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Passionate about creating beautiful, functional web experiences. Seeking a role as a Web Developer where my proficiency in computer operations will help organizations reach their objectives with excellence and ease.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dark-900 bg-primary-500 hover:bg-primary-400 transition-colors cursor-pointer"
                  >
                    View My Work
                  </ScrollLink>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="inline-flex items-center px-8 py-3 border-2 border-primary-400 text-base font-medium rounded-md text-primary-400 hover:bg-primary-400 hover:text-dark-900 transition-colors cursor-pointer"
                  >
                    Get In Touch
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* About Section */}
      <Element name="about" className="element">
        <section className="py-20 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-semibold text-secondary-200 mb-6">My Journey</h3>
                <p className="text-secondary-300 mb-6 leading-relaxed">
                  I'm a dedicated Frontend Developer currently pursuing my B.A (3rd year) from IGNOU. My passion for web development drives me to create exceptional digital experiences that combine functionality with beautiful design.
                </p>
                <p className="text-secondary-300 mb-6 leading-relaxed">
                  With a strong foundation in HTML, CSS, JavaScript, and Basic Python, I've evolved into a well-rounded developer who understands both the technical and creative aspects of web development. My goal is to help organizations achieve their objectives through innovative web solutions.
                </p>
                <div className="bg-dark-700 p-6 rounded-lg shadow-lg border border-dark-600">
                  <h4 className="text-lg font-semibold text-secondary-200 mb-3">Career Objective</h4>
                  <p className="text-secondary-300 italic">
                    "Seeking a role as a Web Developer where my proficiency in computer operations will be fully utilized to help organizations reach their objectives with excellence and ease. I'm committed to becoming a proficient full-stack developer."
                  </p>
                </div>
              </div>

              <div className="animate-fade-in-up">
                <div className="bg-dark-700 p-8 rounded-lg shadow-lg border border-dark-600">
                  <h3 className="text-2xl font-semibold text-secondary-200 mb-6">Education</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary-500 pl-6">
                      <h4 className="text-lg font-semibold text-secondary-200">Bachelor of Arts (B.A)</h4>
                      <p className="text-primary-400 font-medium">IGNOU</p>
                      <p className="text-secondary-400">Currently in 3rd year</p>
                    </div>
                    <div className="border-l-4 border-primary-400 pl-6">
                      <h4 className="text-lg font-semibold text-secondary-200">12th Grade</h4>
                      <p className="text-primary-400 font-medium">CBSE</p>
                      <p className="text-secondary-400">Completed in 2021</p>
                    </div>
                    <div className="border-l-4 border-primary-300 pl-6">
                      <h4 className="text-lg font-semibold text-secondary-200">10th Grade</h4>
                      <p className="text-primary-400 font-medium">CBSE</p>
                      <p className="text-secondary-400">Completed in 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Skills Section */}
      <Element name="skills" className="element">
        <section className="py-20 bg-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-secondary-300 max-w-2xl mx-auto">
                A comprehensive skill set combining technical proficiency with essential soft skills for effective web development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-semibold text-secondary-200 mb-8 text-center">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technicalSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-item bg-dark-700 px-4 py-3 rounded-lg text-center font-medium text-secondary-200 cursor-default border border-dark-600"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-semibold text-secondary-200 mb-8 text-center">Soft Skills</h3>
                <div className="grid grid-cols-1 gap-4">
                  {softSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-item bg-dark-700 px-4 py-3 rounded-lg text-center font-medium text-secondary-200 cursor-default border border-dark-600"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Experience Section */}
      <Element name="experience" className="element">
        <section className="py-20 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Learning</h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-secondary-300 max-w-2xl mx-auto">
                My journey in web development through education, internships, and hands-on projects.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Current Education */}
                <div className="bg-dark-700 rounded-lg shadow-lg p-8 card-hover border border-dark-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 flex-grow">
                      <h3 className="text-xl font-semibold text-white">Current Studies</h3>
                      <p className="text-primary-400 font-medium">Bachelor of Arts - IGNOU</p>
                      <p className="text-secondary-400 text-sm mb-3">2022 - Present (3rd Year)</p>
                      <p className="text-secondary-300">
                        Pursuing higher education while developing web development skills through practical projects and internships.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Internship Experience */}
                <div className="bg-dark-700 rounded-lg shadow-lg p-8 card-hover border border-dark-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 flex-grow">
                      <h3 className="text-xl font-semibold text-white">Online Internship Projects</h3>
                      <p className="text-green-400 font-medium">Web Development Intern</p>
                      <p className="text-secondary-400 text-sm mb-3">Recent Projects</p>
                      <div className="text-secondary-300">
                        <p className="mb-2">Completed multiple internship projects including:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Photo Gallery - Interactive web application</li>
                          <li>Pet-friendly City Campaign - Social awareness platform</li>
                          <li>AI Chatbot Implementation</li>
                          <li>Digital Literacy Campaign Website</li>
                          <li>Seniors Go Digital - Accessibility-focused platform</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Freelance/Client Work */}
                <div className="bg-dark-700 rounded-lg shadow-lg p-8 card-hover border border-dark-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-2m-2 0H7m2 0v-6a2 2 0 012-2h2a2 2 0 012 2v6m2 0V9a2 2 0 00-2-2H9a2 2 0 00-2-2v10" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 flex-grow">
                      <h3 className="text-xl font-semibold text-white">Freelance Projects</h3>
                      <p className="text-purple-400 font-medium">Web Developer & Designer</p>
                      <p className="text-secondary-400 text-sm mb-3">Client Work</p>
                      <p className="text-secondary-300">
                        Developed professional websites and portfolios for interior design businesses, focusing on elegant design and user experience. Created multiple portfolio variations to showcase different design approaches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="element">
        <section className="py-20 bg-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-secondary-300 max-w-2xl mx-auto">
                A showcase of my web development projects, from personal portfolios to client work and internship assignments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-dark-700 rounded-lg shadow-lg overflow-hidden card-hover border border-dark-600">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.category === 'Personal' ? 'bg-blue-600 text-blue-100' :
                        project.category === 'Client Work' ? 'bg-green-600 text-green-100' :
                        project.category === 'Portfolio' ? 'bg-purple-600 text-purple-100' :
                        'bg-orange-600 text-orange-100'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-secondary-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-md hover:bg-primary-600 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Live
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-dark-500 text-secondary-300 text-sm font-medium rounded-md hover:bg-dark-600 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="element">
        <section className="py-20 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-secondary-300 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and exciting projects. Let's connect!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <a href="mailto:shehzeen858@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                        shehzeen858@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <a href="tel:+917703926810" className="text-primary-400 hover:text-primary-300 transition-colors">
                        +91 7703926810
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-medium text-white">Location</h4>
                      <p className="text-secondary-300">
                        364-A Street No. 16 A<br />
                        Vijay Park, Maujpur<br />
                        Delhi - 110053
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up">
                <div className="bg-dark-700 rounded-lg p-8 border border-dark-600">
                  <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
                  <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const subject = formData.get('subject');
                    const message = formData.get('message');
                    
                    const mailtoLink = `mailto:shehzeen858@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                    window.open(mailtoLink);
                  }}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Job Opportunity / Project Inquiry / General"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </button>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t border-dark-600">
                    <p className="text-secondary-400 text-sm text-center mb-4">
                      Or reach out directly:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="mailto:shehzeen858@gmail.com?subject=Job Opportunity&body=Hi Shahzin, I'd like to discuss a web development opportunity with you."
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                        </svg>
                        Quick Email
                      </a>
                      
                      <a
                        href="https://github.com/shehzeen858/Web-developer-.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-primary-500 text-primary-400 text-sm font-medium rounded-md hover:bg-primary-500 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-secondary-400">
              © 2025 Shahzin. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
