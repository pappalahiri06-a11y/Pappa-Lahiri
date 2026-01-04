
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
        <h1 className="text-4xl font-extrabold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-emerald max-w-none space-y-6">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <p>At North Bengal Travel Insights, accessible from expresswall99.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Information We Collect</h2>
          <p>When you sign up to download our "Complete Travel Guide to North Bengal", we collect personal information that you provide to us, specifically:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your Name</li>
            <li>Your Email Address</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website and the e-book delivery system.</li>
            <li>Improve, personalize, and expand our website content.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
            <li>Send you emails regarding your download and future travel updates from North Bengal.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">Data Storage</h2>
          <p>Your data is stored securely and is never sold, traded, or rented to third parties. We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it.</p>

          <h2 className="text-2xl font-bold text-white mt-8">Contact Us</h2>
          <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:</p>
          <p className="font-medium text-emerald-400">
            Maynaguri, Jalpaiguri, West Bengal, India<br />
            Phone: +91 9593833338
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
