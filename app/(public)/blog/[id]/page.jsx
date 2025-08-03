"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development: What's Next in 2024",
    excerpt:
      "Explore the latest trends in web development, from AI-powered tools to new frameworks that are shaping the future of the industry.",
    content: `
      <p class="mb-6">The landscape of web development is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and deploy web applications. From AI-powered development tools to new frameworks that promise better performance and developer experience, the future looks incredibly promising.</p>

      <h2 class="text-2xl font-bold  mb-4 mt-8">AI-Powered Development Tools</h2>
      <p class="mb-6">Artificial Intelligence is revolutionizing how we write code. Tools like GitHub Copilot and Amazon CodeWhisperer are becoming indispensable for developers, offering intelligent code completion, bug detection, and even code generation based on natural language descriptions.</p>
      
      <p class="mb-6">These AI assistants are not just about writing code faster—they're about writing better code. They can suggest optimizations, identify potential security vulnerabilities, and help maintain consistent coding standards across teams.</p>

      <h2 class="text-2xl font-bold  mb-4 mt-8">The Rise of Edge Computing</h2>
      <p class="mb-6">Edge computing is transforming how we deliver web applications. By processing data closer to users, we can achieve significantly faster load times and better user experiences. This is particularly important for applications that require real-time interactions or handle large amounts of data.</p>

      <p class="mb-6">Platforms like Vercel, Netlify, and Cloudflare are making edge computing more accessible to developers, offering global CDNs and serverless functions that run at the edge.</p>

      <h2 class="text-2xl font-bold  mb-4 mt-8">Modern JavaScript Frameworks</h2>
      <p class="mb-6">React, Vue, and Angular continue to dominate, but new frameworks are emerging that offer different approaches to building web applications. Svelte, for example, compiles components to vanilla JavaScript at build time, resulting in smaller bundle sizes and better performance.</p>

      <p class="mb-6">Solid.js takes a similar approach, while frameworks like Qwik focus on resumability—the ability to resume JavaScript execution without re-running the entire application.</p>

      <h2 class="text-2xl font-bold  mb-4 mt-8">Web Components and Micro-Frontends</h2>
      <p class="mb-6">Web Components are gaining traction as a way to create reusable, framework-agnostic components. This is particularly useful in micro-frontend architectures, where different teams can work on different parts of an application using different technologies.</p>

      <p class="mb-6">The ability to build components that work across different frameworks and can be shared across projects is becoming increasingly important as applications grow in complexity.</p>

      <h2 class="text-2xl font-bold  mb-4 mt-8">Performance and Core Web Vitals</h2>
      <p class="mb-6">Google's Core Web Vitals are now more important than ever, with performance directly impacting search rankings. Developers are focusing on metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>

      <p class="mb-6">Techniques like code splitting, lazy loading, and image optimization are becoming standard practices. Tools like Lighthouse and WebPageTest are essential for monitoring and improving performance.</p>

      <h2 class="text-2xl font-bold  mb-4 mt-8">The Future is Bright</h2>
      <p class="mb-6">As we look ahead, the future of web development is incredibly exciting. The combination of AI assistance, edge computing, and modern frameworks is creating opportunities to build applications that are faster, more reliable, and more user-friendly than ever before.</p>

      <p class="mb-6">The key to success in this evolving landscape is staying curious, experimenting with new technologies, and always keeping the user experience at the center of everything we build.</p>
    `,
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    date: "March 15, 2024",
    category: "Technology",
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

      <h2 class="text-2xl font-bold  mb-4 mt-8">Understanding the Basics</h2>
      <p class="mb-6">Hooks are functions that allow you to "hook into" React state and lifecycle features from function components. They were introduced to solve several problems with class components, including complex component hierarchies and the difficulty of reusing stateful logic.</p>

      <h2 class="text-2xl font-bold  mb-4 mt-8">The useState Hook</h2>
      <p class="mb-6">The useState hook is the most fundamental hook in React. It allows you to add state to functional components. Here's a simple example:</p>

      <pre class="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto"><code>function Counter() {
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

      <h2 class="text-2xl font-bold  mb-4 mt-8">The useEffect Hook</h2>
      <p class="mb-6">The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in class components.</p>

      <p class="mb-6">useEffect runs after every render by default, but you can control when it runs by passing a dependency array as the second argument.</p>

      <h2 class="text-2xl font-bold  mb-4 mt-8">Custom Hooks</h2>
      <p class="mb-6">One of the most powerful features of hooks is the ability to create custom hooks. Custom hooks allow you to extract component logic into reusable functions.</p>

      <p class="mb-6">Here's an example of a custom hook for managing form state:</p>

      <pre class="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto"><code>function useForm(initialState) {
  const [values, setValues] = useState(initialState);
  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  
  return [values, handleChange];
}</code></pre>

      <h2 class="text-2xl font-bold  mb-4 mt-8">Best Practices</h2>
      <p class="mb-6">When using hooks, it's important to follow the Rules of Hooks:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Only call hooks at the top level of your function component</li>
        <li>Don't call hooks inside loops, conditions, or nested functions</li>
        <li>Only call hooks from React function components or custom hooks</li>
      </ul>

      <h2 class="text-2xl font-bold  mb-4 mt-8">Advanced Hooks</h2>
      <p class="mb-6">Beyond useState and useEffect, React provides several other built-in hooks:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li><strong>useContext:</strong> Subscribe to React context without introducing nesting</li>
        <li><strong>useReducer:</strong> Manage complex state logic</li>
        <li><strong>useCallback:</strong> Memoize functions to prevent unnecessary re-renders</li>
        <li><strong>useMemo:</strong> Memoize expensive calculations</li>
        <li><strong>useRef:</strong> Access DOM elements and persist values between renders</li>
      </ul>

      <h2 class="text-2xl font-bold  mb-4 mt-8">Conclusion</h2>
      <p class="mb-6">React Hooks have fundamentally changed how we write React applications. They make components more readable, reusable, and easier to test. By understanding and properly using hooks, you can write more maintainable and efficient React code.</p>

      <p class="mb-6">The key is to start with the basics—useState and useEffect—and gradually incorporate more advanced hooks as your understanding grows. Remember to always follow the Rules of Hooks and consider creating custom hooks to share logic between components.</p>
    `,
    author: "Mike Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    date: "March 12, 2024",
    category: "Programming",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
    tags: ["React", "JavaScript", "Hooks", "Frontend"],
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id;

  const post = blogPosts.find((p) => p.id === postId);

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
          href={"/"}
          className="group text-sm font-semibold text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 transition duration-300"
        >
          <span className="">Go Back</span>
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Hero Image */}
        <div className="relative h-96 mb-8 overflow-hidden">
          <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

          <p className="text-xl mb-8 leading-relaxed">{post.excerpt}</p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Info */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
            </div>
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm">{post.date}</p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 ">
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

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <div>Facebook</div>
            <div>Twitter</div>
            <div>LinkedIn</div>
            <div>Email</div>
          </div>
        </div>
      </article>
    </div>
  );
}
