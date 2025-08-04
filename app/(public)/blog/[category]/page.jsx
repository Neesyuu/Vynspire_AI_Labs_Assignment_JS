import BlankViewCardComponent from "@/components/cards/BlankViewCardComponent";
import ViewCardComponent from "@/components/cards/ViewCardComponent";
import SocialLinks from "@/components/ui/SocialLinks";
import { CategoryList } from "@/config/category";
import Link from "next/link";
import { use } from "react";

// Server-side function to fetch posts
async function fetchPosts(category) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
    if (!apiUrl) {
      console.error("API URL not configured");
      return [];
    }

    const response = await fetch(`${apiUrl}/blogs`, {
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

    const filteredPosts = data.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase() && post.status.toLowerCase() === "published"
    );
    return filteredPosts || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Blogs({ params }) {
  const { category } = await params;
  const id = 1;
  const categories = CategoryList;
  const allPosts = await fetchPosts(category);
  return (
    <main className="w-full h-[80vh] md:h-[70vh] flex flex-col transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-7 w-full flex-1 min-h-full transition-all duration-300">
        <div className="staticDiv col-span-2 relative h-full p-5">
          <div className="tags flex flex-col gap-1 h-full ">
            <div className="listTags my-auto">
              <ul className="flex flex-row md:flex-col gap-8 md:gap-0 scrollbar-hide overflow-x-scroll md:overflow-x-hidden transition-all duration-300">
                <li className="text-sm opacity-50 hover:opacity-100 my-1 transition-all duration-300">
                  <Link href={"/"}>All</Link>
                </li>

                {categories.map((categorySelected) => (
                  <li
                    className={`${
                      categorySelected.toLowerCase() === category
                        ? "text-3xl font-bold text-red-500 hover:text-white my-2"
                        : "text-sm opacity-50 hover:opacity-100 my-1"
                    } transition-all duration-300`}
                    key={categorySelected.toLowerCase()}
                  >
                    <Link href={`/blog/${categorySelected.toLowerCase()}`}>{categorySelected}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="social absolute bottom-0 left-0 hidden md:block">
            <SocialLinks />
          </div>
        </div>
        <div className="contentView col-span-5 overflow-y-scroll scrollbar-hide p-2 transition-all duration-300">
          <div className="contentItem grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16 transition-all duration-300">
            {allPosts.length > 0 ? (
              allPosts.map((post, index) => (
                <ViewCardComponent key={post._id || post.id || index} imageId={post.image || "1"} post={post} />
              ))
            ) : (
              // Fallback to static cards if no posts are fetched
              <>
                <BlankViewCardComponent />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
