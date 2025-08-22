'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { projectsData } from '@/data/projectsData';
import { ProjectCarousel } from './ProjectCarousel';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Internship', 'University', 'Project'];

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-center text-4xl font-bold text-white mb-8">My Portfolio</h2>
      <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${activeTab === tab ? 'bg-primary text-white' : 'bg-accent text-[#ADB7BE] hover:bg-primary/50'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <ProjectCarousel projects={filteredProjects} />
    </section>
  );
};

export default PortfolioSection;