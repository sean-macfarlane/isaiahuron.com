"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "./components/TypewriterText";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(false);

  useEffect(() => {
    function onScroll() {
      // 80vh is a good threshold for when the hero is mostly out of view
      setNavDark(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    // Set --vh to the actual viewport height in px for mobile browsers
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div>
      <main className="relative fullscreen-safe">
        <Image
          src="/compressed/hero.webp"
          alt="Isaia Huron"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Desktop Nav */}
        <motion.nav
          className={`fixed left-0 right-0 bottom-10 w-full justify-evenly text-sm md:text-lg font-bold tracking-wide z-30 hidden md:flex transition-colors duration-300 ${
            navDark ? "text-black" : "text-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/#tour" className="hover:underline">
            TOUR
          </Link>
          <a
            href="https://shopify-url.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            STORE
          </a>
          <Link href="/archive" className="hover:underline">
            ARCHIVE
          </Link>
          <Link href="/#contact" className="hover:underline">
            CONTACT
          </Link>
        </motion.nav>
        {/* Burger Icon for Mobile */}
        {!menuOpen && (
          <motion.button
            className="absolute left-1/2 -translate-x-1/2 bottom-6 z-30 flex flex-col justify-center items-center md:hidden w-10 h-10"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block w-7 h-0.5 bg-white mb-1.5 transition-all duration-300"></span>
            <span className="block w-7 h-0.5 bg-white mb-1.5 transition-all duration-300"></span>
            <span className="block w-7 h-0.5 bg-white transition-all duration-300"></span>
          </motion.button>
        )}
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav
                className="flex flex-col h-full w-full justify-evenly items-center text-2xl font-bold text-center text-white"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 40 },
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href="/#tour"
                    className="hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    TOUR
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <a
                    href="https://shopify-url.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    STORE
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/archive"
                    className="hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    ARCHIVE
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/#contact"
                    className="hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    CONTACT
                  </Link>
                </motion.div>
              </motion.nav>
              {/* Burger Icon for closing */}
              <motion.button
                className="absolute left-1/2 -translate-x-1/2 bottom-6 z-40 flex flex-col justify-center items-center md:hidden w-10 h-10"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span
                  className={`block w-7 h-0.5 bg-white mb-1.5 transition-all duration-300 rotate-45 translate-y-2`}
                ></span>
                <span
                  className={`block w-7 h-0.5 bg-white mb-1.5 transition-all duration-300 opacity-0`}
                ></span>
                <span
                  className={`block w-7 h-0.5 bg-white transition-all duration-300 -rotate-45 -translate-y-2`}
                ></span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <motion.section
        id="tour"
        className="relative h-screen w-screen bg-white text-black py-16 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          TOUR
        </motion.h2>
        <motion.ul
          className="space-y-4 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5 }}
          >
            July 15 — Chicago, IL
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.55 }}
          >
            July 18 — Detroit, MI
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 }}
          >
            July 22 — Nashville, TN
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.65 }}
          >
            July 25 — Dallas, TX
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.7 }}
          >
            July 29 — Denver, CO
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.75 }}
          >
            August 2 — Los Angeles, CA
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8 }}
          >
            August 6 — San Francisco, CA
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.85 }}
          >
            August 10 — Seattle, WA
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.9 }}
          >
            August 14 — Portland, OR
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.95 }}
          >
            August 18 — Phoenix, AZ
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.0 }}
          >
            August 22 — Atlanta, GA
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.05 }}
          >
            August 26 — Miami, FL
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.1 }}
          >
            August 30 — Washington, DC
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.15 }}
          >
            September 3 — Boston, MA
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.2 }}
          >
            September 7 — New York, NY
          </motion.li>
        </motion.ul>
      </motion.section>

      <motion.section
        id="contact"
        className="relative h-screen w-screen bg-white text-black py-16 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        ></motion.h2> */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-left">
          <TypewriterText
            text={`
          SOME COPY ABOUT ISAIA HURON + CONTACT INFORMATION. LOREM IPSUM HD
          DOLOR SIT AMET, CONSECTETUR DJJD ADIPISCING ELIT, SED DO EIUSMOD
          TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. QUIS IPSUM
          SUSPENDISSE GRAVIDA.`}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-left"
          />
        </div>
        <motion.form
          action="https://formspree.io/f/yourformid"
          method="POST"
          className="max-w-lg mx-auto grid gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="NAME"
            required
            className="p-2 rounded text-black border border-gray-300 focus:border-blue-500 focus:outline-none"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.7 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="EMAIL"
            required
            className="p-2 rounded text-black border border-gray-300 focus:border-blue-500 focus:outline-none"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8 }}
          />
          <motion.textarea
            name="message"
            placeholder="MESSAGE"
            required
            className="p-2 rounded text-black border border-gray-300 focus:border-blue-500 focus:outline-none"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.9 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="text-white bg-black hover:bg-gray-700 cursor-pointer px-6 py-2 rounded border-0 focus:outline-none"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.0 }}
          >
            SEND
          </motion.button>
        </motion.form>
      </motion.section>
    </div>
  );
}
