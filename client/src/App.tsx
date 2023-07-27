// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
<<<<<<< HEAD
import './App.css'
=======
import { Link } from 'react-router-dom'
>>>>>>> 86cbb794e93a42c5c1b853b120a7033cf86b6690
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
<<<<<<< HEAD
import RingAdmin from './pages/competition/ringAdmin'
import RingJudgeAdmin from './pages/competition/ringJudgeAdmin'
import Tv from './pages/competition/tv'
=======
import Schedule from './pages/competition/schedule'
// import Tv from './pages/competition/tv'
import CheckIn from './pages/competition/checkIn'
import EventInfo from './pages/competition/eventInfo'
import ManageRings from './pages/competition/manageRings'
import Results from './pages/results'
import FinishedEvents from './pages/competition/finishedEvents'
import GrandChampion from './pages/competition/grandChampion'
import Staff from './pages/competition/staff'
import PublicView from './pages/competition/publicView'
>>>>>>> 86cbb794e93a42c5c1b853b120a7033cf86b6690

function App() {

  return (
    <>
<<<<<<< HEAD
=======
      <nav>
        <div className='navRight'>
          <Link to=""><img></img>Competition Kings</Link>
        </div>
        <div className='navLeft'>
          <li className='navSec'><Link to="">Home</Link></li>
          <li className='navSec'><Link to="">About Us</Link></li>
          <li className='navSec'><Link to="">Events</Link></li>
          <li className='navSec'><Link to="">Login</Link></li>
          <li className='navSec'><Link to="">LANG</Link></li>
        </div>
      </nav>


>>>>>>> 86cbb794e93a42c5c1b853b120a7033cf86b6690
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
<<<<<<< HEAD
          <Route path='headJudge' element = {<HeadJudge/>}/>
          <Route path='judge' element = {<Judge/>}/>
          <Route path='ringAdmin' element = {<RingAdmin/>}/>
          <Route path='ringJudgeAdmin' element = {<RingJudgeAdmin/>}/>
          <Route path='tv' element = {<Tv/>}/>
        </Route>
=======
          <Route path='eventInfo' element = {<EventInfo/>}/>
          <Route path='schedule' element = {<Schedule/>}/>
          <Route path='manageRings' element = {<ManageRings/>}/>
          <Route path='checkIn' element = {<CheckIn/>}/>
          {/* <Route path='tv' element = {<Tv/>}/> */}
        </Route>
        <Route path='/competition/headJudge' element = {<HeadJudge/>}/>
        <Route path='competition/judge' element = {<Judge/>}/>
        <Route path='competition/staff' element = {<Staff/>}/>
        <Route path='competition/results' element = {<Results/>}>
          <Route path='finishedEvents' element = {<FinishedEvents/>}/>
          <Route path='grandChampion' element = {<GrandChampion/>}/>
        </Route>
        <Route path='competition/publicView' element = {<PublicView/>}/>
>>>>>>> 86cbb794e93a42c5c1b853b120a7033cf86b6690

      </Routes>
    </>
  )
}

export default App
