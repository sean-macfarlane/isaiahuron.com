"use client";

import React from "react";
import { metaData } from "app/lib/config";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="block text-center lg:mt-4 mt-4 mb-4 text-[#1C1C1C]">
      <time>© {YEAR} </time> {metaData.title}
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  );
}
