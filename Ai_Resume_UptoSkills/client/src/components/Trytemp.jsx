import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const animationStyles = `
@keyframes gradientShift {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

@keyframes float {
  0% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
  100% { transform: translateY(0px) }
}

.template-card {
  transition: all 0.4s ease;
}

.template-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
`;

const TemplateSelection = ({ setActiveStep }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showResumeEditor, setShowResumeEditor] = useState(false);

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = animationStyles;
    document.head.appendChild(styleElement);
    return () => document.head.removeChild(styleElement);
  }, []);

  const templates = [
    {
      id: 1,
      name: "Classic",
      preview: "/assets/classic-resume.png",
      description: "Timeless elegance for traditional industries",
      features: ["Clean layout", "Easy to scan", "ATS-friendly"],
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 2,
      name: "Creative",
      preview: "https://cdn.enhancv.com/predefined-examples/OWMJYjIA657eHTyP8VzUVFluBa69VsJEvlwYdDk6/image.png",
      description: "Stand out with unique flair and personality",
      features: ["Unique design", "Visual elements", "Modern approach"],
      color: "from-rose-500 to-pink-600",
    },
    {
      id: 3,
      name: "Modern",
      preview: "https://cdn.enhancv.com/images/1098/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy8yTTNwUUJUeDk0cFM4dEVDdjBmdWRiZ0VZVEFaY0o3RzFldWhwbVM4L2ltYWdlLnBuZw~~.png",
      description: "Clean, contemporary design for the digital age",
      features: ["Professional", "Minimalist", "Tech-friendly"],
      color: "from-blue-500 to-indigo-600",
    },
  ];

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
    if (setActiveStep) {
      setActiveStep(2);
    }
  };

  const handleContinue = () => {
    setShowResumeEditor(true);
    setTimeout(() => {
      alert(`Proceeding with ${templates.find((t) => t.id === selectedTemplate).name} template`);
      setShowResumeEditor(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const templateVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (showResumeEditor) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="p-6 bg-white/10 rounded-lg">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-white">Loading template...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-6"
      style={{ background: "linear-gradient(90deg, #c4b5e7, #9f9dd4)" }}
    >
      <div className="fixed right-0 top-1/4 w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-20 animate-float"></div>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800">Design Your Career</h1>
        <p className="text-lg text-gray-600">Select a template to showcase your skills</p>
      </motion.header>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {templates.map((template) => (
          <motion.div
            key={template.id}
            variants={templateVariants}
            className={`template-card p-4 rounded-xl bg-white ${
              selectedTemplate === template.id ? "ring-4 ring-blue-500" : "border border-gray-200"
            }`}
            onClick={() => handleSelectTemplate(template.id)}
            whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
          >
            <div className={`p-4 bg-gradient-to-r ${template.color} rounded-t-xl`}>
              <h3 className="text-xl font-bold text-white">{template.name}</h3>
              <p className="text-white text-sm">{template.description}</p>
            </div>
            <img
              src={template.preview}
              alt={`${template.name} preview`}
              className="w-full h-48 object-cover rounded my-3"
            />
            <ul className="flex flex-wrap gap-2 mb-3 justify-center">
              {template.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-${template.color.split("-")[1]}-600`}
                >
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded text-white ${
                selectedTemplate === template.id ? "bg-blue-600" : "bg-blue-500"
              } hover:bg-blue-600`}
            >
              {selectedTemplate === template.id ? "Selected" : "Select"}
            </button>
          </motion.div>
        ))}
      </motion.div>

      {selectedTemplate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-6"
        >
          <button
            onClick={handleContinue}
            className="px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
          >
            Continue with {templates.find((t) => t.id === selectedTemplate).name}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default TemplateSelection;