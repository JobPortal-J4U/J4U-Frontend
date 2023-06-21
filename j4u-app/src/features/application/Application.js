import React, { useState } from "react";
import "./Application.css";

const Application = () => {
  var experiencesLst;
  var Lsteducation;
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    nrc: "",
    dateOfBirth: "",
    gender: "",
    race: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [education, setEducation] = useState([
    { highSchoolName: "", degreeName: "", startDate: "", endDate: "" },
  ]);
  const [experience, setExperience] = useState([
    { companyName: "", position: "", startDates: "", endDates: "" },
  ]);

  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
    setEducation([
      ...education,
      { highSchoolName: "", degreeName: "", startDate: "", endDate: "" },
    ]);
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      { companyName: "", position: "", startDates: "", endDates: "" },
    ]);
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
    if (!isEducationFormComplete() || !isExperienceFormComplete()) {
      alert("Please fill in all the required fields.");
      return;
    }
    const formData = {
      personalInfo,
      education,
      experience,
    };
    console.log(formData); // Example: Log the form data

    // Perform form submission logic here
    // For example, you can make an API request to send the form data

    // Reset the form after submission
    setPersonalInfo({
      name: "",
      nrc: "",
      dateOfBirth: "",
      gender: "",
      race: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
    setEducation([
      { highSchoolName: "", degreeName: "", startDate: "", endDate: "" },
    ]);
    setExperience([{ companyName: "", position: "", startDates: "", endDates: "" }]);
  };

  const isEducationFormComplete = () => {
    return education.every((edu) => {
      return (
        edu.highSchoolName && edu.degreeName && edu.startDate && edu.endDate
      );
    });
  };

  const isExperienceFormComplete = () => {
    return experience.every((exp) => {
      return exp.companyName && exp.position && exp.startDates && exp.endDates;
    });
  };
  return (
    <section>
      <div class="container my-3 mx-auto app">
        <h4 class="mb-3 my-4 text-center">Apply For The Job</h4>

        <form class="p-4" onSubmit={handleSubmit}>
          <div class="row g-3">
            <div className="col-12  ">
              <h4>Personal Info</h4>
            </div>
            <div class="col-12 col-sm-4">
              <label for="" class="form-label">
                Your Name*{" "}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={personalInfo.name}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>

            <div class="col-12 col-sm-4">
              <label for="" class="form-label">
                NRC*{" "}
              </label>
              <input
                type="text"
                id="nrc"
                name="nrc"
                className="form-control"
                placeholder="NRC"
                value={personalInfo.nrc}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>
            <div class="col-12 col-sm-4">
              <label for="" class="form-label">
                Date Of Birth*{" "}
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="form-control"
                placeholder="Date Of Birth"
                value={personalInfo.dateOfBirth}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>

            <div class="col-12 col-sm-4">
              <label for="" class="form-label">
                Gender*{" "}
              </label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
                id="gender"
                name="gender"
                value={personalInfo.gender}
                onChange={handlePersonalInfoChange}
                required
              >
                <option selected>Select Gender</option>
                <option value="1">MALE</option>
                <option value="2">FEMALE</option>
                <option value="3">CUSTOM</option>
              </select>
            </div>

            <div class="col-12 col-sm-4 ">
              <label for="" class="form-label">
                Race*{" "}
              </label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
                id="race"
                name="race"
                value={personalInfo.race}
                onChange={handlePersonalInfoChange}
                required
              >
                <option selected>Select Race</option>
                <option value="1">KAYIN</option>
                <option value="2">BURMESE</option>
              </select>
            </div>

            <div class="col-12 col-sm-4">
              <label for="" class="form-label">
                Your Email*{" "}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>
            <div class="col-12 col-sm-4 mb-3">
              <label for="" class="form-label">
                Your Phone Number*{" "}
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="09xxxxxxxxx"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>

            <div class="col-12 col-sm-8 mb-3">
              <label for="" class="form-label">
                Address*{" "}
              </label>
              <input
                type="address"
                id="address"
                name="address"
                className="form-control"
                placeholder="Your Address"
                value={personalInfo.address}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>
            <div className="col-12 col-sm-4 my-4">
              <h4>Education</h4>
            </div>
            <div className="col-12 col-sm-3  my-4">
              <button
                class="button btn btn-outline-dark more"
                type="button"
                onClick={handleAddEducation}
                disabled={!isEducationFormComplete()}
              >
                Add More <i class="fa-solid fa-plus "></i>
              </button>
            </div>

            {education.map((edu, index) => (
              <div key={index} className="row ">
                <div class="col-12 col-sm-4 mb-3 ">
                  <label htmlFor={`highSchoolName-${index}`} class="form-label">
                    High School *
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id={`highSchoolName-${index}`}
                    name="highSchoolName"
                    value={edu.highSchoolName}
                    onChange={(event) => handleEducationChange(index, event)}
                  />
                </div>

                <div class="col-12 col-sm-3 mb-3 ">
                  <label htmlFor={`degreeName-${index}`} class="form-label">
                    degreeName*
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id={`degreeName-${index}`}
                    name="degreeName"
                    value={edu.degreeName}
                    onChange={(event) => handleEducationChange(index, event)}
                  />
                </div>
                <div class="col-12 col-sm-2 mb-3 ">
                  <label htmlFor={`startDate-${index}`} class="form-label">
                    StartDate*
                  </label>
                  <input
                    class="form-control"
                    type="date"
                    id={`startDate-${index}`}
                    name="startDate"
                    value={edu.startDate}
                    onChange={(event) => handleEducationChange(index, event)}
                  />
                </div>
                <div class="col-12 col-sm-2 mb-3 ">
                  <label htmlFor={`endDate-${index}`} class="form-label">
                    EndDate*
                  </label>
                  <input
                    class="form-control"
                    type="date"
                    id={`endDate-${index}`}
                    name="endDate"
                    value={edu.endDate}
                    onChange={(event) => handleEducationChange(index, event)}
                  />
                </div>

                <div class="col-12 col-sm-1 mb-3 ">
                  {index !== 0 && (
                    <>
                      <label class="form-label ">Remove*</label>
                      <button
                        className="form-control button btn btn-outline-dark more1 "
                        onClick={() => handleRemoveEducation(index)}
                      >
                       <i class="fa-solid fa-minus"></i>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}

            <div className="col-12 col-sm-4 my-4">
              <h4>Experience</h4>
            </div>
            <div className="col-12 col-sm-3  my-4">
              <button
                class=" button btn btn-outline-dark more"
                type="button"
                onClick={handleAddExperience}
                disabled={!isExperienceFormComplete()}
              >
                Add More <i class="fa-solid fa-plus "></i>
              </button>
            </div>

            {experience.map((exp, index) => (
              <div key={index} className="row">
                <div class="col-12 col-sm-4 mb-3 ">
                  <label htmlFor={`companyName-${index}`} class="form-label">
                    companyName*
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id={`companyName-${index}`}
                    name="companyName"
                    value={exp.companyName}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>

                <div class="col-12 col-sm-3 mb-3 ">
                  <label htmlFor={`position-${index}`} class="form-label">
                    Position*
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id={`position-${index}`}
                    name="position"
                    value={exp.position}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>
                <div class="col-12 col-sm-2 mb-3 ">
                  <label htmlFor={`startDates-${index}`} class="form-label">
                    Start Date*
                  </label>
                  <input
                    class="form-control"
                    type="date"
                    id={`startDates-${index}`}
                    name="startDates"
                    value={exp.startDates}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>
                <div class="col-12 col-sm-2 mb-3 ">
                  <label htmlFor={`endDates-${index}`} class="form-label">
                    End Date*
                  </label>
                  <input
                    class="form-control"
                    type="date"
                    id={`endDates-${index}`}
                    name="endDates"
                    value={exp.endDates}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>

                <div class="col-12 col-sm-1 mb-3 ">
                {index !== 0 && (
                  <>
                  <label class="form-label ">Remove*</label>
                  <button
                    class="form-control button btn btn-outline-dark more1 "
                    type="button"
                    onClick={() => handleRemoveExperience(index)}
                  >
                   <i class="fa-solid fa-minus"></i>
                  </button>
                  </>
                )}
                </div>
              </div>
            ))}
            {/* 
            <div class="col-12 col-sm-6">
              <input type="file" class="form-control bg-white" />
            </div> */}
            {/* <div class="col-12">
              <textarea
                class="form-control"
                rows="5"
                placeholder="Coverletter"
              ></textarea>
            </div> */}
            <div class="col-12 d-flex justify-content-end">
              <button class="btn btn-outline-primary w-25 " type="submit">
                Apply Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Application;
