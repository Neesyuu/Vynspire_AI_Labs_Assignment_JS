import AuthenticationContext from "@/context/Authentication/AuthenticationContext";
import { useContext } from "react";

export const useAuth = () => {
  const authContext = useContext(AuthenticationContext);

  if (authContext === undefined) {
    throw new Error("useAuth must be used within an AuthenticationProvider");
  }

  return authContext;
};
