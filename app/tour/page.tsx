"use client";
import Image from "next/image";
import NavMenu from "app/components/NavMenu";
import { motion } from "framer-motion";
import TourDatesList from "../components/TourDatesList";

export default function TourPage() {
  return (
    <main className="relative fullscreen-safe mb-24">
      <motion.section
        id="tour"
        className="relative h-screen w-screen bg-white text-black py-4 md:py-16 px-6 text-center justify-center pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Image
            src="/compressed/tour.webp"
            alt="Isaia Huron"
            priority
            width={800}
            height={1200}
            className="h-[50vh] md:h-[60vh] w-auto max-h-full"
          />
        </motion.div>
        <motion.h2
          className="text-3xl font-semibold my-6"
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
            { date: "September 10", location: "Baby's All Right @ New York, NY" },
          ]}
        />
      </motion.section>

      <NavMenu dark={true} />
    </main>
  );
}
