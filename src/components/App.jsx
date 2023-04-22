import React from 'react'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'

import SignIn from './signIn/signIn'
import SignUp from './SignUp/SignUp'
import PersonalInfo from './information/personalInfo'
import FamilyInfo from './information/familyInfo/familyInfo'
import MoreInfo from './information/moreInfo'
import Album from './present/displaySelected'


function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/Album' element={<Album />} />
        <Route path='/personalInfo' element={<PersonalInfo />} />
        <Route path='/familyInfo' element={<FamilyInfo />} />
        <Route path='/moreInfo' element={<MoreInfo />} />
      </Routes>
    </React.StrictMode>
  )
}

export default App
