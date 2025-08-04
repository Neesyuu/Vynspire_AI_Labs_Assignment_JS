import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/ui/SocialLinks";

// Server-side function to fetch posts
async function fetchPosts(id) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
    if (!apiUrl) {
      console.error("API URL not configured");
      return [];
    }

    const response = await fetch(`${apiUrl}/blogs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Disable caching for fresh data
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || data || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function fetchBlogger(id) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
    if (!apiUrl) {
      console.error("API URL not configured");
      return [];
    }

    const response = await fetch(`${apiUrl}/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Disable caching for fresh data
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || data || null;
  } catch (error) {
    // console.error("Error fetching posts:", error);
    return null;
  }
}

export default async function BlogPostPage({ params }) {
  const { id, category } = await params;
  const postId = id || 1;

  // Fetch posts on the server side
  const post = await fetchPosts(postId);
  let bloggerData = {};
  if (post.user) {
    bloggerData = await fetchBlogger(post.user);
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold  mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="sticky top-16 z-0">
        <Link
          href={`/blog/${category}`}
          className="group text-sm font-semibold text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 transition duration-300"
        >
          <span className="">Go Back</span>
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Hero Image */}
        <div className="relative h-96 mb-8 overflow-hidden">
          <Image
            src={`/api/image-proxy?url=${encodeURIComponent(post.image)}`}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

          {/* <p className="text-xl mb-8 leading-relaxed">{post.excerpt}</p> */}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {/* <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: post.description }} /> */}
          <div className="leading-relaxed">{post.description}</div>
        </div>

        {/* Author Info */}
        {bloggerData && (
          <div className="my-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <img src={bloggerData?.avatar} alt={bloggerData?.fullName} className="object-cover bg-white" />
              </div>
              <div>
                <p className="font-semibold">{bloggerData?.fullName}</p>
                <p className="text-sm">{bloggerData?.email}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="pt-8 ">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded-full hover:bg-red-800 cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
          <Link href={`/blog/${post.category}`}>
            <span className="px-3 py-1 bg-red-500 text-white text-sm rounded-full hover:bg-red-800 cursor-pointer transition-colors">
              {post.category}
            </span>
          </Link>
          <div className="flex gap-6">
            <h3 className="text-lg font-semibold mb-4 my-auto">Share this article</h3>
            <div className="flex gap-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
