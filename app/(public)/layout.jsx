import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import React from "react";

export default function PublicLayout({ children }) {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen py-8 px-4 pb-2 md:pb-20 gap-2 md:gap-10 sm:px-20 sm:py-10 transition-all duration-300">
      <NavbarComponent />
      {children}
    </div>
  );
}
