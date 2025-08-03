"use client";
import LoadingDots from "@/components/LoadingDots";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AuthLayout({ children }) {
  const { fetchAuthentication, isLoading, setIsLoading, isAuthorized } = useAuth();

  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    if (!fetchAuthentication()) {
      router.push("/");
    } else {
      setCheckingAuth(false);
    }
  }, [isAuthorized]);

  if (checkingAuth) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingDots />
      </div>
    );
  } else {
    return (
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute w-full h-full z-50">
            <div className="flex justify-center items-center h-screen bg-black/85 z-50">
              <LoadingDots />
            </div>
          </div>
        )}
        {children}
      </div>
    );
  }
}
