"use client";
import Image from "next/image";
import NavMenu from "./components/NavMenu";
import SocialLinks from "./components/SocialLinks";
import ProductPopup from "./components/ProductPopup";

export default function Page() {
  return (
    <div>
      <main className="relative fullscreen-safe">
        <div className="fixed top-4 left-1/2 -translate-x-1/2 md:top-6 md:left-10 md:translate-x-0 z-50 flex gap-5 text-lg text-white justify-center md:justify-end w-full md:w-auto">
          <SocialLinks />
        </div>
        <Image
          src="/home.jpeg"
          alt="Isaia Huron"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <ProductPopup />
        <NavMenu />
      </main>
    </div>
  );
}
