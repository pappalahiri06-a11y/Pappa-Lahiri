
import React from 'react';
import EbookMockup from './EbookMockup';

const DownloadPage: React.FC = () => {
  const pdfUrl = "https://expresswall99.com/wp-content/uploads/2025/12/Complete-Travel-Guide-to-North-Bengal-2.pdf";

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <div className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl w-full bg-slate-900 rounded-[3rem] border border-slate-800 shadow-3xl overflow-hidden grid md:grid-cols-2">
          <div className="bg-slate-800/30 flex items-center justify-center p-12">
            <div className="scale-90 md:scale-100">
              <EbookMockup />
            </div>
          </div>
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <div className="text-emerald-500 mb-6 flex items-center gap-2 font-bold tracking-widest text-sm uppercase">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Access Granted
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-6">Your Travel Guide is Ready!</h1>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              The <span className="text-slate-200 italic font-bold">"Complete Travel Guide to North Bengal"</span> has been prepared for you. Click the button below to start your download.
            </p>
            
            <a 
              href={pdfUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 px-10 rounded-2xl shadow-xl shadow-emerald-900/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] group"
            >
              <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Now
            </a>

            <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500 text-sm">
              Plan your visit to the Queen of Hills today. Need more help? <a href="#" className="text-emerald-500 hover:underline">Chat with our travel experts</a>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="py-8 text-center text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} North Bengal Travel Insights. All rights reserved.
      </footer>
    </div>
  );
};

export default DownloadPage;
