import React from "react";
import PostStatus from "./PostStatus";
import BlogFilter from "./BlogFilter";
import DashBlogList from "./DashBlogList";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import LoadingDots from "../LoadingDots";
import { GoHome, GoHomeFill } from "react-icons/go";
import Image from "next/image";

export default function DashContent({ filteredPosts }) {
  const { handleLogout, isLoading, userData } = useAuth();

  return (
    <main className="w-full h-[70vh] flex flex-col">
      <div className="grid grid-cols-8 w-full flex-1 min-h-full">
        <div className="staticDiv col-span-2 relative h-full p-5">
          <PostStatus filteredPosts={filteredPosts} />
          <div className="social absolute -bottom-10 left-0 w-full">
            <div className="userDetail flex flex-col w-[60%] justify-center my-auto gap-2">
              <div className="my-auto flex items-center gap-2 border-2 border-red-500 ">
                <div className="flex items-center">
                  <div className="p-3  group w-14 h-14">
                    <img
                      src={userData?.avatar}
                      alt="profile"
                      width={30}
                      height={30}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="nameText">
                  <h3 className="!text-sm line-clamp-1">{userData?.fullName}</h3>
                  <p className="text-xs text-gray-500">Blogger</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleLogout}
                  className="w-full border-2 border-red-500/40 hover:bg-red-500 cursor-pointer text-center text-white px-3 py-1 transition-all duration-300"
                >
                  {isLoading ? (
                    <div className="py-2">
                      <LoadingDots />
                    </div>
                  ) : (
                    "Logout"
                  )}
                </button>
                <Link href={"/"} className="flex items-center">
                  <div className="flex items-center">
                    <div className="p-3 border-2 border-red-500 hover:bg-red-500 cursor-pointer group">
                      <GoHome className="w-6 h-6 text-white group-hover:hidden" />
                      <GoHomeFill className="w-6 h-6 text-white hidden group-hover:block" />
                    </div>
                  </div>
                </Link>
              </div>
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
