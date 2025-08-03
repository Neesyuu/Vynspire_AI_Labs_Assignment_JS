import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DashBlogList({ filteredPosts }) {
  const getStatusBadge = (status) => {
    const statusConfig = {
      published: "bg-green-600 text-white",
      draft: "bg-yellow-600 text-white",
      archived: "bg-gray-600 text-white",
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusConfig[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };
  return (
    <div className="">
      {/* Posts Table */}
      <div className="  border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Post</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-700">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover: transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="relative w-12 h-12  overflow-hidden flex-shrink-0">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white line-clamp-1">{post.title}</div>
                        <div className="text-sm text-gray-400 line-clamp-1">{post.excerpt}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{post.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{post.category}</td>
                  <td className="px-6 py-4">{getStatusBadge(post.status)}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{post.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/dashboard/edit/${post.id}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </Link>
                      <Link href={`/blog/${post.id}`} className="text-green-400 hover:text-green-300 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </Link>
                      <button className="text-red-400 hover:text-red-300 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24  rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}
