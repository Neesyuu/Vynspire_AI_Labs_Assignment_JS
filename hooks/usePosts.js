import PostsContext from "@/context/Posts/PostsContext";
import { useContext } from "react";

export const usePosts = () => {
  const postsContext = useContext(PostsContext);

  if (postsContext === undefined) {
    throw new Error("usePosts must be used within an PostsContextProvider");
  }

  return postsContext;
};
