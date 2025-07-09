"use client";
import NavMenu from "app/components/NavMenu";
import { motion } from "framer-motion";
import TourDatesList from "../components/TourDatesList";

export default function TourPage() {
  return (
    <main className="relative fullscreen-safe">
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
        <TourDatesList
          dates={[
            {
              date: "August 21",
              location: "Backyard Sessions by WNXP @ Bobby Hotel Nashville, TN",
              ticketsUrl:
                "https://www.eventbrite.com/e/backyard-sessions-curated-by-wnxp-samara-cyn-tim-gent-isaia-huron-tickets-1334503689459",
            },
            { date: "August 26", location: "The Echo @ Los Angeles, CA" },
          ]}
        />
      </motion.section>

      <NavMenu dark={true} />
    </main>
  );
}
