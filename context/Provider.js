"use client";

import AuthenticationState from "./Authentication/AuthenticationState";

export function Provider({ children }) {
  return <AuthenticationState>{children}</AuthenticationState>;
}
