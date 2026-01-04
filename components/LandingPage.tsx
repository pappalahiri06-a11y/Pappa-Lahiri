
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import EbookMockup from './EbookMockup';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate('/blog');
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">
              Complete Travel Guide to North Bengal
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
              Planning a trip to the hills? Download the definitive 2025 guide featuring must-visit spots, local secrets, and the perfect Himalayan itinerary.
            </p>
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/20"
            >
              Get the Free Travel Guide
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Instant PDF Download
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Updated for 2025
              </span>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <EbookMockup />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Master Your Himalayan Journey</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon="🏔️"
              title="Curated Itineraries"
              description="Detailed day-by-day plans for families, solo travelers, and photography enthusiasts."
            />
            <BenefitCard
              icon="🏡"
              title="Offbeat Homestays"
              description="Discover serene, budget-friendly homestays with the best balcony views of Kanchenjunga."
            />
            <BenefitCard
              icon="🚕"
              title="Local Transport Hacks"
              description="Navigate shared taxis, private rentals, and toy train bookings like a pro."
            />
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Inside the Handbook:</h2>
            <ul className="space-y-6">
              <LearningPoint text="Detailed routes for Darjeeling, Kalimpong, and the Dooars forest." />
              <LearningPoint text="The best secret sunrise spots away from the Tiger Hill crowds." />
              <LearningPoint text="A complete guide to local food: from authentic Momos to Thukpa." />
              <LearningPoint text="Essential packing list for varying high-altitude climates." />
              <LearningPoint text="Permit requirements for border zones and restricted areas." />
            </ul>
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl"></div>
                <img 
                  src="https://expresswall99.com/wp-content/uploads/2025/12/1000077103-removebg-preview.png" 
                  alt="Pappa Lahiri" 
                  className="relative z-10 w-full max-w-[350px] mx-auto filter drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Meet Your Guide: Pappa Lahiri</h2>
              <div className="prose prose-invert prose-emerald max-w-none text-slate-300 space-y-4 mb-10">
                <p>
                  Pappa Lahiri is a North Bengal native and the voice behind <strong>expresswall99.com</strong>'s award-winning Dooars travel content. Born and raised in the foothills of the Eastern Himalayas, Pappa has transformed his lifelong connection to the region into comprehensive travel guides that go beyond typical tourism advice.
                </p>
                <p>
                  With over 12 years of exploring Dooars' forests, tea gardens, and tribal villages, Pappa has completed more than 150 wildlife safaris across Gorumara, Jaldapara, and Buxa Tiger Reserve. His expertise extends from identifying optimal safari timing to uncovering lesser-known trekking routes that most guidebooks miss.
                </p>
                <p>
                  As a resident of Maynaguri—the strategic connector between the hills and Dooars plains—Pappa maintains close relationships with forest department officials, local guides, and homestay owners. These insider connections bring authenticity and current information to every article. His mission is simple: help travelers experience Dooars the way locals do, not the way tour packages promise.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <BadgeItem text="Maynaguri Resident Since 1979" />
                <BadgeItem text="150+ Personal Safari Expeditions" />
                <BadgeItem text="Environmental Studies Graduate (NBU)" />
                <BadgeItem text="Wildlife Conservation Volunteer" />
                <BadgeItem text="Tested Every Route & Season Personally" />
                <BadgeItem text="Direct Forest Department Connections" />
                <BadgeItem text="Zero Sponsored Recommendations" />
                <BadgeItem text="Updated Monthly Based on Field Research" />
                <BadgeItem text="Located at Hills-Dooars Junction" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ about the Author Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">FAQ about the Author</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="space-y-6">
            <FAQItem 
              question="Why should I trust Pappa's guides over other travel blogs?" 
              answer="Pappa lives in Maynaguri—right at the junction where the hills meet the Dooars plains. Not visits—lives. Every recommendation comes from personal testing, not internet research. If a safari route changes, a hotel declines, or a new offbeat spot emerges, he knows it firsthand. Plus, zero sponsored content means honest opinions always."
            />
            <FAQItem 
              question="What's special about being based in Maynaguri?" 
              answer="Maynaguri sits at the strategic crossroads between North Bengal's hill stations and the Dooars flatlands. This unique position gives Pappa access to both ecosystems—from high-altitude treks to lowland wildlife sanctuaries—all within 2 hours' drive. He experiences the full spectrum of North Bengal travel firsthand."
            />
            <FAQItem 
              question="How often does Pappa update his guides?" 
              answer="Major guides get quarterly reviews. Safari timing content updates monthly based on current conditions. If something changes (new permits, road closures, pricing), updates happen within weeks."
            />
            <FAQItem 
              question="Can readers contact Pappa for trip planning help?" 
              answer="Yes. While he can't plan entire itineraries (there's only one of him), Pappa responds to specific questions about timing, safari bookings, and offbeat recommendations via email and Instagram DMs."
            />
            <FAQItem 
              question="Does Pappa earn commission from recommendations?" 
              answer="Express Wall 99 uses standard affiliate links for some hotel bookings, clearly disclosed. But recommendations are never influenced by commissions—many of his top picks don't even have affiliate programs."
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-emerald-600 text-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-xl font-medium">Join 12,000+ travelers exploring the beauty of North Bengal.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Ready for Your Adventure?</h2>
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all transform hover:scale-105 shadow-xl shadow-emerald-900/30"
          >
            Download the Complete Guide
          </button>
          <p className="mt-6 text-slate-500">100% Free – Instant Access to the Full PDF</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} North Bengal Travel Insights. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="hover:text-emerald-400">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-emerald-400">Disclaimer</Link>
            <Link to="/terms" className="hover:text-emerald-400">Terms & Conditions</Link>
            <Link to="/contact" className="hover:text-emerald-400">Contact Us</Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

const BenefitCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-colors group">
    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-slate-100">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const LearningPoint: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mr-4 mt-1">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
    <span className="text-slate-300 text-lg">{text}</span>
  </li>
);

const BadgeItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-2 py-1">
    <span className="text-emerald-500">✓</span>
    <span className="text-slate-400 text-sm font-medium">{text}</span>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
    <h4 className="text-emerald-400 font-bold text-lg mb-3">Q: {question}</h4>
    <p className="text-slate-400 leading-relaxed">
      <span className="text-slate-200 font-semibold">A: </span>
      {answer}
    </p>
  </div>
);

export default LandingPage;
