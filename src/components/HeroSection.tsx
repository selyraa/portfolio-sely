'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id="home" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              Hi, I&apos;m Sely!
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'System Analyst',
                1500,
                'Quality Assurance',
                1500,
                'Project Management',
                1500,
                'Web Developer',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-2xl">
            I transform business needs into robust digital solutions—from system analysis and development to testing and project management.
          </p>
          <div>
            <a href="#contact" className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary via-cyan-500 to-cyan-600 hover:bg-slate-200 text-white">
              Contact Me
            </a>
            <a
  href="/SelyRuliAmanda_CurriculumVitae.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download="CV-SelyRuliAmanda.pdf"
  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary to-cyan-400 hover:bg-slate-800 text-white mt-3"
>
  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
    Download CV
  </span>
</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-12 lg:mt-0"
        >
          <div className="group w-[250px] h-[320px] lg:w-[320px] lg:h-[410px] relative">
            <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-accent overflow-hidden 
                   shadow-[0_0_15px_rgba(6,182,212,0.4)] 
                   group-hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] 
                   transition-all duration-300">
              <Image
                src="/images/profile-sely.png" // Pastikan nama file foto benar
                alt="Sely Ruli Amanda"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;