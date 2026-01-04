
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="text-emerald-500 hover:text-emerald-400 flex items-center gap-2 mb-8 font-medium transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-8">Terms and Conditions</h1>
        <div className="prose prose-invert prose-emerald max-w-none space-y-6">
          <p>Welcome to North Bengal Travel Insights!</p>
          <p>These terms and conditions outline the rules and regulations for the use of North Bengal Travel Insights's Website, located at expresswall99.com.</p>
          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use North Bengal Travel Insights if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h2 className="text-2xl font-bold text-white mt-8">Intellectual Property Rights</h2>
          <p>Unless otherwise stated, North Bengal Travel Insights and/or its licensors own the intellectual property rights for all material on expresswall99.com, including the "Complete Travel Guide to North Bengal" e-book. All intellectual property rights are reserved. You may access this from North Bengal Travel Insights for your own personal use subjected to restrictions set in these terms and conditions.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Republishing material from our guides or website without written consent.</li>
            <li>Selling, sub-licensing, or otherwise commercializing any website material or e-book content.</li>
            <li>Using this website in any way that is or may be damaging to this website.</li>
            <li>Using this website in any way that impacts user access to this website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">No warranties</h2>
          <p>This Website is provided "as is," with all faults, and North Bengal Travel Insights express no representations or warranties, of any kind related to this Website or the materials contained on this Website.</p>

          <h2 className="text-2xl font-bold text-white mt-8">Governing Law & Jurisdiction</h2>
          <p>These Terms will be governed by and interpreted in accordance with the laws of the State of West Bengal, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.</p>

          <h2 className="text-2xl font-bold text-white mt-8">Contact Information</h2>
          <p>If you have any questions about our Terms, please contact us at:</p>
          <p className="font-medium text-emerald-400">
            Address: Maynaguri, Jalpaiguri, West Bengal, India<br />
            Phone: +91 9593833338
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
