import React from "react";
import PostStatus from "./PostStatus";
import BlogFilter from "./BlogFilter";
import DashBlogList from "./DashBlogList";
import Link from "next/link";

export default function DashContent({ filteredPosts }) {
  return (
    <main className="w-full h-[70vh] flex flex-col">
      <div className="grid grid-cols-8 w-full flex-1 min-h-full">
        <div className="staticDiv col-span-2 relative h-full p-5">
          <PostStatus />

          <div className="social absolute -bottom-10 left-0 w-full">
            <div className="userDetail flex flex-col w-[60%] justify-center my-auto gap-4">
              <h3 className="my-auto">Full Name</h3>
              <Link
                href={"/"}
                className="border-2 border-red-500/40 hover:bg-red-500 cursor-pointer text-center text-white px-3 py-1 transition-all duration-300"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
        <div className="contentView col-span-6 overflow-y-scroll scrollbar-hide p-2">
          <DashBlogList filteredPosts={filteredPosts} />
        </div>
      </div>
    </main>
  );
}
