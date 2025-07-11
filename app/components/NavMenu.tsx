"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NavMenu({ dark = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <motion.nav
        className={`fixed left-0 right-0 bottom-0 pb-10 w-full justify-evenly text-sm md:text-lg font-bold tracking-wide z-30 hidden md:flex transition-colors duration-300 ${
          dark ? "text-black bg-white"  : "text-white"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/tour" className="hover:underline">
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
        <Link href="/music" className="hover:underline">
          MUSIC
        </Link>
        <Link href="/archive" className="hover:underline">
          ARCHIVE
        </Link>
        <Link href="/contact" className="hover:underline">
          CONTACT
        </Link>
      </motion.nav>
      {/* Burger Icon for Mobile */}
      {!menuOpen && (
        <motion.button
          className={`fixed left-1/2 -translate-x-1/2 bottom-6 z-30 flex flex-col justify-center items-center md:hidden w-10 h-10 ${dark ? "bg-white" : ""}`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={`block w-7 h-0.5 ${dark ? "bg-black" : "bg-white"} mb-1.5 transition-all duration-300`}></span>
          <span className={`block w-7 h-0.5 ${dark ? "bg-black" : "bg-white"} mb-1.5 transition-all duration-300`}></span>
          <span className={`block w-7 h-0.5 ${dark ? "bg-black" : "bg-white"} transition-all duration-300`}></span>
        </motion.button>
      )}
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className={`flex flex-col h-full w-full justify-evenly items-center text-2xl font-bold text-center  ${dark ? "text-black bg-white" : "text-white"}`}
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
                  href="/tour"
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
                  href="/music"
                  className="hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  MUSIC
                </Link>
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
                  href="/contact"
                  className="hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </motion.div>
            </motion.nav>
            {/* Burger Icon for closing */}
            <motion.button
              className={`fixed left-1/2 -translate-x-1/2 bottom-6 z-40 flex flex-col justify-center items-center md:hidden w-10 h-10 ${dark ? "bg-white" : ""}`}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span
                className={`block w-7 h-0.5 ${dark ? "bg-black" : "bg-white"} mb-1.5 transition-all duration-300 rotate-45 translate-y-2`}
              ></span>
              <span
                className={`block w-7 h-0.5 ${dark ? "bg-black" : "bg-white"} mb-1.5 transition-all duration-300 opacity-0`}
              ></span>
              <span
                className={`block w-7 h-0.5 ${dark ? "bg-black" : "bg-white"} transition-all duration-300 -rotate-45 -translate-y-2`}
              ></span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
