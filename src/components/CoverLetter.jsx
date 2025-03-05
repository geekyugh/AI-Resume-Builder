import { useState } from "react";
import axios from "axios";

const CoverLetter = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const generateCoverLetter = async () => {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "gpt-3.5-turbo",
        prompt: `Write a professional cover letter for the following job: ${jobDescription}`,
        max_tokens: 200,
      },
      {
        headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` },
      }
    );

    setCoverLetter(response.data.choices[0].text);
  };

  return (
    <div className="p-5 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold">Cover Letter Generator</h2>
      <textarea
        className="border p-2 w-full mt-2"
        placeholder="Paste job description here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
      <button
        onClick={generateCoverLetter}
        className="bg-blue-500 text-white px-4 py-2 mt-3"
      >
        Generate Cover Letter
      </button>
      {coverLetter && <p className="mt-4 border p-4">{coverLetter}</p>}
    </div>
  );
};

export default CoverLetter;
