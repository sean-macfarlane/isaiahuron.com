"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState, ReactElement } from "react";
import { useInView } from "react-intersection-observer";

type TypewriterTextProps = {
  text: string | (string | React.ReactElement)[];
  className?: string;
};

export default function TypewriterText({
  text,
  className = "",
}: TypewriterTextProps) {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [minHeight, setMinHeight] = useState(0);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) setMinHeight(textRef.current.offsetHeight);
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03 } },
  };
  const char = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Flatten the text into an array of "units" (characters or React elements)
  const getUnits = () => {
    if (Array.isArray(text)) {
      const units: (string | ReactElement)[] = [];
      text.forEach((part) => {
        if (typeof part === "string") {
          part.split("").forEach((char) => units.push(char));
        } else {
          units.push(part);
        }
      });
      return units;
    }
    return (text as string).split("");
  };

  const units = getUnits();

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
        {Array.isArray(text)
          ? text.map((part, i) => (typeof part === "string" ? part : ""))
          : text}
      </h2>
      <motion.h2
        ref={ref}
        className={className}
        style={{ minHeight }}
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {units.map((unit, i) =>
          typeof unit === "string" ? (
            unit === "\n" ? (
              <br key={i} />
            ) : (
              <motion.span key={i} variants={char}>
                {unit}
              </motion.span>
            )
          ) : (
            <motion.span
              key={i}
              variants={char}
              style={{ display: "inline-block" }}
            >
              {unit}
            </motion.span>
          )
        )}
      </motion.h2>
    </>
  );
}
