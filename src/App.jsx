import React from 'react'
import './App.module.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomeLayout from './HomeLayout'
import ScrollToTop from './ScrollToTop.jsx'

import RiverineFlood from './Pages/SuratFloodPage/RiverineFlood.jsx'
import HydroGNN from './Pages/HydroGNNPage/HydroGNN.jsx'
import CatchmentClassification from './Pages/CatchmentPage/CatchmentClassification.jsx'
import ReturnPeriodAnalysis from './Pages/ReturnPeriodAnalysisPage/ReturnPeriodAnalysis.jsx'
import UrbanFlood from './Pages/KozhikodeFloodPage/UrbanFlood.jsx'
import GondalSubSurfaceFlood from './Pages/GondalFloodPage/GondalSubSurfaceFlood.jsx'
import GondalSurfaceFlood from './Pages/GondalFloodPage/GondalSurfaceFlood.jsx'
import MIRLabNewsHomePage from './Pages/MIRLabNewsPage/MIRLabNewsHomePage.jsx'

import HomePage from './Pages/HomePage/HomePage'
import ContactUs from './Pages/ContactUsPage/ContactUs.jsx'
import ResearchPage from './Pages/ResearchPage/Research.jsx'
import AboutUsPage from './Pages/AboutUsPage/AboutUs.jsx'
import TermAndCondition from './Pages/TermsAndConditionPage/TermsAndCondition.jsx'
import DashBoard from './Pages/FloodAiDashBoard/DashBoard.jsx'
import DashboardLayout from './DashboardLayout.jsx'
import DetailPage from './DashboardSection/DetailPage/Detail.jsx'
import AuthPage from './DashboardSection/LoginPage/AuthPage.jsx'
import ProtectedRoute from './DashboardSection/LoginPage/ProtectedRoute.jsx'
import LocationSection from './DashboardSection/LocationPage/LocationSection.jsx'
import Hiring from './Pages/HiringPage/Hiring.jsx'
import JobRoles from './Pages/JobRolePages/JobRoles.jsx'
import BlogHomePage from './Pages/BlogHomePage/BlogHome.jsx'

import BlogMainPage from './Pages/BlogHomePage/BlogMainPage.jsx'

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Routes>
        {/* Home Layout */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="hydro-pinn" element={<HydroGNN />} />
          <Route path="surat-flood" element={<RiverineFlood />} />
          <Route path="riverine-flood" element={<RiverineFlood />} />
          <Route path="surat-flood-2006/urban" element={<RiverineFlood />} />
          <Route path="surat-flood-2006/rural" element={<RiverineFlood />} />
          <Route path="surat-flood-articles" element={<RiverineFlood />} />
          <Route path="urban-flood" element={<UrbanFlood />} />
          <Route
            path="research-page/research-papers-home"
            element={<MIRLabNewsHomePage />}
          />
          <Route path="surface-flood" element={<GondalSurfaceFlood />} />
          <Route
            path="gondal-sub-surface-flood"
            element={<GondalSubSurfaceFlood />}
          />
          <Route
            path="catchment-classification"
            element={<CatchmentClassification />}
          />
          <Route
            path="return-period-analysis"
            element={<ReturnPeriodAnalysis />}
          />
          <Route path="research-page" element={<ResearchPage />} />
          <Route path="blog-home-page" element={<BlogHomePage />} />
          <Route path="blog/:postId" element={<BlogMainPage />} />

          <Route path="contact-us" element={<ContactUs />} />
          <Route path="job-roles" element={<JobRoles />} />
          <Route path="hiring" element={<Hiring />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="terms-and-condition" element={<TermAndCondition />} />
          <Route path="login" element={<AuthPage />} />
        </Route>

        {/* Dashboard Layout (Protected) */}
        {/* <Route element={<ProtectedRoute />}>
          <Route path="flood-ai-dashboard" element={<DashboardLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="detail-page" element={<DetailPage />} />
            <Route path="location" element={<LocationSection />} />
            <Route path="setting" element={<h1>Setting Page</h1>} />
          </Route>
        </Route> */}
      </Routes>
    </Router>
  )
}

export default App
