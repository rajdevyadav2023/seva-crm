import React from 'react'
import HomeHeader from './HomeHeader'
import { Route, Routes } from 'react-router-dom'
// --------------------------Dashboard---------------------------------
import AdminDashboard from './pages/dashboard/AdminDashboard'
import GISdashboard from './pages/dashboard/GISdashboard'
// --------------------------FAQ---------------------------------
import FAQ from './pages/faq/FAQ'
// --------------------------Technical---------------------------------
import TechnicalReg from './pages/technical/TechnicalReg'
import SLReg from './pages/technical/SLReg'
import Status from './pages/technical/Status'
import PushSMS from './pages/technical/PushSMS'
// --------------------------Business---------------------------------
import Business from './pages/business/Business'
import VirtualAS from './pages/business/VirtualAS'
import VIcustmerReg from './pages/business/VIcustmerReq'
import PhysicalAS from './pages/business/PhysicalAS'
import CHDaap from './pages/business/CHDapp'
import CentralizedVS from './pages/business/CentralizedVS'
// --------------------------Knowledge Bank---------------------------------
import Commercial from './pages/knowledge/Commercial'
import GenInfo from './pages/knowledge/GenInfo'
import NewUpdate from './pages/knowledge/NewUpdate'
import OnlineBooking from './pages/knowledge/OnlineBooking'
import SevaKendra from './pages/knowledge/SevaKendra'
import Technical from './pages/knowledge/Technical'
// --------------------------Stack---------------------------------
import StackRanking from './pages/stack/StackRanking'
import StackSummary from './pages/stack/StackSummary'
// --------------------------SOP---------------------------------
import SOPCommercial from './pages/sop/Commercial'
import SOPSevaKendra from './pages/sop/SevaKendra'
import SOPTechnical from './pages/sop/Technical'
// --------------------------Certification---------------------------------
import OnlineTest from './pages/certification/OnlineTest'
import ShowResult from './pages/certification/ShowResult'


const Home = () => {
  return (
    <div className='home'>
      <HomeHeader/>
      <Routes>
        <Route path='/' element={<AdminDashboard/>} />
        <Route path='/gis-dash' element={<GISdashboard/>} />

        <Route path='/fqa' element={<FAQ/>} />

        <Route path='/tech-comp' element={<TechnicalReg/>} />
        <Route path='/sl-comp' element={<SLReg/>} />
        <Route path='/tech-status' element={<Status/>} />
        <Route path='/push-sms' element={<PushSMS/>} />

        <Route path='/business' element={<Business/>} />
        <Route path='/centralized-vs' element={<CentralizedVS/>} />
        <Route path='/chd-app' element={<CHDaap/>} />
        <Route path='/physical-as' element={<PhysicalAS/>} />
        <Route path='/v-i-customer' element={<VIcustmerReg/>} />
        <Route path='/virtual-as' element={<VirtualAS/>} />

        <Route path='/commercial' element={<Commercial/>}/>
        <Route path='/gen-info' element={<GenInfo/>}/>
        <Route path='/new-update' element={<NewUpdate/>}/>
        <Route path='/online-booking' element={<OnlineBooking/>}/>
        <Route path='/seva-kendra' element={<SevaKendra/>}/>
        <Route path='/technical' element={<Technical/>}/>

        <Route path='/stack-ranking' element={<StackRanking/>} />
        <Route path='/stack-summary' element={<StackSummary/>} />

        <Route path='/sop-commercial' element={<SOPCommercial/>} />
        <Route path='/sop-sevakendra' element={<SOPSevaKendra/>} />
        <Route path='/sop-technical' element={<SOPTechnical/>} />

        <Route path='/online-test' element={<OnlineTest/>}/>
        <Route path='/show-result' element={<ShowResult/>}/>
      </Routes>
      
    </div>
  )
}

export default Home
