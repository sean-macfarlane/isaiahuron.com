"use client";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";
import NavMenu from "app/components/NavMenu";
import SocialLinks from "app/components/SocialLinks";

export default function ContactPage() {
  return (
    <main className="relative fullscreen-safe">
      <motion.section
        id="contact"
        className="relative h-screen w-screen bg-white text-black p-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-left">
          <TypewriterText
            text={`\n          SOME COPY ABOUT ISAIA HURON + CONTACT INFORMATION. LOREM IPSUM HD\n          DOLOR SIT AMET, CONSECTETUR DJJD ADIPISCING ELIT, SED DO EIUSMOD\n          TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. QUIS IPSUM\n          SUSPENDISSE GRAVIDA.`}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-left"
          />
        </div>
        <motion.div className="flex justify-center gap-5 pb-6">
          <SocialLinks />
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://laylo.com/isaiahuron/profile/embed?theme=light"
            width="100%"
            height="580"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </motion.section>
      <NavMenu dark={true} />
    </main>
  );
}
