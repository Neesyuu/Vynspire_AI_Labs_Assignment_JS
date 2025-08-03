import React from "react";

export default function BlogFilter({ selectedStatus, setSelectedStatus, searchQuery, setSearchQuery }) {
  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex gap-2">
          {["all", "published", "draft", "archived"].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1 text-sm font-medium transition-colors ${
                selectedStatus === status ? "bg-red-600 text-white" : " text-gray-300 hover:bg-gray-600"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-2 py-2 pl-10  border border-gray-600  focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
