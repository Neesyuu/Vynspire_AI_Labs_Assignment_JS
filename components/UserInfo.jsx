"use client";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

export default function UserInfo() {
  const { userData, getUserDataFromToken, isAuthorized } = useAuth();

  const handleDecodeToken = () => {
    const decodedData = getUserDataFromToken();
    if (decodedData) {
      console.log("Decoded token data:", decodedData);
      alert(
        `User ID: ${decodedData.id}\nFull Name: ${decodedData.fullName}\nEmail: ${decodedData.email}\nAvatar: ${decodedData.avatar}`
      );
    } else {
      alert("No valid token found!");
    }
  };

  if (!isAuthorized) {
    return (
      <div className="p-4 bg-gray-800 rounded-lg">
        <p className="text-white">Please log in to view user information.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-4">User Information</h3>

      {userData ? (
        <div className="space-y-2 text-white">
          <p>
            <strong>ID:</strong> {userData.id}
          </p>
          <p>
            <strong>Full Name:</strong> {userData.fullName}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Avatar:</strong> {userData.avatar}
          </p>
          {userData.iat && (
            <p>
              <strong>Issued At:</strong> {new Date(userData.iat * 1000).toLocaleString()}
            </p>
          )}
          {userData.exp && (
            <p>
              <strong>Expires At:</strong> {new Date(userData.exp * 1000).toLocaleString()}
            </p>
          )}
        </div>
      ) : (
        <p className="text-white">No user data available.</p>
      )}

      <button
        onClick={handleDecodeToken}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Decode Token Manually
      </button>
    </div>
  );
}
