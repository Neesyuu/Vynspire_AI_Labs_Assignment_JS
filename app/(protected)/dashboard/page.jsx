"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DashNavComponent from "@/components/dashboard/DashNavComponent";
import DashContent from "@/components/dashboard/DashContent";

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development: What's Next in 2024",
    excerpt:
      "Explore the latest trends in web development, from AI-powered tools to new frameworks that are shaping the future of the industry.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Technology",
    status: "published",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Mastering React Hooks: A Comprehensive Guide",
    excerpt:
      "Learn how to effectively use React Hooks to build better, more maintainable components and improve your development workflow.",
    author: "Mike Chen",
    date: "March 12, 2024",
    category: "Programming",
    status: "draft",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Design Systems: Building Scalable UI Components",
    excerpt:
      "Discover the benefits of design systems and how they can help teams build consistent, scalable user interfaces faster.",
    author: "Emily Davis",
    date: "March 10, 2024",
    category: "Design",
    status: "published",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
  },
];

export default function DashboardPage() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesStatus = selectedStatus === "all" || post.status === selectedStatus;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

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
