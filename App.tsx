
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BlogPage from './components/BlogPage';
import DownloadPage from './components/DownloadPage';
import AdminPanel from './components/AdminPanel';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';
import TermsAndConditions from './components/TermsAndConditions';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-emerald-500/30">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
