import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddSurveyComponents from './AddSurveyComponents'
import SurveyListComponent from './SurveyListComponent'

const Allroutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<SurveyListComponent />} />
        <Route path='/submit' element={<AddSurveyComponents/>} />
        </Routes>
    </div>
  )
}

export default Allroutes