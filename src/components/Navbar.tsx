'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-btn')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        bg-[#2C3E50] text-[#ECF0F1]
        transition-all duration-300 ease-in-out
        animate-fade-down
        border-b-2 border-[#7F8C8D]/30
        ${isScrolled ? 'shadow-lg shadow-black/20' : ''}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="text-xl font-bold text-[#ECF0F1] hover:text-[#7F8C8D] transition-colors duration-300"
            >
              Ishfaque Kunais
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="
                    relative text-[#ECF0F1] hover:text-[#7F8C8D] 
                    transition-colors duration-300 
                    font-medium
                    group
                  "
                >
                  {link.name}
                  <span className="
                    absolute bottom-0 left-0 w-0 h-0.5 
                    bg-[#7F8C8D] 
                    transition-all duration-300 ease-out
                    group-hover:w-full
                  "></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                hamburger-btn
                inline-flex items-center justify-center p-2 
                rounded-md text-[#ECF0F1] hover:text-[#7F8C8D] 
                hover:bg-[#34495E] focus:outline-none focus:ring-2 
                focus:ring-inset focus:ring-[#7F8C8D]
                transition-colors duration-300
              "
              aria-expanded="false"
              aria-label="Toggle main menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          mobile-menu md:hidden fixed top-16 right-0 w-80 h-[calc(100vh-4rem)]
          bg-[#2C3E50] border-l border-[#34495E]
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          overflow-y-auto
        `}
      >
        <div className="px-6 pt-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="
                block px-4 py-3 text-lg font-medium text-[#ECF0F1] 
                hover:text-[#7F8C8D] hover:bg-[#34495E] 
                rounded-lg transition-all duration-300
                border-l-4 border-transparent hover:border-[#7F8C8D]
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
