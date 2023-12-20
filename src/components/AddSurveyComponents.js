import React, { useState } from 'react'
import axios from "axios"
import { submitSurvey } from './api';

const AddSurveyComponents = () => {
  const [surveyData, setSurveyData] = useState({
    name: '',
    educationLevel: '',
    skills: [],
    gender: '',
    phoneNumber: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSurveyData({ ...surveyData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call API to submit survey
      await submitSurvey(surveyData);
      // Reset form after successful submission
      setSurveyData({
        name: '',
        educationLevel: '',
        skills: [],
        gender: '',
        phoneNumber: '',
        email: ''
      });
      alert('Survey submitted successfully!');
    } catch (error) {
      alert('Failed to submit survey');
      console.error(error);
    }
  };
  return (
    <div className="survey-form">
    <h2>Add Survey</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={surveyData.Name}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Other form fields */}
      {/* Education Level */}
      <div className="form-group">
        <label htmlFor="educationLevel">Education Level</label>
        <select
          id="educationLevel"
          name="educationLevel"
          value={surveyData.educationLevel}
          onChange={handleInputChange}
        >
          {/* Options for education levels */}
        </select>
      </div>
      {/* Skills */}
      <div className="form-group">
        <label htmlFor="skills">Skills</label>
        <select
          id="skills"
          name="skills"
          multiple
          value={surveyData.skills}
          onChange={handleInputChange}
        >
          {/* Options for skills */}
        </select>
      </div>
      {/* Gender */}
      <div className="form-group">
        <label>Gender</label>
        <div>
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={surveyData.gender === 'Male'}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={surveyData.gender === 'Female'}
              onChange={handleInputChange}
            />
            Female
          </label>
        </div>
      </div>
      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number *</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={surveyData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={surveyData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default AddSurveyComponents