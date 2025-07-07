"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function TypewriterText({ text, className = "" }) {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [minHeight, setMinHeight] = useState(0);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Reserve space for the full text to prevent overlap
  useEffect(() => {
    if (textRef.current) {
      setMinHeight(textRef.current.offsetHeight);
    }
  }, []);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const char = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <>
      {/* Hidden h2 to reserve space for the full text */}
      <h2
        ref={textRef}
        className={className}
        style={{
          visibility: "hidden",
          position: "absolute",
          pointerEvents: "none",
          height: "auto",
          minHeight: 0,
          margin: 0,
          padding: 0,
        }}
        aria-hidden="true"
      >
        {text}
      </h2>
      <motion.h2
        ref={ref}
        className={className}
        style={{ minHeight }}
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {text.split("").map((t, i) => (
          <motion.span key={i} variants={char}>
            {t}
          </motion.span>
        ))}
      </motion.h2>
    </>
  );
}
