import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Brain, Database, Globe, ChevronDown, Star, Users, Award } from 'lucide-react'
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
            className="grid grid-cols-3 gap-8 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">2+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">5+</div>
              <div className="text-sm text-slate-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">AI</div>
              <div className="text-sm text-slate-400">Focus</div>
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
              className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-3 transform hover:scale-105 transition-transform"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
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
              Software Engineer with expertise in developing AI agents, secure full-stack web solutions, and scalable mobile applications that enhance efficiency and drive innovation.
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
                  I specialize in developing AI agents, secure full-stack web solutions, and scalable mobile applications. 
                  My expertise spans modern web frameworks, machine learning, and mobile development, enhancing efficiency and driving innovation.
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

            {/* Project 3 - Web & Android Developer Intern/Technical Associate – Aczen */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 hover:border-green-500 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Aczen - Intern Projects</CardTitle>
                  <CardDescription className="text-slate-400">
                    Scalable Android applications and UX/UI design
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Android Studio</Badge>
                      <Badge variant="secondary">XML</Badge>
                      <Badge variant="secondary">Figma</Badge>
                      <Badge variant="secondary">APIs</Badge>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Built scalable Android applications using Android Studio, XML layouts, and domain classes while ensuring a responsive UI. Integrated APIs, including banking APIs, to enhance functionality and secure transactions. Designed UX/UI for the Aczen Pay app using Figma, focusing on user-centric design and seamless navigation. Collaborated with cross-functional teams to meet client requirements and optimize performance.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Details
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
                    {[ "AI Agents", "Automation Workflows", "Machine Learning Basics"].map((skill) => (
                      <Badge key={skill} variant="outline" className="border-slate-600 text-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mobile Development & Databases */}
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
                    {[ "Android (Java/Kotlin)", "Firebase", "MySQL", "PostgreSQL"].map((skill) => (
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Mail className="mr-2 h-5 w-5" />
                chsujith13@gmail.com
              </Button>
              
              <div className="flex space-x-4">
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What People Say</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Feedback from mentors, professors, and collaborators
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">
                    "Alex consistently delivers high-quality code and shows exceptional problem-solving skills. 
                    His AI projects demonstrate deep understanding of machine learning concepts."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">DR</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Dr. Sarah Rodriguez</div>
                      <div className="text-slate-400 text-sm">Computer Science Professor</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">
                    "Working with Alex on our web development project was fantastic. 
                    He brings creativity and technical expertise that elevates every project."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">MC</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Mike Chen</div>
                      <div className="text-slate-400 text-sm">Senior Developer, TechCorp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">
                    "Alex's dedication to learning and applying new technologies is impressive. 
                    His portfolio showcases both technical skills and creative thinking."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">LT</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Lisa Thompson</div>
                      <div className="text-slate-400 text-sm">AI Research Lead</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Alex Johnson. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default App
