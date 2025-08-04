"use client";

import { getAllData, postData } from "@/apiServices/apiService";
import AuthenticationContext from "./AuthenticationContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { generateToken, decodeToken } from "@/utils/tokenController";
import { useRouter } from "next/navigation";

const AuthenticationState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userData, setUserData] = useState(null);

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const fetchUserByEmail = async (email) => {
    try {
      const data = {
        email,
      };

      const url = "/users";

      const response = await getAllData(url, data);

      if (response.data) {
        for (const user of response.data) {
          if (user.email === email) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    } catch (err) {
      toast.error(err);
      return false;
    }
  };

  const registerUser = async (fullName, email, password) => {
    setIsLoading(true);
    try {
      const data = {
        fullName,
        email,
        avatar: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${fullName}`,
        password,
      };

      const emailCheck = await fetchUserByEmail(email);

      if (emailCheck) {
        setIsLoading(false);
        toast.error("Email already exists!");
        setIsLoading(false);
        return false;
      }

      const url = "/users";

      const response = await postData(url, data);

      if (response.data) {
        let responseData = {
          id: response.data.id,
          fullName: response.data.fullName,
          email: response.data.email,
          avatar: response.data.avatar,
        };

        let genToken = await generateToken(responseData);

        localStorage.setItem("token", genToken);
        setUserData(responseData);

        await new Promise((resolve) => setTimeout(resolve, 200));
        toast.success("Registration successful!");
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        toast.error("Registration failed!");
        return false;
      }
    } catch (err) {
      toast.error(err);
      setIsLoading(false);
      return false;
    }
  };

  const loginUser = async (email, password) => {
    setIsLoading(true);
    try {
      const data = {
        email,
        password,
      };

      const url = "/users";

      const response = await getAllData(url, data);

      if (response.data && response.data.length > 0) {
        console.log(response.data, "response.data");
        for (const user of response.data) {
          console.log(user, "user");
          if (user.email === email && user.password === password) {
            let responseData = {
              id: user.id,
              fullName: user.fullName,
              email: user.email,
              avatar: user.avatar,
            };
            console.log(responseData, "responseData");

            let genToken = await generateToken(responseData);

            localStorage.setItem("token", genToken);
            setUserData(responseData);

            await new Promise((resolve) => setTimeout(resolve, 2000));
            // setIsLoading(false);
            return true;
          }
        }
        setIsLoading(false);
        toast.error("Make sure you have entered the correct credentials!");
        return false;
      } else {
        setIsLoading(false);
        toast.error("Make sure you have entered the correct credentials!");
        return false;
      }
    } catch (err) {
      toast.error(err);
      return false;
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    localStorage.removeItem("token");
    setUserData(null);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/");
    await new Promise((resolve) => setTimeout(resolve, 200));
    setIsLoading(false);
  };

  const fetchAuthentication = () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      // Decode the token to extract user data
      const decodedData = decodeToken(token);
      if (decodedData) {
        setUserData(decodedData);
        setIsAuthorized(true);
        setIsLoading(false);
        return true;
      } else {
        // Token is invalid, remove it
        localStorage.removeItem("token");
        setUserData(null);
        setIsAuthorized(false);
        setIsLoading(false);
        return false;
      }
    } else {
      setUserData(null);
      setIsAuthorized(false);
      setIsLoading(false);
      return false;
    }
  };

  const getUserDataFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return decodeToken(token);
    }
    return null;
  };

  return (
    <AuthenticationContext.Provider
      value={{
        registerUser,
        isLoading,
        setIsLoading,
        handleLogout,
        loginUser,
        fetchAuthentication,
        isAuthorized,
        userData,
        getUserDataFromToken,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationState;
