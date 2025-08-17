"use client";

import HomePage from "../components/HomePage";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  );
}
