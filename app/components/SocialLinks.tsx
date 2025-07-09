import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSoundcloud,
  FaFacebook,
} from "react-icons/fa6";
import { socialLinks } from "app/lib/config";

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity duration-300 hover:opacity-50"
    >
      <Icon size={24} />
    </a>
  );
}

export default function SocialLinks() {
  return (
    <>
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.tiktok} icon={FaTiktok} />
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.youtube} icon={FaYoutube} />
      <SocialLink href={socialLinks.facebook} icon={FaFacebook} />
      <SocialLink href={socialLinks.soundcloud} icon={FaSoundcloud} />
    </>
  );
}
