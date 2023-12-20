import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getSurveys } from './api';

const SurveyListComponent = () => {
    const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    // Fetch surveys when the component mounts
    fetchSurveys();
  }, []);

  const fetchSurveys = async () => {
    try {
      const data = await getSurveys();
      setSurveys(data.surveys);
    } catch (error) {
      console.error('Error fetching surveys:', error.message);
    }
  };
  return (
    <div className="survey-list">
    <h2>Survey List</h2>
    <ul>
      {surveys.map((survey) => (
        <li key={survey._id}>
          <strong>Name:</strong> {survey.name}<br />
          <strong>Education Level:</strong> {survey.educationLevel}<br />
          {/* Add other survey details */}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default SurveyListComponent