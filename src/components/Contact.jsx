"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	EnvelopeIcon,
	PhoneIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline";

const contactInfo = [
	{
		icon: EnvelopeIcon,
		label: "Email",
		value: "rafathsarosemrr@gmail.com",
		href: "mailto:rafathsarosemrr@gmail.com",
	},
	{
		icon: PhoneIcon,
		label: "Phone",
		value: "+1 (555) 123-4567",
		href: "tel:+15551234567",
	},
	{
		icon: MapPinIcon,
		label: "Location",
		value: "Your City, Country",
		href: "#",
	},
];

const fadeIn = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0 },
};

export default function Contact() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");

	const validate = () => {
		const newErrors = {};
		if (!form.name.trim()) newErrors.name = "Name is required.";
		if (!form.email.trim()) newErrors.email = "Email is required.";
		else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
			newErrors.email = "Invalid email.";
		if (!form.message.trim()) newErrors.message = "Message is required.";
		return newErrors;
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: undefined });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newErrors = validate();
		if (Object.keys(newErrors).length) {
			setErrors(newErrors);
			return;
		}

		setIsLoading(true);
		setSubmitMessage("");

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form),
			});

			const data = await response.json();

			if (response.ok) {
				setSubmitted(true);
				setSubmitMessage("Thank you! Your message has been sent successfully.");
				setForm({ name: "", email: "", message: "" });
			} else {
				setSubmitMessage(data.error || "Failed to send message. Please try again.");
			}
		} catch (error) {
			console.error('Error sending email:', error);
			setSubmitMessage("Network error. Please check your connection and try again.");		} finally {
			setIsLoading(false);
		}
	};

	// Reset success message after 5 seconds
	useEffect(() => {
		if (submitted && submitMessage && !submitMessage.includes('error') && !submitMessage.includes('Failed')) {
			const timer = setTimeout(() => {
				setSubmitted(false);
				setSubmitMessage("");
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [submitted, submitMessage]);

	return (
		<section
			id="contact"
			className="py-12 sm:py-16 lg:py-24 bg-[#2C3E50] scroll-mt-20"
			aria-label="Contact Section"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16 lg:mb-20">
					<motion.h2
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeIn}
						transition={{ duration: 0.6 }}
						className="text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#ECF0F1] mb-4 sm:mb-6 leading-tight"
					>
						Contact Me
					</motion.h2>
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeIn}
						transition={{ duration: 0.8 }}
						className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl text-[#BDC3C7] max-w-3xl mx-auto leading-relaxed px-4"
					>
						I'm always open to new opportunities and collaborations. Feel free to reach out!
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
					{/* Contact Info Cards */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeIn}
						transition={{ duration: 0.9 }}
						className="space-y-6"
					>
						{contactInfo.map((info, idx) => {
							const Icon = info.icon;
							return (								<a
									key={info.label}
									href={info.href}
									className="flex items-center gap-4 sm:gap-6 bg-[#ECF0F1] rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:ring-offset-2 focus:ring-offset-[#2C3E50]"
									aria-label={`${info.label}: ${info.value}`}
								>
									<div className="flex-shrink-0 p-3 lg:p-4 bg-[#2C3E50]/10 rounded-full">
										<Icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[#2C3E50]" />
									</div>
									<div>
										<div className="font-semibold text-lg sm:text-xl lg:text-2xl text-[#2C3E50] mb-1">
											{info.label}
										</div>
										<div className="text-base sm:text-lg lg:text-xl text-[#34495E]">
											{info.value}
										</div>
									</div>
								</a>
							);
						})}
					</motion.div>

					{/* Contact Form */}
					<motion.form
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeIn}
						transition={{ duration: 1 }}
						className="bg-[#ECF0F1] rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 xl:p-12"
						onSubmit={handleSubmit}
						aria-label="Contact Form"
						noValidate
					>
						<div className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-base sm:text-lg lg:text-xl font-medium text-[#2C3E50] mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className={`w-full px-4 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
										errors.name 
											? "border-red-500 focus:border-red-500" 
											: "border-[#7F8C8D] focus:border-[#34495E]"
									} bg-white text-[#2C3E50]`}
									value={form.name}
									onChange={handleChange}
									required
								/>
								{errors.name && (
									<span className="text-red-500 text-sm sm:text-base mt-1 block">{errors.name}</span>
								)}
							</div>

							<div>
								<label htmlFor="email" className="block text-base sm:text-lg lg:text-xl font-medium text-[#2C3E50] mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className={`w-full px-4 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
										errors.email 
											? "border-red-500 focus:border-red-500" 
											: "border-[#7F8C8D] focus:border-[#34495E]"
									} bg-white text-[#2C3E50]`}
									value={form.email}
									onChange={handleChange}
									required
								/>
								{errors.email && (
									<span className="text-red-500 text-sm sm:text-base mt-1 block">{errors.email}</span>
								)}
							</div>

							<div>
								<label htmlFor="message" className="block text-base sm:text-lg lg:text-xl font-medium text-[#2C3E50] mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={6}
									className={`w-full px-4 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl border-2 rounded-lg focus:outline-none transition-colors duration-200 resize-none ${
										errors.message 
											? "border-red-500 focus:border-red-500" 
											: "border-[#7F8C8D] focus:border-[#34495E]"
									} bg-white text-[#2C3E50]`}
									value={form.message}
									onChange={handleChange}
									required
								/>
								{errors.message && (
									<span className="text-red-500 text-sm sm:text-base mt-1 block">{errors.message}</span>
								)}
							</div>							<button
								type="submit"
								disabled={isLoading}
								className={`w-full font-semibold py-3 sm:py-4 lg:py-5 px-6 text-base sm:text-lg lg:text-xl rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:ring-offset-2 focus:ring-offset-[#ECF0F1] ${
									isLoading
										? 'bg-[#BDC3C7] text-[#7F8C8D] cursor-not-allowed'
										: 'bg-[#7F8C8D] text-[#ECF0F1] hover:bg-[#2C3E50] hover:shadow-lg hover:scale-105'
								}`}
							>
								{isLoading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
							</button>

							{/* Success/Error Message */}
							{submitMessage && (
								<div className={`text-center text-sm sm:text-base mt-4 p-3 rounded-lg ${
									submitted && !submitMessage.includes('error') && !submitMessage.includes('Failed') && !submitMessage.includes('Network')
										? 'bg-green-100 text-green-800 border border-green-200'
										: 'bg-red-100 text-red-800 border border-red-200'
								}`}>
									{submitMessage}
								</div>
							)}
						</div>
					</motion.form>
				</div>
			</div>
		</section>
	);
}
