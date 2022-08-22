import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './homePage/HomePage';
import KPISPage from './kpisPage/KPISPage';
import ProjectDetails from './projectDetails/ProjectDetails';
import ProfessionalDetails from './professionalDetails/ProfessionalDetails';
import Skills from './skills/Skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="*" element={<Navigate to="/" replace />}/>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/kpis" element={<KPISPage />} />
        <Route exact path="/projectdetails" element={<ProjectDetails />} />
        <Route exact path="/professionaldetails" element={<ProfessionalDetails />} />
        <Route exact path="/skills" element={<Skills />} />
        
      </Routes>
    </Router>
  );
}

export default App;
