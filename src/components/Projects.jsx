"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
	{
		title: "Portfolio Website",
		description:
			"A modern, responsive portfolio built with Next.js and Tailwind CSS featuring smooth animations and optimized performance.",
		image: "/project1.jpg",
		alt: "Portfolio Website Screenshot",
		tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
	},
	{
		title: "E-commerce Store",
		description:
			"A full-featured e-commerce platform with custom UI, secure checkout, and inventory management system.",
		image: "/project2.jpg",
		alt: "E-commerce Store Screenshot",
		tech: ["React", "Node.js", "MongoDB"],
	},
	{
		title: "Dashboard App",
		description:
			"A data-driven dashboard with interactive charts, user management, and real-time analytics capabilities.",
		image: "/project3.jpg",
		alt: "Dashboard App Screenshot",
		tech: ["React", "D3.js", "Firebase"],
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
	}),
};

const Projects = () => (
	<section
		id="projects"
		className="py-12 sm:py-16 lg:py-24 bg-[#ECF0F1] scroll-mt-20"
		aria-label="Projects Section"
	>
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-12 sm:mb-16 lg:mb-20">
				<h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C3E50] mb-4 sm:mb-6 leading-tight">
					Projects
				</h2>
				<p className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl text-[#7F8C8D] max-w-3xl mx-auto leading-relaxed px-4">
					Explore some of my recent work and featured projects below.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
				{projects.map((project, i) => (					<motion.div
						key={project.title}
						className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full hover:scale-105 hover:shadow-xl transition-all duration-300"
						custom={i}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={cardVariants}
					>
						<div className="aspect-video bg-gray-200 relative overflow-hidden">
							<img
								src={project.image}
								alt={project.alt}
								className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
							/>
						</div>
						<div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col">
							<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2C3E50] mb-3 sm:mb-4 leading-tight">
								{project.title}
							</h3>
							<p className="text-base sm:text-lg lg:text-xl text-[#34495E] mb-4 sm:mb-6 flex-1 leading-relaxed">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-[#2C3E50]/10 text-[#2C3E50] rounded-full font-medium"
									>
										{tech}
									</span>
								))}
							</div>							<button className="w-full bg-[#7F8C8D] text-[#ECF0F1] font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-base sm:text-lg hover:bg-[#2C3E50] hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:ring-offset-2">
								View Project
							</button>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default Projects;
