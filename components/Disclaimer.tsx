
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Disclaimer: React.FC = () => {
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
        <h1 className="text-4xl font-extrabold text-white mb-8">Disclaimer</h1>
        <div className="prose prose-invert prose-emerald max-w-none space-y-6 text-lg">
          <p>The information provided by North Bengal Travel Insights ("we", "us", or "our") on expresswall99.com is for general informational purposes only.</p>
          
          <div className="bg-slate-900 border-l-4 border-emerald-500 p-6 rounded-r-xl my-8">
            <h2 className="text-xl font-bold text-white mb-2">No Professional Advice</h2>
            <p className="italic">All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site or in our travel guides.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8">Travel Risk Disclaimer</h2>
          <p>Travel inherently involves risks. While Pappa Lahiri and the team make every effort to provide accurate, up-to-date information regarding safari timings, road conditions, and local laws in North Bengal, these factors can change without notice due to weather, government regulations, or forest department decisions.</p>
          <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site or in our guides. Your use of the site and your reliance on any information is solely at your own risk.</p>

          <h2 className="text-2xl font-bold text-white mt-8">External Links Disclaimer</h2>
          <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Contact Information</h2>
          <p>For any queries regarding this disclaimer, please reach out:</p>
          <p className="font-medium text-emerald-400">
            Address: Maynaguri, Jalpaiguri, West Bengal, India<br />
            Phone: +91 9593833338
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
