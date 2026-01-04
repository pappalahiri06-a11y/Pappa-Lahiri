
import React from 'react';

const EbookMockup: React.FC = () => {
  const imageUrl = "https://expresswall99.com/wp-content/uploads/2025/12/Complete-Travel-Guide-to-North-Bengal.png";

  return (
    <div className="book-mockup-perspective w-[280px] h-[400px] md:w-[320px] md:h-[450px] group">
      <div className="book-mockup relative w-full h-full rounded-r-lg overflow-hidden border-l-8 border-slate-900 bg-slate-800 shadow-2xl transition-transform duration-500 transform-gpu group-hover:rotate-y-[-5deg]">
        {/* Actual Image Cover */}
        <img 
          src={imageUrl} 
          alt="Complete Travel Guide to North Bengal"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay for depth/shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-white/10 pointer-events-none"></div>
        
        {/* Glossy Reflection Effect */}
        <div className="absolute top-0 left-[-150%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[25deg] pointer-events-none group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
        
        {/* Book Spine Detail */}
        <div className="absolute top-0 left-0 w-1 h-full bg-black/30"></div>
      </div>
      
      {/* Soft shadow below */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/40 blur-2xl rounded-[100%]"></div>
    </div>
  );
};

export default EbookMockup;
