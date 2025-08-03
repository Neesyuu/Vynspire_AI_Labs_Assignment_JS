"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Sample blog posts data (in a real app, this would come from an API)
const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development: What's Next in 2024",
    excerpt:
      "Explore the latest trends in web development, from AI-powered tools to new frameworks that are shaping the future of the industry.",
    content: `
      <p class="mb-6">The landscape of web development is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and deploy web applications. From AI-powered development tools to new frameworks that promise better performance and developer experience, the future looks incredibly promising.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">AI-Powered Development Tools</h2>
      <p class="mb-6">Artificial Intelligence is revolutionizing how we write code. Tools like GitHub Copilot and Amazon CodeWhisperer are becoming indispensable for developers, offering intelligent code completion, bug detection, and even code generation based on natural language descriptions.</p>
      
      <p class="mb-6">These AI assistants are not just about writing code faster—they're about writing better code. They can suggest optimizations, identify potential security vulnerabilities, and help maintain consistent coding standards across teams.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Rise of Edge Computing</h2>
      <p class="mb-6">Edge computing is transforming how we deliver web applications. By processing data closer to users, we can achieve significantly faster load times and better user experiences. This is particularly important for applications that require real-time interactions or handle large amounts of data.</p>

      <p class="mb-6">Platforms like Vercel, Netlify, and Cloudflare are making edge computing more accessible to developers, offering global CDNs and serverless functions that run at the edge.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Modern JavaScript Frameworks</h2>
      <p class="mb-6">React, Vue, and Angular continue to dominate, but new frameworks are emerging that offer different approaches to building web applications. Svelte, for example, compiles components to vanilla JavaScript at build time, resulting in smaller bundle sizes and better performance.</p>

      <p class="mb-6">Solid.js takes a similar approach, while frameworks like Qwik focus on resumability—the ability to resume JavaScript execution without re-running the entire application.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Web Components and Micro-Frontends</h2>
      <p class="mb-6">Web Components are gaining traction as a way to create reusable, framework-agnostic components. This is particularly useful in micro-frontend architectures, where different teams can work on different parts of an application using different technologies.</p>

      <p class="mb-6">The ability to build components that work across different frameworks and can be shared across projects is becoming increasingly important as applications grow in complexity.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Performance and Core Web Vitals</h2>
      <p class="mb-6">Google's Core Web Vitals are now more important than ever, with performance directly impacting search rankings. Developers are focusing on metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>

      <p class="mb-6">Techniques like code splitting, lazy loading, and image optimization are becoming standard practices. Tools like Lighthouse and WebPageTest are essential for monitoring and improving performance.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Future is Bright</h2>
      <p class="mb-6">As we look ahead, the future of web development is incredibly exciting. The combination of AI assistance, edge computing, and modern frameworks is creating opportunities to build applications that are faster, more reliable, and more user-friendly than ever before.</p>

      <p class="mb-6">The key to success in this evolving landscape is staying curious, experimenting with new technologies, and always keeping the user experience at the center of everything we build.</p>
    `,
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    date: "March 15, 2024",
    category: "Technology",
    status: "published",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    tags: ["Web Development", "AI", "JavaScript", "Performance"],
  },
  {
    id: "2",
    title: "Mastering React Hooks: A Comprehensive Guide",
    excerpt:
      "Learn how to effectively use React Hooks to build better, more maintainable components and improve your development workflow.",
    content: `
      <p class="mb-6">React Hooks have revolutionized how we write React components. Since their introduction in React 16.8, hooks have become the preferred way to add state and side effects to functional components. In this comprehensive guide, we'll explore everything you need to know about React Hooks.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Understanding the Basics</h2>
      <p class="mb-6">Hooks are functions that allow you to "hook into" React state and lifecycle features from function components. They were introduced to solve several problems with class components, including complex component hierarchies and the difficulty of reusing stateful logic.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The useState Hook</h2>
      <p class="mb-6">The useState hook is the most fundamental hook in React. It allows you to add state to functional components. Here's a simple example:</p>

      <pre class="bg-gray-100 p-4 mb-6 overflow-x-auto"><code>function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The useEffect Hook</h2>
      <p class="mb-6">The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in class components.</p>

      <p class="mb-6">useEffect runs after every render by default, but you can control when it runs by passing a dependency array as the second argument.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Custom Hooks</h2>
      <p class="mb-6">One of the most powerful features of hooks is the ability to create custom hooks. Custom hooks allow you to extract component logic into reusable functions.</p>

      <p class="mb-6">Here's an example of a custom hook for managing form state:</p>

      <pre class="bg-gray-100 p-4 mb-6 overflow-x-auto"><code>function useForm(initialState) {
  const [values, setValues] = useState(initialState);
  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  
  return [values, handleChange];
}</code></pre>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Best Practices</h2>
      <p class="mb-6">When using hooks, it's important to follow the Rules of Hooks:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Only call hooks at the top level of your function component</li>
        <li>Don't call hooks inside loops, conditions, or nested functions</li>
        <li>Only call hooks from React function components or custom hooks</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Advanced Hooks</h2>
      <p class="mb-6">Beyond useState and useEffect, React provides several other built-in hooks:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li><strong>useContext:</strong> Subscribe to React context without introducing nesting</li>
        <li><strong>useReducer:</strong> Manage complex state logic</li>
        <li><strong>useCallback:</strong> Memoize functions to prevent unnecessary re-renders</li>
        <li><strong>useMemo:</strong> Memoize expensive calculations</li>
        <li><strong>useRef:</strong> Access DOM elements and persist values between renders</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusion</h2>
      <p class="mb-6">React Hooks have fundamentally changed how we write React applications. They make components more readable, reusable, and easier to test. By understanding and properly using hooks, you can write more maintainable and efficient React code.</p>

      <p class="mb-6">The key is to start with the basics—useState and useEffect—and gradually incorporate more advanced hooks as your understanding grows. Remember to always follow the Rules of Hooks and consider creating custom hooks to share logic between components.</p>
    `,
    author: "Mike Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    date: "March 12, 2024",
    category: "Programming",
    status: "draft",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
    tags: ["React", "JavaScript", "Hooks", "Frontend"],
  },
];

export default function EditPostPage() {
  const params = useParams();
  const postId = params.id;

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
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);

  const categories = ["Technology", "Programming", "Design", "Performance", "CSS", "JavaScript", "React"];

  useEffect(() => {
    // Simulate API call to fetch post data
    const fetchPost = () => {
      const foundPost = blogPosts.find((p) => p.id === postId);
      if (foundPost) {
        setPost(foundPost);
        setFormData({
          title: foundPost.title,
          excerpt: foundPost.excerpt,
          content: foundPost.content,
          author: foundPost.author,
          category: foundPost.category,
          status: foundPost.status,
          imageUrl: foundPost.imageUrl,
          tags: foundPost.tags.join(", "),
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

  if (!post) {
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
              <Link href={`/blog/${postId}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                View Post
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Author *</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
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
                className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
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
                  className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white ${
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
                  className="w-full px-4 py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Content</h2>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Content *</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={12}
                className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
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
          <div className="p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Media</h2>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Featured Image URL *</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 ${
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
          <div className="p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Tags</h2>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter tags separated by commas (e.g., React, JavaScript, Web Development)"
              />
              <p className="text-gray-400 text-sm mt-2">Separate multiple tags with commas.</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <Link href="/dashboard" className="px-6 py-3 text-white hover:bg-gray-600 transition-colors">
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors font-semibold"
            >
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
