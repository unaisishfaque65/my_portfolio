"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: FaTwitter,
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-[#34495E] text-[#ECF0F1] py-8 sm:py-12 lg:py-16 xl:py-20 border-t border-[#7F8C8D]/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left: Logo & Tagline + Social Icons */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-wide text-[#ECF0F1] mb-2 sm:mb-3">
              Ishfaque Portfolio
            </div>
            <span className="text-[#7F8C8D] text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 italic">
              Design. Code. Inspire.
            </span>            <div className="flex gap-4 sm:gap-6 lg:gap-8">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="rounded-full bg-[#BDC3C7]/20 p-3 sm:p-4 lg:p-5 text-xl sm:text-2xl lg:text-3xl transition-all duration-300 hover:scale-110 hover:bg-[#2C3E50] hover:text-[#ECF0F1] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:ring-offset-2 focus:ring-offset-[#34495E] text-[#ECF0F1]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact/CTA */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">            <a
              href="#contact"
              className="bg-[#7F8C8D] text-[#ECF0F1] font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg text-base sm:text-lg lg:text-xl hover:bg-[#2C3E50] hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:ring-offset-2 focus:ring-offset-[#34495E] mb-4"
            >
              Let's Connect
            </a>
            <span className="text-[#7F8C8D] text-sm sm:text-base lg:text-lg">
              Available for freelance & collaboration
            </span>
          </div>
        </div>

        <div className="text-center text-sm sm:text-base lg:text-lg text-[#BDC3C7] mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 lg:pt-10 border-t border-[#7F8C8D]/30">
          © {currentYear} Ishfaque. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
