import Link from "next/link";
import React from "react";
import NavbarButtonChecker from "./NavbarButtonChecker";

export default function NavbarComponent() {
  return (
    <div className="navbar w-full flex justify-between">
      <div className="logo">
        <h1 className="text-2xl font-bold">Blog World</h1>
      </div>
      <div className="menuList">
        <ul className="flex gap-9">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Contact</Link>
          </li>
          <li>
            <NavbarButtonChecker />
          </li>
        </ul>
      </div>
    </div>
  );
}
