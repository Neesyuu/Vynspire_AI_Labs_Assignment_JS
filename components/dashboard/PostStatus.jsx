import React from "react";

export default function PostStatus() {
  return (
    <div className="tags flex flex-col gap-1 h-full ">
      <div className="listTags my-auto flex flex-col gap-3">
        <div className="flex items-center">
          <div className="p-3 bg-red-600 ">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-gray-400 text-sm">Total Posts</p>
            {/* <p className="text-2xl font-bold text-white">{blogPosts.length}</p> */}
            <p className="text-2xl font-bold text-white">{3}</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="p-3 bg-green-600 ">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-gray-400 text-sm">Published</p>
            <p className="text-2xl font-bold text-white">
              {/* {blogPosts.filter((p) => p.status === "published").length} */}
              {3}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="p-3 bg-yellow-600 ">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-gray-400 text-sm">Drafts</p>
            <p className="text-2xl font-bold text-white">{3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
