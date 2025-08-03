import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import React from "react";

export default function PublicLayout({ children }) {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 sm:py-14">
      <NavbarComponent />
      {children}
      {/* <FooterComponent /> */}
    </div>
  );
}
