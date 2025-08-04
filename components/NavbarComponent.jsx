"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavbarButtonChecker from "./NavbarButtonChecker";

export default function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
      {/* Logo */}
      <div className="logo">
        <h1 className="!text-xl sm:!text-2xl font-bold">Blog World</h1>
      </div>

      {/* Desktop Menu */}
      <div className="menuList hidden md:block">
        <ul className="flex gap-6 lg:gap-9">
          <li>
            <Link href={"/"} className="hover:text-red-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/#"} className="hover:text-red-500 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href={"/#"} className="hover:text-red-500 transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <NavbarButtonChecker />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-red-500 transition-colors focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 bg-opacity-50 z-40 md:hidden" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full text-center transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 ">
            <div className="text-lg font-semibold"></div>
            <button
              onClick={closeMobileMenu}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 p-4 flex flex-col items-center justify-center">
            <ul className="space-y-8">
              <li>
                <Link
                  href={"/"}
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-gray-800 hover:text-red-500 transition-colors rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/#"}
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-gray-800 hover:text-red-500 transition-colors rounded"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/#"}
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-gray-800 hover:text-red-500 transition-colors rounded"
                >
                  Contact
                </Link>
              </li>
              <li>
                <div onClick={closeMobileMenu}>
                  <NavbarButtonChecker />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
