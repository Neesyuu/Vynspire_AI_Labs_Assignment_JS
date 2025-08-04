import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

export default function SocialLinks() {
  return (
    <ul className="flex gap-4 text-xl">
      <li>
        <Link href={"https://www.facebook.com"} className="hover:text-red-500 transition-all duration-300">
          <BsFacebook />
        </Link>
      </li>
      <li>
        <Link href={"https://www.instagram.com"} className="hover:text-red-500 transition-all duration-300">
          <SiInstagram />
        </Link>
      </li>
      <li>
        <Link href={"https://www.linkedin.com"} className="hover:text-red-500 transition-all duration-300">
          <BsLinkedin />
        </Link>
      </li>
    </ul>
  );
}
