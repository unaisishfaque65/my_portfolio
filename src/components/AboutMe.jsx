"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const textVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutMe = () => {
  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 lg:py-24 bg-[#ECF0F1] scroll-mt-20"
      aria-label="About Section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center order-1 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80">
              <Image
                src="/profile.jpg"
                alt="Ishfaque profile photo"
                fill
                sizes="(max-width: 375px) 128px, (max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 320px"
                className="rounded-full object-cover shadow-xl border-4 border-[#BDC3C7]"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex flex-col text-center md:text-left order-2 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C3E50] mb-4 sm:mb-6 leading-tight">
              About Me
            </h2>
            <div className="prose prose-lg max-w-none md:max-w-3xl mx-auto md:mx-0">
              <p className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl text-[#7F8C8D] mb-4 sm:mb-6 font-medium leading-relaxed">
                Passionate about building beautiful and functional web experiences.
              </p>
              <p className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-[#34495E] mb-6 sm:mb-8 leading-relaxed">
                I am a dedicated web developer with a love for crafting modern, responsive websites and applications. 
                My expertise spans frontend technologies like React, Next.js, and Tailwind CSS, as well as UI/UX design principles. 
                I thrive on solving real-world problems and delivering user-centric solutions. Collaboration, creativity, 
                and continuous learning drive my work every day.
              </p>
            </div>            {/* Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              <motion.div
                className="bg-white rounded-md shadow-sm p-2 sm:p-3 lg:p-3 text-[#2C3E50] font-medium text-xs sm:text-sm lg:text-sm border border-[#BDC3C7] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                Frontend Developer
              </motion.div>
              <motion.div
                className="bg-white rounded-md shadow-sm p-2 sm:p-3 lg:p-3 text-[#2C3E50] font-medium text-xs sm:text-sm lg:text-sm border border-[#BDC3C7] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                React Specialist
              </motion.div>
              <motion.div
                className="bg-white rounded-md shadow-sm p-2 sm:p-3 lg:p-3 text-[#2C3E50] font-medium text-xs sm:text-sm lg:text-sm border border-[#BDC3C7] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-center sm:col-span-2 lg:col-span-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                UI/UX Designer
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
