"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function CreatePostPage() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    status: "draft",
    imageUrl: "",
    tags: "",
  });

  const [errors, setErrors] = useState({});

  const categories = ["Technology", "Programming", "Design", "Performance", "CSS", "JavaScript", "React"];

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.excerpt.trim()) newErrors.excerpt = "Excerpt is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.imageUrl.trim()) newErrors.imageUrl = "Image URL is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to your API
  };

  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      <div className=" border-b border-gray-700">
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
              <h1 className="text-3xl font-bold text-white">Create New Post</h1>
              <p className="text-gray-400 mt-1">Add a new blog post to your site</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className=" p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-3  border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
                    errors.title ? "border-red-500" : "border-gray-600"
                  }`}
                  placeholder="Enter post title"
                />
                {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Author *</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className={`w-full px-4 py-3  border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
                    errors.author ? "border-red-500" : "border-gray-600"
                  }`}
                  placeholder="Enter author name"
                />
                {errors.author && <p className="text-red-400 text-sm mt-1">{errors.author}</p>}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Excerpt *</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3  border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
                  errors.excerpt ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="Enter a brief excerpt for your post"
              />
              {errors.excerpt && <p className="text-red-400 text-sm mt-1">{errors.excerpt}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-3  border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white ${
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
                  className="w-full px-4 py-3  border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className=" p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Content</h2>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Content *</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={12}
                className={`w-full px-4 py-3  border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
                  errors.content ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="Write your blog post content here. You can use HTML tags for formatting."
              />
              {errors.content && <p className="text-red-400 text-sm mt-1">{errors.content}</p>}
              <p className="text-gray-400 text-sm mt-2">
                You can use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, etc. for formatting.
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
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className={`w-full px-4 py-3  border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
                  errors.imageUrl ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="https://images.unsplash.com/photo-..."
              />
              {errors.imageUrl && <p className="text-red-400 text-sm mt-1">{errors.imageUrl}</p>}
              <p className="text-gray-400 text-sm mt-2">Enter a valid image URL. Recommended size: 1200x600 pixels.</p>
            </div>

            {formData.imageUrl && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Image Preview</label>
                <div className="relative w-full h-48 overflow-hidden border border-gray-600">
                  <img
                    src={formData.imageUrl}
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
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <Link href="/dashboard" className="px-6 py-3  text-white hover:bg-gray-600 transition-colors">
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors font-semibold"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
