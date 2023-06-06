"use client";
import Image from "next/image";
import myImage from "../../public/myselfLinkedin.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Band from "@/components/Band";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Contact from "./contact/page";
import ContactMe from "@/components/ContactMe";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="scroll-smooth snap-y !overflow-y-hidden">
      <div id="about" className="snap-center">
        <Hero />
      </div>
      <div>
        <Band />
      </div>
      <div id="skills" className="snap-center">
        <Skills />
      </div>
      <div id="projects" className="snap-center">
        <Projects />
      </div>
      <div id="contact" className="snap-center">
        <ContactMe />
      </div>
    </main>
  );
}
