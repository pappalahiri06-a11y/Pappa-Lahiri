
import React, { useState, useEffect } from 'react';
import SignupModal from './SignupModal';

const BlogPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Blog Navigation */}
      <nav className="border-b border-slate-800 py-4 px-6 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">BlogInsights</div>
          <div className="hidden md:flex gap-8 text-slate-400 font-medium">
            <a href="#" className="hover:text-emerald-400">Articles</a>
            <a href="#" className="hover:text-emerald-400">Design</a>
            <a href="#" className="hover:text-emerald-400">Marketing</a>
            <a href="#" className="hover:text-emerald-400">Newsletter</a>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <header className="mb-12">
          <div className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-4">Design Strategy</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Why Aesthetic Integrity is the Secret to User Retention
          </h1>
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <img src="https://picsum.photos/40/40" className="rounded-full" alt="Author" />
            <span>by Alex Rivera</span>
            <span>•</span>
            <span>Oct 24, 2024</span>
          </div>
        </header>

        <img src="https://picsum.photos/800/450" className="w-full rounded-2xl mb-12 shadow-2xl" alt="Blog feature" />

        <div className="prose prose-invert prose-emerald max-w-none text-slate-300 space-y-6 text-lg leading-relaxed">
          <p>
            In the rapidly evolving landscape of digital products, visual appeal is often dismissed as secondary to functionality. However, psychological studies consistently prove that users perceive aesthetically pleasing interfaces as more usable and trustworthy.
          </p>
          <p>
            The concept of "Aesthetic Integrity" refers to how well a design's appearance matches its functionality. When these two elements align, users experience a state of flow that significantly reduces friction and churn rates.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">The Role of Cognitive Load</h2>
          <p>
            Design isn't just about making things pretty; it's about making things understandable. High cognitive load occurs when an interface is cluttered or unpredictable. By utilizing familiar patterns and harmonious color palettes, we can guide the user's eye naturally toward the desired action.
          </p>
          <p>
            As we delve deeper into user experience metrics, we find that the first 50 milliseconds of an interaction determine a user's long-term perception of a brand. This "gut feeling" is entirely visual.
          </p>
          <p>
            (Keep reading to discover our framework for implementing visual hierarchy in modern SaaS platforms...)
          </p>
        </div>
      </article>

      {showModal && <SignupModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BlogPage;
