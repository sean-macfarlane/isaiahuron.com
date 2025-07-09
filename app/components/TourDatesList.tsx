"use client";
import { motion } from "framer-motion";

type TourDate = {
  date: string;
  location: string;
  ticketsUrl?: string;
};

export default function TourDatesList({ dates = [] }: { dates: TourDate[] }) {
    console.log("TourDatesList rendered with dates:", dates);
  return (
    <motion.ul
      className="space-y-4 text-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      {dates.map((item, i) => {
        const content = (
          <>
            <span className="font-semibold">{item.date}</span>
            {" — "}
            <span>{item.location}</span>
          </>
        );
        return (
          <motion.li
            key={item.date + item.location + i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5 + i * 0.05 }}
          >
            {item.ticketsUrl ? (
              <a
                href={item.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-40 duration-300"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
