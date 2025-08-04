"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addLink = () => {
    const url = window.prompt("Enter the URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  // Debug function to check what's active
  const debugActive = () => {
    console.log("Is bold:", editor.isActive("bold"));
    console.log("Is italic:", editor.isActive("italic"));
    console.log("Is underline:", editor.isActive("underline"));
    console.log("Is strike:", editor.isActive("strike"));
    console.log("Is bulletList:", editor.isActive("bulletList"));
    console.log("Is orderedList:", editor.isActive("orderedList"));
    console.log("Is blockquote:", editor.isActive("blockquote"));
    console.log("Is heading 1:", editor.isActive("heading", { level: 1 }));
    console.log("Is heading 2:", editor.isActive("heading", { level: 2 }));
    console.log("Is heading 3:", editor.isActive("heading", { level: 3 }));
  };

  return (
    <div className="border-b border-gray-600 p-4 bg-gray-800 rounded-t-lg">
      <div className="flex flex-wrap gap-2">
        {/* Text Formatting */}
        <button
          onClick={() => {
            editor.chain().focus().toggleBold().run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("bold") ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Bold"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.6 11.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 7.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
          </svg>
        </button>

        <button
          onClick={() => {
            editor.chain().focus().toggleItalic().run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("italic") ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Italic"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z" />
          </svg>
        </button>

        <button
          onClick={() => {
            editor.chain().focus().toggleUnderline().run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("underline") ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Underline"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
          </svg>
        </button>

        <button
          onClick={() => {
            editor.chain().focus().toggleStrike().run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("strike") ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Strike"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.64.26-.48.63-.85 1.08-1.11.46-.27.96-.4 1.51-.4.54 0 1.04.13 1.5.4.46.26.83.63 1.09 1.11.26.48.39 1.03.39 1.64 0 .61-.13 1.16-.39 1.64-.26.48-.63.85-1.09 1.11-.46.27-.96.4-1.5.4-.55 0-1.05-.13-1.51-.4-.45-.26-.82-.63-1.08-1.11zM21 12v-2H6.5v-1h8.5v-2h-8.5V6H21V4h-8.5V2h-2v2H6.5v1h4v2H6.5v1H21z" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-600 mx-2"></div>

        {/* Headings */}
        <button
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 1 }).run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("heading", { level: 1 }) ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Heading 1"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 4v3h5.5v12h3V7H19V4H5z" />
          </svg>
        </button>

        <button
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 2 }).run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("heading", { level: 2 }) ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Heading 2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 4h6v6H3V4zm0 10h6v6H3v-6zm8-10h10v2H11V4zm0 4h10v2H11V8zm0 4h10v2H11v-2zm0 4h10v2H11v-2z" />
          </svg>
        </button>

        <button
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 3 }).run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("heading", { level: 3 }) ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Heading 3"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 4h6v6H3V4zm0 10h6v6H3v-6zm8-10h10v2H11V4zm0 4h10v2H11V8zm0 4h10v2H11v-2zm0 4h10v2H11v-2z" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-600 mx-2"></div>

        {/* Lists */}
        <button
          onClick={() => {
            editor.chain().focus().toggleBulletList().run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("bulletList") ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Bullet List"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
          </svg>
        </button>

        <button
          onClick={() => {
            editor.chain().focus().toggleOrderedList().run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("orderedList") ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Numbered List"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 17h3v-3H2v3zm0-4h3v-3H2v3zm0-4h3V6H2v3zm5 8h15v-2H7v2zm0-4h15v-2H7v2zm0-4h15V7H7v2z" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-600 mx-2"></div>

        {/* Text Alignment */}
        <button
          onClick={() => {
            editor.chain().focus().setTextAlign("left").run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive({ textAlign: "left" }) ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Align Left"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zm4-4H3v2h16V3zm0 16H3v2h16v-2z" />
          </svg>
        </button>

        <button
          onClick={() => {
            editor.chain().focus().setTextAlign("center").run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive({ textAlign: "center" }) ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Align Center"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 15h10v2H7v-2zm0-8h10v2H7V7zm-4 4h18v2H3v-2zm0 8h18v2H3v-2z" />
          </svg>
        </button>

        <button
          onClick={() => {
            editor.chain().focus().setTextAlign("right").run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive({ textAlign: "right" }) ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Align Right"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 15h12v2H9v-2zm0-8h12v2H9V7zm-6 4h18v2H3v-2zm0 8h18v2H3v-2z" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-600 mx-2"></div>

        {/* Links */}
        <button
          onClick={() => {
            addLink();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("link") ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Add Link"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-600 mx-2"></div>

        {/* Code */}
        <button
          onClick={() => {
            editor.chain().focus().toggleCode().run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("code") ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Inline Code"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
        </button>

        <button
          onClick={() => {
            editor.chain().focus().toggleCodeBlock().run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("codeBlock") ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Code Block"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0 4H7v2h2v-2zm4-4h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2z" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-600 mx-2"></div>

        {/* Blockquote */}
        <button
          onClick={() => {
            editor.chain().focus().toggleBlockquote().run();
            debugActive();
          }}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive("blockquote") ? "bg-red-600 text-white" : "text-gray-300"
          }`}
          title="Blockquote"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const RichTextEditor = ({ value, onChange, placeholder = "Start writing..." }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-400 underline",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none focus:outline-none min-h-[200px]",
      },
    },
    immediatelyRender: false, // Fix for SSR hydration issues
  });

  return (
    <div className="border border-gray-600 rounded-lg overflow-hidden">
      <MenuBar editor={editor} />
      <div className="p-4 bg-gray-900 min-h-[300px] relative">
        <EditorContent
          editor={editor}
          className="prose prose-invert max-w-none focus:outline-none min-h-[200px] cursor-text"
        />
        {editor && !editor.getText() && (
          <div className="absolute top-4 left-4 text-gray-500 pointer-events-none select-none">{placeholder}</div>
        )}
      </div>
    </div>
  );
};

export default RichTextEditor;
