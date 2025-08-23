import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="max-w-7xl mx-auto p-8 sm:p-12 flex justify-between items-center">
                <span>selyraa<span className="text-primary">.</span></span>
                <div className="socials flex gap-4">
                    <a href="https://github.com/selyraa" target="_blank" className="text-[#ADB7BE] hover:text-white"><FaGithub size={24} /></a>
                    <a href="https://www.linkedin.com/in/sely-ruli-amanda-b2a25a1b3/" target="_blank" className="text-[#ADB7BE] hover:text-white"><FaLinkedin size={24} /></a>
                    <a href="https://www.instagram.com/selyra._" target="_blank" className="text-[#ADB7BE] hover:text-white"><FaInstagram size={24} /></a>
                </div>
                <p className="text-slate-600">All rights reserved © {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;