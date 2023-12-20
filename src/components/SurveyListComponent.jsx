import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SurveyListComponent = () => {
    const[surveyData,SetSurveyData]=useState([])
    useEffect(()=>{
        const fetchData =async()=>{
            try{
                const res=await axios.get("https://edstem.onrender.com/surveys/list")
                SetSurveyData(res.data)
            }catch(err){
                console.error(err)
            }
        }
        fetchData()
    },[])
  return (
    <div>
        <h2>
            List
        </h2>
        <ul>
        {surveyData.map((survey)=>{
<li key={survey._id}>
    <p>{survey.Name}</p>
    <p>{survey.Email}</p>
</li>
        })}
        </ul>
    </div>
  )
}

export default SurveyListComponent