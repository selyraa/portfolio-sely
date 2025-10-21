'use client';
import { experienceData } from '@/data/experienceData';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ExperienceSection = () => {
  const [activeExperienceId, setActiveExperienceId] = useState(experienceData[0]?.id || null);
  const activeExperience = experienceData.find(exp => exp.id === activeExperienceId);

  return (
    <section id="experience" className="py-20">
      <h2 className="text-center text-4xl font-bold text-white mb-12">My Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* ====================================================== */}
        {/* KOLOM KIRI: TIMELINE DENGAN SCROLLBAR MODERN           */}
        {/* ====================================================== */}
        <div className="md:col-span-4 max-h-[450px] overflow-y-auto pr-4 timeline-scrollbar">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-accent"></div>

            {experienceData.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperienceId(exp.id)}
                className="relative flex items-start w-full text-left p-4 rounded-lg transition-colors duration-300 mb-4 hover:bg-accent/50"
              >
                <div
                  className={`absolute left-4 top-7 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-300 
                             ${activeExperienceId === exp.id ? 'bg-primary scale-125 ring-4 ring-primary/30' : 'bg-accent'}`}
                ></div>

                <div className="pl-10">
                  <h3
                    className={`font-bold text-lg transition-colors duration-300 ${
                      activeExperienceId === exp.id ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ====================================================== */}
        {/* KOLOM KANAN: DETAIL PENGALAMAN                        */}
        {/* ====================================================== */}
        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExperienceId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-accent p-8 rounded-xl h-full"
            >
              {activeExperience && (
                <>
                  {/* Header Role + Company + Period */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">{activeExperience.role}</h3>
                      <p className="text-lg font-semibold text-primary">{activeExperience.company}</p>
                    </div>
                    <span className="text-sm text-gray-400 flex-shrink-0 bg-secondary px-3 py-1 rounded-full">
                      {activeExperience.period}
                    </span>
                  </div>

                  {/* Deskripsi Umum */}
                  {activeExperience.description && (
                    <div className="space-y-3 mt-6">
                      {activeExperience.description.map((desc, index) => (
                        <p key={index} className="text-gray-300 leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Jobdesc (dengan icon) */}
                  {activeExperience.jobdesc && (
                    <ul className="space-y-3 mt-6">
                      {activeExperience.jobdesc.map((task, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{task}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;