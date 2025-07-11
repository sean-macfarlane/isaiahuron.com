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
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 text-left">
          <TypewriterText
            text={[
              `ISAIA HURON IS A BROOKLYN-BASED ARTIST AND EXECUTIVE PRODUCER. CONCUBAINIA IS PART ONE OF A THREE-ACT STORY—A WORLD BUILT ON LUST, LOSS, AND ESCAPE. KNOWN FOR HIS RAW INTENSITY AND EMOTIONAL PRECISION, ISAIA CREATES MUSIC THAT FEELS BOTH INTIMATE AND CINEMATIC.`,
            ]}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 text-left"
          />
        </div>
        <motion.div className="block justify-center gap-5 pb-6 sm:flex">
          <motion.h2 className="text-xl font-black">
            FOR INQUIRIES:{" "}
            <a href="mailto:music@speakslang.com" className="underline">
              music@speakslang.com
            </a>
          </motion.h2>
          <motion.h2 className="text-xl font-black">
            TEXT ISAIA: <a href="tel:+18647408049" className="underline">+1 (864) 740-8049</a>
          </motion.h2>
        </motion.div>
        <motion.div className="flex justify-center gap-5 pb-6">
          <SocialLinks />
        </motion.div>
        <div className="max-w-3xl mx-auto pb-16">
          <iframe
            src="https://laylo.com/isaiahuron/profile/embed?theme=light"
            width="100%"
            height="200"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </motion.section>
      <NavMenu dark={true} />
    </main>
  );
}
