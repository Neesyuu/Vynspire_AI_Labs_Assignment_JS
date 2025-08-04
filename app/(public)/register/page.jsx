"use client";

import LoadingDots from "@/components/LoadingDots";
import { useAuth } from "@/hooks/useAuth";
import { generateToken } from "@/utils/tokenController";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const { registerUser, isLoading, setIsLoading, fetchAuthentication, isAuthorized } = useAuth();

  const [checkingAuth, setCheckingAuth] = useState(true);

  // Yup validation schema
  const validationSchema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full name is required")
      .min(2, "Full name must be at least 2 characters")
      .max(50, "Full name must be less than 50 characters")
      .matches(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),
    email: yup.string().required("Email is required").email("Please enter a valid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be less than 50 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Validate field on change (with debounce)
    try {
      await validationSchema.validateAt(name, { ...formData, [name]: value });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrors((prev) => ({
          ...prev,
          [name]: error.message,
        }));
      }
    }
  };

  const errorVerifier = (errors) => {
    let hasError = false;
    Object.entries(errors).map(([key, value]) => {
      if (value) {
        hasError = true;
      }
    });
    return hasError;
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.confirmPassword.trim() !== "" &&
      !errorVerifier(errors)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate all fields
      await validationSchema.validate(formData, { abortEarly: false });

      // Clear all errors if validation passes
      setErrors({});

      const response = await registerUser(formData.fullName, formData.email, formData.password);

      if (response) {
        router.push("/dashboard");
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  useEffect(() => {
    if (fetchAuthentication()) {
      router.push("/dashboard");
    } else {
      setCheckingAuth(false);
    }
  }, [isLoading, isAuthorized, router]);

  if (checkingAuth) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <LoadingDots />
      </div>
    );
  }

  return (
    <div className="mt-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Field */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 bg-white text-black  border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 bg-white text-black  border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 pr-10 bg-white text-black  border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 pr-10 bg-white text-black  border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showConfirmPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>

        {/* Register Button */}
        <div>
          <button
            type="submit"
            disabled={!isFormValid() || isLoading}
            className={`w-full py-2 px-4 font-semibold  shadow-md transition duration-300 ease-in-out ${
              isFormValid()
                ? "cursor-pointer bg-red-500 hover:bg-red-700 text-white"
                : "cursor-not-allowed bg-red-900 text-gray-300"
            }`}
          >
            {isLoading ? (
              <div className="py-2">
                <LoadingDots />
              </div>
            ) : (
              "Register"
            )}
          </button>
        </div>
      </form>

      <div className="loginLink my-5">
        <p className="text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="text-white hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
