"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import React, { useEffect } from "react";

export default function NavbarButtonChecker() {
  const { isAuthorized, fetchAuthentication } = useAuth();

  useEffect(() => {
    fetchAuthentication();
  }, []);

  if (isAuthorized) {
    return <Link href={"/dashboard"}>Dashboard</Link>;
  }
  return <Link href={"/login"}>Login</Link>;
}
