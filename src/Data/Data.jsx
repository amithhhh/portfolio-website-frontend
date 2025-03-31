import { Code, Shield, Database, Camera } from 'lucide-react'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaTerminal, FaNetworkWired, FaTools, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { SiDjango, SiJavascript, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, SiPytorch, SiBurpsuite, SiSplunk, SiPython, SiC, SiLinux } from "react-icons/si";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BiHive } from "react-icons/bi";
import { FaWindows } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import FitFuel from '../assets/Fitfuel.jpg'
import Study from '../assets/Study.jpeg'
import Ecommerce from '../assets/Ecommerce.jpeg'
import Hotel from '../assets/Hotel.jpg'
import Portfolio from '../assets/Portfolio.jpeg'
import Youtube from '../assets/Youtube.png'
import Music from '../assets/Music.jpg'
import Language from '../assets/Language.jpeg'
import Chatbot from '../assets/Chatbot.png'
import Food from '../assets/Food-Recognition.jpeg'
import pokedex from '../assets/Pokedex.jpeg'
import diet from '../assets/Diet.jpeg'
import keyboard from '../assets/Keylogger.jpeg'
import subdomain from '../assets/Subdomain.png'



const iconStyle = { color: "#fff", size: 45 };

export const headerData = [
  {
    id: 1,
    name: 'Services',
    path: '/services',
    logo: ''
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
    logo: ''
  },
  {
    id: 3,
    name: 'Skills',
    path: '/skills',
    logo: ''
  },
  {
    id: 4,
    name: 'Works',
    path: '/works',
    logo: ''
  },
  {
    id: 5,
    name: 'Tools',
    path: '/tools',
    logo: ''
  },
  {
    id: 5,
    name: 'Contacts',
    path: '/contacts',
    logo: ''
  }
]

export const serviceData = [
  {
    id: 1,
    name: "Web Development",
    image: <Code color='#fff' size={50} />,
    defenition: " creating and maintaining websites and web applications. It includes frontend development (UI/UX), backend development, and full-stack development, using technologies like HTML, CSS, JavaScript, Django, React, and Node.js."
  },
  {
    id: 2,
    name: "CyberSecurity",
    image: <Shield color='#fff' size={50} />,
    defenition: "The practice of protecting systems, networks, unauthorized access, and cyber threats. It involves security monitoring, threat intelligence, incident response, and vulnerability assessments to ensure data confidentiality, integrity, and availability."
  },
  {
    id: 3,
    name: "Data Science",
    image: <Database color='#fff' size={50} />,
    defenition: "The field of analyzing and interpreting complex data using statistical methods, machine learning, and artificial intelligence. It involves data collection, preprocessing, visualization, and predictive modeling using tools like Python and PyTorch."

  },
  {
    id: 4,
    name: "Photo Editing",
    image: <Camera color="#fff" size={50} />,
    defenition: " is the process of modifying or enhancing digital images using various tools and techniques. It involves adjusting colors, brightness, removing imperfections, adding effects, cropping. Popular photo editing software includes Adobe Photoshop"
  }
]

export const skillSet = [
  'Cybersecurity',
  'Data Science',
  'Web Development',
  'OS',
  'Languages',
  'Editing'
]



export const toolSet = [
  { name: "Django", icon: <SiDjango {...iconStyle} />, department: "Web Development", definition: "A high-level Python web framework for rapid development." },
  { name: "HTML", icon: <FaHtml5 {...iconStyle} />, department: "Web Development", definition: "The standard markup language for creating web pages." },
  { name: "CSS", icon: <FaCss3Alt {...iconStyle} />, department: "Web Development", definition: "A stylesheet language for designing web pages." },
  { name: "JavaScript", icon: <SiJavascript {...iconStyle} />, department: "Web Development", definition: "A versatile scripting language for web development." },
  { name: "React", icon: <FaReact {...iconStyle} />, department: "Web Development", definition: "A JavaScript library for building user interfaces." },
  { name: "Express.js", icon: <SiExpress {...iconStyle} />, department: "Web Development", definition: "A minimal Node.js framework for building web applications." },
  { name: "Node.js", icon: <FaNodeJs {...iconStyle} />, department: "Web Development", definition: "A runtime for executing JavaScript on the server side." },
  { name: "MySQL", icon: <SiMysql {...iconStyle} />, department: "Web Development", definition: "A popular relational database management system." },
  { name: "PostgreSQL", icon: <SiPostgresql {...iconStyle} />, department: "Web Development", definition: "An advanced open-source relational database." },
  { name: "MongoDB", icon: <SiMongodb {...iconStyle} />, department: "Web Development", definition: "A NoSQL database that stores data in JSON-like documents." },

  // Data Science
  { name: "Pandas", icon: <SiPandas {...iconStyle} />, department: "Data Science", definition: "A Python library for data analysis and manipulation." },
  { name: "NumPy", icon: <SiNumpy {...iconStyle} />, department: "Data Science", definition: "A fundamental package for numerical computing in Python." },
  { name: "Matplotlib", icon: <FaChartLine {...iconStyle} />, department: "Data Science", definition: "A plotting library for creating visualizations." },
  { name: "Scikit-learn", icon: <SiScikitlearn {...iconStyle} />, department: "Data Science", definition: "A machine learning library for Python." },
  { name: "PyTorch", icon: <SiPytorch {...iconStyle} />, department: "Data Science", definition: "An open-source deep learning framework." },

  // Cybersecurity
  { name: "Metasploit", icon: <FaTools {...iconStyle} />, department: "Cybersecurity", definition: "A penetration testing framework for security research." },
  { name: "Burp Suite", icon: <SiBurpsuite {...iconStyle} />, department: "Cybersecurity", definition: "A web vulnerability scanner and security testing tool." },
  { name: "Nmap", icon: <FaNetworkWired {...iconStyle} />, department: "Cybersecurity", definition: "A network scanning tool for discovering hosts and services." },
  { name: "Nessus", icon: <FaShieldAlt {...iconStyle} />, department: "Cybersecurity", definition: "A vulnerability assessment tool for security auditing." },
  { name: "Splunk", icon: <SiSplunk {...iconStyle} />, department: "Cybersecurity", definition: "A platform for searching, monitoring, and analyzing machine data." },
  { name: "Wazuh", icon: <AiOutlineSecurityScan {...iconStyle} />, department: "Cybersecurity", definition: "An open-source SIEM and security monitoring tool." },
  { name: "TheHive", icon: <BiHive {...iconStyle} />, department: "Cybersecurity", definition: "An incident response platform for SOC teams." },

  // Languages
  { name: "Python", icon: <SiPython {...iconStyle} />, department: "Languages", definition: "A versatile programming language used in multiple domains." },
  { name: "C", icon: <SiC {...iconStyle} />, department: "Languages", definition: "A foundational language used in system and application development." },
  { name: "JavaScript", icon: <SiJavascript {...iconStyle} />, department: "Languages", definition: "A scripting language for web development and beyond." },
  { name: "Shell Scripting", icon: <FaTerminal {...iconStyle} />, department: "Languages", definition: "A command-line scripting language for automation." },

  // OS
  { name: "Linux", icon: <SiLinux {...iconStyle} />, department: "OS", definition: "An open-source operating system widely used in servers and security." },
  { name: "Windows", icon: <FaWindows {...iconStyle} />, department: "OS", definition: "A widely used operating system developed by Microsoft." },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop {...iconStyle} />,
    department: "Editing",
    definition: "A powerful image editing software."
  }

];

export const skillAssess = [
  { id: 1, name: "Frontend Development", percentage: 85 },
  { id: 2, name: "Backend Development", percentage: 80 },
  { id: 3, name: "Cybersecurity", percentage: 90 },
  { id: 4, name: "Penetration Testing", percentage: 85 },
  { id: 5, name: "SOC Monitoring", percentage: 88 },
  { id: 6, name: "Database Management", percentage: 75 },
  { id: 7, name: "Networking", percentage: 80 },
  { id: 8, name: "Linux Administration", percentage: 85 },
  { id: 9, name: "Web Security", percentage: 87 },
  { id: 10, name: "Machine Learning", percentage: 70 },
  { id: 11, name: "Deep Learning", percentage: 75 }
];

export const projectSet = [
  // Cybersecurity Projects  
  {
    name: "Keylogger",
    icon: keyboard,
    department: "Cybersecurity",
    definition: "A Python-based Keylogger that captures keystrokes from a target system.",
    tools: ["Python"]
  },

  {
    name: "Subdomain Finder",
    icon: subdomain,
    department: "Cybersecurity",
    definition: "A subdomain enumeration tool using a brute-force approach, built with C.",
    tools: ["C"]
  },

  // Web Development Projects  
  {
    name: "FitFuel",
    icon: FitFuel,
    department: "Web Development",
    definition: "A fitness-related website for tracking health and nutrition.",
    tools: ["Django", "Python", "HTML", "CSS", "JavaScript", "PostgreSQL"]
  },

  {
    name: "StudyBud",
    icon: Study,
    department: "Web Development",
    definition: "A student collaboration website with messaging and study room creation.",
    tools: ["Django", "Python", "HTML", "CSS", "JavaScript", "PostgreSQL"]
  },

  {
    name: "E-commerce Website",
    icon: Ecommerce,
    department: "Web Development",
    definition: "An online shopping platform for various products.",
    tools: ["React", "Node.js", "Express.js", "MongoDB"]
  },

  {
    name: "Hotel Website",
    icon: Hotel,
    department: "Web Development",
    definition: "A website for a specific hotel, showcasing rooms and services.",
    tools: ["React", "Node.js", "Express.js", "MongoDB"]
  },

  {
    name: "Personal Portfolio Website",
    icon: Portfolio,
    department: "Web Development",
    definition: "A portfolio website built with the MERN stack to showcase projects and skills.",
    tools: ["MongoDB", "Express.js", "React", "Node.js"]
  },

  {
    name: "YouTube Downloader",
    icon: Youtube,
    department: "Web Development",
    definition: "A web-based tool to download YouTube videos by providing a link.",
    tools: ["Django", "Python"]
  },

  {
    name: "Music Player App",
    icon: Music,
    department: "Web Development",
    definition: "A music player that synchronizes lyrics with the playback.",
    tools: ["Django", "Python", "React"]
  },

  // Data Science Projects  
  {
    name: "Kannada Translator",
    icon: Language,
    department: "Data Science",
    definition: "A machine learning model for translating English text to Kannada.",
    tools: ["Python", "PyTorch", "NLTK"]
  },

  {
    name: "FitFuel Chatbot AI",
    icon: Chatbot,
    department: "Data Science",
    definition: "An AI chatbot for answering fitness-related questions.",
    tools: ["Python", "PyTorch", "Scikit-learn"]
  },

  {
    name: "Food Recognition Model",
    icon: Food,
    department: "Data Science",
    definition: "An AI model that recognizes different food items from images.",
    tools: ["Python", "PyTorch", "OpenCV"]
  },

  {
    name: "Pokedex",
    icon: pokedex,
    department: "Data Science",
    definition: "A project that retrieves details of Pokémon from a dataset.",
    tools: ["Python", "Pandas", "Scikit-learn"]
  },

  {
    name: "Diet Recommendation",
    icon: diet,
    department: "Data Science",
    definition: "A machine learning model that suggests diet plans based on user input.",
    tools: ["Python", "Scikit-learn", "Pandas"]
  }

];

export const resumeData = {
  workExperience: [
    {
      title: "Internship",
      company: "Offenso Hackers Academy",
      duration: "June 2024 - January 2025",
      description: "Worked as a cybersecurity intern, gaining hands-on experience in security monitoring, vulnerability assessment, and incident response."
    },
    {
      title: "Project Contributor",
      company: "Personal/Collaborative Project",
      duration: "June 2023 - February 2024",
      description: "Worked on a full-stack project, handling both backend and frontend development, ensuring secure and optimized web applications."
    },
    {
      title: "Freelance Photo Editor",
      company: "Self-employed",
      duration: "2024 - Present",
      description: "Edited and enhanced photos professionally for various clients, ensuring high-quality digital imagery."
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      duration: "2023 - Present",
      description: "Developing modern, responsive, and secure web applications for clients, focusing on React, Material UI, and backend technologies."
    }
  ],
  education: [
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Kannur University",
      duration: "2021 - 2024",
      description: "Completed a Bachelor's degree specializing in Computer Applications, with a focus on web development, cybersecurity, and software engineering."
    },
    {
      title: "Cybersecurity Training",
      institution: "Offenso Hackers Academy",
      duration: "7 Months",
      description: "Completed a comprehensive cybersecurity training program covering penetration testing, security analysis, and digital forensics."
    },
    {
      title: "High School & Higher Secondary",
      institution: "Chovva Higher Secondary School",
      duration: "Completed",
      description: "Completed higher secondary education with a focus on computer science and mathematics."
    }
  ]
};
