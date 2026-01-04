
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignupModalProps {
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and save data locally for Admin Panel
    setTimeout(() => {
      const newLead = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleString()
      };

      // Get existing leads from localStorage
      const existingLeads = JSON.parse(localStorage.getItem('ebook_leads') || '[]');
      localStorage.setItem('ebook_leads', JSON.stringify([newLead, ...existingLeads]));

      console.log('Lead Captured:', newLead);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Delay before final redirection
      setTimeout(() => {
        navigate('/download');
      }, 2500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-slate-900 w-full max-w-md rounded-3xl border border-slate-700 shadow-2xl overflow-hidden animate-in zoom-in slide-in-from-bottom-8 duration-500">
        {!isSuccess && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="p-8 md:p-10">
          {isSuccess ? (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-full mb-6 shadow-lg shadow-emerald-500/20 animate-bounce">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Thank You!</h2>
              <p className="text-emerald-400 font-medium mb-2">Details received successfully.</p>
              <p className="text-slate-400">Preparing your "Complete Travel Guide to North Bengal" for download...</p>
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Get the North Bengal Guide</h2>
                <p className="text-slate-400">Enter your details to receive the "Complete Travel Guide to North Bengal" instantly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-1.5">Your Name</label>
                  <input
                    required
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                    placeholder="John Doe"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Guide...
                    </>
                  ) : (
                    'Get Instant Access'
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center text-xs text-slate-500">
                100% Secure & Private. We never share your data.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
