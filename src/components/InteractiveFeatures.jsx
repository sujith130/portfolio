import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

// Scroll to top button component
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Typing animation component
export const TypingAnimation = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  )
}

// Floating particles background
export const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Progress bar for skills
export const SkillProgressBar = ({ skill, percentage, delay = 0 }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 font-medium">{skill}</span>
        <span className="text-slate-400">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

// Interactive project card with hover effects
export const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-xl"
      >
        <div className="relative overflow-hidden">
          {project.image && (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <motion.div
            className="flex space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
              View Code
            </Button>
            <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
              Live Demo
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
