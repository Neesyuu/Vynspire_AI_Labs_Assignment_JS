import ViewCardComponent from "@/components/cards/ViewCardComponent";
import SocialLinks from "@/components/ui/SocialLinks";
import { CategoryList } from "@/config/category";
import Link from "next/link";

// Server-side function to fetch posts
async function fetchPosts() {
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
    return data.data || data || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Home() {
  const id = 1;
  const categories = CategoryList;

  // Fetch posts on the server side
  const allPosts = await fetchPosts();

  return (
    <main className="w-full h-[70vh] flex flex-col">
      <div className="grid grid-cols-7 w-full flex-1 min-h-full">
        <div className="staticDiv col-span-2 relative h-full p-5">
          <div className="tags flex flex-col gap-1 h-full ">
            <div className="listTags my-auto">
              <ul className="">
                <li className="text-4xl font-bold text-red-500 hover:text-white transition-all duration-300 my-2">
                  <Link href={"/"}>All</Link>
                </li>
                {categories.map((category) => (
                  <li className="text-sm opacity-50 hover:opacity-100 my-1 transition-all duration-300" key={category}>
                    <Link href={`/blog/${category.toLowerCase()}`}>{category}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="social absolute bottom-0 left-0">
            <SocialLinks />
          </div>
        </div>
        <div className="contentView col-span-5 overflow-y-scroll scrollbar-hide p-2">
          <div className="contentItem grid grid-cols-3 gap-x-6 gap-y-16">
            {allPosts.length > 0 ? (
              allPosts.map((post, index) => (
                <ViewCardComponent key={post._id || post.id || index} imageId={post.image || "1"} post={post} />
              ))
            ) : (
              // Fallback to static cards if no posts are fetched
              <>
                <ViewCardComponent imageId="1" />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
