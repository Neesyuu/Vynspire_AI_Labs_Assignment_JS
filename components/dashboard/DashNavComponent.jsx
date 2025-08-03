import Link from "next/link";
import React from "react";
import BlogFilter from "./BlogFilter";

export default function DashNavComponent({
  selectedStatus,
  setSelectedStatus,
  searchQuery,
  setSearchQuery,
  filteredPosts,
}) {
  return (
    <div className="navbar w-full flex justify-between">
      <div className="logo">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-1">Manage your blog posts</p>
      </div>
      <div className="menuList">
        <ul className="flex gap-5">
          <li>
            <BlogFilter
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </li>
          <li>
            <Link href={"/dashboard/create"} className="flex gap-2 bg-red-500 px-3 py-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="my-auto">Create Post</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
