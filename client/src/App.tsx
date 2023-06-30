// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import CreateCompetition from './pages/createCompetition'
import Register from './pages/register'
import Competition from './pages/competition'
import CompetitorSignUp from './pages/register/competitorSignUp'
import Payment from './pages/register/payment'
import Basics from './pages/createCompetition/basics'
import CompetitorInfo from './pages/createCompetition/competitorInfo'
import Congrats from './pages/createCompetition/congrats'
import FeesAndContact from './pages/createCompetition/feesAndContact'
import Events from './pages/createCompetition/events'
import Preview from './pages/createCompetition/preview'
import Restrictions from './pages/createCompetition/restrictions'
import Rings from './pages/createCompetition/rings'
import Rules from './pages/createCompetition/rules'
import HeadJudge from './pages/competition/headJudge'
import Judge from './pages/competition/judge'
import RingManagement from './pages/competition/ringManagement'
import Tv from './pages/competition/tv'
import AdminPage from './pages/competition/adminPage'
import CheckIn from './pages/competition/checkIn'

function App() {

  return (
    <>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path='/signUp' element = {<SignUp/>}/>
        <Route path='/signIn' element = {<SignIn/>}/>
        <Route path='/createCompetition' element = {<CreateCompetition/>}>
          <Route path='basics' element = {<Basics/>}/>
          <Route path='competitorInfo' element = {<CompetitorInfo/>}/>
          <Route path='congrats' element = {<Congrats/>}/>
          <Route path='events' element = {<Events/>}/>
          <Route path='feesAndContact' element = {<FeesAndContact/>}/>
          <Route path='preview' element = {<Preview/>}/>
          <Route path='restrictions' element = {<Restrictions/>}/>
          <Route path='rings' element = {<Rings/>}/>
          <Route path='rules' element = {<Rules/>}/>
        </Route>

        <Route path='/register' element = {<Register/>}>
          <Route path='competitorSignUp' element = {<CompetitorSignUp/>}/>
          <Route path='payment' element = {<Payment/>}/>
        </Route>

        <Route path='/competition' element = {<Competition/>}>
          <Route index element = {<AdminPage/>}/>
          <Route path='ringManagement' element = {<RingManagement/>}/>
          <Route path='headJudge' element = {<HeadJudge/>}/>
          <Route path='judge' element = {<Judge/>}/>  
          <Route path='tv' element = {<Tv/>}/>
          <Route path='checkIn' element = {<CheckIn/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
