import React, { useState, useEffect, useRef, forwardRef } from 'react';
import {
  Eye, Edit3, Download, PlusCircle, Trash2, Briefcase, GraduationCap, Lightbulb,
  User, Phone, Mail, Linkedin, Github, MapPin,
  Sparkles, X, ChevronDown, ChevronUp, Type, Save, Share2, UploadCloud,
  Palette, ZoomIn, ZoomOut, Image as ImageIcon, Languages
} from 'lucide-react';

// --- Default Resume Data ---
const initialUserData = {
  name: "Alisha Sharma",
  jobTitle: "Software Engineer",
  address: "Bengaluru, India",
  phone: "+91 98765 43210",
  email: "alisha.sharma@example.com",
  linkedin: "linkedin.com/in/alishasharma",
  github: "alishadev",
  summary:
    "Highly motivated Software Engineer with 3+ years of experience in developing robust and scalable web applications. Proficient in React, Node.js, and various database technologies. Passionate about creating efficient and user-friendly solutions.",
  skills: [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Git",
    "RESTful APIs",
    "Agile Methodologies",
    "Problem Solving",
  ],
  experience: [
    {
      id: 'initial-exp-1',
      title: "Software Development Engineer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
      location: "Bengaluru, India",
      points: [
        "Developed and maintained scalable microservices using Node.js and Express, improving response times by 20%.",
        "Implemented new features in a React-based frontend application, enhancing user engagement by 15%.",
        "Collaborated with cross-functional teams to define, design, and ship new products and features.",
        "Wrote comprehensive unit and integration tests, reducing bugs by 25% in production.",
      ],
    },
    {
      id: 'initial-exp-2',
      title: "Junior Developer",
      company: "Innovate Labs",
      duration: "Jul 2020 - Dec 2021",
      location: "Pune, India",
      points: [
        "Assisted in the development of a customer relationship management (CRM) system using React.",
        "Participated in code reviews and contributed to improving code quality and best practices.",
        "Resolved critical bugs and provided technical support for existing applications.",
      ],
    },
  ],
  education: [
    {
      id: 'initial-edu-1',
      year: "2020",
      degree: "B.Tech in Computer Science",
      institution:
        "Indian Institute of Technology, Delhi",
    },
  ],
  languages: [
    { id: 'initial-lang-1', name: "English", level: "Fluent" },
    { id: 'initial-lang-2', name: "Hindi", level: "Native" },
  ],
  hobbies: ["Coding Challenges", "Reading Sci-Fi", "Hiking", "Photography"],
  imageUrl: "https://via.placeholder.com/200/E0E7FF/4338CA?text=Alisha+S." // New placeholder for initial load
};

// --- Resume Preview Component ---
const UserResumePreview = forwardRef(({ data, font, themeColor, zoomLevel }, ref) => {
  const themeColorClass = `text-${themeColor}-700`; // e.g., text-indigo-700
  const themeAccentClass = `text-${themeColor}-600`; // e.g., text-indigo-600
  const themeBorderClass = `border-${themeColor}-200`; // e.g., border-indigo-200
  const themeImageBorderClass = `border-${themeColor}-100`; // e.g., border-indigo-100
  const themeBulletClass = `text-${themeColor}-500`; // e.g., text-indigo-500
  const themeBgLight = `bg-${themeColor}-50`; // e.g., bg-indigo-50

  const Section = ({ title, children, icon, className = "" }) => (
    <section className={`mb-8 ${className}`}>
      {title && (
        <h2 className={`text-2xl md:text-2xl font-bold ${themeColorClass} border-b-2 ${themeBorderClass} pb-2 mb-4 tracking-wide uppercase flex items-center`}>
          {icon && React.createElement(icon, { className: `mr-3 h-5 w-5 ${themeAccentClass}` })}
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
      className={`text-base text-gray-800 max-w-5xl mx-auto border bg-white rounded-xl shadow-2xl printable-area`}
      style={{ fontFamily: font, transform: `scale(${zoomLevel})`, transformOrigin: 'top left' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-xl">
        {/* Left Column (Sidebar) */}
        <aside className={`md:col-span-1 p-8 md:p-10 ${themeBgLight} text-gray-700`}>
          {data.imageUrl && (
            <div className="mb-8 flex justify-center">
              <img
                src={data.imageUrl}
                alt="Profile"
                className={`w-36 h-36 rounded-full object-cover shadow-lg border-4 ${themeImageBorderClass}`}
              />
            </div>
          )}

          <Section title="Contact" icon={User}>
            <div className="space-y-2 text-md">
              {data.address && <p className="flex items-center"><MapPin size={16} className="mr-2.5 shrink-0 text-gray-600" /> {data.address}</p>}
              {data.phone && <p className="flex items-center"><Phone size={16} className="mr-2.5 shrink-0 text-gray-600" /> {data.phone}</p>}
              {data.email && <p className="flex items-center"><Mail size={16} className="mr-2.5 shrink-0 text-gray-600" /> <a href={`mailto:${data.email}`} className="hover:underline">{data.email}</a></p>}
              {data.linkedin && data.linkedin.trim() !== '' && <p className="flex items-center"><Linkedin size={16} className="mr-2.5 shrink-0 text-gray-600" /> <a href={`https://${data.linkedin.startsWith('http') ? '' : 'https://'}${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{data.linkedin.replace(/(https?:\/\/)?(www\.)?(linkedin\.com\/in\/)?/i, '')}</a></p>}
              {data.github && data.github.trim() !== '' && <p className="flex items-center"><Github size={16} className="mr-2.5 shrink-0 text-gray-600" /> <a href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{data.github}</a></p>}
            </div>
          </Section>

          {data.skills && data.skills.length > 0 && (
            <Section title="Skills" icon={Lightbulb}>
              <ul className="list-inside text-md space-y-1.5">
                {data.skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className={`mr-2.5 ${themeBulletClass}`}>&bull;</span> {skill}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {data.languages && data.languages.length > 0 && (
            <Section title="Languages" icon={Languages}>
              <ul className="text-md space-y-1.5">
                {data.languages.map((lang) => (
                  <li key={lang.id} className="flex items-center">
                    <span className={`mr-2.5 ${themeAccentClass}`}>&bull;</span><strong>{lang.name}:</strong>&nbsp;{lang.level}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {data.hobbies && data.hobbies.length > 0 && (
            <Section title="Hobbies" icon={Palette}>
              <ul className="text-md list-disc list-inside ml-5 space-y-1.5">
                {data.hobbies.map((hobby, i) => (
                  <li key={i}>{hobby}</li>
                ))}
              </ul>
            </Section>
          )}
        </aside>

        {/* Right Column (Main Content) */}
        <main className="md:col-span-2 p-8 md:p-10 border-l border-gray-100">
          <header className="mb-8">
            <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-1`}>{data.name}</h1>
            {data.jobTitle && <p className={`text-xl md:text-2xl ${themeAccentClass} font-medium`}>{data.jobTitle}</p>}
          </header>

          {data.summary && (
            <Section title="Summary" icon={User}>
              <p className="text-md leading-relaxed text-gray-700">{data.summary}</p>
            </Section>
          )}

          {data.experience && data.experience.length > 0 && (
            <Section title="Experience" icon={Briefcase}>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-800 text-lg">{exp.title} at <span className={`${themeAccentClass}`}>{exp.company}</span></h3>
                    <span className="text-sm text-gray-500 font-semibold flex-shrink-0 ml-4">{exp.duration}</span>
                  </div>
                  <p className="text-sm italic text-gray-500 mb-2">{exp.location}</p>
                  <ul className="list-inside text-sm text-gray-700 space-y-1.5 pl-4">
                    {exp.points && exp.points.map((point, j) => (
                      point.trim() !== '' && <li key={j} className="flex items-start">
                        <span className={`mr-2.5 mt-1 ${themeBulletClass}`}>&bull;</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>
          )}

          {data.education && data.education.length > 0 && (
            <Section title="Education" icon={GraduationCap}>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-5 last:mb-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-medium text-gray-800">{edu.degree}</h3>
                    <span className="text-sm text-gray-500 font-semibold flex-shrink-0 ml-4">{edu.year}</span>
                  </div>
                  <p className={`text-md ${themeAccentClass}`}>{edu.institution}</p>
                </div>
              ))}
            </Section>
          )}
        </main>
      </div>
    </div>
  );
});

// --- Resume Edit Form ---
const UserResumeEditForm = ({ formData, setFormData }) => {

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateField("imageUrl", reader.result);
      };
      reader.readAsDataURL(file);
    }
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
    <div className="mb-8 p-5 border rounded-lg bg-slate-50 shadow-sm">
      <h3 className="text-xl font-semibold text-indigo-700 mb-5">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
  const Input = ({ label, value, onChange, placeholder, type = "text" }) => (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1.5">{label}</label>
      <input type={type} value={value || ''} onChange={onChange} placeholder={placeholder || label} className="border border-gray-300 p-2.5 w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base" />
    </div>
  );
  const Textarea = ({ label, value, onChange, placeholder, rows = 3 }) => (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1.5">{label}</label>
      <textarea value={value || ''} onChange={onChange} placeholder={placeholder || label} rows={rows} className="border border-gray-300 p-2.5 w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base" />
    </div>
  );


  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl space-y-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Edit Your Resume</h2>

      <FormSectionWrapper title="Personal Details">
        <Input label="Full Name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} />
        <Input label="Job Title (e.g., Software Engineer)" value={formData.jobTitle} onChange={(e) => updateField("jobTitle", e.target.value)} />
        <Input label="Address" value={formData.address} onChange={(e) => updateField("address", e.target.value)} />
        <Input label="Phone" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} type="tel" />
        <Input label="Email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} type="email" />
        <Input label="LinkedIn Profile (e.g., linkedin.com/in/yourname)" value={formData.linkedin} onChange={(e) => updateField("linkedin", e.target.value)} placeholder="Optional" />
        <Input label="GitHub Username (e.g., yourusername)" value={formData.github} onChange={(e) => updateField("github", e.target.value)} placeholder="Optional" />
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1.5 flex items-center">
            <ImageIcon size={18} className="mr-2.5 text-gray-600" />Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-base text-gray-700
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-md file:border-0
                       file:text-sm file:font-semibold
                       file:bg-indigo-50 file:text-indigo-700
                       hover:file:bg-indigo-100 cursor-pointer"
          />
          {formData.imageUrl && (
            <div className="mt-4 flex items-center space-x-3">
              <img src={formData.imageUrl} alt="Preview" className="w-20 h-20 rounded-full object-cover border border-gray-300" />
              <p className="text-sm text-gray-500">Image loaded.</p>
              <button
                onClick={() => updateField("imageUrl", "")}
                className="text-red-500 hover:text-red-700 text-sm flex items-center"
              >
                <Trash2 size={16} className="mr-1" /> Remove
              </button>
            </div>
          )}
           <p className="text-sm text-gray-500 mt-1">Or paste an Image URL (Optional):</p>
           <Input label="Image URL" value={formData.imageUrl} onChange={(e) => updateField("imageUrl", e.target.value)} placeholder="e.g., https://example.com/your-photo.jpg" />
        </div>
      </FormSectionWrapper>

      <FormSectionWrapper title="Profile Summary">
        <Textarea label="Summary" value={formData.summary} onChange={(e) => updateField("summary", e.target.value)} rows={5} />
      </FormSectionWrapper>

      <FormSectionWrapper title="Work Experience">
        {formData.experience.map((exp, i) => (
          <div key={exp.id} className="p-4 border rounded-md bg-white space-y-3 relative">
            <button onClick={() => removeArrayItem('experience', i)} className="absolute top-3 right-3 text-red-500 hover:text-red-700 p-1"><Trash2 size={20} /></button>
            <Input label="Job Title" value={exp.title} onChange={(e) => handleArrayFieldChange('experience', i, 'title', e.target.value)} />
            <Input label="Company" value={exp.company} onChange={(e) => handleArrayFieldChange('experience', i, 'company', e.target.value)} />
            <Input label="Duration (e.g., Feb 2017 - Present)" value={exp.duration} onChange={(e) => handleArrayFieldChange('experience', i, 'duration', e.target.value)} />
            <Input label="Location" value={exp.location} onChange={(e) => handleArrayFieldChange('experience', i, 'location', e.target.value)} />
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1.5">Key Responsibilities/Achievements:</label>
              {exp.points && exp.points.map((point, j) => (
                <div key={j} className="flex items-center mb-2">
                  <Textarea value={point} onChange={(e) => handleExperiencePointChange(i, j, e.target.value)} rows={1} placeholder={`Point ${j + 1}`} />
                  <button onClick={() => removeExperiencePoint(i, j)} className="ml-3 text-red-400 hover:text-red-600 p-1"><Trash2 size={18} /></button>
                </div>
              ))}
              <button onClick={() => addExperiencePoint(i)} className="text-md text-indigo-600 hover:text-indigo-800 flex items-center mt-2"><PlusCircle size={18} className="mr-2" /> Add Point</button>
            </div>
          </div>
        ))}
        <button onClick={() => addArrayItem('experience', { title: "", company: "", duration: "", location: "", points: [""] })}
          className="bg-indigo-500 text-white px-5 py-2.5 rounded-md hover:bg-indigo-600 flex items-center text-md">
          <PlusCircle size={20} className="mr-2" /> Add Experience
        </button>
      </FormSectionWrapper>

      <FormSectionWrapper title="Education">
        {formData.education.map((edu, i) => (
          <div key={edu.id} className="p-4 border rounded-md bg-white space-y-3 relative">
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

// --- Customize Font Modal ---
const CustomizeFontModal = ({ isOpen, onClose, currentFont, setFont }) => {
  if (!isOpen) return null;
  const fonts = ["Inter", "Roboto", "Lato", "Montserrat", "Oswald", "Merriweather", "Playfair Display", "Open Sans", "Roboto Slab", "Poppins", "Noto Sans"];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 no-print">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-indigo-700">Customize Font</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
        </div>
        <div className="grid grid-cols-2 gap-4 max-h-80 overflow-y-auto pr-2">
          {fonts.map(font => (
            <button key={font} onClick={() => { setFont(font); onClose(); }} style={{ fontFamily: font }}
              className={`p-3.5 rounded-md text-base text-center border-2 ${currentFont === font ? 'border-indigo-600 bg-indigo-100' : 'border-gray-200 hover:border-indigo-400'}`}>
              {font}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="mt-6 w-full bg-indigo-600 text-white py-2.5 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-base">Close</button>
      </div>
    </div>
  );
};

// --- Customize Color Modal ---
const CustomizeColorModal = ({ isOpen, onClose, currentThemeColor, setThemeColor }) => {
  if (!isOpen) return null;
  const colors = [
    { name: "Indigo", class: "indigo" },
    { name: "Blue", class: "blue" },
    { name: "Teal", class: "teal" },
    { name: "Green", class: "green" },
    { name: "Purple", class: "purple" },
    { name: "Red", class: "red" },
    { name: "Orange", class: "orange" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 no-print">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Customize Color Theme</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
        </div>
        <div className="grid grid-cols-3 gap-3 max-h-80 overflow-y-auto pr-2">
          {colors.map(color => (
            <button key={color.class} onClick={() => { setThemeColor(color.class); onClose(); }}
              className={`p-3.5 rounded-md text-base text-center border-2 ${currentThemeColor === color.class ? `border-${color.class}-600 bg-${color.class}-100` : 'border-gray-200 hover:border-gray-400'}`}>
              <div className={`w-8 h-8 mx-auto rounded-full bg-${color.class}-600 mb-2 border border-${color.class}-700 shadow-sm`}></div>
              <span className={`text-${color.class}-700 font-medium`}>{color.name}</span>
            </button>
          ))}
        </div>
        <button onClick={onClose} className="mt-6 w-full bg-gray-600 text-white py-2.5 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-base">Close</button>
      </div>
    </div>
  );
};

// --- AI Assistant Modal ---
const AiAssistantModal = ({ isOpen, onClose, selectedSection }) => {
  if (!isOpen) return null;

  let title = "AI Resume Tips";
  let tipsContent = [
    "Use strong **action verbs** (e.g., 'Led', 'Developed', 'Managed').",
    "**Quantify achievements** with numbers (e.g., 'Increased sales by 10%').",
    "Tailor your resume to the **job description** by using keywords.",
    "Keep your **summary concise** (2-3 sentences) and impactful.",
    "**Proofread meticulously** for any grammatical errors or typos.",
    "Ensure all **contact information** is current and professional."
  ];

  if (selectedSection === 'summary') {
    title = "Improve Profile with AI";
    tipsContent = [
      "Start with a strong **hook** that highlights your core skills and value proposition.",
      "Align your summary with the **target job's requirements** and keywords.",
      "Keep it **concise** and powerful – ideally 2-4 sentences.",
      "Focus on **achievements and impact**, not just responsibilities.",
      "Showcase your unique selling points."
    ];
  } else if (selectedSection === 'experience') {
    title = "Enhance Experience with AI";
    tipsContent = [
      "Begin each bullet point with a powerful **action verb**.",
      "**Quantify** your achievements whenever possible (e.g., 'managed a team of 5', 'reduced costs by 15%').",
      "Focus on **results and impact**, not just daily duties.",
      "Use the **STAR method** (Situation, Task, Action, Result) in your mind when crafting points.",
      "Tailor points to the **job description**, highlighting relevant experiences."
    ];
  } else if (selectedSection === 'projects') {
    title = "AI-Powered Projects Description";
    tipsContent = [
      "Clearly state the **project's purpose** and your **role**.",
      "Highlight the **technologies and tools** used.",
      "Describe **challenges** overcome and **solutions** implemented.",
      "**Quantify outcomes** (e.g., 'improved performance by 20%', 'reached 1000 users').",
      "Link to a **live demo or GitHub repo** if available."
    ];
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 no-print">
      <div className="bg-white p-7 md:p-9 rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-semibold text-indigo-700 flex items-center"><Sparkles className="mr-2.5 h-7 w-7 text-indigo-500" />{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={26} /></button>
        </div>
        <ul className="space-y-4 text-base text-gray-700">
          {tipsContent.map((tip, index) => (
            <li key={index} className="flex items-start">
              <Lightbulb size={20} className="mr-3.5 mt-0.5 text-indigo-500 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-7 w-full bg-indigo-600 text-white py-2.5 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-base">Got it!</button>
      </div>
    </div>
  );
};

// --- Share Modal ---
const ShareModal = ({ isOpen, onClose, resumeData, font, themeColor }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const shareLink = `${window.location.origin}/?data=${encodeURIComponent(JSON.stringify(resumeData))}&font=${encodeURIComponent(font)}&theme=${encodeURIComponent(themeColor)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 no-print">
      <div className="bg-white p-7 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-semibold text-indigo-700">Share Your Resume</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={26} /></button>
        </div>
        <p className="text-base text-gray-700 mb-5">You can share a link to your resume. This link will contain all your resume data.</p>
        <div className="flex items-center space-x-3 mb-5">
          <input
            type="text"
            readOnly
            value={shareLink}
            className="flex-grow border border-gray-300 p-2.5 rounded-md text-base bg-gray-50"
          />
          <button onClick={handleCopy} className="bg-indigo-500 text-white px-5 py-2.5 rounded-md hover:bg-indigo-600 text-base">
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <button onClick={onClose} className="mt-5 w-full bg-gray-300 text-gray-800 py-2.5 px-4 rounded-md hover:bg-gray-400 text-base">Close</button>
      </div>
    </div>
  );
};


// --- Main App Component ---
function App() {
  const [resumeData, setResumeData] = useState(initialUserData);
  const [viewMode, setViewMode] = useState('preview');
  const [font, setFont] = useState('Inter');
  const [themeColor, setThemeColor] = useState('indigo'); // Default theme color
  const [zoomLevel, setZoomLevel] = useState(1); // Default zoom level

  const [isUploadDropdownOpen, setIsUploadDropdownOpen] = useState(false);
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiModalSection, setAiModalSection] = useState(null); // To pass which section AI is helping with
  const [isCustomizeFontModalOpen, setIsCustomizeFontModalOpen] = useState(false);
  const [isCustomizeColorModalOpen, setIsCustomizeColorModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const fileInputRef = useRef(null);
  const uploadDropdownRef = useRef(null);
  const aiDropdownRef = useRef(null);
  const resumePreviewRef = useRef(null); // Not directly used for zoom, but good practice

  // Load data, font, and theme from localStorage or URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlData = params.get('data');
    const urlFont = params.get('font');
    const urlTheme = params.get('theme');

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

    if (urlTheme) {
      setThemeColor(decodeURIComponent(urlTheme));
    } else {
      const savedTheme = localStorage.getItem('resumeThemeColor');
      if (savedTheme) {
        setThemeColor(savedTheme);
      }
    }
  }, []);

  // Update localStorage when resumeData, font, or themeColor changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

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

  useEffect(() => {
    localStorage.setItem('resumeThemeColor', themeColor);
  }, [themeColor]);


  // Handler for Download (Print as PDF)
  const handleDownloadPdf = () => {
    const currentView = viewMode;
    const currentZoom = zoomLevel;

    // Temporarily reset zoom for optimal print output
    setZoomLevel(1);

    if (viewMode === 'edit') {
      setViewMode('preview'); // Switch to preview for printing
      setTimeout(() => {
        window.print();
        setViewMode(currentView); // Switch back after print dialog
        setZoomLevel(currentZoom); // Restore zoom level
      }, 100);
    } else {
      window.print();
      setTimeout(() => { // Restore zoom after print dialog closes
        setZoomLevel(currentZoom);
      }, 100);
    }
  };

  // Handler for Save
  const handleSave = () => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    localStorage.setItem('resumeFont', font);
    localStorage.setItem('resumeThemeColor', themeColor);
    alert('Resume saved locally!');
  };

  // Handler for Load from JSON (AI Edit simulation)
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
    event.target.value = null; // Clear the input so same file can be selected again
  };

  const handleAiAssistantClick = (section) => {
    setAiModalSection(section);
    setIsAiModalOpen(true);
    setIsAiDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (uploadDropdownRef.current && !uploadDropdownRef.current.contains(event.target)) {
        setIsUploadDropdownOpen(false);
      }
      if (aiDropdownRef.current && !aiDropdownRef.current.contains(event.target)) {
        setIsAiDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [uploadDropdownRef, aiDropdownRef]);

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
          transform: scale(1) !important; /* Force scale to 1 for print */
          transform-origin: top left !important;
          /* Ensure columns stack or fit correctly for print */
          display: block !important; /* Override grid for print */
        }
        .printable-area > div { /* Target the grid container */
            display: block !important; /* Ensure it also becomes block */
        }
        .printable-area aside, .printable-area main {
            width: 100% !important; /* Full width for print */
            padding: 0.6in 0.4in !important; /* Consistent padding */
            border-left: none !important; /* Remove border for print */
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
        .printable-area .text-indigo-700, .printable-area .text-indigo-600, .printable-area .text-indigo-800, .printable-area .text-indigo-900,
        .printable-area .text-blue-700, .printable-area .text-blue-600, .printable-area .text-blue-800, .printable-area .text-blue-900,
        .printable-area .text-teal-700, .printable-area .text-teal-600, .printable-area .text-teal-800, .printable-area .text-teal-900,
        .printable-area .text-green-700, .printable-area .text-green-600, .printable-area .text-green-800, .printable-area .text-green-900,
        .printable-area .text-purple-700, .printable-area .text-purple-600, .printable-area .text-purple-800, .printable-area .text-purple-900,
        .printable-area .text-red-700, .printable-area .text-red-600, .printable-area .text-red-800, .printable-area .text-red-900,
        .printable-area .text-orange-700, .printable-area .text-orange-600, .printable-area .text-orange-800, .printable-area .text-orange-900
        {
            color: #1a202c !important; /* Darker color for print */
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
                   ${isActive ? `bg-${themeColor}-600 text-white shadow-md`
                     : isAccent ? 'bg-amber-400 text-slate-800 hover:bg-amber-500 shadow-sm'
                     : 'text-gray-700 hover:bg-gray-100 hover:text-gray-800'
                   }`}
    >
      <div className="flex items-center space-x-3.5">
        {React.createElement(icon, { className: "h-5.5 w-5.5" })}
        <span>{label}</span>
      </div>
      {showChevron && (isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
    </button>
  );

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-slate-200 via-gray-200 to-slate-300 font-sans">
        <aside className="w-full md:w-72 bg-white p-5 md:p-7 shadow-xl no-print md:sticky md:top-0 md:h-screen flex flex-col">
          <div className="mb-9 text-center">
            <h1 className={`text-3xl font-bold text-${themeColor}-700`}>Resume<span className="text-amber-500">Craft</span></h1>
            <p className="text-sm text-gray-500">Your Professional Edge</p>
          </div>
          <nav className="space-y-4 flex-grow">
            {/* Upload Resume Button (Dropdown) */}
            <div className="relative" ref={uploadDropdownRef}>
              <SidebarButton
                onClick={() => setIsUploadDropdownOpen(!isUploadDropdownOpen)}
                icon={UploadCloud}
                label="Upload Resume"
                showChevron={true}
                isDropdownOpen={isUploadDropdownOpen}
              />
              {isUploadDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1.5 z-20">
                  <div className="mx-2 p-2 bg-white rounded-md shadow-2xl border border-gray-200">
                    <button onClick={() => { setViewMode('edit'); setIsUploadDropdownOpen(false); }}
                      className="w-full text-left px-3.5 py-2.5 text-base text-gray-700 hover:bg-gray-50 rounded-md flex items-center">
                      <Edit3 size={18} className="mr-2.5 text-gray-500" /> Manual Edit
                    </button>
                    <button onClick={handleLoadJsonClick}
                      className="w-full text-left px-3.5 py-2.5 text-base text-gray-700 hover:bg-gray-50 rounded-md flex items-center mt-1.5">
                      <Sparkles size={18} className="mr-2.5 text-gray-500" /> AI Edit
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".json"
                      className="hidden" // Hide the actual file input
                    />
                  </div>
                </div>
              )}
            </div>

            {/* AI Assistant Dropdown */}
            <div className="relative" ref={aiDropdownRef}>
              <SidebarButton
                onClick={() => setIsAiDropdownOpen(!isAiDropdownOpen)}
                icon={Sparkles}
                label="AI Assistant"
                isAccent={true}
                showChevron={true}
                isDropdownOpen={isAiDropdownOpen}
              />
              {isAiDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1.5 z-20">
                  <div className="mx-2 p-2 bg-white rounded-md shadow-2xl border border-gray-200">
                    <button onClick={() => handleAiAssistantClick('summary')}
                      className="w-full text-left px-3.5 py-2.5 text-base text-gray-700 hover:bg-indigo-50 rounded-md flex items-center">
                      <User size={18} className="mr-2.5 text-indigo-500" /> Improve Profile with AI
                    </button>
                    <button onClick={() => handleAiAssistantClick('experience')}
                      className="w-full text-left px-3.5 py-2.5 text-base text-gray-700 hover:bg-indigo-50 rounded-md flex items-center mt-1.5">
                      <Briefcase size={18} className="mr-2.5 text-indigo-500" /> Enhance Experience with AI
                    </button>
                    {/* Placeholder for Projects, opens general tips */}
                    <button onClick={() => handleAiAssistantClick('projects')}
                      className="w-full text-left px-3.5 py-2.5 text-base text-gray-700 hover:bg-indigo-50 rounded-md flex items-center mt-1.5">
                      <Lightbulb size={18} className="mr-2.5 text-indigo-500" /> AI-Powered Projects Description
                    </button>
                    <button onClick={() => handleAiAssistantClick('general')}
                      className="w-full text-left px-3.5 py-2.5 text-base text-gray-700 hover:bg-indigo-50 rounded-md flex items-center mt-1.5 border-t border-gray-100 pt-2.5">
                      <Sparkles size={18} className="mr-2.5 text-indigo-500" /> General Writing Tips
                    </button>
                  </div>
                </div>
              )}
            </div>

            <SidebarButton onClick={() => setViewMode('preview')} icon={Eye} label="Preview Resume" isActive={viewMode === 'preview'} />
            <SidebarButton onClick={() => setViewMode('edit')} icon={Edit3} label="Edit Resume" isActive={viewMode === 'edit'} />

            {/* Zoom Controls (only visible when in preview mode on non-print) */}
            {viewMode === 'preview' && (
              <div className="flex justify-center md:justify-start space-x-2 my-4 no-print">
                <button onClick={handleZoomIn} className={`p-2 rounded-full bg-${themeColor}-500 text-white hover:bg-${themeColor}-600`}>
                  <ZoomIn size={20} />
                </button>
                <button onClick={handleZoomOut} className={`p-2 rounded-full bg-${themeColor}-500 text-white hover:bg-${themeColor}-600`}>
                  <ZoomOut size={20} />
                </button>
              </div>
            )}

            <SidebarButton onClick={handleSave} icon={Save} label="Save Resume" />
            <SidebarButton onClick={() => setIsShareModalOpen(true)} icon={Share2} label="Share Resume" />
            <SidebarButton onClick={handleDownloadPdf} icon={Download} label="Download PDF" />

            {/* Customization Options */}
            <hr className="my-4 border-gray-200" />
            <SidebarButton onClick={() => setIsCustomizeFontModalOpen(true)} icon={Type} label="Customize Fonts" />
            <SidebarButton onClick={() => setIsCustomizeColorModalOpen(true)} icon={Palette} label="Customize Colors" />

          </nav>
          <div className="mt-auto pt-7 border-t border-gray-200 text-center text-sm text-gray-500 hidden md:block">
            <p>&copy; {new Date().getFullYear()} ResumeCraft.</p>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-8 lg:p-10 xl:p-12 overflow-y-auto">
          {viewMode === 'preview' ? (
            <UserResumePreview data={resumeData} ref={resumePreviewRef} font={font} themeColor={themeColor} zoomLevel={zoomLevel} />
          ) : (
            <UserResumeEditForm formData={resumeData} setFormData={setResumeData} />
          )}
        </main>
      </div>
      <AiAssistantModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} selectedSection={aiModalSection} />
      <CustomizeFontModal isOpen={isCustomizeFontModalOpen} onClose={() => setIsCustomizeFontModalOpen(false)} currentFont={font} setFont={setFont} />
      <CustomizeColorModal isOpen={isCustomizeColorModalOpen} onClose={() => setIsCustomizeColorModalOpen(false)} currentThemeColor={themeColor} setThemeColor={setThemeColor} />
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} resumeData={resumeData} font={font} themeColor={themeColor} />
    </>
  );
}

export default App;
