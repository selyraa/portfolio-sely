'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { title: 'About', path: '/#about' },
  { title: 'Experience', path: '/#experience' },
  { title: 'Portfolio', path: '/#portfolio' },
  { title: 'Contact', path: '/#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${scrolled ? 'bg-secondary bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
        <Link href="/" className="text-2xl md:text-3xl text-white font-semibold">
          selyraa<span className="text-primary">.</span>
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:border-b-2 border-primary">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;