
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, ExternalLink, Code, Brain, Database, Globe, ChevronDown, Star, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollToTop, TypingAnimation, FloatingParticles, SkillProgressBar } from './components/InteractiveFeatures.jsx'
import './App.css'

// Import images
import webDevBanner from './assets/7r83hwFN8OLC.jpg'
import aiBanner from './assets/YC6BaUhtUXcw.jpg'
import techBackground from './assets/T3dAlFW3mQxn.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Sujith Chitturi
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <img 
          src={webDevBanner} 
          alt="Web Development" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TypingAnimation text="Software Engineer" />
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer with expertise in developing AI agents, secure full-stack web solutions, and scalable mobile applications that enhance efficiency and drive innovation.
          </motion.p>
          
          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-3 gap-6 mb-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">5+</div>
              <div className="text-sm text-slate-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">AI</div>
              <div className="text-sm text-slate-400">Focus</div>
            </div>
            <div className="text-center">
              <a 
                href="https://github.com/sujith130" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
              >
                <Github className="h-8 w-8 text-blue-400 mb-1" />
                <div className="text-sm text-slate-400">GitHub</div>
              </a>
            </div>
          </motion.div>        
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-transform"
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-3 transform hover:scale-105 transition-transform"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Passionate software engineer with a love for creating innovative solutions. I enjoy working with modern technologies to build applications that make a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <img 
                src={aiBanner} 
                alt="AI Technology" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold text-white mb-4">What I Do</h3>
                <p className="text-slate-300 mb-6">
                  I'm a software engineer who loves building things that matter. Whether it's web applications, 
                  AI-powered solutions, or mobile apps, I enjoy the challenge of turning ideas into reality using modern technologies.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-blue-400" />
                  <span className="text-slate-300">Web Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="h-6 w-6 text-purple-400" />
                  <span className="text-slate-300">AI & Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-green-400" />
                  <span className="text-slate-300">Mobile Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="h-6 w-6 text-yellow-400" />
                  <span className="text-slate-300">Databases</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A showcase of my work in web development, AI, and mobile applications
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Project 1 - Finnec - Advisory platform */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Finnec - Advisory Platform</CardTitle>
                  <CardDescription className="text-slate-400">
                    Web-based financial advisory platform for SMEs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Flask</Badge>
                      <Badge variant="secondary">OpenAI APIs</Badge>
                      <Badge variant="secondary">Machine Learning</Badge>
                      <Badge variant="secondary">Render</Badge>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Built a web-based financial advisory platform for SMEs using Flask, OpenAI APIs, and machine learning models for predictive analytics. Designed backend APIs and integrated ML pipelines, deployed the app on Render, and ensured secure handling of sensitive financial data.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Project Link
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 2 - Nova – Voice Unleashes Possibility */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Nova – Voice Assistant</CardTitle>
                  <CardDescription className="text-slate-400">
                    Full-stack voice-assistant application with natural speech interaction
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express.js</Badge>
                      <Badge variant="secondary">JWT</Badge>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Developed a full-stack voice-assistant application enabling natural speech interaction and real-time tool execution with a secure JWT-authenticated pipeline, rate-limiting, and input sanitization for reliability. Built with React (Web Speech API + TTS), Node.js, Express.js, and Winston for logging and persistent memory.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Project Link
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 3 - GitHub Shortcut */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 hover:border-green-500 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Explore More Projects</CardTitle>
                  <CardDescription className="text-slate-400">
                    Visit my GitHub to discover additional projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">GitHub</Badge>
                      <Badge variant="secondary">Open Source</Badge>
                      <Badge variant="secondary">Repositories</Badge>
                      <Badge variant="secondary">Code</Badge>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Check out my GitHub profile to explore more of my work, including open-source contributions, side projects, and code repositories. I'm constantly working on new ideas and sharing my coding journey.
                    </p>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-slate-600 text-slate-300"
                        onClick={() => window.open('https://github.com/sujith130', '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Visit GitHub
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-slate-600 text-slate-300"
                        onClick={() => window.open('https://github.com/sujith130?tab=repositories', '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Repos
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A comprehensive toolkit for modern web development, AI, and mobile applications
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Programming Languages */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Code className="mr-2 h-5 w-5 text-blue-400" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[ "C++", "Java", "Python", "JavaScript"].map((skill) => (
                      <Badge key={skill} variant="outline" className="border-slate-600 text-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Web Development */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-green-400" />
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[ "HTML", "CSS", "React.js", "Node.js", "REST APIs"].map((skill) => (
                      <Badge key={skill} variant="outline" className="border-slate-600 text-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI & Automation */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-purple-400" />
                    AI & Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[ "Machine Learning", "Deep Learning", "NLP", "OpenAI APIs", "Data Analysis"].map((skill) => (
                      <Badge key={skill} variant="outline" className="border-slate-600 text-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mobile & Databases */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Database className="mr-2 h-5 w-5 text-yellow-400" />
                    Mobile & Databases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[ "Android Dev", "iOS Dev", "SQL", "NoSQL", "MongoDB"].map((skill) => (
                      <Badge key={skill} variant="outline" className="border-slate-600 text-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <a href="mailto:chsujith13@gmail.com" className="flex items-center justify-center space-x-3 text-slate-300 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
                <span>chsujith13@gmail.com</span>
              </a>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <a href="http://www.linkedin.com/in/sujith-chitturi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <a href="https://github.com/sujith130" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 text-slate-300 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-slate-500 text-sm bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Sujith Chitturi. All rights reserved.</p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}

export default App

