import Image from "next/image";
import React from "react";
import img1 from "@/public/blog/blog1.jpg";
import img2 from "@/public/blog/blog2.jpg";
import Link from "next/link";

export default function ViewCardComponent(params) {
  const { imageId, id } = params;
  return (
    <div className="h-[66vh] grid grid-rows-6 transition-all duration-300 group">
      <div className="cardImage w-full row-span-4 overflow-clip transition-all duration-300">
        <Image
          src={imageId === "1" ? img1 : img2}
          height={1000}
          width={1000}
          alt="blog1"
          className="w-full h-full object-cover group-hover:scale-100 transition-all duration-300"
        />
      </div>
      <div className="row-span-2 relative my-3 mx-2">
        <div className="cardContent flex flex-col gap-4">
          <h1 className="text-xl font-bold group-hover:text-red-500 transition-all duration-300 cursor-default">
            How to choose a psychologist
          </h1>
          <p className="text-xs opacity-50">
            Tips for choosing a psychologist and answers to financial questions related to therapy.
          </p>
          <Link href={`/blog/${id ? id : 1}`} className="text-sm hover:underline absolute bottom-0 left-0">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
