"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HomePage = () => {
  // Smooth scroll handler
  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-16 sm:pt-20 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#2C3E50] to-[#34495E] scroll-mt-20"
      aria-label="Hero Section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center text-center md:text-left order-2 md:order-1"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#ECF0F1] mb-4 sm:mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#ECF0F1] to-[#BDC3C7] bg-clip-text text-transparent">
                Ishfaque Kunais
              </span>
            </h1>
            <p className="text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#7F8C8D] mb-6 sm:mb-8 font-medium leading-relaxed">
              Frontend Developer | UI Designer
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-[#BDC3C7] mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              I create beautiful, responsive web experiences that engage users and drive results.
              Let's build something amazing together.
            </p>            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={(e) => handleScroll(e, "#projects")}
                className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#7F8C8D] text-[#ECF0F1] rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:bg-[#2C3E50] hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:ring-offset-2 focus:ring-offset-[#2C3E50]"
              >
                View My Work
              </button>
              <button
                onClick={(e) => handleScroll(e, "#contact")}
                className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#7F8C8D] text-[#ECF0F1] rounded-lg font-semibold text-base sm:text-lg hover:bg-[#7F8C8D] hover:border-[#7F8C8D] hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:ring-offset-2 focus:ring-offset-[#2C3E50]"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center order-1 md:order-2"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem]">
              <Image
                src="/profile.jpg"
                alt="Ishfaque Kunais profile photo"
                fill
                sizes="(max-width: 375px) 192px, (max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, (max-width: 1536px) 384px, 448px"
                className="rounded-full object-cover shadow-2xl border-4 border-[#BDC3C7]/20"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
