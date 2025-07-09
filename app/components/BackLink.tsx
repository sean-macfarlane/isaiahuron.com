"use client";
import Link from "next/link";

export default function BackLink({ href = "/", children = "BACK" }) {
  return (
    <Link
      href={href}
      className="fixed top-4 left-4 z-50 px-4 py-2 bg-white text-sm rounded-full border border-black-1/10 text-black hover:bg-white transition-colors"
    >
      {children}
    </Link>
  );
}
