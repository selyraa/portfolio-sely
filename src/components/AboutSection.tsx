'use client';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaProjectDiagram, FaSearch, FaBug } from 'react-icons/fa';
import { SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript, SiLaravel, SiFlutter, SiPhp, SiFigma, SiJira, SiGit, SiPostgresql } from 'react-icons/si';
import Image from 'next/image';

// Combined skills array with a category property for labeling
const allSkills = [
  // Categories: 'Frontend', 'Backend', 'Tools'
  { category: 'Frontend', icon: <SiNextdotjs />, name: 'Next.js' },
  { category: 'Frontend', icon: <SiFlutter />, name: 'Flutter' },
  { category: 'Frontend', icon: <SiTailwindcss />, name: 'Tailwind' },
  { category: 'Frontend', icon: <SiTypescript />, name: 'TypeScript' },
  
  { category: 'Backend', icon: <SiLaravel />, name: 'Laravel' },
  { category: 'Backend', icon: <SiPhp />, name: 'PHP' },
  { category: 'Backend', icon: <SiMysql />, name: 'MySQL' },
  { category: 'Backend', icon: <SiPostgresql />, name: 'PostgreSQL' },
  
  { category: 'Tools', icon: <SiGit />, name: 'Git' },
  { category: 'Tools', icon: <SiFigma />, name: 'Figma' },
  { category: 'Tools', icon: <SiJira />, name: 'Jira' },
  { category: 'Tools', icon: <FaBug />, name: 'Katalon' },
];

const AboutSection = () => {
  let lastCategory = ''; // Variable to track the last category for labeling

  return (
    <section id="about" className="py-20">
      {/* ================================================ */}
      {/* NEW TWO-COLUMN LAYOUT: TECH STACK + ABOUT ME     */}
      {/* ================================================ */}
      <div className="grid md:grid-cols-2 gap-12 items-start xl:gap-16">
        
        {/* LEFT COLUMN: TECHNICAL TOOLKIT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">My Technical Toolkit</h3>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
            {allSkills.map((skill, index) => {
              const showCategory = skill.category !== lastCategory;
              lastCategory = skill.category;
              return (
                <div key={index} className="relative flex flex-col items-center justify-center p-3 bg-accent rounded-lg h-28 hover:bg-primary/20 transition-all duration-300 group">
                  {/* Category Label */}
                  {showCategory && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-primary px-3 py-1 text-xs font-semibold rounded-full border border-primary/30 z-10">
                      {skill.category}
                    </span>
                  )}
                  <div className="text-primary group-hover:text-white transition-colors duration-300 text-4xl">{skill.icon}</div>
                  <p className="mt-2 text-xs text-center font-semibold">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: ABOUT ME BIO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify text-[#ADB7BE]">
            I&apos;m a results-driven System Analyst and Software Developer with a proven track record of translating complex business requirements into robust tech solutions. Through internships at leading companies like PT SISI and PT INKA, I&apos;ve gained hands-on experience across the entire end-to-end software development lifecycle.
            <br /><br />
            I don&apos;t just build features—I design systems, ensure quality through rigorous testing, and understand the project management that brings it all together. My passion lies in optimizing processes to create systems that are not only functional but also efficient and scalable.
          </p>
        </motion.div>
      </div>

      {/* CORE COMPETENCIES SECTION (Remains below for additional context) */}
      <div className="mt-20">
        <h3 className="text-center text-3xl font-bold text-white mb-8">My Core Competencies</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent p-6 rounded-xl text-center">
            <FaSearch className="text-primary text-4xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">System Analysis & Design</h4>
            <p className="text-sm text-gray-400">Designing efficient and well-documented system architectures (ERD, UML, Flowcharts) to ensure solutions hit the mark.</p>
          </div>
          <div className="bg-accent p-6 rounded-xl text-center">
            <FaLaptopCode className="text-primary text-4xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Full Stack Development</h4>
            <p className="text-sm text-gray-400">Developing web and mobile apps from backend (Laravel) to frontend (Filament, Flutter, Next.js) with clean, structured code.</p>
          </div>
          <div className="bg-accent p-6 rounded-xl text-center">
            <FaProjectDiagram className="text-primary text-4xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">QA & Project Management</h4>
            <p className="text-sm text-gray-400">Ensuring product quality through System Integration Testing (SIT) and bridging the gap between technical and functional teams.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;