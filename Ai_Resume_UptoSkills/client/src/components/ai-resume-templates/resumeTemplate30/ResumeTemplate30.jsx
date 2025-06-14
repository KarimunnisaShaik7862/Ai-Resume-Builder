import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


const initialExperienceData = [
  {
    id: 1,
    role: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    period: 'June 2021 - Present',
    location: 'San Francisco, CA',
    description: ['Led React/GraphQL web app development, boosting engagement by 30%.'],
  },
];

const initialEducationData = [
  {
    id: 1,
    degree: 'B.S. in Computer Science',
    institution: 'State University',
    period: '2013 - 2017',
    location: 'New York, NY',
    description: 'Graduated with honors.',
  },
];

const initialProjectsData = [
  {
    id: 1,
    name: 'Portfolio Website',
    description: 'React/TailwindCSS portfolio.',
    link: 'https://vikram.dev',
  },
];

const initialCertificationsData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: 2022,
  },
];

const initialSkillsData = [
  { name: 'JavaScript' },
  { name: 'React' },
];

const initialSummaryData = 'Results-driven Full Stack Developer with over 4 years of experience in designing and implementing scalable web applications using React, Node.js, and GraphQL. Proven track record of improving user engagement by 30% through innovative front-end solutions. Passionate about leveraging modern technologies to solve complex business challenges.';

const fontColors = [
  { value: '#000000', label: 'Black' },
  { value: '#333333', label: 'Dark Gray' },
  { value: '#1e3a8a', label: 'Navy Blue' },
  { value: '#065f46', label: 'Forest Green' },
  { value: '#7f1d1d', label: 'Deep Red' },
];

export default function Resume() {
  const [resumeData, setResumeData] = useState({
    name: 'Vikram',
    title: 'Full Stack Developer',
    summary: initialSummaryData,
    contact: {
      email: 'vikram@example.com',
      phone: '+1 234 567 890',
      linkedin: 'https://linkedin.com/in/vikram',
      github: 'https://github.com/vikram',
    },
    skills: initialSkillsData,
    experience: initialExperienceData,
    education: initialEducationData,
    projects: initialProjectsData,
    certifications: initialCertificationsData,
  });
  const [fontColor, setFontColor] = useState(fontColors[0].value);
  const [isEditing, setIsEditing] = useState(false);
  const [showUploadDropdown, setShowUploadDropdown] = useState(false);
  const [showAIDropdown, setShowAIDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    summary: true,
    skills: true,
    experience: true,
    education: true,
    projects: true,
    certifications: true,
    contact: true,
  });
  const resumeRef = useRef(null);

  const resumeContainerStyle = {
    '--text-color': fontColor,
  };

  const handleUpload = (type) => {
    setShowUploadDropdown(false);
    if (type === 'ai') {
      alert('AI Edit: Upload resume for AI-enhanced suggestions');
      setResumeData((prev) => ({
        ...prev,
        experience: prev.experience.map((exp) => ({
          ...exp,
          description: exp.description.map((desc) => `AI-optimized: ${desc}`),
        })),
        projects: prev.projects.map((proj) => ({
          ...proj,
          description: `AI-optimized: ${proj.description}`,
        })),
      }));
    }
  };

  const handleAIEnhance = (section) => {
    setShowAIDropdown(false);
    alert(`Enhancing ${section} with AI...`);
    if (section === 'Experience') {
      setResumeData((prev) => ({
        ...prev,
        experience: prev.experience.map((exp) => ({
          ...exp,
          description: exp.description.map((desc) => `AI-optimized: ${desc}`),
        })),
      }));
    } else if (section === 'Projects') {
      setResumeData((prev) => ({
        ...prev,
        projects: prev.projects.map((proj) => ({
          ...proj,
          description: `AI-optimized: ${proj.description}`,
        })),
      }));
    } else if (section === 'Summary') {
      setResumeData((prev) => ({
        ...prev,
        summary: `AI-optimized: ${prev.summary}`,
      }));
    }
  };

  const handleSave = () => {
    alert('Resume saved!');
    setIsEditing(false);
  };

  const handleShare = () => {
    alert('Share via link, email, or social media');
  };

  const handleDownloadPDF = async () => {
    try {
      alert('Generating resume PDF...');
      setIsEditing(false);

      const element = resumeRef.current;
      if (!element) throw new Error('Resume element not found');

      const buttonBar = document.querySelector('.header-bar');
      if (buttonBar) buttonBar.style.display = 'none';

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [595, 842],
      });

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const pdfWidth = 595;
      const pdfHeight = (imgHeight * pdfWidth) / imgWidth;

      const finalHeight = Math.min(pdfHeight, 842);
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, finalHeight);
      pdf.save('resume.pdf');

      if (buttonBar) buttonBar.style.display = '';
    } catch (error) {
      console.error('PDF Generation Error:', error);
      alert(`Failed to generate PDF: ${error.message}`);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleAdd = (section) => {
    setShowAddDropdown(false);
    setResumeData((prev) => {
      const newId = prev[section].length + 1;
      let newEntry;
      switch (section) {
        case 'experience':
          newEntry = {
            id: newId,
            role: 'New Role',
            company: 'New Company',
            period: 'YYYY - Present',
            location: 'Location',
            description: ['Add description here'],
          };
          break;
        case 'education':
          newEntry = {
            id: newId,
            degree: 'New Degree',
            institution: 'New Institution',
            period: 'YYYY - YYYY',
            location: 'Location',
            description: 'Add description here',
          };
          break;
        case 'projects':
          newEntry = {
            id: newId,
            name: 'New Project',
            description: 'Add description here',
            link: 'https://example.com',
          };
          break;
        case 'certifications':
          newEntry = {
            id: newId,
            title: 'New Certification',
            issuer: 'Issuer',
            year: new Date().getFullYear(),
          };
          break;
        case 'skills':
          newEntry = {
            name: 'New Skill',
          };
          break;
        default:
          return prev;
      }
      return { ...prev, [section]: [...prev[section], newEntry] };
    });
  };

  const handleInputChange = (section, value, index = null, subfield = null) => {
    setResumeData((prev) => {
      if (section === 'contact') {
        return { ...prev, contact: { ...prev.contact, [subfield]: value } };
      }
      if (section === 'summary') {
        return { ...prev, summary: value };
      }
      if (index !== null && subfield) {
        const updatedSection = [...prev[section]];
        updatedSection[index] = { ...updatedSection[index], [subfield]: value };
        return { ...prev, [section]: updatedSection };
      }
      return { ...prev, [section]: value };
    });
  };

  const handleDescriptionChange = (section, expIndex, descIndex, value) => {
    setResumeData((prev) => {
      const updatedSection = [...prev[section]];
      updatedSection[expIndex] = {
        ...updatedSection[expIndex],
        description: updatedSection[expIndex].description.map((desc, idx) =>
          idx === descIndex ? value : desc
        ),
      };
      return { ...prev, [section]: updatedSection };
    });
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-gray-100" style={resumeContainerStyle}>
      <div className="header-bar fixed top-0 left-0 right-0 bg-blue-800 text-white shadow-md z-20">
        <div className="max-w-[800px] mx-auto px-6 py-2 flex flex-col sm:flex-row justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <button
                onClick={() => setShowUploadDropdown(!showUploadDropdown)}
                className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm"
                type="button"
              >
                Upload Resume
              </button>
              {showUploadDropdown && (
                <div className="absolute z-10 mt-1 w-40 bg-white shadow-lg rounded-md">
                  <button
                    onClick={() => handleUpload('ai')}
                    className="block w-full text-left px-3 py-1 text-sm hover:bg-blue-100"
                    style={{ color: fontColor }}
                  >
                    AI Edit
                  </button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowAIDropdown(!showAIDropdown)}
                className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm"
                type="button"
              >
                AI Assistant
              </button>
              {showAIDropdown && (
                <div className="absolute z-10 mt-1 w-40 bg-white shadow-lg rounded-md">
                  <button
                    onClick={() => handleAIEnhance('Summary')}
                    className="block w-full text-left px-3 py-1 text-sm hover:bg-blue-100"
                    style={{ color: fontColor }}
                  >
                    Enhance Summary
                  </button>
                  <button
                    onClick={() => handleAIEnhance('Experience')}
                    className="block w-full text-left px-3 py-1 text-sm hover:bg-blue-100"
                    style={{ color: fontColor }}
                  >
                    Enhance Experience
                  </button>
                  <button
                    onClick={() => handleAIEnhance('Projects')}
                    className="block w-full text-left px-3 py-1 text-sm hover:bg-blue-100"
                    style={{ color: fontColor }}
                  >
                    Enhance Projects
                  </button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowAddDropdown(!showAddDropdown)}
                className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm"
                type="button"
              >
                Add Entry
              </button>
              {showAddDropdown && (
                <div className="absolute z-10 mt-1 w-40 bg-white shadow-lg rounded-md">
                  {['skills', 'experience', 'education', 'projects', 'certifications'].map((section) => (
                    <button
                      key={section}
                      onClick={() => handleAdd(section)}
                      className="block w-full text-left px-3 py-1 text-sm hover:bg-blue-100 capitalize"
                      style={{ color: fontColor }}
                    >
                      Add {section}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={handleEdit}
              className="px-3 py-1 rounded bg-green-600 hover:bg-green-500 text-white text-sm"
              type="button"
            >
              Edit
            </button>
            <button
              onClick={handleSave}
              className="px-3 py-1 rounded bg-green-600 hover:bg-green-500 text-white text-sm"
              type="button"
            >
              Save Resume
            </button>
            <button
              onClick={handleShare}
              className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm"
              type="button"
            >
              Share Resume
            </button>
            <button
              onClick={handleDownloadPDF}
              className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-500 text-white text-sm"
              type="button"
            >
              Download PDF
            </button>
          </div>
          <div className="flex gap-2">
            <select
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
              className="px-2 py-1 rounded bg-gray-200 text-sm"
              style={{ color: fontColor }}
            >
              {fontColors.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto px-6 pt-16 pb-4 mt-12">
        <div
          ref={resumeRef}
          className="bg-white rounded-lg shadow-md p-6 min-h-[842px]"
        >
          <header className="text-center mb-3">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={resumeData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="text-4xl font-bold bg-gray-200 p-1 rounded mb-1 w-full"
                  style={{ color: fontColor }}
                />
                <input
                  type="text"
                  value={resumeData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="text-xl bg-gray-200 p-1 rounded w-full"
                  style={{ color: fontColor }}
                />
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold" style={{ color: fontColor }}>{resumeData.name}</h1>
                <p className="text-xl" style={{ color: fontColor }}>{resumeData.title}</p>
              </>
            )}
            <div className="text-sm mt-2 contact-info">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={resumeData.contact.email}
                    onChange={(e) => handleInputChange('contact', e.target.value, null, 'email')}
                    className="block mx-auto mb-1 bg-gray-200 p-1 rounded w-3/4"
                    style={{ color: fontColor }}
                  />
                  <input
                    type="text"
                    value={resumeData.contact.phone}
                    onChange={(e) => handleInputChange('contact', e.target.value, null, 'phone')}
                    className="block mx-auto mb-1 bg-gray-200 p-1 rounded w-3/4"
                    style={{ color: fontColor }}
                  />
                  <input
                    type="text"
                    value={resumeData.contact.linkedin}
                    onChange={(e) => handleInputChange('contact', e.target.value, null, 'linkedin')}
                    className="block mx-auto mb-1 bg-gray-200 p-1 rounded w-3/4"
                    style={{ color: fontColor }}
                  />
                  <input
                    type="text"
                    value={resumeData.contact.github}
                    onChange={(e) => handleInputChange('contact', e.target.value, null, 'github')}
                    className="block mx-auto mb-1 bg-gray-200 p-1 rounded w-3/4"
                    style={{ color: fontColor }}
                  />
                </>
              ) : (
                <>
                  <p style={{ color: fontColor }}>Email: <a href={`mailto:${resumeData.contact.email}`} className="hover:underline">{resumeData.contact.email}</a></p>
                  <p style={{ color: fontColor }}>Phone: <a href={`tel:${resumeData.contact.phone}`} className="hover:underline">{resumeData.contact.phone}</a></p>
                  <p style={{ color: fontColor }}>LinkedIn: <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">{resumeData.contact.linkedin}</a></p>
                  <p style={{ color: fontColor }}>GitHub: <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">{resumeData.contact.github}</a></p>
                </>
              )}
            </div>
          </header>

          <section className="mb-3">
            <div
              className="flex justify-between items-center cursor-pointer bg-blue-50 p-2 rounded"
              onClick={() => toggleSection('summary')}
            >
              <h2 className="text-xl font-semibold" style={{ color: fontColor }}>Summary</h2>
            </div>
            {expandedSections.summary && (
              <div className="mt-2 text-sm">
                {isEditing ? (
                  <textarea
                    value={resumeData.summary}
                    onChange={(e) => handleInputChange('summary', e.target.value)}
                    className="w-full bg-gray-200 p-1 rounded"
                    style={{ color: fontColor }}
                    rows="4"
                  />
                ) : (
                  <p style={{ color: fontColor }}>{resumeData.summary}</p>
                )}
              </div>
            )}
          </section>

          <section className="mb-3">
            <div
              className="flex justify-between items-center cursor-pointer bg-blue-50 p-2 rounded"
              onClick={() => toggleSection('skills')}
            >
              <h2 className="text-xl font-semibold" style={{ color: fontColor }}>Skills</h2>
            </div>
            {expandedSections.skills && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {resumeData.skills.map(({ name }, index) => (
                  <div key={name} className="text-sm">
                    {isEditing ? (
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => handleInputChange('skills', { name: e.target.value }, index, 'name')}
                        className="bg-gray-200 p-1 rounded w-full"
                        style={{ color: fontColor }}
                      />
                    ) : (
                      <span style={{ color: fontColor }}>{name}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="mb-3">
            <div
              className="flex justify-between items-center cursor-pointer bg-blue-50 p-2 rounded"
              onClick={() => toggleSection('experience')}
            >
              <h2 className="text-xl font-semibold" style={{ color: fontColor }}>Experience</h2>
            </div>
            {expandedSections.experience && resumeData.experience.map(({ id, role, company, period, location, description }, index) => (
              <div key={id} className="mt-2 mb-2">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => handleInputChange('experience', e.target.value, index, 'role')}
                      className="text-xl font-semibold bg-gray-200 p-1 rounded mb-1"
                      style={{ color: fontColor }}
                    />
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => handleInputChange('experience', e.target.value, index, 'company')}
                        className="bg-gray-200 p-1 rounded mb-1"
                        style={{ color: fontColor }}
                      />
                      <input
                        type="text"
                        value={period}
                        onChange={(e) => handleInputChange('experience', e.target.value, index, 'period')}
                        className="text-sm bg-gray-200 p-1 rounded mb-1"
                        style={{ color: fontColor }}
                      />
                    </div>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => handleInputChange('experience', e.target.value, index, 'location')}
                      className="italic text-sm bg-gray-200 p-1 rounded mb-1"
                      style={{ color: fontColor }}
                    />
                    <ul className="list-disc list-inside text-sm mt-1">
                      {description.map((point, idx) => (
                        <li key={idx}>
                          <input
                            type="text"
                            value={point}
                            onChange={(e) => handleDescriptionChange('experience', index, idx, e.target.value)}
                            className="bg-gray-200 p-1 rounded w-full"
                            style={{ color: fontColor }}
                          />
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold" style={{ color: fontColor }}>{role}</h3>
                    <p style={{ color: fontColor }}>{company} <span className="text-sm" style={{ color: fontColor }}>— {period}</span></p>
                    <p className="italic text-sm" style={{ color: fontColor }}>{location}</p>
                    <ul className="list-disc list-inside text-sm mt-1">
                      {description.map((point, idx) => <li key={idx} style={{ color: fontColor }}>{point}</li>)}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </section>

          <section className="mb-3">
            <div
              className="flex justify-between items-center cursor-pointer bg-blue-50 p-2 rounded"
              onClick={() => toggleSection('education')}
            >
              <h2 className="text-xl font-semibold" style={{ color: fontColor }}>Education</h2>
            </div>
            {expandedSections.education && resumeData.education.map(({ id, degree, institution, period, location, description }, index) => (
              <div key={id} className="mt-2 mb-2">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={degree}
                      onChange={(e) => handleInputChange('education', e.target.value, index, 'degree')}
                      className="text-xl font-semibold bg-gray-200 p-1 rounded mb-1"
                      style={{ color: fontColor }}
                    />
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={institution}
                        onChange={(e) => handleInputChange('education', e.target.value, index, 'institution')}
                        className="bg-gray-200 p-1 rounded mb-1"
                        style={{ color: fontColor }}
                      />
                      <input
                        type="text"
                        value={period}
                        onChange={(e) => handleInputChange('education', e.target.value, index, 'period')}
                        className="text-sm bg-gray-200 p-1 rounded mb-1"
                        style={{ color: fontColor }}
                      />
                    </div>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => handleInputChange('education', e.target.value, index, 'location')}
                      className="italic text-sm bg-gray-200 p-1 rounded mb-1"
                      style={{ color: fontColor }}
                    />
                    <textarea
                      value={description}
                      onChange={(e) => handleInputChange('education', e.target.value, index, 'description')}
                      className="text-sm bg-gray-200 p-1 rounded w-full"
                      style={{ color: fontColor }}
                    />
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold" style={{ color: fontColor }}>{degree}</h3>
                    <p style={{ color: fontColor }}>{institution} <span className="text-sm" style={{ color: fontColor }}>— {period}</span></p>
                    <p className="italic text-sm" style={{ color: fontColor }}>{location}</p>
                    <p className="text-sm" style={{ color: fontColor }}>{description}</p>
                  </>
                )}
              </div>
            ))}
          </section>

          <section className="mb-3">
            <div
              className="flex justify-between items-center cursor-pointer bg-blue-50 p-2 rounded"
              onClick={() => toggleSection('projects')}
            >
              <h2 className="text-xl font-semibold" style={{ color: fontColor }}>Projects</h2>
            </div>
            {expandedSections.projects && resumeData.projects.map(({ id, name, description, link }, index) => (
              <div key={id} className="mt-2 mb-2">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => handleInputChange('projects', e.target.value, index, 'name')}
                      className="text-xl font-semibold bg-gray-200 p-1 rounded mb-1"
                      style={{ color: fontColor }}
                    />
                    <textarea
                      value={description}
                      onChange={(e) => handleInputChange('projects', e.target.value, index, 'description')}
                      className="text-sm bg-gray-200 p-1 rounded w-full mb-1"
                      style={{ color: fontColor }}
                    />
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => handleInputChange('projects', e.target.value, index, 'link')}
                      className="text-sm bg-gray-200 p-1 rounded w-full"
                      style={{ color: fontColor }}
                    />
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold">
                      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: fontColor }}>{name}</a>
                    </h3>
                    <p className="text-sm" style={{ color: fontColor }}>{description}</p>
                  </>
                )}
              </div>
            ))}
          </section>

          <section className="mb-3">
            <div
              className="flex justify-between items-center cursor-pointer bg-blue-50 p-2 rounded"
              onClick={() => toggleSection('certifications')}
            >
              <h2 className="text-xl font-semibold" style={{ color: fontColor }}>Certifications</h2>
            </div>
            {expandedSections.certifications && (
              <ul className="mt-2 space-y-2 text-sm">
                {resumeData.certifications.map(({ id, title, issuer, year }, index) => (
                  <li key={id} className="flex justify-between">
                    {isEditing ? (
                      <>
                        <div>
                          <input
                            type="text"
                            value={title}
                            onChange={(e) => handleInputChange('certifications', e.target.value, index, 'title')}
                            className="font-semibold bg-gray-200 p-1 rounded mb-1"
                            style={{ color: fontColor }}
                          />
                          <input
                            type="text"
                            value={issuer}
                            onChange={(e) => handleInputChange('certifications', e.target.value, index, 'issuer')}
                            className="italic text-sm bg-gray-200 p-1 rounded"
                            style={{ color: fontColor }}
                          />
                        </div>
                        <input
                          type="text"
                          value={year}
                          onChange={(e) => handleInputChange('certifications', e.target.value, index, 'year')}
                          className="font-medium bg-gray-200 p-1 rounded"
                          style={{ color: fontColor }}
                        />
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="font-semibold" style={{ color: fontColor }}>{title}</p>
                          <p className="italic text-sm" style={{ color: fontColor }}>{issuer}</p>
                        </div>
                        <span className="font-medium" style={{ color: fontColor }}>{year}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mb-3">
            <div
              className="flex justify-between items-center cursor-pointer bg-blue-50 p-2 rounded"
              onClick={() => toggleSection('contact')}
            >
              <h2 className="text-xl font-semibold" style={{ color: fontColor }}>Contact Me</h2>
            </div>
            {expandedSections.contact && (
              <div className="text-sm mt-2 contact-info">
                {isEditing ? (
                  <>
                    <p>
                      <strong style={{ color: fontColor }}>Email:</strong>
                      <input
                        type="text"
                        value={resumeData.contact.email}
                        onChange={(e) => handleInputChange('contact', e.target.value, null, 'email')}
                        className="bg-gray-200 p-1 rounded ml-1"
                        style={{ color: fontColor }}
                      />
                    </p>
                    <p>
                      <strong style={{ color: fontColor }}>Phone:</strong>
                      <input
                        type="text"
                        value={resumeData.contact.phone}
                        onChange={(e) => handleInputChange('contact', e.target.value, null, 'phone')}
                        className="bg-gray-200 p-1 rounded ml-1"
                        style={{ color: fontColor }}
                      />
                    </p>
                    <p>
                      <strong style={{ color: fontColor }}>LinkedIn:</strong>
                      <input
                        type="text"
                        value={resumeData.contact.linkedin}
                        onChange={(e) => handleInputChange('contact', e.target.value, null, 'linkedin')}
                        className="bg-gray-200 p-1 rounded ml-1"
                        style={{ color: fontColor }}
                      />
                    </p>
                    <p>
                      <strong style={{ color: fontColor }}>GitHub:</strong>
                      <input
                        type="text"
                        value={resumeData.contact.github}
                        onChange={(e) => handleInputChange('contact', e.target.value, null, 'github')}
                        className="bg-gray-200 p-1 rounded ml-1"
                        style={{ color: fontColor }}
                      />
                    </p>
                  </>
                ) : (
                  <>
                    <p style={{ color: fontColor }}><strong>Email:</strong> <a href={`mailto:${resumeData.contact.email}`} className="hover:underline">{resumeData.contact.email}</a></p>
                    <p style={{ color: fontColor }}><strong>Phone:</strong> <a href={`tel:${resumeData.contact.phone}`} className="hover:underline">{resumeData.contact.phone}</a></p>
                    <p style={{ color: fontColor }}><strong>LinkedIn:</strong> <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">{resumeData.contact.linkedin}</a></p>
                    <p style={{ color: fontColor }}><strong>GitHub:</strong> <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">{resumeData.contact.github}</a></p>
                  </>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}