import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Briefcase, Award, Heart, Camera, Mountain, Gamepad2, Menu, X, ChevronDown, Sparkles, Zap, Rocket, Star, TrendingUp, Instagram, FileText, Stethoscope } from 'lucide-react';
import photo4 from './images/photo4.jpg';
import { Particles } from './components/ui/particles';
import TargetCursor from './components/ui/TargetCursor';
import CustomWelcome from './CustomWelcome';

// Split Text Animation Component
const SplitText = ({ children, className = "" }) => {
  const text = children;
  const letters = text.split("");
  
  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block animate-fade-in-up"
          style={{
            animationDelay: `${index * 0.05}s`,
            animationFillMode: 'both'
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
};

// Typewriter Effect Component
const TypewriterText = ({ text, delay = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  
  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};



const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Parallax effect
      const sections = document.querySelectorAll('.parallax-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
        if (scrollPercent > 0 && scrollPercent < 1) {
          section.style.transform = `translateY(${scrollPercent * 20}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "MediPlus: AI Doctor Scheduler",
      description: "An AI-powered web-based system that prioritizes patient appointments by analyzing symptom severity.",
      tech: ["Flask", "Node.js", "Firebase", "Python", "JavaScript"],
      github: "https://github.com/sarveshh77/MEDIPLUS.git",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      gradient: "from-emerald-400 to-cyan-500",
      icon: <Zap className="w-6 h-6" /> 
    },
    {
      title: "Heart Attack Prediction",
      description: "User-friendly website helping individuals assess heart attack risk and promoting preventive healthcare.",
      tech: ["HTML", "CSS", "PHP", "ML", "Firebase"],
      github: "#",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
      gradient: "from-rose-400 to-orange-500",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Save A Bunny Game",
      description: "Arcade-style Android game with smooth controls, animations, and engaging gameplay experience.",
      tech: ["Java", "Android Studio", "XML"],
      github: "https://github.com/sarveshh77/SaveABunny_AndroidGame.git",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      gradient: "from-green-400 to-teal-500",
      icon: <Gamepad2 className="w-6 h-6" />
    },
    {
      title: "Employee Management System",
      description: "Java Swing application with MySQL featuring CRUD operations and real-time database interactions.",
      tech: ["Java", "MySQL", "JDBC", "NetBeans"],
      github: "https://github.com/sarveshh77/Basic-EmployeeManagement.git",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      gradient: "from-amber-400 to-yellow-500",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "MediScribe – AI Doctor Consultation Summarizer",
      description: "MediScribe is an AI-powered tool that transforms doctor–patient conversations into accurate, structured medical notes using speech recognition, speaker diarization, and smart summarization.",
      tech: ["Python", "Streamlit", "PyTorch", "Whisper", "PyAnnote", "ClinicalBioBERT", "Gemini API", "FFMPEG", "SMTP"],
      github: "https://github.com/sarveshh77/MEDISCRIBE.git",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      gradient: "from-blue-400 to-indigo-500",
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  const skills = {
    "Programming": ["Java", "Python", "C++"],
    "Web Dev": ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MERN Stack"],
    "Tools": ["Android Studio", "Git", "VS Code"],
    "Concepts": ["OOP", "DBMS", "Operating Systems"]
  };

  const experiences = [
    {
      company: "Sumago Infotech Private Limited",
      role: "Python Development Intern",
      duration: "1.5 Months",
      description: "Learned web development with Python and PHP tech stacks. Created a healthcare chatbot providing health cure information.",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const achievements = [
    { text: "Completed 5-day AI bootcamp at VIIT College, scoring 85%", icon: <Sparkles /> },
    { text: "Earned certificates in ML, Web Development, and DBMS", icon: <Award /> },
    { text: "Participated in multiple hackathons and coding competitions", icon: <TrendingUp /> }
  ];

  const hobbies = [
    { name: "Gaming", icon: <Gamepad2 className="w-6 h-6" />, color: "from-emerald-400 to-teal-500" },
    { name: "Photography", icon: <Camera className="w-6 h-6" />, color: "from-blue-400 to-indigo-500" },
    { name: "Trekking", icon: <Mountain className="w-6 h-6" />, color: "from-orange-400 to-red-500" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* ReactBits TargetCursor */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      
      {/* Shadcn/UI Particles Background */}
      <Particles
        className="fixed inset-0 z-0 pointer-events-none"
        quantity={100}
        ease={15}
        color="#ffffff"
        staticity={20}
        size={2.5}
        refresh={false}
      />
      
      {/* Custom Welcome Component */}
      <CustomWelcome />
      
      {/* Subtle overlay for content readability */}
      <div className="fixed inset-0 bg-slate-950/20 pointer-events-none z-10" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/70 backdrop-blur-xl shadow-xl shadow-cyan-500/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
              SW
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`cursor-target px-5 py-2 capitalize transition-all duration-300 rounded-xl font-medium ${
                    activeSection === section 
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/30' 
                      : 'hover:bg-white/5 text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="cursor-target md:hidden p-2 hover:bg-white/10 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="cursor-target block w-full text-left px-4 py-3 capitalize hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-emerald-500/10 rounded-xl transition-all font-medium"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 pt-20 z-20">
        <div className="max-w-7xl mx-auto text-center relative z-30">
          {/* Image with 3D effect */}
          <div className="mb-10 relative inline-block group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500 animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-xl opacity-40" />
            <div className="relative">
              <img
                src={photo4}
                alt="Sarvesh Warule"
                className="relative w-56 h-56 rounded-full border-4 border-white/10 shadow-2xl object-cover mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
              />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <SplitText className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Sarvesh Warule
              </SplitText>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl mb-8">
              <span className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm animate-slide-in-left flex items-center gap-2" style={{animationDelay: '1s', animationFillMode: 'both'}}>
                <Zap className="w-5 h-5 text-purple-400" />
                AI | ML | DL Developer
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm animate-slide-in-left flex items-center gap-2" style={{animationDelay: '1.2s', animationFillMode: 'both'}}>
                <Code className="w-5 h-5 text-emerald-400" />
                Full Stack Developer
              </span>
            </div>
            
            <div className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <TypewriterText 
                text="Building innovative solutions with modern technologies. Passionate about creating impactful digital experiences."
                delay={50}
                className="inline-block"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="mailto:sarveshwarule25@gmail.com" className="cursor-target group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl font-bold hover:scale-110 transform transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Get In Touch
              </span>
            </a>
            <a href="https://drive.google.com/file/d/1Vw5LnwiZnZyuLrnvLgvKZ3xdNH8rXXU5/view?usp=drive_link" className="cursor-target group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-bold hover:scale-110 transform transition-all duration-300 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <FileText className="w-5 h-5" />
                Resume
              </span>
            </a>
            <a href="https://www.linkedin.com/in/sarvesh-warule-139a802b1" target="_blank" rel="noopener noreferrer" className="cursor-target group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl font-bold hover:bg-white/10 hover:scale-110 transform transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span className="flex items-center gap-3">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </span>
            </a>
            <a href="https://github.com/sarveshh77" target="_blank" rel="noopener noreferrer" className="cursor-target group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl font-bold hover:bg-white/10 hover:scale-110 transform transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span className="flex items-center gap-3">
                <Github className="w-5 h-5" />
                GitHub
              </span>
            </a>
            <a href="https://www.instagram.com/sarveshh.999__?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="cursor-target group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl font-bold hover:bg-white/10 hover:scale-110 transform transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span className="flex items-center gap-3">
                <Instagram className="w-5 h-5" />
                Instagram
              </span>
            </a>
          </div>

          <div className="animate-bounce mt-20">
            <ChevronDown className="w-10 h-10 mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative parallax-section z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Crafting digital experiences with passion and precision
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 animate-pulse-glow"
                 style={{animation: 'pulse-glow 4s ease-in-out infinite'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-white/10">
                    <p className="font-bold text-lg text-white mb-2">B.Tech in AI Domain</p>
                    <p className="text-gray-400 text-sm mb-1">Vishwakarma Institute of IT</p>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                      <p className="text-purple-400 text-sm font-medium">Currently Pursuing</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">2024 - Present</p>
                  </div>
                  <div className="pb-6 border-b border-white/10">
                    <p className="font-bold text-lg text-white mb-2">Computer Engineering Diploma</p>
                    <p className="text-gray-400 text-sm mb-3">Govt. Polytechnic Khamgaon</p>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl">
                      <p className="text-emerald-400 font-bold text-lg">91.37%</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">2021 - 2024</p>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-2">SSC</p>
                    <p className="text-gray-400 text-sm mb-3">Late B. D. V. Motala</p>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-xl">
                      <p className="text-cyan-400 font-bold text-lg">93.60%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hobbies Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 animate-pulse-glow"
                 style={{animation: 'pulse-glow 5s ease-in-out infinite', animationDelay: '1s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Hobbies & Interests</h3>
                <div className="grid gap-4">
                  {hobbies.map((hobby, idx) => (
                    <div key={idx} className="group/item relative overflow-hidden rounded-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-r ${hobby.color} opacity-10 group-hover/item:opacity-20 transition-opacity`} />
                      <div className="relative p-6 flex items-center gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${hobby.color} rounded-xl flex items-center justify-center transform group-hover/item:scale-110 group-hover/item:rotate-12 transition-all`}>
                          {hobby.icon}
                        </div>
                        <p className="text-lg font-bold text-white">{hobby.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 animate-pulse-glow"
                 style={{animation: 'pulse-glow 4.5s ease-in-out infinite', animationDelay: '2s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Achievements</h3>
                <ul className="space-y-4">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 transform group-hover/item:scale-110 group-hover/item:rotate-12 transition-all">
                        {achievement.icon}
                      </div>
                      <span className="text-gray-300 leading-relaxed">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative parallax-section z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Innovative solutions powered by cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 animate-pulse-glow"
                style={{
                  animation: `pulse-glow ${3 + idx * 0.5}s ease-in-out infinite`,
                  animationDelay: `${idx * 0.2}s`
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-emerald-500/30 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.github}
                    className="cursor-target group/link inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    <Github className="w-5 h-5" />
                    View Project
                    <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 relative parallax-section z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mastering the tools that build the future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-xl font-bold mb-6 text-white">{category}</h3>
                  <ul className="space-y-3">
                    {items.map((skill, skillIdx) => (
                      <li key={skillIdx} className="flex items-center gap-3 group/item">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transform group-hover/item:scale-150 transition-transform" />
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 relative parallax-section z-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building expertise through real-world challenges
            </p>
          </div>
          
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col md:flex-row items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">{exp.company}</h3>
                  <p className="text-emerald-400 font-bold text-lg mb-2">{exp.role}</p>
                  <p className="text-gray-500 text-sm mb-4 font-medium">{exp.duration}</p>
                  <p className="text-gray-300 leading-relaxed text-lg">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative parallax-section z-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Let's Build Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have an exciting project in mind? Let's connect and create something amazing!
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href="mailto:sarveshwarule25@gmail.com"
              className="cursor-target group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl font-bold text-lg hover:scale-110 transform transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <Mail className="w-6 h-6" />
                Send Email
              </span>
            </a>
            
            <a
              href="tel:+917757877259"
              className="cursor-target group px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 hover:scale-110 transform transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                +91 7757877259
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/sarveshh77" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-target group w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-emerald-500/30 hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github className="w-7 h-7 text-gray-400 group-hover:text-emerald-400 transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sarvesh-warule-139a802b1/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-target group w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/30 hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-7 h-7 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a 
              href="https://www.instagram.com/sarveshh.999__?igsh=OGQ5ZDc2ODk2ZA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-target group w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-pink-500/30 hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-7 h-7 text-gray-400 group-hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Sarvesh Vishnu Warule. Crafted with 
              <span className="text-red-400 mx-1">♥</span> 
              using React & Tailwind CSS
            </p>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">Built for excellence</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;