import React from 'react'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SignIn from './signIn/signIn'
import SignUp from './SignUp/SignUp'
import PersonalInfo from './information/personalInfo'
import FamilyInfo from './information/familyInfo/familyInfo'
import MoreInfo from './information/moreInfo'
import Album from './present/displaySelected'
import { authUser, currUserSelectore, fetchUsers, setUser, usersSelectore } from '../app/features/users/usersSlice'
import { fetchCandidates } from '../app/features/candidiates/candidatesSlice'
import { fetchPersons, personsSelector } from '../app/features/persons/personsSlice'
import { fetchTags } from '../app/features/tags/tagsSlice'

function App() {
  const dispatch = useDispatch()
  const currUser = useSelector(currUserSelectore)
  
  const getCandidates = () => {
    console.log(currUser);
    dispatch(fetchCandidates(currUser.accessToken))
  }
  const print = () => {
    const tags = useSelector((state) => state.tags.tags)
    console.log(tags);
  }
  return (
    <React.StrictMode>
      <button onClick={() => dispatch(fetchUsers())}>fetchUsers</button>
      <button onClick={() => dispatch(authUser('haim', '1234'))}>setUser</button>
      <button onClick={() => getCandidates()}>candidates</button>
      <button onClick={() => dispatch(fetchPersons(currUser.accessToken))}>persons</button>
      <button onClick={() => dispatch(fetchTags(currUser.accessToken))}>tags</button>
      <button onClick={print}>print</button>
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
