import React, { useRef, useState, useCallback } from "react";
import html2pdf from "html2pdf.js";

const ResumeTemplate = () => {
  const [theme, setTheme] = useState("indigo");
  const [font, setFont] = useState("sans");
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: "Vikram Sharma",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
  });
  const [summary, setSummary] = useState(
    "Passionate Full Stack Developer with over 8 years of experience in designing, developing, and deploying scalable web applications. Proficient in modern JavaScript frameworks, backend technologies, and cloud infrastructure."
  );
  const [skills, setSkills] = useState(["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]);
  const [education, setEducation] = useState([
    {
      degree: "B.S. in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "Aug 2011",
      endDate: "May 2015",
      details: ["Graduated with Honors", "President of Computer Science Club"],
    },
    {
      degree: "AWS Certified Solutions Architect",
      school: "AWS Training",
      location: "Online",
      startDate: "Jan 2020",
      endDate: "Mar 2020",
      details: ["Mastered cloud architecture", "Passed certification with 92%"],
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2021",
      endDate: "Present",
      responsibilities: [
        "Led team to build customer platform, increasing retention by 25%.",
        "Designed RESTful APIs, improving efficiency by 30%.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Nexlify Solutions",
      location: "New York, NY",
      startDate: "Jun 2018",
      endDate: "Dec 2020",
      responsibilities: [
        "Developed e-commerce platform for 10,000 daily users.",
        "Optimized database queries, reducing latency by 20%.",
      ],
    },
  ]);
  const [projects, setProjects] = useState([
    {
      title: "Customer Management Platform",
      technologies: ["React", "Node.js", "MongoDB"],
      description: [
        "Built platform for customer data management.",
        "Implemented real-time analytics dashboard.",
      ],
      link: "github.com/vikramsharma/customer-platform",
    },
    {
      title: "E-Commerce Web Application",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      description: [
        "Developed scalable e-commerce site with search features.",
        "Optimized checkout, increasing conversions by 15%.",
      ],
      link: "github.com/vikramsharma/ecommerce-app",
    },
  ]);
  const [contact, setContact] = useState({
    address: "123 Tech Street, San Francisco, CA 94105",
    phone: "(123) 456-7890",
    email: "vikram.sharma@example.com",
    linkedin: "linkedin.com/in/vikramsharma",
    github: "github.com/vikramsharma",
    twitter: "twitter.com/vikramsharma",
    portfolio: "portfolio.com/vikramsharma",
  });
  const resumeRef = useRef();

  const themeClasses = {
    indigo: {
      text: "text-indigo-600",
      textDark: "text-indigo-800",
      border: "border-indigo-400",
      hover: "hover:text-indigo-400",
      button: "bg-indigo-600 hover:bg-indigo-800",
      buttonText: "text-white",
      accent: "bg-indigo-50",
      shadow: "shadow-indigo-400/50",
      link: "text-indigo-500 hover:text-indigo-400",
    },
    blue: {
      text: "text-blue-600",
      textDark: "text-blue-800",
      border: "border-blue-400",
      hover: "hover:text-blue-400",
      button: "bg-blue-600 hover:bg-blue-800",
      buttonText: "text-white",
      accent: "bg-blue-50",
      shadow: "shadow-blue-400/50",
      link: "text-blue-500 hover:text-blue-400",
    },
    emerald: {
      text: "text-emerald-600",
      textDark: "text-emerald-800",
      border: "border-emerald-400",
      hover: "hover:text-emerald-400",
      button: "bg-emerald-600 hover:bg-emerald-800",
      buttonText: "text-white",
      accent: "bg-emerald-50",
      shadow: "shadow-emerald-400/50",
      link: "text-emerald-500 hover:text-emerald-400",
    },
    rose: {
      text: "text-rose-600",
      textDark: "text-rose-800",
      border: "border-rose-400",
      hover: "hover:text-rose-400",
      button: "bg-rose-600 hover:bg-rose-800",
      buttonText: "text-white",
      accent: "bg-rose-50",
      shadow: "shadow-rose-400/50",
      link: "text-rose-500 hover:text-rose-400",
    },
  };

  const fontClasses = {
    sans: "font-sans",
    serif: "font-serif",
    mono: "font-mono",
  };

  const color = themeClasses[theme];

  const handleDownloadPDF = useCallback(() => {
    try {
      const opt = {
        margin: [0.2, 0.2, 0.2, 0.2],
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css"] },
      };
      html2pdf().from(resumeRef.current).set(opt).save().catch((err) => {
        console.error("PDF generation failed:", err.message);
        alert("Failed to generate PDF. Ensure all resources are loaded.");
      });
    } catch (err) {
      console.error("PDF setup error:", err.message);
      alert("Error setting up PDF generation. Check console for details.");
    }
  }, []);

  const handleSaveResume = useCallback(() => {
    const resumeData = {
      personalDetails,
      summary,
      skills,
      education,
      experiences,
      projects,
      contact,
      theme,
      font,
    };
    const blob = new Blob([JSON.stringify(resumeData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume-data.json";
    link.click();
    URL.revokeObjectURL(url);
    alert("Resume saved as JSON file");
  }, [personalDetails, summary, skills, education, experiences, projects, contact, theme, font]);

  const handleShareResume = useCallback(() => {
    const shareData = {
      title: "My Professional Resume",
      text: "Check out my resume showcasing my skills and experience!",
      url: contact.portfolio,
    };
    if (navigator.share && window.innerWidth <= 640) {
      navigator.share(shareData).catch(() => alert("Sharing failed"));
    } else {
      alert("Share Resume: Implement sharing via link or social media");
    }
  }, [contact.portfolio]);

  const addSkill = useCallback(() => {
    if (skills.length < 10) {
      setSkills([...skills, "New Skill"]);
      alert("Added new skill");
    } else {
      alert("Cannot add more than 10 skills");
    }
  }, [skills]);

  const dropSkill = useCallback(() => {
    if (skills.length > 1) {
      setSkills(skills.slice(0, -1));
      alert("Removed last skill");
    } else {
      alert("Cannot remove last skill");
    }
  }, [skills]);

  const addEducation = useCallback(() => {
    setEducation([
      ...education,
      {
        degree: "New Degree",
        school: "New Institution",
        location: "New Location",
        startDate: "Jan 2020",
        endDate: "Dec 2020",
        details: ["New detail"],
      },
    ]);
    alert("Added new education entry");
  }, [education]);

  const dropEducation = useCallback(() => {
    if (education.length > 1) {
      setEducation(education.slice(0, -1));
      alert("Removed last education entry");
    } else {
      alert("Cannot remove last education entry");
    }
  }, [education]);

  const addExperience = useCallback(() => {
    setExperiences([
      ...experiences,
      {
        role: "New Role",
        company: "New Company",
        location: "New Location",
        startDate: "Jan 2020",
        endDate: "Dec 2020",
        responsibilities: ["New responsibility"],
      },
    ]);
    alert("Added new experience entry");
  }, [experiences]);

  const dropExperience = useCallback(() => {
    if (experiences.length > 1) {
      setExperiences(experiences.slice(0, -1));
      alert("Removed last experience entry");
    } else {
      alert("Cannot remove last experience entry");
    }
  }, [experiences]);

  const addProject = useCallback(() => {
    setProjects([
      ...projects,
      {
        title: "New Project",
        technologies: ["New Tech"],
        description: ["New description"],
        link: "github.com/vikramsharma/new-project",
      },
    ]);
    alert("Added new project");
  }, [projects]);

  const dropProject = useCallback(() => {
    if (projects.length > 1) {
      setProjects(projects.slice(0, -1));
      alert("Removed last project");
    } else {
      alert("Cannot remove last project");
    }
  }, [projects]);

  const addContactField = useCallback(() => {
    setContact({ ...contact, [`newField${Object.keys(contact).length + 1}`]: "New Contact" });
    alert("Added new contact field");
  }, [contact]);

  const dropContactField = useCallback(() => {
    const newContact = { ...contact };
    const keys = Object.keys(newContact);
    if (keys.length > 7) {
      delete newContact[keys[keys.length - 1]];
      setContact(newContact);
      alert("Removed last contact field");
    } else {
      alert("Cannot remove default contact fields");
    }
  }, [contact]);

  const handlePersonalDetailsChange = useCallback((field, value) => {
    setPersonalDetails((prev) => ({ ...prev, [field]: value || "" }));
  }, []);

  const handleSkillChange = useCallback((index, value) => {
    setSkills((prev) => {
      const newSkills = [...prev];
      newSkills[index] = value || "";
      return newSkills.filter(skill => skill.trim() !== "");
    });
  }, []);

  const handleEducationChange = useCallback((index, field, value) => {
    setEducation((prev) => {
      const newEducation = [...prev];
      newEducation[index] = { ...newEducation[index], [field]: value || "" };
      return newEducation;
    });
  }, []);

  const handleEducationDetailChange = useCallback((eduIndex, detailIndex, value) => {
    setEducation((prev) => {
      const newEducation = [...prev];
      newEducation[eduIndex].details[detailIndex] = value || "";
      return newEducation;
    });
  }, []);

  const handleExperienceChange = useCallback((index, field, value) => {
    setExperiences((prev) => {
      const newExperiences = [...prev];
      newExperiences[index] = { ...newExperiences[index], [field]: value || "" };
      return newExperiences;
    });
  }, []);

  const handleExperienceResponsibilityChange = useCallback((expIndex, respIndex, value) => {
    setExperiences((prev) => {
      const newExperiences = [...prev];
      newExperiences[expIndex].responsibilities[respIndex] = value || "";
      return newExperiences;
    });
  }, []);

  const handleProjectChange = useCallback((index, field, value) => {
    setProjects((prev) => {
      const newProjects = [...prev];
      newProjects[index] = { ...newProjects[index], [field]: value || (field === "technologies" ? [] : "") };
      return newProjects;
    });
  }, []);

  const handleProjectDescriptionChange = useCallback((projIndex, descIndex, value) => {
    setProjects((prev) => {
      const newProjects = [...prev];
      newProjects[projIndex].description[descIndex] = value || "";
      return newProjects;
    });
  }, []);

  const handleProjectTechChange = useCallback((projIndex, techIndex, value) => {
    setProjects((prev) => {
      const newProjects = [...prev];
      newProjects[projIndex].technologies[techIndex] = value || "";
      return newProjects;
    });
  }, []);

  const handleContactChange = useCallback((field, value) => {
    setContact((prev) => ({ ...prev, [field]: value || "" }));
  }, []);

  const SectionTitle = React.memo(({ children }) => (
    <h2 className={`text-xs sm:text-sm font-semibold ${color.text} ${fontClasses[font]} mb-1 mt-1`}>{children}</h2>
  ));

  const ExperienceItem = React.memo(({ role, company, location, startDate, endDate, responsibilities, index }) => (
    <div className="mb-1">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {isEditing ? (
          <>
            <input
              type="text"
              value={role}
              onChange={(e) => handleExperienceChange(index, "role", e.target.value)}
              className={`font-semibold text-[9px] sm:text-xs ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
              placeholder="Enter role"
            />
            <input
              type="text"
              value={`${startDate} - ${endDate}`}
              onChange={(e) => {
                const [start, end] = e.target.value.split(" - ");
                handleExperienceChange(index, "startDate", start || "");
                handleExperienceChange(index, "endDate", end || "");
              }}
              className={`text-[8px] sm:text-[9px] text-gray-600 border rounded px-1 py-0.5 ${color.accent}`}
              placeholder="Start - End"
            />
          </>
        ) : (
          <>
            <h3 className={`font-semibold text-[9px] sm:text-xs ${fontClasses[font]}`}>{role}</h3>
            <span className="text-[8px] sm:text-[9px] text-gray-600">{startDate} - {endDate}</span>
          </>
        )}
      </div>
      {isEditing ? (
        <input
          type="text"
          value={`${company}, ${location}`}
          onChange={(e) => {
            const [comp, loc] = e.target.value.split(", ");
            handleExperienceChange(index, "company", comp || "");
            handleExperienceChange(index, "location", loc || "");
          }}
          className={`italic ${color.textDark} ${fontClasses[font]} text-[8px] sm:text-[9px] border rounded px-1 py-0.5 ${color.accent}`}
          placeholder="Company, Location"
        />
      ) : (
        <p className={`italic ${color.textDark} ${fontClasses[font]} text-[8px] sm:text-[9px]`}>{company}, {location}</p>
      )}
      <ul className={`list-disc list-inside mt-0.5 space-y-0.5 text-gray-700 text-[8px] sm:text-[9px] ${fontClasses[font]}`}>
        {responsibilities.map((resp, i) => (
          <li key={`resp-${index}-${i}`}>
            {isEditing ? (
              <input
                type="text"
                value={resp}
                onChange={(e) => handleExperienceResponsibilityChange(index, i, e.target.value)}
                className={`w-full border rounded px-1 py-0.5 ${color.accent}`}
                placeholder="Enter responsibility"
              />
            ) : (
              resp
            )}
          </li>
        ))}
      </ul>
    </div>
  ));

  const ProjectItem = React.memo(({ title, technologies, description, link, index }) => (
    <div className="mb-1">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => handleProjectChange(index, "title", e.target.value)}
              className={`font-semibold text-[9px] sm:text-xs ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
              placeholder="Enter project title"
            />
            <input
              type="text"
              value={link}
              onChange={(e) => handleProjectChange(index, "link", e.target.value)}
              className={`${color.link} text-[8px] sm:text-[9px] border rounded px-1 py-0.5 ${color.accent}`}
              placeholder="Enter project link"
            />
          </>
        ) : (
          <>
            <h3 className={`font-semibold text-[9px] sm:text-xs ${fontClasses[font]}`}>{title}</h3>
            <a href={`https://${link}`} className={`${color.link} text-[8px] sm:text-[9px]`} target="_blank" rel="noreferrer">
              {link}
            </a>
          </>
        )}
      </div>
      {isEditing ? (
        <input
          type="text"
          value={technologies.join(", ")}
          onChange={(e) => handleProjectChange(index, "technologies", e.target.value.split(", ").map(t => t.trim()).filter(t => t))}
          className={`italic ${color.textDark} ${fontClasses[font]} text-[8px] sm:text-[9px] border rounded px-1 py-0.5 ${color.accent}`}
          placeholder="Enter technologies (comma-separated)"
        />
      ) : (
        <p className={`italic ${color.textDark} ${fontClasses[font]} text-[8px] sm:text-[9px]`}>{technologies.join(", ")}</p>
      )}
      <ul className={`list-disc list-inside mt-0.5 space-y-0.5 text-gray-700 text-[8px] sm:text-[9px] ${fontClasses[font]}`}>
        {description.map((desc, i) => (
          <li key={`desc-${index}-${i}`}>
            {isEditing ? (
              <input
                type="text"
                value={desc}
                onChange={(e) => handleProjectDescriptionChange(index, i, e.target.value)}
                className={`w-full border rounded px-1 py-0.5 ${color.accent}`}
                placeholder="Enter description"
              />
            ) : (
              desc
            )}
          </li>
        ))}
      </ul>
    </div>
  ));

  const EducationItem = React.memo(({ degree, school, location, startDate, endDate, details, index }) => (
    <div className="mb-1">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {isEditing ? (
          <>
            <input
              type="text"
              value={degree}
              onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
              className={`font-semibold text-[9px] sm:text-xs ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
              placeholder="Enter degree"
            />
            <input
              type="text"
              value={`${startDate} - ${endDate}`}
              onChange={(e) => {
                const [start, end] = e.target.value.split(" - ");
                handleEducationChange(index, "startDate", start || "");
                handleEducationChange(index, "endDate", end || "");
              }}
              className={`text-[8px] sm:text-[9px] text-gray-600 border rounded px-1 py-0.5 ${color.accent}`}
              placeholder="Start - End"
            />
          </>
        ) : (
          <>
            <h3 className={`font-semibold text-[9px] sm:text-xs ${fontClasses[font]}`}>{degree}</h3>
            <span className="text-[8px] sm:text-[9px] text-gray-600">{startDate} - {endDate}</span>
          </>
        )}
      </div>
      {isEditing ? (
        <input
          type="text"
          value={`${school}, ${location}`}
          onChange={(e) => {
            const [sch, loc] = e.target.value.split(", ");
            handleEducationChange(index, "school", sch || "");
            handleEducationChange(index, "location", loc || "");
          }}
          className={`italic ${color.textDark} ${fontClasses[font]} text-[8px] sm:text-[9px] border rounded px-1 py-0.5 ${color.accent}`}
          placeholder="School, Location"
        />
      ) : (
        <p className={`italic ${color.textDark} ${fontClasses[font]} text-[8px] sm:text-[9px]`}>{school}, {location}</p>
      )}
      <ul className={`list-disc list-inside mt-0.5 space-y-0.5 text-gray-700 text-[8px] sm:text-[9px] ${fontClasses[font]}`}>
        {details.map((detail, i) => (
          <li key={`detail-${index}-${i}`}>
            {isEditing ? (
              <input
                type="text"
                value={detail}
                onChange={(e) => handleEducationDetailChange(index, i, e.target.value)}
                className={`w-full border rounded px-1 py-0.5 ${color.accent}`}
                placeholder="Enter detail"
              />
            ) : (
              detail
            )}
          </li>
        ))}
      </ul>
    </div>
  ));

  const ContactItem = React.memo(({ label, value, href, field }) => (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
      <span className={`font-semibold text-[8px] sm:text-[9px] ${color.text} ${fontClasses[font]}`}>{label}:</span>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => handleContactChange(field, e.target.value)}
          className={`text-[8px] sm:text-[9px] text-gray-700 ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      ) : href ? (
        <a href={href} className={`${color.link} text-[8px] sm:text-[9px] ${fontClasses[font]}`} target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : (
        <span className={`text-[8px] sm:text-[9px] text-gray-700 ${fontClasses[font]}`}>{value}</span>
      )}
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-3">
      <div className="max-w-4xl mx-auto mb-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
        <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <button
              className={`${color.button} ${color.buttonText} px-2 py-1 rounded text-[9px] sm:text-xs transition w-full sm:w-auto focus:outline-none ${color.shadow}`}
              onClick={() => setIsUploadOpen(!isUploadOpen)}
            >
              Upload Resume
            </button>
            {isUploadOpen && (
              <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md w-36 sm:w-40">
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={() => alert("Manual Edit: Implement form-based editing")}
                >
                  Manual Edit
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={() => alert("AI Edit: Upload resume for AI suggestions")}
                >
                  AI Edit
                </button>
              </div>
            )}
          </div>
          <div className="relative w-full sm:w-auto">
            <button
              className={`${color.button} ${color.buttonText} px-2 py-1 rounded text-[9px] sm:text-xs transition w-full sm:w-auto focus:outline-none ${color.shadow}`}
              onClick={() => setIsAIOpen(!isAIOpen)}
            >
              AI Assistant
            </button>
            {isAIOpen && (
              <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md w-36 sm:w-40">
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={() => alert("AI improving profile content")}
                >
                  Improve Profile
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={() => alert("AI enhancing experience descriptions")}
                >
                  Enhance Experience
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={() => alert("AI generating project descriptions")}
                >
                  Projects Description
                </button>
              </div>
            )}
          </div>
          <div className="relative w-full sm:w-auto">
            <button
              className={`${color.button} ${color.buttonText} px-2 py-1 rounded text-[9px] sm:text-xs transition w-full sm:w-auto focus:outline-none ${color.shadow}`}
              onClick={() => setIsEditOpen(!isEditOpen)}
            >
              Edit Sections
            </button>
            {isEditOpen && (
              <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md w-36 sm:w-40">
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={addSkill}
                >
                  Add Skill
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={dropSkill}
                >
                  Drop Skill
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={addEducation}
                >
                  Add Education
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={dropEducation}
                >
                  Drop Education
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={addExperience}
                >
                  Add Experience
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={dropExperience}
                >
                  Drop Experience
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={addProject}
                >
                  Add Project
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={dropProject}
                >
                  Drop Project
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={addContactField}
                >
                  Add Contact
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-[9px] sm:text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={dropContactField}
                >
                  Drop Contact
                </button>
              </div>
            )}
          </div>
          <button
            className={`${color.button} ${color.buttonText} px-2 py-1 rounded text-[9px] sm:text-xs transition w-full sm:w-auto focus:outline-none ${color.shadow}`}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Save Edits" : "Edit Content"}
          </button>
          <button
            className={`${color.button} ${color.buttonText} px-2 py-1 rounded text-[9px] sm:text-xs transition w-full sm:w-auto focus:outline-none ${color.shadow}`}
            onClick={handleSaveResume}
          >
            Save Resume
          </button>
          <button
            className={`${color.button} ${color.buttonText} px-2 py-1 rounded text-[9px] sm:text-xs transition w-full sm:w-auto focus:outline-none ${color.shadow}`}
            onClick={handleShareResume}
          >
            Share Resume
          </button>
          <button
            className={`${color.button} ${color.buttonText} px-2 py-1 rounded text-[9px] sm:text-xs transition w-full sm:w-auto focus:outline-none ${color.shadow}`}
            onClick={handleDownloadPDF}
          >
            Download PDF
          </button>
        </div>
        <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className={`border rounded px-2 py-1 text-[9px] sm:text-xs w-full sm:w-auto focus:outline-none ${color.accent}`}
          >
            <option value="indigo">Indigo</option>
            <option value="blue">Blue</option>
            <option value="emerald">Emerald</option>
            <option value="rose">Rose</option>
          </select>
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className={`border rounded px-2 py-1 text-[9px] sm:text-xs w-full sm:w-auto focus:outline-none ${color.accent}`}
          >
            <option value="sans">Sans</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
          </select>
        </div>
      </div>

      <div
        ref={resumeRef}
        className={`max-w-3xl mx-auto bg-white p-2 sm:p-3 shadow-lg rounded-lg text-gray-900 text-[8px] sm:text-[9px] ${fontClasses[font]} break-inside-avoid ${color.shadow}`}
        style={{ minHeight: "9in", maxHeight: "9in" }}
      >
        <header className="text-center mb-1 pb-0.5">
          {isEditing ? (
            <>
              <input
                type="text"
                value={personalDetails.name}
                onChange={(e) => handlePersonalDetailsChange("name", e.target.value)}
                className={`text-sm sm:text-base font-bold ${color.textDark} ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
                placeholder="Enter name"
              />
              <input
                type="text"
                value={personalDetails.title}
                onChange={(e) => handlePersonalDetailsChange("title", e.target.value)}
                className={`text-[8px] sm:text-[9px] text-gray-700 ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
                placeholder="Enter title"
              />
              <div className="mt-0.5 flex flex-wrap justify-center gap-1 sm:gap-2 text-gray-600 text-[8px] sm:text-[9px]">
                <input
                  type="text"
                  value={personalDetails.location}
                  onChange={(e) => handlePersonalDetailsChange("location", e.target.value)}
                  className={`text-[8px] sm:text-[9px] text-gray-600 ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
                  placeholder="Enter location"
                />
                <input
                  type="text"
                  value={contact.phone}
                  onChange={(e) => handleContactChange("phone", e.target.value)}
                  className={`${color.link} ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
                  placeholder="Enter phone"
                />
                <input
                  type="text"
                  value={contact.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                  className={`${color.link} ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
                  placeholder="Enter email"
                />
                <input
                  type="text"
                  value={contact.portfolio}
                  onChange={(e) => handleContactChange("portfolio", e.target.value)}
                  className={`${color.link} ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
                  placeholder="Enter portfolio URL"
                />
                <input
                  type="text"
                  value={contact.linkedin}
                  onChange={(e) => handleContactChange("linkedin", e.target.value)}
                  className={`${color.link} ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
                  placeholder="Enter LinkedIn URL"
                />
                <input
                  type="text"
                  value={contact.github}
                  onChange={(e) => handleContactChange("github", e.target.value)}
                  className={`${color.link} ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
                  placeholder="Enter GitHub URL"
                />
                <input
                  type="text"
                  value={contact.twitter}
                  onChange={(e) => handleContactChange("twitter", e.target.value)}
                  className={`${color.link} ${fontClasses[font]} border rounded px-1 py-0.5 ${color.accent}`}
                  placeholder="Enter Twitter URL"
                />
              </div>
            </>
          ) : (
            <>
              <h1 className={`text-sm sm:text-base font-bold ${color.textDark} ${fontClasses[font]}`}>{personalDetails.name}</h1>
              <p className={`text-[8px] sm:text-[9px] text-gray-700 ${fontClasses[font]}`}>{personalDetails.title}</p>
              <div className="mt-0.5 flex flex-wrap justify-center gap-1 sm:gap-2 text-gray-600 text-[8px] sm:text-[9px]">
                <span>{personalDetails.location}</span>
                <a href={`tel:${contact.phone}`} className={`${color.link} ${fontClasses[font]}`}>
                  {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className={`${color.link} ${fontClasses[font]}`}>
                  {contact.email}
                </a>
                <a href={`https://${contact.portfolio}`} className={`${color.link} ${fontClasses[font]}`} target="_blank" rel="noreferrer">
                  {contact.portfolio}
                </a>
                <a href={`https://${contact.linkedin}`} className={`${color.link} ${fontClasses[font]}`} target="_blank" rel="noreferrer">
                  {contact.linkedin}
                </a>
                <a href={`https://${contact.github}`} className={`${color.link} ${fontClasses[font]}`} target="_blank" rel="noreferrer">
                  {contact.github}
                </a>
                <a href={`https://${contact.twitter}`} className={`${color.link} ${fontClasses[font]}`} target="_blank" rel="noreferrer">
                  {contact.twitter}
                </a>
              </div>
            </>
          )}
        </header>

        <section className="mb-1">
          <SectionTitle>Professional Summary</SectionTitle>
          {isEditing ? (
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className={`w-full text-gray-700 whitespace-pre-line leading-tight ${fontClasses[font]} text-[8px] sm:text-[9px] border rounded px-1 py-0.5 ${color.accent}`}
              rows="2"
              placeholder="Enter professional summary"
            />
          ) : (
            <p className={`text-gray-700 whitespace-pre-line leading-tight ${fontClasses[font]} text-[8px] sm:text-[9px]`}>{summary}</p>
          )}
        </section>

        <section className="mb-1">
          <SectionTitle>Technical Skills</SectionTitle>
          <ul className={`list-disc list-inside text-gray-700 space-y-0.5 text-[8px] sm:text-[9px] ${fontClasses[font]}`}>
            {skills.map((skill, i) => (
              <li key={`skill-${i}`}>
                {isEditing ? (
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(i, e.target.value)}
                    className={`w-full border rounded px-1 py-0.5 ${color.accent}`}
                    placeholder="Enter skill"
                  />
                ) : (
                  skill
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-1">
          <SectionTitle>Work Experience</SectionTitle>
          {experiences.map((job, idx) => (
            <ExperienceItem key={`exp-${idx}`} {...job} index={idx} />
          ))}
        </section>

        <section className="mb-1">
          <SectionTitle>Projects</SectionTitle>
          {projects.map((project, idx) => (
            <ProjectItem key={`proj-${idx}`} {...project} index={idx} />
          ))}
        </section>

        <section className="mb-1">
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, idx) => (
            <EducationItem key={`edu-${idx}`} {...edu} index={idx} />
          ))}
        </section>

        <section className="mb-1">
          <SectionTitle>Contact</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 text-[8px] sm:text-[9px]">
            <ContactItem label="Address" value={contact.address} field="address" />
            <ContactItem label="Phone" value={contact.phone} href={`tel:${contact.phone}`} field="phone" />
            <ContactItem label="Email" value={contact.email} href={`mailto:${contact.email}`} field="email" />
            <ContactItem label="LinkedIn" value={contact.linkedin} href={`https://${contact.linkedin}`} field="linkedin" />
            <ContactItem label="GitHub" value={contact.github} href={`https://${contact.github}`} field="github" />
            <ContactItem label="Twitter" value={contact.twitter} href={`https://${contact.twitter}`} field="twitter" />
            <ContactItem label="Portfolio" value={contact.portfolio} href={`https://${contact.portfolio}`} field="portfolio" />
            {Object.entries(contact).map(([key, value]) =>
              key.startsWith("newField") ? <ContactItem key={`contact-${key}`} label={key} value={value} field={key} /> : null
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumeTemplate;
