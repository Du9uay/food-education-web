import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import FoodBackgroundOptimized from './components/FoodBackgroundOptimized';
import FoodVignette from './components/FoodVignette';
import HomePage from './pages/HomePage';
// 轻食行业课程页面导入
import IndustryOverviewPage from './pages/course/IndustryOverviewPage';
import BusinessModelsPage from './pages/course/BusinessModelsPage';
import CompliancePage from './pages/course/CompliancePage';
import BrandingStrategyPage from './pages/course/BrandingStrategyPage';
import ChallengesOpportunitiesPage from './pages/course/ChallengesOpportunitiesPage';

import CourseTestPage from './pages/CourseTestPage';



const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <FoodBackgroundOptimized />
        <FoodVignette 
          intensity="medium" 
          variant="fresh" 
        />
        <Navigation />
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* 轻食行业课程路由 */}
            <Route path="/course/industry-overview" element={<IndustryOverviewPage />} />
            <Route path="/course/business-models" element={<BusinessModelsPage />} />
            <Route path="/course/compliance" element={<CompliancePage />} />
            <Route path="/course/branding-strategy" element={<BrandingStrategyPage />} />
            <Route path="/course/challenges-opportunities" element={<ChallengesOpportunitiesPage />} />
            <Route path="/course-test" element={<CourseTestPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 