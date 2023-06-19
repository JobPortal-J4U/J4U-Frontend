import React, { useState } from 'react';

const ApplicationForm = () => {
  const [education, setEducation] = useState([{ institution: '', degree: '', year: '' }]);
  const [experience, setExperience] = useState([{ company: '', position: '', years: '' }]);

  const handleEducationChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (index, event) => {
    const { name, value } = event.target;
    const updatedExperience = [...experience];
    updatedExperience[index][name] = value;
    setExperience(updatedExperience);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institution: '', degree: '', year: '' }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', position: '', years: '' }]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Job Application Form</h2>

      <h3>Education</h3>
      {education.map((edu, index) => (
        <div key={index}>
          <label htmlFor={`institution-${index}`}>Institution:</label>
          <input
            type="text"
            id={`institution-${index}`}
            name="institution"
            value={edu.institution}
            onChange={(event) => handleEducationChange(index, event)}
          />

          <label htmlFor={`degree-${index}`}>Degree:</label>
          <input
            type="text"
            id={`degree-${index}`}
            name="degree"
            value={edu.degree}
            onChange={(event) => handleEducationChange(index, event)}
          />

          <label htmlFor={`year-${index}`}>Year:</label>
          <input
            type="text"
            id={`year-${index}`}
            name="year"
            value={edu.year}
            onChange={(event) => handleEducationChange(index, event)}
          />

          <button type="button" onClick={() => handleRemoveEducation(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddEducation}>
        Add More Education
      </button>

      <h3>Experience</h3>
      {experience.map((exp, index) => (
        <div key={index}>
          <label htmlFor={`company-${index}`}>Company:</label>
          <input
            type="text"
            id={`company-${index}`}
            name="company"
            value={exp.company}
            onChange={(event) => handleExperienceChange(index, event)}
          />

          <label htmlFor={`position-${index}`}>Position:</label>
          <input
            type="text"
            id={`position-${index}`}
            name="position"
            value={exp.position}
            onChange={(event) => handleExperienceChange(index, event)}
          />

          <label htmlFor={`years-${index}`}>Years:</label>
          <input
            type="text"
            id={`years-${index}`}
            name="years"
            value={exp.years}
            onChange={(event) => handleExperienceChange(index, event)}
          />

          <button type="button" onClick={() => handleRemoveExperience(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddExperience}>
        Add More Experience
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplicationForm;
