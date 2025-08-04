"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DashNavComponent from "@/components/dashboard/DashNavComponent";
import DashContent from "@/components/dashboard/DashContent";
import { usePosts } from "@/hooks/usePosts";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { allMyPosts, fetchAllMyPosts, isPostsLoading } = usePosts();
  const { userData, fetchAuthentication } = useAuth();

  const filteredPosts = allMyPosts.filter((post) => {
    const matchesStatus = selectedStatus === "all" || post.status.toLowerCase() === selectedStatus.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  useEffect(() => {
    if (userData && userData.id) {
      fetchAllMyPosts(userData.id);
    } else {
      fetchAuthentication();
    }
  }, []);

  useEffect(() => {
    if (userData && userData.id) {
      if (allMyPosts) {
        fetchAllMyPosts(userData.id);
      }
    }
  }, [userData]);

  return (
    <div className="min-h-screen  text-white p-8 pb-20 gap-16 sm:p-20 sm:py-14">
      <DashNavComponent
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredPosts={filteredPosts}
      />
      <DashContent filteredPosts={filteredPosts} />
    </div>
  );
}
