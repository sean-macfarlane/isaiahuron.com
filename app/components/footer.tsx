"use client";

import React from "react";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.tiktok} icon={FaTiktok} />
    </div>
  );
}

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
