'use client';
import { motion } from 'framer-motion';
import { FaGitAlt, FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  { icon: <FaReact size={40} />, name: 'React' },
  { icon: <SiNextdotjs size={40} />, name: 'Next.js' },
  { icon: <SiTypescript size={40} />, name: 'TypeScript' },
  { icon: <FaNodeJs size={40} />, name: 'Node.js' },
  { icon: <FaLaravel size={40} />, name: 'Laravel' },
  { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS' },
  { icon: <SiMysql size={40} />, name: 'MySQL' },
  { icon: <FaGitAlt size={40} />, name: 'Git' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-base lg:text-lg text-justify text-[#ADB7BE]">
            Halo! Saya Sely Ruli Amanda, mahasiswa tingkat akhir Teknik Informatika di Politeknik Negeri Malang dengan passion tinggi di bidang pengembangan web. Saya selalu antusias untuk mempelajari teknologi baru dan menerapkannya untuk membangun aplikasi web yang responsif, efisien, dan bermanfaat.
            <br /><br />
            Fokus saya saat ini adalah mendalami ekosistem JavaScript modern seperti React, Next.js, dan TypeScript. Saya adalah seorang pembelajar cepat, mampu berkolaborasi dengan baik dalam tim, dan selalu bersemangat menghadapi tantangan baru untuk berkembang menjadi seorang developer yang lebih baik.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">My Tech Stack</h3>
          <div className="grid grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 bg-accent rounded-lg hover:bg-primary/20 transition-all duration-300 group">
                <div className="text-primary group-hover:text-white transition-colors duration-300">{skill.icon}</div>
                <p className="mt-2 text-sm text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;