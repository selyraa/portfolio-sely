'use client';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contacts = [
  { icon: <FaEnvelope />, text: 'selyra.123@gmail.com', href: 'mailto:selyra.123@gmail.com' },
  { icon: <FaWhatsapp />, text: '+62 857-3374-4803', href: 'https://wa.me/6285733744803' }, // REMEMBER TO UPDATE WHATSAPP LINK IF NEEDED
  { icon: <FaLinkedin />, text: 'Sely Ruli Amanda', href: 'https://www.linkedin.com/in/sely-ruli-amanda-b2a25a1b3/' },
  { icon: <FaGithub />, text: 'selyraa', href: 'https://github.com/selyraa' },
  { icon: <FaInstagram />, text: 'selyra._', href: 'https://www.instagram.com/selyra._' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-lg text-[#ADB7BE] mb-12 max-w-2xl mx-auto">
        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me through any of the platforms below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center p-4 bg-accent rounded-lg hover:bg-primary/20 transition-all duration-300 group"
          >
            <div className="text-primary text-3xl mr-4 group-hover:text-white transition-colors duration-300">{contact.icon}</div>
            <span className="text-lg">{contact.text}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;