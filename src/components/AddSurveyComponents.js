import React, { useState } from 'react'
import axios from "axios"

const AddSurveyComponents = () => {
    const [surveyData,setSurvey]= useState({ 
        Name:"",
        EducationLevel:"",
        Skills:[],
        Gender:"",
        PhoneNumber:"",
        Email:""
    })

    const handleInput= (e)=>{
        const{name,value}=e.target
        setSurvey({...surveyData,[name]:value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
await axios.post("https://edstem.onrender.com/surveys/submit",surveyData)
setSurvey({Name:"",
EducationLevel:"",
Skills:[],
Gender:"",
PhoneNumber:"",
Email:""
})
alert("Survey submitted successfully")
        }catch(err){
console.log(Error)
alert("Failed to Submit")
        }
    }
  return (
    <div>
       <h2>Add Survey</h2>
       <form onSubmit={handleSubmit}>
        <input 
        type='text'
        value={surveyData.Name}
        onChange={(e)=>setSurvey({...surveyData, name:e.target.value})}
        placeholder='Name'
        required/>
        <select name="Education" >
  <option value="">--Please choose an option--</option>
  <option value="Graduate">Graduate</option>
  <option value="UnderGraduate">UnderGraduate</option>
  <option value="InterMediate">Inter</option>
  <option value="HighSchool">High School</option>
</select>

       </form>
    </div>
  )
}

export default AddSurveyComponents