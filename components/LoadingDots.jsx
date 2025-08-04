import React from "react";

export default function LoadingDots() {
  return (
    <span className="flex items-center justify-center gap-1">
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0s]"></span>
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
    </span>
  );
}
