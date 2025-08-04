import Image from "next/image";
import React from "react";
import img1 from "@/public/blog/blog1.jpg";
import img2 from "@/public/blog/blog2.jpg";
import Link from "next/link";

export default function ViewCardComponent(params) {
  const { imageId, id, post } = params;

  // If post data is provided, use it; otherwise fall back to static content
  const title = post?.title || "Title";
  const brief = post?.brief || "Brief";
  const description = post?.description || "Description";
  const postId = post?._id || post?.id || id || 1;
  const category = post?.category || "category";
  const image = post?.image || img1;

  return (
    <div className="h-[66vh] grid grid-rows-6 transition-all duration-300 group">
      <div className="cardImage w-full row-span-4 overflow-clip transition-all duration-300">
        <Image
          src={`/api/image-proxy?url=${encodeURIComponent(image)}`}
          height={1000}
          width={1000}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-100 transition-all duration-300"
        />
      </div>
      <div className="row-span-2 relative my-3 mx-2">
        <div className="cardContent flex flex-col gap-4">
          <h1 className="text-xl line-clamp-1 font-bold group-hover:text-red-500 transition-all duration-300 cursor-default">
            {title}
          </h1>
          <div className="text-xs opacity-50 line-clamp-4">{brief}</div>

          <Link
            href={`/blog/${category.toLowerCase()}/${postId}`}
            className="text-sm hover:underline absolute bottom-0 left-0"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
