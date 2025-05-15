import { useState, useEffect } from 'react';
import { Terminal, Command, X, User, Code, Briefcase, Mail, Linkedin, Github, ExternalLink, Download } from 'lucide-react';

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [bootSequence, setBootSequence] = useState(0);
  const [readyToEnter, setReadyToEnter] = useState(false);
  
  // Simulating boot sequence
  useEffect(() => {
    const bootTimer = setInterval(() => {
      setBootSequence(prev => {
        if (prev >= 100) {
          clearInterval(bootTimer);
          setTimeout(() => setReadyToEnter(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 180);
    
    return () => clearInterval(bootTimer);
  }, []);
  
  // Add event listener for keypress when ready to enter
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (readyToEnter && event.key === 'Enter') {
        setIsLoading(false);
      }
    };
    
    if (readyToEnter) {
      window.addEventListener('keypress', handleKeyPress);
    }
    
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [readyToEnter]);
  
  if (isLoading) {
    return <BootScreen progress={bootSequence} readyToEnter={readyToEnter} onEnter={() => setIsLoading(false)} />;
  }
  
  return (
    <div className="font-mono bg-gray-900 text-green-400 min-h-screen">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main Content */}
        <div className="flex-1 p-2 lg:p-4">
          <Header />
          
          <div className="mt-4">
            {activeSection === 'about' && <AboutSection />}
            {activeSection === 'projects' && <ProjectsSection />}
            {activeSection === 'experience' && <ExperienceSection />}
            {activeSection === 'skills' && <SkillsSection />}
            {activeSection === 'contact' && <ContactSection />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Boot Screen Component
function BootScreen({ progress, readyToEnter, onEnter }) {
  return (
    <div className="font-mono bg-black text-green-500 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg">        
        <div className="mb-4">
          <div className="text-sm">[INIT] Booting system...</div>
          <div className="text-sm">[KERNEL] Loading components...</div>
          <div className="text-sm">[MOUNT] Mounting portfolio data...</div>
          <div className="text-sm">[CONFIG] Initializing interface...</div>
        </div>
        
        <div className="w-full bg-gray-800 rounded-sm overflow-hidden h-4">
          <div 
            className="bg-green-600 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="mt-2 text-right text-sm">{`${progress}%`}</div>
        
        <div className="mt-6 text-sm">
          {progress < 40 && '>> System check...'}
          {progress >= 40 && progress < 70 && '>> Loading portfolio assets...'}
          {progress >= 70 && progress < 100 && '>> Preparing workspace...'}
          {progress === 100 && '>> System ready.'}
        </div>
        
        {readyToEnter && (
          <div className="mt-8 text-center">
            <div className="inline-block border border-green-500 rounded px-4 py-2 animate-pulse cursor-pointer" onClick={onEnter}>
              Press ENTER to continue
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Header Component
function Header() {
  return (
    <div className="bg-gray-800 p-2 rounded-t-md border-b border-gray-700 flex items-center">
      <Terminal size={18} className="mr-2" />
      <div className="text-xs sm:text-sm flex-1">developer@portfolio:~</div>
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <X size={16} className="cursor-pointer hover:text-red-500 transition-colors" />
      </div>
    </div>
  );
}

// Sidebar Component
function Sidebar({ activeSection, setActiveSection }) {
  const menuItems = [
    { id: 'about', icon: <User size={16} />, label: 'About' },
    { id: 'projects', icon: <Code size={16} />, label: 'Projects' },
    { id: 'experience', icon: <Briefcase size={16} />, label: 'Experience' },
    { id: 'skills', icon: <Command size={16} />, label: 'Skills' },
    { id: 'contact', icon: <Mail size={16} />, label: 'Contact' },
  ];

  return (
    <div className="bg-gray-800 lg:w-64 p-2 lg:min-h-screen">
      <div className="hidden lg:block text-center mb-8 mt-4">
        <div className="text-xl font-bold mb-1">Dev Name</div>
        <div className="text-green-300 text-sm mb-3">Software Engineer</div>
        <div className="flex justify-center space-x-2">
          <a href="#" className="hover:text-white"><Github size={18} /></a>
          <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
          <a href="#" className="hover:text-white"><Mail size={18} /></a>
        </div>
      </div>
      
      <div className="flex lg:block overflow-x-auto lg:overflow-x-visible space-x-4 lg:space-x-0 lg:space-y-1 py-2">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex items-center px-3 py-2 rounded-md w-full transition-colors ${
              activeSection === item.id ? 'bg-gray-700 text-green-400' : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            <span className="whitespace-nowrap">{item.label}</span>
          </button>
        ))}
      </div>
      
      <div className="hidden lg:block mt-8">
        <a 
          href="#" 
          className="flex items-center justify-center bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-md transition-colors w-full"
          onClick={(e) => {
            e.preventDefault();
            alert('Resume would download here in a real implementation');
          }}
        >
          <Download size={16} className="mr-2" />
          <span>Download CV</span>
        </a>
      </div>
      
      <div className="hidden lg:block mt-8 text-xs text-gray-500 p-2">
        <div className="mb-1">$ whoami</div>
        <div className="mb-3 text-green-400 pl-2">developer</div>
        <div className="mb-1">$ pwd</div>
        <div className="mb-3 text-green-400 pl-2">/home/portfolio</div>
        <div className="mb-1">$ uptime</div>
        <div className="text-green-400 pl-2">5+ years in development</div>
      </div>
    </div>
  );
}

// About Section
function AboutSection() {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(v => !v);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <TerminalWindow title="About Me">
      <div className="mb-6">
        <div className="mb-2">
          <span className="text-amber-400">dev@portfolio</span>
          <span className="text-gray-400">:</span>
          <span className="text-blue-400">~/about</span>
          <span className="text-gray-400">$</span>
          <span className="ml-2">cat introduction.txt</span>
        </div>
        
        <div className="pl-1 mt-4 leading-relaxed">
          <p className="mb-4">
            Hello! I'm a Full-Stack Developer passionate about building elegant solutions to complex problems.
          </p>
          <p className="mb-4">
            With a background in computer science and several years of industry experience, I specialize in modern 
            web technologies and software development practices, with a focus on creating robust, scalable applications.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open source projects, attending tech meetups, 
            or exploring new technologies to continuously expand my skill set.
          </p>
        </div>
      </div>
      
      <div>
        <div className="mb-2">
          <span className="text-amber-400">dev@portfolio</span>
          <span className="text-gray-400">:</span>
          <span className="text-blue-400">~/about</span>
          <span className="text-gray-400">$</span>
          <span className="inline-block">{visible ? '█' : ' '}</span>
        </div>
      </div>
    </TerminalWindow>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, task assignment, and progress tracking.',
      tech: ['React', 'Firebase', 'Material UI', 'Redux'],
      github: '#',
      live: '#'
    },
    {
      title: 'Developer Blog',
      description: 'Technical blog with markdown support, code highlighting, and comment functionality.',
      tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <TerminalWindow title="Projects">
      <div className="mb-4">
        <span className="text-amber-400">dev@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-blue-400">~/projects</span>
        <span className="text-gray-400">$</span>
        <span className="ml-2">ls -la</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-700 bg-gray-800/50 rounded-md p-4 hover:border-green-500 transition-colors">
            <h3 className="text-green-300 text-lg mb-2 font-bold">{project.title}</h3>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="text-xs bg-gray-700 text-green-300 px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4 text-sm">
              <a href={project.github} className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                <Github size={14} className="mr-1" />
                <span>Source</span>
              </a>
              <a href={project.live} className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                <ExternalLink size={14} className="mr-1" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div>
        <span className="text-amber-400">dev@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-blue-400">~/projects</span>
        <span className="text-gray-400">$</span>
        <span className="ml-2 text-green-400">_</span>
      </div>
    </TerminalWindow>
  );
}

// Experience Section
function ExperienceSection() {
  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: 'Jan 2023 - Present',
      description: 'Leading development of user interfaces for enterprise SaaS products. Implemented new component library and improved performance by 40%.'
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Group',
      period: 'Mar 2020 - Dec 2022',
      description: 'Developed and maintained multiple client applications. Created RESTful APIs and integrated third-party services.'
    },
    {
      role: 'Junior Developer',
      company: 'Startup Ventures',
      period: 'Jun 2018 - Feb 2020',
      description: 'Assisted in building MVPs for early-stage startups. Worked with React, Node.js, and various databases.'
    }
  ];

  return (
    <TerminalWindow title="Experience">
      <div className="mb-4">
        <span className="text-amber-400">dev@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-blue-400">~/experience</span>
        <span className="text-gray-400">$</span>
        <span className="ml-2">cat career_history.log</span>
      </div>
      
      <div className="space-y-6 mb-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l border-green-600">
            <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 mt-1.5"></div>
            <div className="mb-1">
              <span className="text-green-300 font-bold">{exp.role}</span>
              <span className="text-gray-400"> @ </span>
              <span className="text-amber-400">{exp.company}</span>
            </div>
            <div className="text-gray-400 text-sm mb-2">{exp.period}</div>
            <p className="text-gray-300 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
      
      <div>
        <span className="text-amber-400">dev@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-blue-400">~/experience</span>
        <span className="text-gray-400">$</span>
        <span className="ml-2 text-green-400">_</span>
      </div>
    </TerminalWindow>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Redux', 'Next.js']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL']
    },
    {
      name: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
    },
    {
      name: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Webpack', 'Jest']
    }
  ];

  return (
    <TerminalWindow title="Skills">
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-6">
          <div className="mb-2">
            <span className="text-amber-400">dev@portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-blue-400">~/skills</span>
            <span className="text-gray-400">$</span>
            <span className="ml-2">ls -la {category.name.toLowerCase()}/</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pl-4 mb-4">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center">
                <span className="text-green-400 mr-2">-&gt;</span>
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div>
        <span className="text-amber-400">dev@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-blue-400">~/skills</span>
        <span className="text-gray-400">$</span>
        <span className="ml-2 text-green-400">_</span>
      </div>
    </TerminalWindow>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here
    alert(`Message would be sent in a real implementation!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <TerminalWindow title="Contact">
      <div className="mb-4">
        <span className="text-amber-400">dev@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-blue-400">~/contact</span>
        <span className="text-gray-400">$</span>
        <span className="ml-2">./send_message.sh</span>
      </div>
      
      <div className="mb-6 max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-green-400 mb-1 text-sm" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 text-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          
          <div>
            <label className="block text-green-400 mb-1 text-sm" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 text-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          
          <div>
            <label className="block text-green-400 mb-1 text-sm" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-gray-800 border border-gray-700 text-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div className="border-t border-gray-700 pt-4 mb-4">
        <div className="text-sm mb-2">// Social Links</div>
        <div className="flex space-x-4">
          <a href="#" className="flex items-center text-gray-300 hover:text-green-400">
            <Github size={16} className="mr-1" />
            <span>GitHub</span>
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-green-400">
            <Linkedin size={16} className="mr-1" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:email@example.com" className="flex items-center text-gray-300 hover:text-green-400">
            <Mail size={16} className="mr-1" />
            <span>email@example.com</span>
          </a>
        </div>
      </div>
      
      <div>
        <span className="text-amber-400">dev@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-blue-400">~/contact</span>
        <span className="text-gray-400">$</span>
        <span className="ml-2 text-green-400">_</span>
      </div>
    </TerminalWindow>
  );
}

// Reusable Terminal Window Component
function TerminalWindow({ title, children }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-md mb-4">
      <div className="bg-gray-800 p-2 rounded-t-md border-b border-gray-700 flex items-center">
        <Terminal size={14} className="mr-2 text-green-400" />
        <div className="text-xs text-gray-400 flex-1">{title}</div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}