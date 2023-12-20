const API_BASE_URL = 'https://edstem.onrender.com/api/surveys';

export const submitSurvey = async (surveyData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(surveyData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit survey');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSurveys = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/list`);

    if (!response.ok) {
      throw new Error('Failed to fetch surveys');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
