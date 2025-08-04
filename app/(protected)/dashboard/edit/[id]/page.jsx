"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { usePosts } from "@/hooks/usePosts";
import { CategoryList } from "@/config/category";
import { PostStatusList } from "@/config/postStatus";
import { toast } from "react-toastify";
import RichTextEditorComponent from "@/components/RichTextEditor/RichTextEditorComponent";

export default function EditPostPage() {
  const params = useParams();
  const postId = params.id;

  const { userData } = useAuth();

  const { createPost, isPostsLoading, allPosts, fetchAllPosts, fetchPostById, updatePost } = usePosts();

  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    brief: "",
    description: "",
    user: userData?.id,
    category: "",
    status: "draft",
    image: "",
    tags: "",
    user: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);

  const categories = CategoryList;
  const statusList = PostStatusList;

  useEffect(() => {
    // Simulate API call to fetch post data
    const fetchPost = async () => {
      const foundPost = await fetchPostById(postId);
      if (foundPost) {
        setPost(foundPost);
        setFormData({
          title: foundPost.title,
          brief: foundPost.brief,
          description: foundPost.description,
          image: foundPost.image,
          tags: foundPost.tags.join(", "),
          status: foundPost.status,
          category: foundPost.category,
          user: foundPost.user,
        });
      }
      setIsLoading(false);
    };

    fetchPost();
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle rich text editor changes
  const handleDescriptionChange = (htmlContent) => {
    // Prevent form submission by updating state without triggering form events
    setFormData((prev) => ({
      ...prev,
      description: htmlContent,
    }));

    // Clear error when user starts typing
    if (errors.description) {
      setErrors((prev) => ({
        ...prev,
        description: "",
      }));
    }
  };

  // Function to process tags string into array
  const processTags = (tagsString) => {
    if (!tagsString.trim()) return [];

    return tagsString
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.brief.trim()) newErrors.brief = "Brief is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process the form data for submission
    const submissionData = {
      ...formData,
      tags: processTags(formData.tags), // Convert tags string to array
    };

    // You would typically send this to your API
    const response = await updatePost(
      postId,
      formData.user,
      submissionData.title,
      submissionData.brief,
      submissionData.description,
      submissionData.image,
      submissionData.tags,
      submissionData.status,
      submissionData.category
    );

    if (response) {
      toast.success("Post updated successfully!");
      router.push(`/blog/${submissionData.category.toLowerCase()}/${postId}`);
    } else {
      toast.error("Post update failed!");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post || parseInt(formData.user) !== parseInt(userData.id)) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The post you're looking for doesn't exist.</p>
          <Link href="/dashboard" className="px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/dashboard"
                className="text-gray-400 hover:text-white transition-colors mb-2 inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Dashboard
              </Link>
              <h1 className="text-3xl font-bold text-white">Edit Post</h1>
              <p className="text-gray-400 mt-1">Update your blog post</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={`/blog/${post.category.toLowerCase()}/${postId}`}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Post
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Basic Information */}
          <div className="p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
                    errors.title ? "border-red-500" : "border-gray-600"
                  }`}
                  placeholder="Enter post title"
                />
                {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Brief *</label>
                <textarea
                  type="text"
                  name="brief"
                  value={formData.brief}
                  onChange={handleChange}
                  className={`w-full px-4 py-3  border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
                    errors.brief ? "border-red-500" : "border-gray-600"
                  }`}
                  placeholder="Enter post brief"
                />
                {errors.brief && <p className="text-red-400 text-sm mt-1">{errors.brief}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white ${
                    errors.category ? "border-red-500" : "border-gray-600"
                  }`}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                >
                  {statusList.map((status) => (
                    <option key={status} value={status.toLowerCase()}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* description */}
          <div className=" p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Description</h2>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description *</label>
              <RichTextEditorComponent content={formData.description} onChange={handleDescriptionChange} />
              {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
              <p className="text-gray-400 text-sm mt-2">
                Use the toolbar above to format your content with headings, lists, links, images, and more.
              </p>
            </div>
          </div>

          {/* Media */}
          <div className=" p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Media</h2>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Featured Image URL *</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className={`w-full px-4 py-3  border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
                  errors.image ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="https://images.unsplash.com/photo-..."
              />
              {errors.image && <p className="text-red-400 text-sm mt-1">{errors.image}</p>}
              <p className="text-gray-400 text-sm mt-2">Enter a valid image URL. Recommended size: 1200x600 pixels.</p>
            </div>

            {formData.image && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Image Preview</label>
                <div className="relative w-full h-60 overflow-hidden border border-gray-600">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target;
                      target.style.display = "none";
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className=" p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Tags</h2>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-4 py-3  border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter tags separated by commas (e.g., React, JavaScript, Web Development)"
              />
              <p className="text-gray-400 text-sm mt-2">Separate multiple tags with commas.</p>

              {/* Show processed tags preview */}
              {formData.tags && (
                <div className="mt-3">
                  <p className="text-sm text-gray-400 mb-2">Tags that will be sent:</p>
                  <div className="flex flex-wrap gap-2">
                    {processTags(formData.tags).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 text-white text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <Link href="/dashboard" className="px-6 py-3 text-white hover:bg-gray-600 transition-colors">
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-3 cursor-pointer bg-red-600 text-white hover:bg-red-700 transition-colors font-semibold"
            >
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
