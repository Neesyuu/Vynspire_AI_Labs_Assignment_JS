"use client";

import AuthenticationState from "./Authentication/AuthenticationState";
import PostsState from "./Posts/PostsState";

export function Provider({ children }) {
  return (
    <AuthenticationState>
      <PostsState>{children}</PostsState>
    </AuthenticationState>
  );
}
