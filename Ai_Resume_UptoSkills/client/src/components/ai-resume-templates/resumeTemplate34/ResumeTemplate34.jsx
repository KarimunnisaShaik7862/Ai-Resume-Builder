// NOTE: Below is your original Trytemp.jsx code.
// We recommend inserting the add/delete button logic into the sections: Technical Skills, Work Experience, Projects.
// The code structure is retained fully to help you integrate or let us know to fully auto-integrate section-wise.

import React, { useState, useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const ResumeTemplate = () => {
  const [editMode, setEditMode] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [showShare, setShowShare] = useState(false);
  const [uploadDropdownOpen, setUploadDropdownOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);

  const resumeRef = useRef(null);

  const [resumeStyle, setResumeStyle] = useState({
    backgroundColor: '#ffffff',
    fontFamily: "'Inter', sans-serif",
    primaryColor: '#3B82F6',
    theme: 'Professional Blue'
  });

  const [resumeData, setResumeData] = useState({
    name: 'AKSHITHRAM',
    role: 'Java Developer',
    location: 'Hyderabad, India',
    phone: '+91 1234567890',
    email: 'name@gmail.com',
    objective: 'Results-driven Java Developer with 5+ years of experience in building scalable, high-performance backend systems and APIs. Proficient in Java, Spring Boot, Hibernate, and microservices architecture. Strong collaborator with a focus on clean code, agile methodologies, and continuous integration practices.',
    education: [
      {
        institution: 'Technical College, Chennai',
        degree: 'B.Tech, CSE(AI&ML)',
        date: '2026',
      }
    ],
    technicalSkills: [
      'Strong knowledge of Core Java',
      'Full Stack Development',
      'Spring Framework',
      'Relational Databases',
      'Git / GitHub / GitLab for version control',
      'AWS, Azure'
    ],
    workExperience: [
      {
        company: 'CodeCraft Technologies',
        role: 'Web Development Intern',
        date: '2023 - 2024',
        details: [
          'Built responsive frontend interfaces using React.js and Tailwind CSS for internal tools used by over 100 staff members.',
          'Integrated REST APIs to fetch and display real-time data from a Node.js backend.',
          'Used Git and GitHub for version control and collaborated with senior developers via pull requests and code reviews.',
          'Wrote unit tests with Jest to ensure UI component reliability and minimize regressions.'
        ]
      },
      {
        company: 'Nimbus CloudTech',
        role: 'Cloud & DevOps Intern',
        date: '2024 - 2025',
        details: [
          'Configured CI/CD pipelines using GitHub Actions for automated testing and deployment of web apps.',
          'Assisted in setting up monitoring and alerting using Prometheus and Grafana on Kubernetes clusters.',
          'Deployed and maintained containerized applications using Docker and Helm charts.',
          'Wrote documentation for deployment workflows and environment configurations for internal teams.'
        ]
      }
    ],
  });

  const colorThemes = [
    { name: 'Professional Blue', value: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)' },
    { name: 'Modern Green', value: '#10B981', gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' },
    { name: 'Creative Purple', value: '#8B5CF6', gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)' },
    { name: 'Bold Red', value: '#EF4444', gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)' },
    { name: 'Energetic Orange', value: '#F59E0B', gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' },
    { name: 'Professional Dark', value: '#374151', gradient: 'linear-gradient(135deg, #374151 0%, #1F2937 100%)' },
  ];

  const fontOptions = [
    { name: 'Inter (Default)', value: "'Inter', sans-serif" },
    { name: 'Times New Roman', value: "'Times New Roman', serif" },
    { name: 'Georgia', value: "'Georgia', serif" },
    { name: 'Courier New', value: "'Courier New', monospace" },
    { name: 'Trebuchet MS', value: "'Trebuchet MS', sans-serif" },
  ];

  const getSkillLevel = (skill) => {
    const skillLevels = {
      'Strong knowledge of Core Java': { percentage: 90, level: 'Expert' },
      'Spring Framework': { percentage: 85, level: 'Advanced' },
      'Full Stack Development': { percentage: 80, level: 'Proficient' },
      'Relational Databases': { percentage: 75, level: 'Intermediate' },
      'Git / GitHub / GitLab for version control': { percentage: 85, level: 'Advanced' },
      'AWS, Azure': { percentage: 70, level: 'Intermediate' },
    };
    return skillLevels[skill] || { percentage: 75, level: 'Proficient' };
  };

  const handleChange = (field, value, index, subIndex) => {
    const newData = { ...resumeData };
    if (subIndex !== undefined) {
      newData[field][index].details[subIndex] = value;
    } else if (index !== undefined) {
      if (field === 'technicalSkills') {
        newData[field][index] = value;
      } else {
        newData[field][index] = value;
      }
    } else {
      newData[field] = value;
    }
    setResumeData(newData);
  };

  const handleDownload = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      scrollY: -window.scrollY,
      backgroundColor: null,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShare(true);
    setTimeout(() => setShowShare(false), 3000);
  };

  const handleSave = () => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    localStorage.setItem('resumeStyle', JSON.stringify(resumeStyle));
    alert('Resume saved successfully!');
  };

  const handleStyleChange = (styleChanges) => {
    setResumeStyle(prev => ({ ...prev, ...styleChanges }));
  };

  const handleManualUpload = () => {
    console.log("Manual upload triggered");
    setUploadDropdownOpen(false);
  };

  const handleAIUpload = () => {
    console.log("AI upload triggered");
    setUploadDropdownOpen(false);
  };

  const handleAIEnhance = (type) => {
    console.log(`AI Assistant triggered for ${type}`);
    setAiDropdownOpen(false);
  };

  const inputStyle = {
    padding: '10px',
    width: '100%',
    borderRadius: '5px',
    marginBottom: '10px',
    border: editMode ? '1px solid #ccc' : 'none',
    backgroundColor: editMode ? '#fff' : 'transparent',
    outline: 'none',
    fontSize: '16px',
    color: '#333',
    fontFamily: resumeStyle.fontFamily,
  };

  const sidebarButtonStyle = {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    borderRadius: '12px',
    padding: '14px 16px',
    fontWeight: '500',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '12px'
  };

  // Mobile Zoom Controls Component
  const MobileZoomControls = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isMobile) return null;

    return (
      <div style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 40,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{
          fontSize: '12px',
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '12px'
        }}>
          Zoom: {Math.round(zoom * 100)}%
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            onClick={() => setZoom(prev => Math.min(prev + 0.1, 2))}
            disabled={zoom >= 2}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: 'white',
              border: 'none',
              cursor: zoom >= 2 ? 'not-allowed' : 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              opacity: zoom >= 2 ? 0.5 : 1
            }}
          >
            +
          </button>
          <button
            onClick={() => setZoom(prev => Math.max(prev - 0.1, 0.5))}
            disabled={zoom <= 0.5}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: 'white',
              border: 'none',
              cursor: zoom <= 0.5 ? 'not-allowed' : 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              opacity: zoom <= 0.5 ? 0.5 : 1
            }}
          >
            -
          </button>
          <button
            onClick={() => setZoom(1)}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#6b7280',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            ⟲
          </button>
        </div>
      </div>
    );
  };

  const resumeTransform = window.innerWidth < 1024 ? `scale(${zoom})` : 'none';
  const resumeOrigin = window.innerWidth < 1024 ? 'top left' : 'center';

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '320px',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '2px 0 20px rgba(0, 0, 0, 0.1)',
        borderRight: '1px solid rgba(229, 231, 235, 0.5)',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
        padding: '24px'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '24px',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ marginRight: '8px' }}>🎨</span>
            Resume Studio
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280'
          }}>
            Craft your perfect resume with AI-powered tools
          </p>
        </div>

        {/* Tools Section */}
        <div style={{ marginBottom: '32px' }}>
          {/* Upload Resume Dropdown */}
          <div style={{ position: 'relative', marginBottom: '12px' }}>
            <button
              onClick={() => setUploadDropdownOpen(!uploadDropdownOpen)}
              style={{
                ...sidebarButtonStyle,
                background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                📤 Upload Resume
              </span>
              <span style={{ 
                transform: uploadDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}>
                ▼
              </span>
            </button>
            {uploadDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                backgroundColor: 'white',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                borderRadius: '8px',
                zIndex: 1000,
                marginTop: '4px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ padding: '8px' }}>
                  <button 
                    onClick={handleManualUpload}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 14px',
                      fontSize: '14px',
                      color: '#374151',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#eff6ff'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ marginRight: '8px', color: '#3b82f6' }}>✏</span>
                    Manual Edit
                  </button>
                  <button 
                    onClick={handleAIUpload}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 14px',
                      fontSize: '14px',
                      color: '#374151',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#eff6ff'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ marginRight: '8px', color: '#8b5cf6' }}>🤖</span>
                    AI Smart Upload
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* AI Assistant Dropdown */}
          <div style={{ position: 'relative', marginBottom: '12px' }}>
            <button
              onClick={() => setAiDropdownOpen(!aiDropdownOpen)}
              style={{
                ...sidebarButtonStyle,
                background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                ✨ AI Assistant
              </span>
              <span style={{ 
                transform: aiDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}>
                ▼
              </span>
            </button>
            {aiDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                backgroundColor: 'white',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                borderRadius: '8px',
                zIndex: 1000,
                marginTop: '4px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ padding: '8px' }}>
                  <button 
                    onClick={() => handleAIEnhance('Profile')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 14px',
                      fontSize: '14px',
                      color: '#374151',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#faf5ff'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    ✨ Improve Profile with AI
                  </button>
                  <button 
                    onClick={() => handleAIEnhance('Experience')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 14px',
                      fontSize: '14px',
                      color: '#374151',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#faf5ff'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    🚀 Enhance Experience with AI
                  </button>
                  <button 
                    onClick={() => handleAIEnhance('Projects')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 14px',
                      fontSize: '14px',
                      color: '#374151',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#faf5ff'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    💡 AI-Powered Projects Description
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <button 
            onClick={handleSave} 
            style={{
              ...sidebarButtonStyle,
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
            }}
          >
            💾 Save Resume
          </button>

          <button 
            onClick={handleShare} 
            style={{
              ...sidebarButtonStyle,
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
            }}
          >
            🔗 Share Resume
          </button>

          <button 
            onClick={handleDownload} 
            style={{
              ...sidebarButtonStyle,
              background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
            }}
          >
            ⬇ Download PDF
          </button>

          {/* Edit Toggle */}
          <button 
            onClick={() => setEditMode(!editMode)}
            style={{
              ...sidebarButtonStyle,
              background: editMode 
                ? 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)' 
                : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)'
            }}
          >
            {editMode ? '✅ Finish Editing' : '✏ Start Editing'}
          </button>
        </div>

        {/* Customization Section */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ marginRight: '8px', color: '#3b82f6' }}>⚙</span>
            Customization
          </h3>
          
          {/* Font Selection */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Font Family
            </label>
            <select
              value={resumeStyle.fontFamily}
              onChange={(e) => handleStyleChange({ fontFamily: e.target.value })}
              style={{
                width: '100%',
                backgroundColor: 'white',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '12px',
                fontSize: '14px',
                color: '#374151',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {fontOptions.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.name}
                </option>
              ))}
            </select>
          </div>

          {/* Color Themes */}
          <div>
            <label style={{
  display: 'flex',
  fontSize: '12px',
  fontWeight: '500',
  color: '#374151',
  marginBottom: '12px',
  alignItems: 'center'
}}>

              <span style={{ marginRight: '4px' }}>🎨</span>
              Color Theme
            </label>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px'
            }}>
              {colorThemes.map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => handleStyleChange({ primaryColor: theme.value, theme: theme.name })}
                  style={{
                    width: '100%',
                    height: '32px',
                    borderRadius: '8px',
                    background: theme.gradient,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    border: resumeStyle.primaryColor === theme.value ? '2px solid #1f2937' : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  title={theme.name}
                  onMouseOver={(e) => {
                    if (resumeStyle.primaryColor !== theme.value) {
                      e.target.style.borderColor = '#9ca3af';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (resumeStyle.primaryColor !== theme.value) {
                      e.target.style.borderColor = 'transparent';
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '32px' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <div 
            ref={resumeRef}
            id="resume-preview"
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              transform: resumeTransform,
              transformOrigin: resumeOrigin,
              fontFamily: resumeStyle.fontFamily,
              animation: 'fadeIn 0.5s ease-in-out'
            }}
          >
            {/* Header Section */}
            <div 
              style={{
                color: 'white',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${resumeStyle.primaryColor} 0%, ${resumeStyle.primaryColor}dd 100%)`
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                  alignItems: window.innerWidth < 768 ? 'flex-start' : 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ marginBottom: window.innerWidth < 768 ? '16px' : 0 }}>
                    {editMode ? (
                      <input
                        type="text"
                        value={resumeData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        style={{
                          ...inputStyle,
                          fontSize: '36px',
                          fontWeight: 'bold',
                          marginBottom: '8px',
                          color: 'white',
                          backgroundColor: 'transparent',
                          borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: 0
                        }}
                      />
                    ) : (
                      <h1 style={{
                        fontSize: '36px',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        margin: 0
                      }}>
                        {resumeData.name}
                      </h1>
                    )}
                    
                    {editMode ? (
                      <input
                        type="text"
                        value={resumeData.role}
                        onChange={(e) => handleChange('role', e.target.value)}
                        style={{
                          ...inputStyle,
                          fontSize: '20px',
                          marginBottom: '16px',
                          color: 'white',
                          backgroundColor: 'transparent',
                          borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: 0,
                          opacity: 0.9
                        }}
                      />
                    ) : (
                      <h2 style={{
                        fontSize: '20px',
                        fontWeight: '500',
                        opacity: 0.9,
                        marginBottom: '16px',
                        margin: 0
                      }}>
                        {resumeData.role}
                      </h2>
                    )}
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '16px',
                      fontSize: '14px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        📍
                        {editMode ? (
                          <input
                            type="text"
                            value={resumeData.location}
                            onChange={(e) => handleChange('location', e.target.value)}
                            style={{
                              ...inputStyle,
                              fontSize: '14px',
                              marginBottom: 0,
                              marginLeft: '4px',
                              color: 'white',
                              backgroundColor: 'transparent',
                              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                              borderRadius: 0,
                              width: 'auto'
                            }}
                          />
                        ) : (
                          <span style={{ marginLeft: '4px' }}>{resumeData.location}</span>
                        )}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        📞
                        {editMode ? (
                          <input
                            type="text"
                            value={resumeData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            style={{
                              ...inputStyle,
                              fontSize: '14px',
                              marginBottom: 0,
                              marginLeft: '4px',
                              color: 'white',
                              backgroundColor: 'transparent',
                              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                              borderRadius: 0,
                              width: 'auto'
                            }}
                          />
                        ) : (
                          <span style={{ marginLeft: '4px' }}>{resumeData.phone}</span>
                        )}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        ✉
                        {editMode ? (
                          <input
                            type="email"
                            value={resumeData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            style={{
                              ...inputStyle,
                              fontSize: '14px',
                              marginBottom: 0,
                              marginLeft: '4px',
                              color: 'white',
                              backgroundColor: 'transparent',
                              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                              borderRadius: 0,
                              width: 'auto'
                            }}
                          />
                        ) : (
                          <span style={{ marginLeft: '4px' }}>{resumeData.email}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Professional Summary */}
              <section style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #bfdbfe',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  margin: 0
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    backgroundColor: resumeStyle.primaryColor
                  }}>
                    👤
                  </div>
                  Professional Summary
                </h3>
                {editMode ? (
                  <textarea
                    value={resumeData.objective}
                    onChange={(e) => handleChange('objective', e.target.value)}
                    style={{
                      ...inputStyle,
                      minHeight: '100px',
                      resize: 'vertical',
                      color: '#374151',
                      lineHeight: '1.6',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      padding: '12px'
                    }}
                  />
                ) : (
                  <p style={{
                    color: '#374151',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {resumeData.objective}
                  </p>
                )}
              </section>

              {/* Technical Skills with Progress Bars */}
              <section style={{
                background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #86efac',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  margin: 0
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    backgroundColor: resumeStyle.primaryColor
                  }}>
                    ⚙
                  </div>
                  Technical Skills
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(2, 1fr)',
                  gap: '16px'
                }}>
                  {resumeData.technicalSkills.map((skill, index) => {
  const { percentage, level } = getSkillLevel(skill);
  return (
    <div key={index}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }}>
        {editMode ? (
          <>
            <input
              type="text"
              value={skill}
              onChange={(e) => {
                const newSkills = [...resumeData.technicalSkills];
                newSkills[index] = e.target.value;
                handleChange('technicalSkills', newSkills);
              }}
              style={{
                ...inputStyle,
                fontSize: '14px',
                marginBottom: 0,
                color: '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                padding: '8px'
              }}
            />

            <div style={{ display: 'flex', gap: '8px', marginLeft: '10px' }}>
              <button
                onClick={() => {
                  const updated = [...resumeData.technicalSkills];
                  updated.splice(index, 1);
                  setResumeData({ ...resumeData, technicalSkills: updated });
                }}
              >
                🗑️ Delete
              </button>

             
            </div>
          </>
        ) : (
          <span style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151'
          }}>
            {skill}
          </span>
        )}
        <span style={{
          fontSize: '12px',
          color: '#6b7280'
        }}>
          {level}
        </span>
      </div>

      <div style={{
        width: '100%',
        backgroundColor: '#e5e7eb',
        borderRadius: '9999px',
        height: '8px'
      }}>
        <div
          style={{
            height: '8px',
            borderRadius: '9999px',
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${resumeStyle.primaryColor} 0%, ${resumeStyle.primaryColor}cc 100%)`,
            transition: 'width 0.8s ease-in-out'
           }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {editMode && (
  <div style={{ marginTop: '12px' }}>
    <button
      onClick={() => {
        const updatedSkills = [...resumeData.technicalSkills, ''];
        setResumeData({ ...resumeData, technicalSkills: updatedSkills });
      }}
    >
      ➕ Add Skill
    </button>
  </div>
)}

   </section>
              

              {/* Work Experience */}
              <section style={{
                background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #c4b5fd',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  margin: 0
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    backgroundColor: resumeStyle.primaryColor
                  }}>
                    💼
                  </div>
                  Work Experience
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                 {resumeData.workExperience.map((job, jobIndex) => (
  <div key={jobIndex} style={{
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    border: '1px solid #f3f4f6'
  }}>

    {/* Header Section */}
    <div style={{
      display: 'flex',
      flexDirection: window.innerWidth < 768 ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '12px'
    }}>
      <div>
        {editMode ? (
          <input
            type="text"
            value={job.role}
            onChange={(e) => {
              const newExperience = [...resumeData.workExperience];
              newExperience[jobIndex].role = e.target.value;
              handleChange('workExperience', newExperience);
            }}
            style={{ ...inputStyle, fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}
          />
        ) : (
          <h4 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>{job.role}</h4>
        )}

        {editMode ? (
          <input
            type="text"
            value={job.company}
            onChange={(e) => {
              const newExperience = [...resumeData.workExperience];
              newExperience[jobIndex].company = e.target.value;
              handleChange('workExperience', newExperience);
            }}
            style={{ ...inputStyle, marginBottom: 0, fontWeight: '500', color: resumeStyle.primaryColor }}
          />
        ) : (
          <p style={{ fontWeight: '500', color: resumeStyle.primaryColor, margin: 0 }}>{job.company}</p>
        )}
      </div>

      {editMode ? (
        <input
          type="text"
          value={job.date}
          onChange={(e) => {
            const newExperience = [...resumeData.workExperience];
            newExperience[jobIndex].date = e.target.value;
            handleChange('workExperience', newExperience);
          }}
          style={{
            ...inputStyle,
            fontSize: '14px',
            backgroundColor: '#f3f4f6',
            padding: '12px',
            borderRadius: '9999px',
            border: '1px solid #d1d5db'
          }}
        />
      ) : (
        <span style={{
          fontSize: '14px',
          color: '#6b7280',
          backgroundColor: '#f3f4f6',
          padding: '12px',
          borderRadius: '9999px'
        }}>{job.date}</span>
      )}
    </div>

    {/* Details Section with Add and Delete for Each Point */}
    <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {job.details.map((detail, detailIndex) => (
        <li key={detailIndex} style={{
          display: 'flex',
          alignItems: 'flex-start'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: resumeStyle.primaryColor,
            marginTop: '8px',
            marginRight: '12px'
          }}></div>

          {editMode ? (
            <>
              <input
                type="text"
                value={detail}
                onChange={(e) => {
                  const newExperience = [...resumeData.workExperience];
                  newExperience[jobIndex].details[detailIndex] = e.target.value;
                  handleChange('workExperience', newExperience);
                }}
                style={{
                  ...inputStyle,
                  flex: 1,
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  padding: '8px'
                }}
              />
              <button
                onClick={() => {
                  const newExperience = [...resumeData.workExperience];
                  newExperience[jobIndex].details.splice(detailIndex, 1);
                  handleChange('workExperience', newExperience);
                }}
                style={{
                  marginLeft: '8px',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  cursor: 'pointer'
                }}
              >🗑️</button>
            </>
          ) : (
            <span style={{ flex: 1 }}>{detail}</span>
          )}
        </li>
      ))}
    </ul>

    {/* Add Point Button */}
    {editMode && (
      <button
        onClick={() => {
          const newExperience = [...resumeData.workExperience];
          newExperience[jobIndex].details.push('');
          handleChange('workExperience', newExperience);
        }}
        style={{
          marginTop: '8px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '4px 8px',
          cursor: 'pointer'
        }}
      >
        ➕ Add Point
      </button>
    )}

    {/* Delete Entire Experience */}
    {editMode && (
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button
          onClick={() => {
            const updated = [...resumeData.workExperience];
            updated.splice(jobIndex, 1);
            setResumeData({ ...resumeData, workExperience: updated });
          }}
          style={{
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 12px',
            cursor: 'pointer'
          }}
        >
          🗑️ Delete Experience
        </button>
      </div>
    )}
  </div>
))}

{/* Add New Experience Button */}
{editMode && (
  <div style={{ marginTop: '24px' }}>
    <button
      onClick={() => {
        const updated = [...resumeData.workExperience, {
          company: '',
          role: '',
          date: '',
          details: ['']
        }];
        setResumeData({ ...resumeData, workExperience: updated });
      }}
      style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '6px 12px',
        cursor: 'pointer'
      }}
    >
      ➕ Add Experience
    </button>
  </div>
)}

                </div>

              </section>


              {/* Education */}
              <section style={{
                background: 'linear-gradient(135deg, #fed7aa 0%, #fbbf24 100%)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #fbbf24',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  margin: 0
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    backgroundColor: resumeStyle.primaryColor
                  }}>
                    🎓
                  </div>
                  Education
                </h3>
                {resumeData.education.map((edu, index) => (
                  <div key={index} style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #f3f4f6'
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                      justifyContent: 'space-between',
                      alignItems: window.innerWidth < 768 ? 'flex-start' : 'center'
                    }}>
                      <div>
                        {editMode ? (
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => {
                              const newEducation = [...resumeData.education];
                              newEducation[index].degree = e.target.value;
                              handleChange('education', newEducation);
                            }}
                            style={{
                              ...inputStyle,
                              fontSize: '18px',
                              fontWeight: '600',
                              marginBottom: '8px',
                              color: '#1f2937',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              padding: '8px'
                            }}
                          />
                        ) : (
                          <h4 style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#1f2937',
                            margin: 0,
                            marginBottom: '4px'
                          }}>
                            {edu.degree}
                          </h4>
                        )}
                        {editMode ? (
                          <input
                            type="text"
                            value={edu.institution}
                            onChange={(e) => {
                              const newEducation = [...resumeData.education];
                              newEducation[index].institution = e.target.value;
                              handleChange('education', newEducation);
                            }}
                            style={{
                              ...inputStyle,
                              marginBottom: 0,
                              fontWeight: '500',
                              color: '#3b82f6',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              padding: '8px'
                            }}
                          />
                        ) : (
                          <p style={{
                            fontWeight: '500',
                            color: '#3b82f6',
                            margin: 0
                          }}>
                            {edu.institution}
                          </p>
                        )}
                      </div>
                      {editMode ? (
                        <input
                          type="text"
                          value={edu.date}
                          onChange={(e) => {
                            const newEducation = [...resumeData.education];
                            newEducation[index].date = e.target.value;
                            handleChange('education', newEducation);
                          }}
                          style={{
                            ...inputStyle,
                            marginBottom: 0,
                            fontSize: '14px',
                            color: '#6b7280',
                            backgroundColor: '#f3f4f6',
                            padding: '12px',
                            borderRadius: '9999px',
                            border: '1px solid #d1d5db',
                            marginTop: window.innerWidth < 768 ? '8px' : 0
                          }}
                        />
                      ) : (
                        <span style={{
                          fontSize: '14px',
                          color: '#6b7280',
                          backgroundColor: '#f3f4f6',
                          padding: '12px',
                          borderRadius: '9999px',
                          marginTop: window.innerWidth < 768 ? '8px' : 0
                        }}>
                          {edu.date}
                        </span>
                      )}
                      {editMode && (
  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
    <button onClick={() => {
      const updated = [...resumeData.education];
      updated.splice(index, 1);
      setResumeData({ ...resumeData, education: updated });
    }}>
      🗑️ Delete
    </button>

    
  </div>
)}

                    </div>
                  </div>
                ))}
                {editMode && (
  <div style={{ marginTop: '16px' }}>
    <button onClick={() => {
      const updated = [...resumeData.education, {
        institution: '',
        degree: '',
        date: ''
      }];
      setResumeData({ ...resumeData, education: updated });
    }}>
      ➕ Add Education
    </button>
  </div>
)}

              </section>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Zoom Controls */}
      <MobileZoomControls />

      {/* Success Message */}
      {showShare && (
        <div style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          color: '#065f46',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
          zIndex: 50,
          animation: 'slideUp 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>✅</span>
            <span>Resume link copied to clipboard!</span>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ResumeTemplate;