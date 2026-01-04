
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
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
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-5xl font-black text-white mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Have questions about your upcoming trip to North Bengal or the Dooars? Pappa Lahiri and our team are here to help you experience the region like a local.
            </p>

            <div className="space-y-8">
              <ContactInfoItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="Our Location"
                detail="Maynaguri, Jalpaiguri, West Bengal, India"
              />
              <ContactInfoItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                title="Phone Number"
                detail="+91 9593833338"
              />
              <ContactInfoItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                title="Email Address"
                detail="expresswall99@gmail.com"
              />
            </div>
          </div>

          <div className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Your Name" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
              </div>
              <div>
                <textarea rows={4} placeholder="Your Message" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"></textarea>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/20 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; detail: string }> = ({ icon, title, detail }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-slate-400">{detail}</p>
    </div>
  </div>
);

export default ContactPage;
