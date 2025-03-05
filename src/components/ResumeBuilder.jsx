import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumeBuilder = () => {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  // Reference for the printable content
  const resumeRef = useRef();

  // Function to handle PDF generation
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "My_Resume",
  });

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>

      {/* Form Section */}
      <div className="bg-white p-5 shadow-lg rounded-lg mb-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={resume.name}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={resume.email}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={resume.phone}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
        <textarea
          name="education"
          placeholder="Education"
          value={resume.education}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
        <textarea
          name="experience"
          placeholder="Work Experience"
          value={resume.experience}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
        <textarea
          name="skills"
          placeholder="Skills"
          value={resume.skills}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
      </div>

      {/* Resume Preview */}
      <div ref={resumeRef} className="bg-gray-100 p-5 shadow-lg rounded-lg">
        <h3 className="text-xl font-bold">{resume.name}</h3>
        <p>
          {resume.email} | {resume.phone}
        </p>
        <h4 className="font-semibold mt-2">Education:</h4>
        <p>{resume.education}</p>
        <h4 className="font-semibold mt-2">Work Experience:</h4>
        <p>{resume.experience}</p>
        <h4 className="font-semibold mt-2">Skills:</h4>
        <p>{resume.skills}</p>
      </div>

      {/* Download Button */}
      <button
        onClick={handlePrint}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>
    </div>
  );
};

export default ResumeBuilder;
