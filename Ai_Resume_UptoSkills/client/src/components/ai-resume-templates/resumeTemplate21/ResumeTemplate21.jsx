
import React, { useState, useEffect, useRef, forwardRef } from 'react';
import {
  Eye, Edit3, Download, PlusCircle, Trash2, Briefcase, GraduationCap, Lightbulb,
  User, Phone, Mail, Linkedin, Github, MapPin,
  Sparkles, X, ChevronDown, ChevronUp, Type, Save, Share2, UploadCloud,
  Languages, Smile
} from 'lucide-react';

// --- Default Resume Data ---
const initialUserData = {
  name: "Diya Agarwal",
  jobTitle: "Retail Sales Professional",
  address: "New Delhi, India 110034",
  phone: "+91 11 5555 3345",
  email: "d.agarwal@sample.in",
  linkedin: "linkedin.com/in/diyaagarwal",
  github: "",
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
      id: 'initial-exp-1',
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
      id: 'initial-edu-1',
      year: "2016",
      degree: "Diploma in Financial Accounting",
      institution:
        "Oxford Software Institute & Oxford School of English, New Delhi",
    },
  ],
  languages: [
    { id: 'initial-lang-1', name: "Hindi", level: "Native speaker" },
    { id: 'initial-lang-2', name: "English", level: "C2 - Proficient" },
  ],
  hobbies: ["Recreational Football League", "Two-time league champion", "Red Cross Volunteer", "Photography"],
  // ** IMPORTANT: REPLACE THIS WITH YOUR ACTUAL IMAGE URL **
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_EsfEZCQIZ3YT9Qh7kIy4Mese4CwslHgpA&s" 
};

// --- Resume Preview Component ---
const UserResumePreview = forwardRef(({ data, font }, ref) => {
  const Section = ({ title, children, icon, className = "" }) => (
    <section className={`mb-8 ${className}`}> {/* */}
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-3 mb-5 tracking-wide uppercase flex items-center"> {/* Increased font size and padding */}
          {icon && React.createElement(icon, { className: "mr-4 h-6 w-6 text-indigo-600" })} {/* */}
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
      className="text-base text-gray-800 max-w-3xl mx-auto border bg-white rounded-xl shadow-2xl printable-area p-10 md:p-12" // Increased base font and padding
      style={{ fontFamily: font }}
    >
      {/* Header Section: Name, Title, Contact, and Image */}
      <header className="flex flex-col md:flex-row justify-between items-center pb-8 mb-8 border-b border-gray-200"> {/* Increased padding and margin */}
        <div className="text-center md:text-left flex-grow md:pr-8"> {/**/}
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A3E4C] tracking-tight leading-tight mb-2">{data.name}</h1> {/* Larger font size */}
          {data.jobTitle && <p className="text-2xl md:text-3xl text-indigo-600 font-medium mb-5">{data.jobTitle}</p>} {/* Larger font size */}
          <div className="text-md text-gray-600 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2"> {/* Larger font size and gap */}
            {data.address && <p className="flex items-center"><MapPin size={16} className="mr-2.5 shrink-0 text-gray-500" /> {data.address}</p>} {/* Larger icon */}
            {data.phone && <p className="flex items-center"><Phone size={16} className="mr-2.5 shrink-0 text-gray-500" /> {data.phone}</p>}
            {data.email && <p className="flex items-center"><Mail size={16} className="mr-2.5 shrink-0 text-gray-500" /> {data.email}</p>}
            {data.linkedin && data.linkedin.trim() !== '' && <p className="flex items-center"><Linkedin size={16} className="mr-2.5 shrink-0 text-gray-500" /> <a href={`https://${data.linkedin.startsWith('http') ? '' : 'https://'}${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-700">{data.linkedin.replace(/(https?:\/\/)?(www\.)?(linkedin\.com\/in\/)?/i, '')}</a></p>}
            {data.github && data.github.trim() !== '' && <p className="flex items-center"><Github size={16} className="mr-2.5 shrink-0 text-gray-500" /> <a href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-700">{data.github}</a></p>}
          </div>
        </div>
        {data.imageUrl && (
          <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0"> {/* Increased margin */}
            <img
              src={data.imageUrl}
              alt="Profile"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-indigo-100" // Enlarged image size
            />
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      {data.summary && (
        <Section title="Summary" icon={User}>
          <p className="text-md leading-relaxed text-gray-700">{data.summary}</p> {/* Increased font size */}
        </Section>
      )}

      {data.experience && data.experience.length > 0 && (
        <Section title="Experience" icon={Briefcase}>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6 last:mb-0 flex justify-between items-start"> {/* Increased margin-bottom */}
              <div className="flex-1 pr-6"> {/* Increased padding */}
                <h3 className="font-semibold text-gray-800 text-xl">{exp.title}</h3> {/* Increased font size */}
                <p className="text-lg text-indigo-600 font-medium">{exp.company}</p> {/* Increased font size */}
                <p className="text-base italic text-gray-500 mb-2">{exp.location}</p> {/* Increased font size and margin */}
                <ul className="list-inside text-md text-gray-700 space-y-1.5 mt-3"> {/* Increased font size and spacing */}
                  {exp.points && exp.points.map((point, j) => (
                    point.trim() !== '' && <li key={j} className="break-inside-avoid-column flex items-center">
                      <span className="mr-2.5 text-indigo-500">&bull;</span> {point} {/* Increased margin */}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-md text-gray-500 font-semibold text-right flex-shrink-0"> {/* Increased font size */}
                {exp.duration}
              </div>
            </div>
          ))}
        </Section>
      )}

      {data.education && data.education.length > 0 && (
        <Section title="Education" icon={GraduationCap}>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-5 last:mb-0 flex justify-between items-start"> {/* Increased margin-bottom */}
              <div className="flex-1 pr-6"> {/* Increased padding */}
                <h3 className="text-xl font-medium text-gray-800">{edu.degree}</h3> {/* Increased font size */}
                <p className="text-md text-indigo-600">{edu.institution}</p> {/* Increased font size */}
              </div>
              <div className="text-sm text-gray-500 font-semibold text-right flex-shrink-0"> {/* Increased font size */}
                {edu.year}
              </div>
            </div>
          ))}
        </Section>
      )}

      {data.skills && data.skills.length > 0 && (
        <Section title="Skills" icon={Lightbulb}>
          <ul className="columns-1 md:columns-2 list-inside text-md text-gray-700 space-y-1.5"> {/* Increased font size and spacing */}
            {data.skills.map((skill, i) => (
              <li key={i} className="break-inside-avoid-column flex items-center">
                <span className="mr-2.5 text-indigo-500">&bull;</span> {skill} {/* Increased margin */}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {data.languages && data.languages.length > 0 && (
        <Section title="Languages" icon={Languages}>
          <ul className="text-md space-y-2 pt-1"> {/*  */}
            {data.languages.map((lang) => (
              <li key={lang.id} className="flex items-center">
                <span className="mr-2.5 text-indigo-600">&bull;</span><strong>{lang.name}:</strong>&nbsp;{lang.level} {/* Increased margin */}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {data.hobbies && data.hobbies.length > 0 && (
        <Section title="Hobbies" icon={Smile}>
          <ul className="text-md list-disc list-inside ml-5 space-y-1.5 pt-1"> {/* Increased font size, margin, and spacing */}
            {data.hobbies.map((hobby, i) => (
              <li key={i}>{hobby}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
});

// --- Resume Edit Form  ---
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
      [section]: [...prev[section], { ...template, id: `${section.slice(0, 3)}-${Date.now()}` }]
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
          points: newExperience[expIndex].points.filter((_, i) => i !== pointIndex)
        };
      }
      return { ...prev, experience: newExperience };
    });
  };

  const handleListChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value.split(',').map(s => s.trim()).filter(s => s) }));
  }


  const FormSectionWrapper = ({ title, children }) => (
    <div className="mb-8 p-5 border rounded-lg bg-slate-50 shadow-sm"> {/**/}
      <h3 className="text-xl font-semibold text-indigo-700 mb-5">{title}</h3> {/*  */}
      <div className="space-y-4"> {/* Increased spacing */}
        {children}
      </div>
    </div>
  );
  const Input = ({ label, value, onChange, placeholder, type = "text" }) => (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1.5">{label}</label> {/*  */}
      <input type={type} value={value || ''} onChange={onChange} placeholder={placeholder || label} className="border border-gray-300 p-2.5 w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base" /> {/* Increased padding and font size */}
    </div>
  );
  const Textarea = ({ label, value, onChange, placeholder, rows = 3 }) => (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1.5">{label}</label> {/*  */}
      <textarea value={value || ''} onChange={onChange} placeholder={placeholder || label} rows={rows} className="border border-gray-300 p-2.5 w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base" /> {/* Increased padding and font size */}
    </div>
  );


  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl space-y-8 max-w-2xl mx-auto"> {/*  */}
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Edit Your Resume</h2> {/* Increased font size and margin */}

      <FormSectionWrapper title="Personal Details">
        <Input label="Full Name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} />
        <Input label="Job Title (e.g., Retail Sales Professional)" value={formData.jobTitle} onChange={(e) => updateField("jobTitle", e.target.value)} />
        <Input label="Address" value={formData.address} onChange={(e) => updateField("address", e.target.value)} />
        <Input label="Phone" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} type="tel" />
        <Input label="Email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} type="email" />
        <Input label="LinkedIn Profile (e.g., linkedin.com/in/yourname)" value={formData.linkedin} onChange={(e) => updateField("linkedin", e.target.value)} placeholder="Optional" />
        <Input label="GitHub Username (e.g., yourusername)" value={formData.github} onChange={(e) => updateField("github", e.target.value)} placeholder="Optional" />
        <Input label="Profile Image URL" value={formData.imageUrl} onChange={(e) => updateField("imageUrl", e.target.value)} placeholder="e.g., https://example.com/your-photo.jpg" />
      </FormSectionWrapper>

      <FormSectionWrapper title="Profile Summary">
        <Textarea label="Summary" value={formData.summary} onChange={(e) => updateField("summary", e.target.value)} rows={5} />
      </FormSectionWrapper>

      <FormSectionWrapper title="Work Experience">
        {formData.experience.map((exp, i) => (
          <div key={exp.id} className="p-4 border rounded-md bg-white space-y-3 relative"> {/*  */}
            <button onClick={() => removeArrayItem('experience', i)} className="absolute top-3 right-3 text-red-500 hover:text-red-700 p-1"><Trash2 size={20} /></button> {/* Larger icon and adjusted position */}
            <Input label="Job Title" value={exp.title} onChange={(e) => handleArrayFieldChange('experience', i, 'title', e.target.value)} />
            <Input label="Company" value={exp.company} onChange={(e) => handleArrayFieldChange('experience', i, 'company', e.target.value)} />
            <Input label="Duration (e.g., Feb 2017 - Present)" value={exp.duration} onChange={(e) => handleArrayFieldChange('experience', i, 'duration', e.target.value)} />
            <Input label="Location" value={exp.location} onChange={(e) => handleArrayFieldChange('experience', i, 'location', e.target.value)} />
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1.5">Key Responsibilities/Achievements:</label>
              {exp.points && exp.points.map((point, j) => (
                <div key={j} className="flex items-center mb-2"> {/* Increased margin */}
                  <Textarea value={point} onChange={(e) => handleExperiencePointChange(i, j, e.target.value)} rows={1} placeholder={`Point ${j + 1}`} />
                  <button onClick={() => removeExperiencePoint(i, j)} className="ml-3 text-red-400 hover:text-red-600 p-1"><Trash2 size={18} /></button> {/* Larger icon and margin */}
                </div>
              ))}
              <button onClick={() => addExperiencePoint(i)} className="text-md text-indigo-600 hover:text-indigo-800 flex items-center mt-2"><PlusCircle size={18} className="mr-2" /> Add Point</button> {/* Larger font and icon */}
            </div>
          </div>
        ))}
        <button onClick={() => addArrayItem('experience', { title: "", company: "", duration: "", location: "", points: [""] })}
          className="bg-indigo-500 text-white px-5 py-2.5 rounded-md hover:bg-indigo-600 flex items-center text-md"> {/* Increased padding and font */}
          <PlusCircle size={20} className="mr-2" /> Add Experience {/* Larger icon */}
        </button>
      </FormSectionWrapper>

      <FormSectionWrapper title="Education">
        {formData.education.map((edu, i) => (
          <div key={edu.id} className="p-4 border rounded-md bg-white space-y-3 relative"> {/* Increased padding and spacing */}
            <button onClick={() => removeArrayItem('education', i)} className="absolute top-3 right-3 text-red-500 hover:text-red-700 p-1"><Trash2 size={20} /></button>
            <Input label="Year(s) (e.g., 2016 or 2014 - 2016)" value={edu.year} onChange={(e) => handleArrayFieldChange('education', i, 'year', e.target.value)} />
            <Input label="Degree/Certificate" value={edu.degree} onChange={(e) => handleArrayFieldChange('education', i, 'degree', e.target.value)} />
            <Input label="Institution Name" value={edu.institution} onChange={(e) => handleArrayFieldChange('education', i, 'institution', e.target.value)} />
          </div>
        ))}
        <button onClick={() => addArrayItem('education', { year: "", degree: "", institution: "" })}
          className="bg-indigo-500 text-white px-5 py-2.5 rounded-md hover:bg-indigo-600 flex items-center text-md">
          <PlusCircle size={20} className="mr-2" /> Add Education
        </button>
      </FormSectionWrapper>

      <FormSectionWrapper title="Skills">
        <Textarea label="Skills (comma-separated)" value={formData.skills.join(", ")} onChange={(e) => handleListChange('skills', e.target.value)} />
      </FormSectionWrapper>

      <FormSectionWrapper title="Languages">
        {formData.languages.map((lang, i) => (
          <div key={lang.id} className="p-4 border rounded-md bg-white space-y-3 relative">
            <button onClick={() => removeArrayItem('languages', i)} className="absolute top-3 right-3 text-red-500 hover:text-red-700 p-1"><Trash2 size={20} /></button>
            <Input label="Language" value={lang.name} onChange={(e) => handleArrayFieldChange('languages', i, 'name', e.target.value)} />
            <Input label="Proficiency Level" value={lang.level} onChange={(e) => handleArrayFieldChange('languages', i, 'level', e.target.value)} placeholder="e.g., Native, Fluent, Proficient, Conversational" />
          </div>
        ))}
        <button onClick={() => addArrayItem('languages', { name: "", level: "" })}
          className="bg-indigo-500 text-white px-5 py-2.5 rounded-md hover:bg-indigo-600 flex items-center text-md">
          <PlusCircle size={20} className="mr-2" /> Add Language
        </button>
      </FormSectionWrapper>

      <FormSectionWrapper title="Hobbies">
        <Textarea label="Hobbies (comma-separated)" value={formData.hobbies.join(", ")} onChange={(e) => handleListChange('hobbies', e.target.value)} />
      </FormSectionWrapper>
    </div>
  );
};

// --- Customize Modal ---
const CustomizeModal = ({ isOpen, onClose, currentFont, setFont }) => {
  if (!isOpen) return null;
  const fonts = ["Inter", "Roboto", "Lato", "Montserrat", "Oswald", "Merriweather", "Playfair Display", "Open Sans", "Roboto Slab", "Poppins", "Noto Sans"];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 no-print">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-indigo-700">Customize Font</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
        </div>
        <div className="grid grid-cols-2 gap-4 max-h-80 overflow-y-auto pr-2"> {/* Increased gap */}
          {fonts.map(font => (
            <button key={font} onClick={() => { setFont(font); onClose(); }} style={{ fontFamily: font }}
              className={`p-3.5 rounded-md text-base text-center border-2 ${currentFont === font ? 'border-indigo-600 bg-indigo-100' : 'border-gray-200 hover:border-indigo-400'}`}> {/* Increased padding and font size */}
              {font}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="mt-6 w-full bg-indigo-600 text-white py-2.5 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-base">Close</button> {/* Increased padding and font size */}
      </div>
    </div>
  );
};

// --- AI Assistant Modal  ---
const AiAssistantModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const tips = [
    "Use strong **action verbs** (e.g., 'Led', 'Developed', 'Managed').",
    "**Quantify achievements** with numbers (e.g., 'Increased sales by 10%').",
    "Tailor your resume to the **job description** by using keywords.",
    "Keep your **summary concise** (2-3 sentences) and impactful.",
    "**Proofread meticulously** for any grammatical errors or typos.",
    "Ensure all **contact information** is current and professional."
  ];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 no-print">
      <div className="bg-white p-7 md:p-9 rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto"> {/* Increased padding */}
        <div className="flex justify-between items-center mb-5"> {/* Increased margin */}
          <h3 className="text-xl font-semibold text-indigo-700 flex items-center"><Sparkles className="mr-2.5 h-7 w-7 text-indigo-500" />AI Resume Tips</h3> {/* Larger icon */}
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={26} /></button> {/* Larger icon */}
        </div>
        <ul className="space-y-4 text-base text-gray-700"> {/* Increased spacing and font size */}
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <Lightbulb size={20} className="mr-3.5 mt-0.5 text-indigo-500 flex-shrink-0" /> {/* Larger icon and margin */}
              <span dangerouslySetInnerHTML={{ __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-7 w-full bg-indigo-600 text-white py-2.5 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-base">Got it!</button> {/* Increased margin, padding, and font size */}
      </div>
    </div>
  );
};

// --- Share Modal (remains the same, but with slight font/spacing adjustments) ---
const ShareModal = ({ isOpen, onClose, resumeData, font }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const shareLink = `${window.location.origin}/?data=${encodeURIComponent(JSON.stringify(resumeData))}&font=${encodeURIComponent(font)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 no-print">
      <div className="bg-white p-7 rounded-lg shadow-xl w-full max-w-md"> {/* Increased padding */}
        <div className="flex justify-between items-center mb-5"> {/* Increased margin */}
          <h3 className="text-xl font-semibold text-indigo-700">Share Your Resume</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={26} /></button> {/* Larger icon */}
        </div>
        <p className="text-base text-gray-700 mb-5">You can share a link to your resume. This link will contain all your resume data.</p> {/* Increased font size and margin */}
        <div className="flex items-center space-x-3 mb-5"> {/* Increased spacing and margin */}
          <input
            type="text"
            readOnly
            value={shareLink}
            className="flex-grow border border-gray-300 p-2.5 rounded-md text-base bg-gray-50" // Increased padding and font size
          />
          <button onClick={handleCopy} className="bg-indigo-500 text-white px-5 py-2.5 rounded-md hover:bg-indigo-600 text-base"> {/* Increased padding and font size */}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <button onClick={onClose} className="mt-5 w-full bg-gray-300 text-gray-800 py-2.5 px-4 rounded-md hover:bg-gray-400 text-base">Close</button> {/* Increased margin, padding, and font size */}
      </div>
    </div>
  );
};


// --- Main App Component ---
function App() {
  const [resumeData, setResumeData] = useState(initialUserData);
  const [viewMode, setViewMode] = useState('preview');
  const [font, setFont] = useState('Inter');
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const fileInputRef = useRef(null);
  const aiDropdownRef = useRef(null);
  const resumePreviewRef = useRef(null);

  // Load data and font from localStorage or URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlData = params.get('data');
    const urlFont = params.get('font');

    if (urlData) {
      try {
        setResumeData(JSON.parse(decodeURIComponent(urlData)));
      } catch (e) {
        console.error("Failed to parse resume data from URL:", e);
        const savedData = localStorage.getItem('resumeData');
        if (savedData) setResumeData(JSON.parse(savedData));
      }
    } else {
      const savedData = localStorage.getItem('resumeData');
      if (savedData) {
        setResumeData(JSON.parse(savedData));
      }
    }

    if (urlFont) {
      setFont(decodeURIComponent(urlFont));
    } else {
      const savedFont = localStorage.getItem('resumeFont');
      if (savedFont) {
        setFont(savedFont);
      }
    }
  }, []);

  // Update localStorage when resumeData changes (for auto-save)
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  // Update localStorage and load Google Font when font changes
  useEffect(() => {
    localStorage.setItem('resumeFont', font);
    const linkId = 'google-font-link';
    let link = document.getElementById(linkId);

    if (!link) {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}:wght@300;400;500;600;700&display=swap`;
  }, [font]);


  // Handler for Download (Print as PDF)
  const handleDownloadPdf = () => {
    const currentView = viewMode;
    if (viewMode === 'edit') {
      setViewMode('preview'); // Switch to preview for printing
      setTimeout(() => {
        window.print();
        setViewMode(currentView); // Switch back after print dialog
      }, 100);
    } else {
      window.print();
    }
  };

  // Handler for Save
  const handleSave = () => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    localStorage.setItem('resumeFont', font);
    alert('Resume saved locally!');
  };

  // Handler for Load from JSON
  const handleLoadJsonClick = () => {
    fileInputRef.current.click(); // Programmatically click the hidden file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const loadedData = JSON.parse(e.target.result);
          // Basic validation to ensure it looks like our resume data
          if (loadedData.name && loadedData.experience && Array.isArray(loadedData.experience)) {
            setResumeData(loadedData);
            alert('Resume data loaded successfully!');
            setViewMode('edit'); // Switch to edit mode after loading
          } else {
            alert('Invalid JSON structure for resume data.');
          }
        } catch (error) {
          alert('Error reading or parsing JSON file: ' + error.message);
        }
      };
      reader.readAsText(file);
    }
  };

  // Close AI dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (aiDropdownRef.current && !aiDropdownRef.current.contains(event.target)) {
        setIsAiDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [aiDropdownRef]);

  // CSS for print styles
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * { visibility: hidden !important; }
        .printable-area, .printable-area * { visibility: visible !important; }
        .printable-area {
          position: absolute !important; left: 0 !important; top: 0 !important;
          width: 100% !important; height: auto !important;
          margin: 0 !important; padding: 0 !important;
          box-shadow: none !important; border: none !important;
          transform: scale(0.95); /* Adjusted scale for larger content */
          transform-origin: top left;
          flex-direction: column !important; /* Ensure single column layout for print */
        }
        .printable-area > header, .printable-area > section {
          padding: 0.6in 0.4in !important; /* Adjusted padding for print */
          background-color: white !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        .no-print { display: none !important; }
        @page {
            size: letter; /* Or A4 */
            margin: 0.6in; /* Increased print margin */
        }
        .printable-area p, .printable-area li, .printable-area h1, .printable-area h2, .printable-area h3, .printable-area strong, .printable-area a {
            color: black !important;
        }
        .printable-area a {
            text-decoration: underline !important;
        }
        .printable-area .text-indigo-700, .printable-area .text-indigo-600, .printable-area .text-indigo-800, .printable-area .text-indigo-900 {
            color: #1e3a8a !important; /* Darker indigo for print */
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const SidebarButton = ({ onClick, icon, label, isActive, isAccent = false, showChevron = false, isDropdownOpen = false }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-3.5 rounded-lg text-base font-medium transition-colors duration-150
                   ${isActive ? 'bg-indigo-600 text-white shadow-md'
                     : isAccent ? 'bg-amber-400 text-slate-800 hover:bg-amber-500 shadow-sm'
                     : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
                   }`}
    >
      <div className="flex items-center space-x-3.5"> {/*  */}
        {React.createElement(icon, { className: "h-5.5 w-5.5" })} {/*  */}
        <span>{label}</span>
      </div>
      {showChevron && (isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />)} {/* */}
    </button>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-slate-200 via-gray-200 to-slate-300 font-sans">
        <aside className="w-full md:w-72 bg-white p-5 md:p-7 shadow-xl no-print md:sticky md:top-0 md:h-screen flex flex-col"> {/* Increased padding */}
          <div className="mb-9 text-center"> {/* Increased margin */}
            <h1 className="text-3xl font-bold text-indigo-700">Resume<span className="text-amber-500">Craft</span></h1> {/* Larger font */}
            <p className="text-sm text-gray-500">Your Professional Edge</p> {/* Slightly larger font */}
          </div>
          <nav className="space-y-4 flex-grow"> {/* Increased spacing */}
            <SidebarButton onClick={() => setViewMode('preview')} icon={Eye} label="Preview Resume" isActive={viewMode === 'preview'} />
            <SidebarButton onClick={() => setViewMode('edit')} icon={Edit3} label="Edit Resume" isActive={viewMode === 'edit'} />

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
                <div className="absolute left-0 right-0 mt-1.5 z-20"> {/*  */}
                  <div className="mx-2 p-3 bg-white rounded-md shadow-2xl border border-gray-200"> {/* Increased padding */}
                    <button onClick={() => { setIsAiModalOpen(true); setIsAiDropdownOpen(false); }}
                      className="w-full text-left px-3.5 py-2.5 text-base text-gray-700 hover:bg-indigo-50 rounded-md flex items-center"> {/* Increased padding and font */}
                      <Lightbulb size={18} className="mr-2.5 text-indigo-500" /> Summary Tips {/* Larger icon */}
                    </button>
                    <button onClick={() => { setIsAiModalOpen(true); setIsAiDropdownOpen(false); }}
                      className="w-full text-left px-3.5 py-2.5 text-base text-gray-700 hover:bg-indigo-50 rounded-md flex items-center mt-1.5"> {/* Increased padding, font, and margin */}
                      <Briefcase size={18} className="mr-2.5 text-indigo-500" /> Experience Tips
                    </button>
                    <button onClick={() => { setIsAiModalOpen(true); setIsAiDropdownOpen(false); }}
                      className="w-full text-left px-3.5 py-2.5 text-base text-gray-700 hover:bg-indigo-50 rounded-md flex items-center mt-1.5 border-t border-gray-100 pt-2.5"> {/* Increased padding, font, and margin */}
                      <Sparkles size={18} className="mr-2.5 text-indigo-500" /> General Writing Tips
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* New Buttons */}
            <SidebarButton onClick={() => setIsCustomizeModalOpen(true)} icon={Type} label="Customize Fonts" />
            <SidebarButton onClick={handleSave} icon={Save} label="Save Progress" />
            <SidebarButton onClick={handleLoadJsonClick} icon={UploadCloud} label="Load from JSON" />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              className="hidden" // Hide the actual file input
            />
            <SidebarButton onClick={handleDownloadPdf} icon={Download} label="Download PDF" />
            <SidebarButton onClick={() => setIsShareModalOpen(true)} icon={Share2} label="Share" />
          </nav>
          <div className="mt-auto pt-7 border-t border-gray-200 text-center text-sm text-gray-500 hidden md:block"> {/* Increased padding and font size */}
            <p>&copy; {new Date().getFullYear()} ResumeCraft.</p>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-8 lg:p-10 xl:p-12 overflow-y-auto"> {/* */}
          {viewMode === 'preview' ? (
            <UserResumePreview data={resumeData} ref={resumePreviewRef} font={font} />
          ) : (
            <UserResumeEditForm formData={resumeData} setFormData={setResumeData} />
          )}
        </main>
      </div>
      <AiAssistantModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />
      <CustomizeModal isOpen={isCustomizeModalOpen} onClose={() => setIsCustomizeModalOpen(false)} currentFont={font} setFont={setFont} />
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} resumeData={resumeData} font={font} />
    </>
  );
}

export default App;