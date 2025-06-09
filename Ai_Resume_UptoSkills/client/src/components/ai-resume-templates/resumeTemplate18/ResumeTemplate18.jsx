import React, { useState, useEffect, useRef } from 'react';
import {
  Eye, Edit3, Download, PlusCircle, Trash2, Briefcase, GraduationCap, Lightbulb,
  User, Phone, Mail, Linkedin, Github, MapPin, // Common Icons
  Sparkles, X, ChevronDown, ChevronUp, Image as ImageIcon, CheckSquare, Languages as LanguagesIcon, Smile // Added for AI & new sections
} from 'lucide-react';
// Removed: import html2pdf from "html2pdf.js"; 

// --- Data structure and initial data from the user's new template ---
const initialUserData = {
  name: "Diya Agarwal",
  jobTitle: "Retail Sales Professional", // Added jobTitle
  image: "https://i.imgur.com/zYxDCQT.png", // Default placeholder
  address: "New Delhi, India 110034",
  phone: "+91 11 5555 3345",
  email: "d.agarwal@sample.in",
  summary:
    "A customer-focused Retail Sales professional with a strong understanding of retail dynamics, visual merchandising, and customer service. Proven ability to drive sales, build customer loyalty, and contribute to team success. Eager to apply skills in a challenging retail environment.",
  skills: [
    "Cash register operation",
    "POS system operation",
    "Sales expertise",
    "Teamwork",
    "Inventory management",
    "Accurate money handling",
    "Recordkeeping",
    "Visual Merchandising",
  ],
  experience: [
    {
      id: 'initial-exp-1', // Static unique ID for initial item
      title: "Retail Sales Associate",
      company: "ZARA",
      duration: "Feb 2017 - Present",
      location: "New Delhi, India",
      points: [
        "Increased monthly sales by 10% through proactive customer engagement and product knowledge.",
        "Consistently exceeded sales targets by an average of 15% per quarter.",
        "Prevented store losses by adhering to security procedures and maintaining vigilance.",
        "Processed payments accurately and managed cash drawers with precision.",
      ],
    },
  ],
  education: [
    {
      id: 'initial-edu-1', // Static unique ID
      year: "2016",
      degree: "Diploma in Financial Accounting",
      institution:
        "Oxford Software Institute & Oxford School of English, New Delhi",
    },
  ],
  languages: [
    { id: 'initial-lang-1', name: "Hindi", level: "Native speaker" }, // Static unique ID
    { id: 'initial-lang-2', name: "English", level: "C2 - Proficient" }, // Static unique ID
  ],
  hobbies: ["Recreational Football League", "Two-time league champion", "Red Cross Volunteer", "Photography"],
};


// --- Resume Preview Component (User's new template - MODIFIED LAYOUT) ---
const UserResumePreview = React.forwardRef(({ data }, ref) => {
  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = `https://placehold.co/128x128/E0E0E0/757575?text=${data.name ? data.name.charAt(0).toUpperCase() : 'P'}`;
  };

  const Section = ({ title, children, icon, className = "" }) => (
    <section className={`mb-6 ${className}`}>
      {title && (
        <h2 className="text-xl md:text-2xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-4 tracking-wide uppercase flex items-center">
          {icon && React.createElement(icon, { className: "mr-3 h-5 w-5 text-indigo-600" })}
          {title}
        </h2>
      )}
      {children}
    </section>
  );

  return (
    <div
      ref={ref} 
      id="resume-preview-id" 
      className="text-gray-800 font-sans max-w-4xl mx-auto border bg-white rounded-xl shadow-2xl printable-area p-8 md:p-10"
    >
      {/* Header Section: Image, Name, Title, Contact */}
      <header className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 border-b-2 pb-8 mb-8">
        <img
          src={data.image || `https://placehold.co/128x128/E0E0E0/757575?text=${data.name ? data.name.charAt(0).toUpperCase() : 'P'}`}
          alt="Profile"
          onError={handleImageError}
          className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-indigo-200 shadow-lg shrink-0" 
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A3E4C] tracking-tight">{data.name}</h1>
          {data.jobTitle && <p className="text-xl md:text-2xl text-indigo-600 mt-1">{data.jobTitle}</p>}
          <div className="mt-3 text-sm text-gray-600 space-y-1">
            {data.address && <p className="flex items-center justify-center md:justify-start"><MapPin size={14} className="mr-2 shrink-0 text-gray-500" /> {data.address}</p>}
            {data.phone && <p className="flex items-center justify-center md:justify-start"><Phone size={14} className="mr-2 shrink-0 text-gray-500" /> {data.phone}</p>}
            {data.email && <p className="flex items-center justify-center md:justify-start"><Mail size={14} className="mr-2 shrink-0 text-gray-500" /> {data.email}</p>}
          </div>
        </div>
      </header>

      {/* Main Content Sections - Full Width */}
      {data.summary && (
        <Section title="Summary" icon={User}>
          <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
        </Section>
      )}

      {data.skills && data.skills.length > 0 && (
        <Section title="Skills" icon={CheckSquare}>
          <ul className="columns-1 md:columns-2 list-inside text-sm text-gray-700 space-y-1">
            {data.skills.map((skill, i) => (
              <li key={i} className="break-inside-avoid-column flex items-center">
                <Lightbulb size={14} className="mr-2 shrink-0 text-indigo-500" /> {skill}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {data.experience && data.experience.length > 0 && (
        <Section title="Experience" icon={Briefcase}>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-5 last:mb-0">
              <h3 className="font-semibold text-gray-800 text-lg">{exp.title}</h3>
              <p className="text-md text-indigo-600 font-medium">{exp.company}</p>
              <p className="text-sm italic text-gray-500 mb-1.5">
                {exp.duration} {exp.location && `| ${exp.location}`}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 ml-4 mt-1 space-y-1">
                {exp.points && exp.points.map((point, j) => (
                  <li key={j} className="leading-snug">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {data.education && data.education.length > 0 && (
        <Section title="Education" icon={GraduationCap}>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-4 last:mb-0">
              <h3 className="text-lg font-medium text-gray-800">{edu.degree}</h3>
              <p className="text-sm text-indigo-600">{edu.institution}</p>
              <p className="text-xs text-gray-500 mt-0.5">{edu.year}</p>
            </div>
          ))}
        </Section>
      )}

      {data.languages && data.languages.length > 0 && (
        <Section title="Languages" icon={LanguagesIcon}>
          <ul className="text-sm space-y-1.5 pt-1">
            {data.languages.map((lang) => (
              <li key={lang.id} className="flex items-center">
                <CheckSquare size={16} className="mr-2 text-indigo-600 shrink-0"/><strong>{lang.name}:</strong>&nbsp;{lang.level}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {data.hobbies && data.hobbies.length > 0 && (
         <Section title="Hobbies" icon={Smile}>
          <ul className="text-sm list-disc list-inside ml-4 space-y-1 pt-1">
            {data.hobbies.map((hobby, i) => (
              <li key={i}>{hobby}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
});

// --- Resume Edit Form (adapted from user's new template) ---
const UserResumeEditForm = ({ formData, setFormData }) => {

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayFieldChange = (section, index, field, value) => {
    setFormData(prev => {
      const newArray = [...prev[section]];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [section]: newArray };
    });
  };

  const handleExperiencePointChange = (expIndex, pointIndex, value) => {
    setFormData(prev => {
      const newExperience = [...prev.experience];
      const currentPoints = newExperience[expIndex].points ? [...newExperience[expIndex].points] : [];
      currentPoints[pointIndex] = value;
      newExperience[expIndex] = { ...newExperience[expIndex], points: currentPoints };
      return { ...prev, experience: newExperience };
    });
  };
  
  const addArrayItem = (section, template) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], { ...template, id: `${section.slice(0,3)}-${Date.now()}` }]
    }));
  };

  const removeArrayItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const addExperiencePoint = (expIndex) => {
    setFormData(prev => {
      const newExperience = [...prev.experience];
      const currentPoints = newExperience[expIndex].points ? [...newExperience[expIndex].points] : [];
      currentPoints.push("");
      newExperience[expIndex] = { ...newExperience[expIndex], points: currentPoints };
      return { ...prev, experience: newExperience };
    });
  };

  const removeExperiencePoint = (expIndex, pointIndex) => {
     setFormData(prev => {
      const newExperience = [...prev.experience];
      if (newExperience[expIndex] && newExperience[expIndex].points) {
        newExperience[expIndex] = { 
          ...newExperience[expIndex], 
          points: newExperience[expIndex].points.filter((_,i) => i !== pointIndex) 
        };
      }
      return { ...prev, experience: newExperience };
    });
  };

  const handleListChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value.split(',').map(s => s.trim()).filter(s => s)}));
  }


  const FormSectionWrapper = ({ title, children }) => (
    <div className="mb-6 p-4 border rounded-lg bg-slate-50 shadow-sm">
      <h3 className="text-lg font-semibold text-indigo-700 mb-4">{title}</h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
  const Input = ({ label, value, onChange, placeholder, type = "text" }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input type={type} value={value || ''} onChange={onChange} placeholder={placeholder || label} className="border border-gray-300 p-2 w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
    </div>
  );
  const Textarea = ({ label, value, onChange, placeholder, rows = 3 }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea value={value || ''} onChange={onChange} placeholder={placeholder || label} rows={rows} className="border border-gray-300 p-2 w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
    </div>
  );


  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl space-y-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Edit Your Resume</h2>

      <FormSectionWrapper title="Personal Details">
        <Input label="Full Name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} />
        <Input label="Job Title (e.g., Retail Sales Professional)" value={formData.jobTitle} onChange={(e) => updateField("jobTitle", e.target.value)} />
        <Input label="Image URL" value={formData.image} onChange={(e) => updateField("image", e.target.value)} placeholder="https://example.com/your-image.png"/>
        <Input label="Address" value={formData.address} onChange={(e) => updateField("address", e.target.value)} />
        <Input label="Phone" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} type="tel"/>
        <Input label="Email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} type="email"/>
      </FormSectionWrapper>

      <FormSectionWrapper title="Profile Summary">
        <Textarea label="Summary" value={formData.summary} onChange={(e) => updateField("summary", e.target.value)} rows={5} />
      </FormSectionWrapper>

      <FormSectionWrapper title="Work Experience">
        {formData.experience.map((exp, i) => (
          <div key={exp.id} className="p-3 border rounded-md bg-white space-y-2 relative">
            <button onClick={() => removeArrayItem('experience', i)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 p-1"><Trash2 size={18}/></button>
            <Input label="Job Title" value={exp.title} onChange={(e) => handleArrayFieldChange('experience', i, 'title', e.target.value)} />
            <Input label="Company" value={exp.company} onChange={(e) => handleArrayFieldChange('experience', i, 'company', e.target.value)} />
            <Input label="Duration (e.g., Feb 2017 - Present)" value={exp.duration} onChange={(e) => handleArrayFieldChange('experience', i, 'duration', e.target.value)} />
            <Input label="Location" value={exp.location} onChange={(e) => handleArrayFieldChange('experience', i, 'location', e.target.value)} />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Key Responsibilities/Achievements:</label>
              {exp.points && exp.points.map((point, j) => ( 
                <div key={j} className="flex items-center mb-1.5">
                  <Textarea value={point} onChange={(e) => handleExperiencePointChange(i, j, e.target.value)} rows={1} placeholder={`Point ${j+1}`}/>
                  <button onClick={() => removeExperiencePoint(i,j)} className="ml-2 text-red-400 hover:text-red-600 p-1"><Trash2 size={16}/></button>
                </div>
              ))}
              <button onClick={() => addExperiencePoint(i)} className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center mt-1"><PlusCircle size={16} className="mr-1"/> Add Point</button>
            </div>
          </div>
        ))}
        <button onClick={() => addArrayItem('experience', { title: "", company: "", duration: "", location: "", points: [""] })}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 flex items-center text-sm">
          <PlusCircle size={18} className="mr-2"/> Add Experience
        </button>
      </FormSectionWrapper>

      <FormSectionWrapper title="Education">
         {formData.education.map((edu, i) => (
            <div key={edu.id} className="p-3 border rounded-md bg-white space-y-2 relative">
                <button onClick={() => removeArrayItem('education', i)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 p-1"><Trash2 size={18}/></button>
                <Input label="Year(s) (e.g., 2016 or 2014 - 2016)" value={edu.year} onChange={(e) => handleArrayFieldChange('education', i, 'year', e.target.value)} />
                <Input label="Degree/Certificate" value={edu.degree} onChange={(e) => handleArrayFieldChange('education', i, 'degree', e.target.value)} />
                <Input label="Institution Name" value={edu.institution} onChange={(e) => handleArrayFieldChange('education', i, 'institution', e.target.value)} />
            </div>
         ))}
         <button onClick={() => addArrayItem('education', { year: "", degree: "", institution: ""})}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 flex items-center text-sm">
            <PlusCircle size={18} className="mr-2"/> Add Education
        </button>
      </FormSectionWrapper>

       <FormSectionWrapper title="Skills">
         <Textarea label="Skills (comma-separated)" value={formData.skills.join(", ")} onChange={(e) => handleListChange('skills', e.target.value)} />
      </FormSectionWrapper>

      <FormSectionWrapper title="Languages">
         {formData.languages.map((lang, i) => (
            <div key={lang.id} className="p-3 border rounded-md bg-white space-y-2 relative">
                <button onClick={() => removeArrayItem('languages', i)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 p-1"><Trash2 size={18}/></button>
                <Input label="Language" value={lang.name} onChange={(e) => handleArrayFieldChange('languages', i, 'name', e.target.value)} />
                <Input label="Proficiency Level" value={lang.level} onChange={(e) => handleArrayFieldChange('languages', i, 'level', e.target.value)} placeholder="e.g., Native, Fluent, Proficient, Conversational"/>
            </div>
         ))}
         <button onClick={() => addArrayItem('languages', { name: "", level: ""})}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 flex items-center text-sm">
            <PlusCircle size={18} className="mr-2"/> Add Language
        </button>
      </FormSectionWrapper>

      <FormSectionWrapper title="Hobbies">
        <Textarea label="Hobbies (comma-separated)" value={formData.hobbies.join(", ")} onChange={(e) => handleListChange('hobbies', e.target.value)} />
      </FormSectionWrapper>
    </div>
  );
};


// --- AI Assistant Modal ---
const AiAssistantModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const tips = [
    "Use strong action verbs (e.g., 'Led', 'Developed', 'Managed').",
    "Quantify achievements with numbers (e.g., 'Increased sales by 10%').",
    "Tailor your resume to the job description.",
    "Keep summary concise (2-3 sentences) and impactful.",
    "Proofread meticulously for errors.",
    "Ensure contact info is current and professional."
  ];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 no-print">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-indigo-700 flex items-center"><Sparkles className="mr-2 h-6 w-6 text-indigo-500" />AI Resume Tips</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
        </div>
        <ul className="space-y-3 text-sm text-gray-700">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start"><Lightbulb size={18} className="mr-3 mt-0.5 text-indigo-500 flex-shrink-0" /><span>{tip}</span></li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Got it!</button>
      </div>
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [resumeData, setResumeData] = useState(initialUserData);
  const [viewMode, setViewMode] = useState('preview');
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);
  const aiDropdownRef = useRef(null);
  const resumePreviewRef = useRef(null); 

  // Updated download handler to use window.print()
  const handleDownloadWithWindowPrint = () => {
    const currentView = viewMode;
    if (viewMode === 'edit') {
      setViewMode('preview'); // Switch to preview for printing
      // Allow DOM to update before printing
      setTimeout(() => {
        window.print();
        setViewMode(currentView); // Switch back after print dialog
      }, 100); 
    } else {
      window.print(); // Directly print if already in preview
    }
  };
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (aiDropdownRef.current && !aiDropdownRef.current.contains(event.target)) {
        setIsAiDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [aiDropdownRef]);

  // This useEffect for @media print styles is for browser's native print (Ctrl+P).
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * { visibility: hidden !important; }
        .printable-area, .printable-area * { visibility: visible !important; }
        .printable-area { 
          position: absolute !important; left: 0 !important; top: 0 !important; 
          width: 100% !important; height: auto !important;
          margin: 0 !important; padding: 0 !important; /* Minimal padding for full control by resume component */
          box-shadow: none !important; border: none !important;
          transform: scale(0.95); /* Optional: slightly scale down to fit better */
          transform-origin: top left;
        }
        .no-print { display: none !important; }
        @page { 
            size: letter; /* Or A4 */
            margin: 0.5in; /* Adjust page margins as needed */
        }
         /* Ensure text colors are print-friendly and backgrounds are white */
        .printable-area, .printable-area div, .printable-area p, .printable-area span, .printable-area li, 
        .printable-area h1, .printable-area h2, .printable-area h3, .printable-area strong, .printable-area img {
            color: black !important;
            background-color: white !important;
            -webkit-print-color-adjust: exact !important; /* Try to force background colors for some elements if needed */
            print-color-adjust: exact !important;
        }
        .printable-area .bg-\\[\\#1A3E4C\\], .printable-area .text-white { /* Target specific colored sections */
             background-color: #1A3E4C !important; /* This might be removed if the dark sidebar is gone */
             color: white !important;
        }
        .printable-area .text-amber-400, .printable-area .text-amber-300 {
            color: #78350f !important; /* Darker amber for print or black */
        }
         .printable-area .text-indigo-700, .printable-area .text-indigo-600 {
            color: #1e3a8a !important; /* Darker indigo or black */
        }

      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
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
      <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-slate-200 via-gray-200 to-slate-300 font-sans"> {/* Updated BG */}
        <aside className="w-full md:w-72 bg-white p-4 md:p-6 shadow-xl no-print md:sticky md:top-0 md:h-screen flex flex-col">
          <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-indigo-700">Resume<span className="text-amber-500">Craft</span></h1>
              <p className="text-xs text-gray-500">Your Professional Edge</p>
          </div>
          <nav className="space-y-3 flex-grow">
            <SidebarButton onClick={() => setViewMode('preview')} icon={Eye} label="Preview Resume" isActive={viewMode === 'preview'}/>
            <SidebarButton onClick={() => setViewMode('edit')} icon={Edit3} label="Edit Resume" isActive={viewMode === 'edit'}/>
            
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
                  <div className="mx-2 p-2 bg-white rounded-md shadow-2xl border border-gray-200">
                    {resumeData.summary && ( 
                      <button onClick={() => { setIsAiModalOpen(true); setIsAiDropdownOpen(false); }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 rounded-md flex items-center">
                        <Lightbulb size={16} className="mr-2 text-indigo-500" /> Summary Tips
                      </button>
                    )}
                    {resumeData.experience && resumeData.experience.length > 0 && (
                      <button onClick={() => { setIsAiModalOpen(true); setIsAiDropdownOpen(false); }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 rounded-md flex items-center mt-1">
                        <Briefcase size={16} className="mr-2 text-indigo-500" /> Experience Tips
                      </button>
                    )}
                     {(!resumeData.summary && (!resumeData.experience || resumeData.experience.length === 0)) && (
                        <p className="px-3 py-2 text-sm text-gray-500 text-center">Add summary/experience for specific tips.</p>
                    )}
                    <button onClick={() => { setIsAiModalOpen(true); setIsAiDropdownOpen(false); }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 rounded-md flex items-center mt-1 border-t border-gray-100 pt-2">
                      <Sparkles size={16} className="mr-2 text-indigo-500" /> General Writing Tips
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* Updated to call window.print handler */}
            <SidebarButton onClick={handleDownloadWithWindowPrint} icon={Download} label="Download PDF" isActive={false}/>
            <SidebarButton onClick={handleDownloadWithWindowPrint} icon={Download} label="save" isActive={false}/>
            <SidebarButton onClick={handleDownloadWithWindowPrint} icon={Download} label="share" isActive={false}/>
          </nav>
          <div className="mt-auto pt-6 border-t border-gray-200 text-center text-xs text-gray-500 hidden md:block">
              <p>&copy; {new Date().getFullYear()} ResumeCraft.</p>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-6 lg:p-8 xl:p-10 overflow-y-auto"> 
          {viewMode === 'preview' ? (
            <UserResumePreview data={resumeData} ref={resumePreviewRef} /> 
          ) : (
            <UserResumeEditForm formData={resumeData} setFormData={setResumeData} /> 
          )}
        </main>
      </div>
      <AiAssistantModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />
    </>
  );
}

export default App;
