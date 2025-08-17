"use client";
import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, PaintBrushIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const services = [
	{
		title: "Web Development",
		description:
			"Custom web applications built with modern technologies for speed, scalability, and reliability.",
		icon: CodeBracketIcon,
		aria: "Web Development Icon",
	},
	{
		title: "UI/UX Design",
		description:
			"Beautiful and intuitive user interfaces focused on user experience and accessibility.",
		icon: PaintBrushIcon,
		aria: "UI/UX Design Icon",
	},
	{
		title: "Consulting",
		description:
			"Technical consulting, code reviews, and project guidance to help you succeed.",
		icon: UserGroupIcon,
		aria: "Consulting Icon",
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

const Services = () => (
	<section
		id="services"
		className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#34495E] to-[#2C3E50] scroll-mt-20"
		aria-label="Services Section"
	>
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-12 sm:mb-16 lg:mb-20">
				<h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#ECF0F1] mb-4 sm:mb-6 leading-tight">
					Services
				</h2>
				<p className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl text-[#BDC3C7] max-w-3xl mx-auto leading-relaxed px-4">
					I offer a range of services to help you build, design, and launch your
					digital projects with confidence.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
				{services.map((service, i) => {
					const Icon = service.icon;
					return (						<motion.div
							key={service.title}
							className="bg-[#ECF0F1] rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-all duration-300"
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
						>
							<div className="mb-6 p-4 lg:p-5 bg-[#2C3E50]/10 rounded-full">
								<Icon
									className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-[#2C3E50]"
									aria-label={service.aria}
								/>							</div>
							<h3 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-bold text-[#2C3E50] mb-4 sm:mb-6 leading-tight">
								{service.title}
							</h3>
							<p className="text-base sm:text-lg lg:text-xl text-[#34495E] leading-relaxed">
								{service.description}
							</p>
						</motion.div>
					);
				})}
			</div>
		</div>
	</section>
);

export default Services;
