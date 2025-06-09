import React, { useState, useEffect, useRef } from 'react';
import {
  Eye, Edit3, Download, PlusCircle, Trash2, Briefcase, GraduationCap, Lightbulb,
  User, Phone, Mail, Linkedin, Github, MapPin, Sparkles, X, Link, ChevronDown, ChevronUp
} from 'lucide-react';

// Helper to generate unique IDs
const generateId = () => Date.now().toString();

const initialResumeData = {
  personalInfo: {
    name: 'Jamie P. Anderson',
    title: 'Senior Product Designer',
    email: 'jamie.anderson@example.com',
    phone: '+1 555-987-6543',
    linkedin: 'linkedin.com/in/jamieanderson',
    github: 'github.com/jamieanderson',
    address: '456 Creative Ave, Design City, CA 90210',
    website: 'jamieandersondesign.com'
  },
  summary: 'Innovative and user-centric Senior Product Designer with 8+ years of experience leading design for B2B and B2C products. Passionate about creating intuitive and engaging user experiences that drive business goals. Proven ability to collaborate effectively with cross-functional teams.',
  experience: [
    {
      id: generateId(),
      jobTitle: 'Lead UX Designer',
      company: 'Innovate Solutions Inc.',
      location: 'San Francisco, CA',
      startDate: 'Mar 2021',
      endDate: 'Present',
      responsibilities: [
        'Led the redesign of the flagship SaaS product, resulting in a 25% increase in user satisfaction.',
        'Mentored a team of 3 junior designers, fostering a collaborative and growth-oriented environment.',
        'Developed and maintained a comprehensive design system, ensuring consistency across all products.',
        'Conducted user research, usability testing, and data analysis to inform design decisions.'
      ],
    },
    {
      id: generateId(),
      jobTitle: 'UX/UI Designer',
      company: 'Tech Forward LLC',
      location: 'Austin, TX',
      startDate: 'Jul 2017',
      endDate: 'Feb 2021',
      responsibilities: [
        'Designed user interfaces for web and mobile applications, focusing on usability and accessibility.',
        'Created wireframes, prototypes, and high-fidelity mockups using Figma and Sketch.',
        'Worked closely with developers to ensure accurate implementation of designs.',
      ],
    },
  ],
  education: [
    {
      id: generateId(),
      degree: 'Master of Design (MDes), Interaction Design',
      institution: 'Carnegie Mellon University',
      location: 'Pittsburgh, PA',
      graduationDate: 'May 2017',
      details: 'Dean\'s List, Capstone Project on Future of Urban Mobility.',
    },
    {
      id: generateId(),
      degree: 'Bachelor of Fine Arts (BFA), Graphic Design',
      institution: 'Rhode Island School of Design (RISD)',
      location: 'Providence, RI',
      graduationDate: 'May 2015',
      details: 'Graduated with Honors.',
    }
  ],
  skills: ['User Research', 'UX Design', 'UI Design', 'Interaction Design', 'Prototyping', 'Wireframing', 'Design Systems', 'Figma', 'Sketch', 'Adobe XD', 'Agile Methodologies', 'User Testing', 'Problem Solving'],
  projects: [
    {
      id: generateId(),
      name: 'EcoTrack - Sustainability App',
      description: 'Led the design of a mobile app to help users track and reduce their carbon footprint. Features included goal setting, community challenges, and educational resources.',
      technologies: ['Figma, React Native (concept), User Research'],
      link: 'portfolio.jamieandersondesign.com/ecotrack',
    }
  ],
};

// --- Reusable Input Component ---
const InputField = ({ label, id, value, onChange, placeholder, type = "text", icon }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
      {icon && React.createElement(icon, { className: "mr-2 h-4 w-4 text-gray-500" })}
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        rows="3"
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    ) : (
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    )}
  </div>
);

// --- Resume Preview Template ("Modern Compact") ---
const ResumePreviewV2 = React.forwardRef(({ data }, ref) => {
  const { personalInfo, summary, experience, education, skills, projects } = data;

  const Section = ({ title, children, icon, className = "" }) => (
    <section className={`mb-6 ${className}`}>
      {title && (
        <h2 className="text-xl font-semibold text-slate-700 border-b-2 border-slate-300 pb-2 mb-4 flex items-center">
          {icon && React.createElement(icon, { className: "mr-3 h-5 w-5 text-indigo-600" })}
          {title}
        </h2>
      )}
      {children}
    </section>
  );

  const ContactItem = ({ icon, text, href }) => (
    <div className="flex items-center text-sm text-slate-600 mb-1">
      {React.createElement(icon, { className: "h-4 w-4 mr-2 text-indigo-500 flex-shrink-0" })}
      {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700 break-all">{text}</a> : <span className="break-all">{text}</span>}
    </div>
  );

  return (
    <div ref={ref} className="p-6 md:p-8 lg:p-10 bg-white shadow-2xl rounded-lg printable-area font-serif max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 tracking-tight">{personalInfo.name}</h1>
        <p className="text-xl md:text-2xl text-slate-600 font-light mt-1">{personalInfo.title}</p>
        
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-left">
          {personalInfo.email && <ContactItem icon={Mail} text={personalInfo.email} href={`mailto:${personalInfo.email}`} />}
          {personalInfo.phone && <ContactItem icon={Phone} text={personalInfo.phone} />}
          {personalInfo.address && <ContactItem icon={MapPin} text={personalInfo.address} />}
          {personalInfo.linkedin && <ContactItem icon={Linkedin} text={personalInfo.linkedin} href={`https://${personalInfo.linkedin}`} />}
          {personalInfo.github && <ContactItem icon={Github} text={personalInfo.github} href={`https://${personalInfo.github}`} />}
          {personalInfo.website && <ContactItem icon={Link} text={personalInfo.website} href={`https://${personalInfo.website}`} />}
        </div>
      </header>

      {summary && (
        <Section title="Summary" icon={User}>
          <p className="text-slate-700 text-sm leading-relaxed">{summary}</p>
        </Section>
      )}

      {skills && skills.length > 0 && (
        <Section title="Core Competencies" icon={Lightbulb}>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">{skill}</span>
            ))}
          </div>
        </Section>
      )}
      
      {experience && experience.length > 0 && (
        <Section title="Professional Experience" icon={Briefcase}>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-5 last:mb-0">
              <h3 className="text-lg font-semibold text-slate-800">{exp.jobTitle}</h3>
              <div className="flex justify-between items-baseline">
                <p className="text-md text-indigo-600 font-medium">{exp.company}</p>
                <p className="text-xs text-slate-500">{exp.location}</p>
              </div>
              <p className="text-xs text-slate-500 mb-2">{exp.startDate} – {exp.endDate}</p>
              <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 pl-2">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="leading-snug">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {education && education.length > 0 && (
        <Section title="Education" icon={GraduationCap}>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4 last:mb-0">
              <h3 className="text-lg font-semibold text-slate-800">{edu.degree}</h3>
              <div className="flex justify-between items-baseline">
                <p className="text-md text-indigo-600 font-medium">{edu.institution}</p>
                <p className="text-xs text-slate-500">{edu.location}</p>
              </div>
              <p className="text-xs text-slate-500 mb-1">{edu.graduationDate}</p>
              {edu.details && <p className="text-slate-700 text-sm italic">{edu.details}</p>}
            </div>
          ))}
        </Section>
      )}
      
      {projects && projects.length > 0 && (
        <Section title="Key Projects" icon={Lightbulb} className="print-break-before">
          {projects.map((proj) => (
            <div key={proj.id} className="mb-4 last:mb-0">
              <h3 className="text-lg font-semibold text-slate-800">{proj.name}</h3>
              {proj.link && <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-500 hover:underline hover:text-indigo-700">{proj.link}</a>}
              <p className="text-slate-700 text-sm my-1">{proj.description}</p>
              {proj.technologies && <p className="text-sm text-slate-600"><em>Built with: {proj.technologies}</em></p>}
            </div>
          ))}
        </Section>
      )}
    </div>
  );
});

// --- Resume Edit Form Component ---
const ResumeEditForm = ({ data, onUpdate }) => {
  const handlePersonalInfoChange = (field, value) => {
    onUpdate({ ...data, personalInfo: { ...data.personalInfo, [field]: value } });
  };
  const handleSummaryChange = (value) => { onUpdate({ ...data, summary: value }); };
  const handleArrayChange = (section, index, field, value) => {
    const updatedSection = data[section].map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    onUpdate({ ...data, [section]: updatedSection });
  };
  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    const updatedExperience = data.experience.map((exp, i) => {
      if (i === expIndex) {
        const updatedResponsibilities = exp.responsibilities.map((resp, j) => (j === respIndex ? value : resp));
        return { ...exp, responsibilities: updatedResponsibilities };
      } return exp;
    });
    onUpdate({ ...data, experience: updatedExperience });
  };
  const addArrayItem = (section, newItemTemplate) => {
    onUpdate({ ...data, [section]: [...data[section], { ...newItemTemplate, id: generateId() }] });
  };
  const removeArrayItem = (section, index) => {
    onUpdate({ ...data, [section]: data[section].filter((_, i) => i !== index) });
  };
  const addResponsibility = (expIndex) => {
    const updatedExperience = data.experience.map((exp, i) => {
      if (i === expIndex) {
        return { ...exp, responsibilities: [...exp.responsibilities, ''] };
      } return exp;
    });
    onUpdate({ ...data, experience: updatedExperience });
  };
  const removeResponsibility = (expIndex, respIndex) => {
    const updatedExperience = data.experience.map((exp, i) => {
      if (i === expIndex) {
        const filteredResponsibilities = exp.responsibilities.filter((_, j) => j !== respIndex);
        return { ...exp, responsibilities: filteredResponsibilities };
      } return exp;
    });
    onUpdate({ ...data, experience: updatedExperience });
  };
  const handleSkillsChange = (value) => {
    onUpdate({ ...data, skills: value.split(',').map(s => s.trim()).filter(s => s) });
  };
  const SectionWrapper = ({ title, children }) => (
    <div className="mb-8 p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4 pb-2 border-b border-gray-200">{title}</h3>
      {children}
    </div>
  );

  return (
    <div className="p-4 md:p-6 space-y-6 bg-gray-50 rounded-lg">
      <SectionWrapper title="Personal Information">
        <InputField label="Full Name" id="name" value={data.personalInfo.name} onChange={(e) => handlePersonalInfoChange('name', e.target.value)} icon={User}/>
        <InputField label="Title" id="title" value={data.personalInfo.title} onChange={(e) => handlePersonalInfoChange('title', e.target.value)} icon={Briefcase}/>
        <InputField label="Email" id="email" type="email" value={data.personalInfo.email} onChange={(e) => handlePersonalInfoChange('email', e.target.value)} icon={Mail}/>
        <InputField label="Phone" id="phone" type="tel" value={data.personalInfo.phone} onChange={(e) => handlePersonalInfoChange('phone', e.target.value)} icon={Phone}/>
        <InputField label="Address" id="address" value={data.personalInfo.address} onChange={(e) => handlePersonalInfoChange('address', e.target.value)} icon={MapPin}/>
        <InputField label="Website/Portfolio URL" id="website" value={data.personalInfo.website || ''} onChange={(e) => handlePersonalInfoChange('website', e.target.value)} icon={Link}/>
        <InputField label="LinkedIn Profile URL" id="linkedin" value={data.personalInfo.linkedin} onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)} icon={Linkedin}/>
        <InputField label="GitHub Profile URL" id="github" value={data.personalInfo.github} onChange={(e) => handlePersonalInfoChange('github', e.target.value)} icon={Github}/>
      </SectionWrapper>
      <SectionWrapper title="Professional Summary">
        <InputField label="Summary" id="summary" type="textarea" value={data.summary} onChange={(e) => handleSummaryChange(e.target.value)} />
      </SectionWrapper>
      <SectionWrapper title="Work Experience">
        {data.experience.map((exp, index) => (
          <div key={exp.id} className="mb-6 p-4 border border-gray-300 rounded-md relative">
            <InputField label="Job Title" id={`exp-title-${index}`} value={exp.jobTitle} onChange={(e) => handleArrayChange('experience', index, 'jobTitle', e.target.value)} />
            <InputField label="Company" id={`exp-company-${index}`} value={exp.company} onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)} />
            <InputField label="Location" id={`exp-location-${index}`} value={exp.location} onChange={(e) => handleArrayChange('experience', index, 'location', e.target.value)} />
            <div className="grid grid-cols-2 gap-4">
                <InputField label="Start Date" id={`exp-start-${index}`} value={exp.startDate} onChange={(e) => handleArrayChange('experience', index, 'startDate', e.target.value)} placeholder="e.g., Jan 2020"/>
                <InputField label="End Date" id={`exp-end-${index}`} value={exp.endDate} onChange={(e) => handleArrayChange('experience', index, 'endDate', e.target.value)} placeholder="e.g., Present or Dec 2022"/>
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities</label>
                {exp.responsibilities.map((resp, rIndex) => (
                    <div key={rIndex} className="flex items-center mb-2">
                        <input type="text" value={resp} onChange={(e) => handleResponsibilityChange(index, rIndex, e.target.value)} placeholder={`Responsibility ${rIndex + 1}`} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        <button type="button" onClick={() => removeResponsibility(index, rIndex)} className="ml-2 p-1 text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                    </div>
                ))}
                <button type="button" onClick={() => addResponsibility(index)} className="mt-1 text-sm text-indigo-600 hover:text-indigo-800 flex items-center"><PlusCircle size={16} className="mr-1"/> Add Responsibility</button>
            </div>
            <button type="button" onClick={() => removeArrayItem('experience', index)} className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800"><Trash2 size={20} /></button>
          </div>
        ))}
        <button type="button" onClick={() => addArrayItem('experience', { jobTitle: '', company: '', location: '', startDate: '', endDate: '', responsibilities: [''] })} className="mt-2 text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 rounded-md border border-indigo-600 hover:bg-indigo-50 flex items-center"><PlusCircle size={18} className="mr-2"/> Add Experience</button>
      </SectionWrapper>
      <SectionWrapper title="Education">
        {data.education.map((edu, index) => (
          <div key={edu.id} className="mb-6 p-4 border border-gray-300 rounded-md relative">
            <InputField label="Degree" id={`edu-degree-${index}`} value={edu.degree} onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)} />
            <InputField label="Institution" id={`edu-institution-${index}`} value={edu.institution} onChange={(e) => handleArrayChange('education', index, 'institution', e.target.value)} />
            <InputField label="Location" id={`edu-location-${index}`} value={edu.location} onChange={(e) => handleArrayChange('education', index, 'location', e.target.value)} />
            <InputField label="Graduation Date" id={`edu-gradDate-${index}`} value={edu.graduationDate} onChange={(e) => handleArrayChange('education', index, 'graduationDate', e.target.value)} placeholder="e.g., May 2020"/>
            <InputField label="Details/GPA (Optional)" id={`edu-details-${index}`} type="textarea" value={edu.details} onChange={(e) => handleArrayChange('education', index, 'details', e.target.value)} />
            <button type="button" onClick={() => removeArrayItem('education', index)} className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800"><Trash2 size={20} /></button>
          </div>
        ))}
        <button type="button" onClick={() => addArrayItem('education', { degree: '', institution: '', location: '', graduationDate: '', details: '' })} className="mt-2 text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 rounded-md border border-indigo-600 hover:bg-indigo-50 flex items-center"><PlusCircle size={18} className="mr-2"/> Add Education</button>
      </SectionWrapper>
      <SectionWrapper title="Projects">
        {data.projects.map((proj, index) => (
          <div key={proj.id} className="mb-6 p-4 border border-gray-300 rounded-md relative">
            <InputField label="Project Name" id={`proj-name-${index}`} value={proj.name} onChange={(e) => handleArrayChange('projects', index, 'name', e.target.value)} />
            <InputField label="Description" id={`proj-desc-${index}`} type="textarea" value={proj.description} onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)} />
            <InputField label="Technologies Used" id={`proj-tech-${index}`} value={proj.technologies} onChange={(e) => handleArrayChange('projects', index, 'technologies', e.target.value)} />
            <InputField label="Project Link" id={`proj-link-${index}`} value={proj.link} onChange={(e) => handleArrayChange('projects', index, 'link', e.target.value)} />
            <button type="button" onClick={() => removeArrayItem('projects', index)} className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800"><Trash2 size={20} /></button>
          </div>
        ))}
        <button type="button" onClick={() => addArrayItem('projects', { name: '', description: '', technologies: '', link: '' })} className="mt-2 text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 rounded-md border border-indigo-600 hover:bg-indigo-50 flex items-center"><PlusCircle size={18} className="mr-2"/> Add Project</button>
      </SectionWrapper>
      <SectionWrapper title="Skills">
        <InputField label="Skills (comma-separated)" id="skills" type="textarea" value={data.skills.join(', ')} onChange={(e) => handleSkillsChange(e.target.value)} placeholder="e.g., React, Node.js, Python"/>
        <p className="text-xs text-gray-500 mt-1">Enter skills separated by commas.</p>
      </SectionWrapper>
    </div>
  );
};

// --- AI Assistant Modal ---
const AiAssistantModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const tips = [
    "Use strong action verbs (e.g., 'Led', 'Developed', 'Managed').",
    "Quantify achievements with numbers (e.g., 'Increased user engagement by 25%').",
    "Tailor your resume to the job description.",
    "Keep summary concise (2-3 sentences) and impactful.",
    "Proofread meticulously for errors.",
    "Ensure contact info is up-to-date and professional.",
    "Use a clean, modern, easy-to-read font. Consistency is key.",
    "Highlight skills matching job requirements.",
    "For projects: describe project, role, tech, and outcome."
  ];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 no-print">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-indigo-700 flex items-center"><Sparkles className="mr-2 h-6 w-6 text-indigo-500" />AI Resume Writing Tips</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700"><X size={24} /></button>
        </div>
        <ul className="space-y-3 text-sm text-slate-700">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start"><Lightbulb size={18} className="mr-3 mt-0.5 text-indigo-500 flex-shrink-0" /><span>{tip}</span></li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">Got it!</button>
      </div>
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [viewMode, setViewMode] = useState('preview');
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false); // New state for AI dropdown
  const resumePreviewRef = useRef();
  const aiDropdownRef = useRef(null); // Ref for the AI dropdown container

  const handleUpdateResume = (updatedData) => { setResumeData(updatedData); };
  const handleDownload = () => {
    const currentView = viewMode;
    if (viewMode === 'edit') {
      setViewMode('preview');
      setTimeout(() => { window.print(); setViewMode(currentView); }, 100);
    } else { window.print(); }
  };

  // Close AI dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (aiDropdownRef.current && !aiDropdownRef.current.contains(event.target)) {
        setIsAiDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [aiDropdownRef]);
  
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * { visibility: hidden; } .printable-area, .printable-area * { visibility: visible; }
        .printable-area { position: absolute; left: 0; top: 0; width: 100% !important; margin: 0 !important; padding: 10mm !important; box-shadow: none !important; border: none !important; font-size: 10pt; }
        .no-print { display: none !important; } @page { margin: 20mm; size: A4; }
        .printable-area { background-color: white !important; color: black !important; }
        .printable-area h1, .printable-area h2, .printable-area h3, .printable-area p, .printable-area li, .printable-area span, .printable-area a { color: black !important; background-color: transparent !important; }
        .printable-area .text-indigo-700, .printable-area .text-indigo-600, .printable-area .text-indigo-500 { color: #1e3a8a !important; }
        .printable-area .bg-indigo-100 { background-color: #e0e7ff !important; border: 1px solid #c7d2fe !important; color: #3730a3 !important; }
        .print-break-before { break-before: page; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const SidebarButton = ({ onClick, icon, label, isActive, isAccent = false, showChevron = false, isDropdownOpen = false }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors duration-150
                  ${isActive ? 'bg-indigo-600 text-white shadow-md' 
                    : isAccent ? 'bg-amber-400 text-slate-800 hover:bg-amber-500 shadow-sm'
                    : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
                  }`}
    >
      <div className="flex items-center space-x-3">
        {React.createElement(icon, { className: "h-5 w-5" })}
        <span>{label}</span>
      </div>
      {showChevron && (isDropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
    </button>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-slate-100">
        <aside className="w-full md:w-72 bg-white p-5 md:p-6 shadow-lg no-print md:sticky md:top-0 md:h-screen flex flex-col">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-indigo-700">Resume<span className="font-light">Craft</span> AI</h1>
            <p className="text-xs text-slate-500">Build Your Future, Intelligently</p>
          </div>
          <nav className="space-y-3 flex-grow">
            <SidebarButton onClick={() => setViewMode('preview')} icon={Eye} label="Preview Resume" isActive={viewMode === 'preview'}/>
            <SidebarButton onClick={() => setViewMode('save')} icon={Eye} label="save" isActive={viewMode === 'preview'}/>
            <SidebarButton onClick={() => setViewMode('share')} icon={Eye} label="share" isActive={viewMode === 'preview'}/>
            <SidebarButton onClick={() => setViewMode('edit')} icon={Edit3} label="Edit Resume" isActive={viewMode === 'edit'}/>
            
            {/* AI Assistant Dropdown */}
            <div className="relative" ref={aiDropdownRef}>
              <SidebarButton
                onClick={() => setIsAiDropdownOpen(!isAiDropdownOpen)}
                icon={Sparkles}
                label="AI Assistant"
                isActive={isAiModalOpen || isAiDropdownOpen}
                isAccent={true}
                showChevron={true}
                isDropdownOpen={isAiDropdownOpen}
              />
              {isAiDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1 z-20">
                  <div className="mx-2 p-2 bg-white rounded-md shadow-xl border border-slate-200">
                    {resumeData.summary && (
                      <button
                        onClick={() => { setIsAiModalOpen(true); setIsAiDropdownOpen(false); }}
                        className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-indigo-100 rounded-md flex items-center"
                      >
                        <Lightbulb size={16} className="mr-2 text-indigo-500" /> Summary Assistance
                      </button>
                    )}
                    {resumeData.experience && resumeData.experience.length > 0 && (
                      <button
                        onClick={() => { setIsAiModalOpen(true); setIsAiDropdownOpen(false); }}
                        className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-indigo-100 rounded-md flex items-center mt-1"
                      >
                        <Briefcase size={16} className="mr-2 text-indigo-500" /> Experience Enhancing
                      </button>
                    )}
                    {(!resumeData.summary && (!resumeData.experience || resumeData.experience.length === 0)) && (
                        <p className="px-3 py-2 text-sm text-slate-500 text-center">No specific assistance available yet.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <SidebarButton onClick={handleDownload} icon={Download} label="Download (PDF)" isActive={false}/>
          </nav>
          <div className="mt-auto pt-6 border-t border-slate-200 text-center text-xs text-slate-500 hidden md:block">
            <p>&copy; {new Date().getFullYear()} ResumeCraft AI. Enhanced by You.</p>
          </div>
        </aside>

        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 overflow-y-auto">
          {viewMode === 'preview' ? (
            <ResumePreviewV2 data={resumeData} ref={resumePreviewRef} />
          ) : (
            <ResumeEditForm data={resumeData} onUpdate={handleUpdateResume} />
          )}
        </main>
      </div>
      <AiAssistantModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />
    </>
  );
}

export default App;
