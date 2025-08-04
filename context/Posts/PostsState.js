"use client";

import { useState } from "react";
import PostsContext from "./PostsContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import { getAllData, postData } from "@/apiServices/apiService";

const PostsState = ({ children }) => {
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const router = useRouter();
  const { userData } = useAuth();
  const [allPosts, setAllPosts] = useState([]);

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const fetchAllPosts = async () => {
    setIsPostsLoading(true);
    try {
      const url = "/blogs";

      const response = await getAllData(url, data);

      if (response.data) {
        setAllPosts(response.data);
        setIsPostsLoading(false);
        return true;
      } else {
        toast.error("Failed to fetch posts");
        setAllPosts([]);
        setIsPostsLoading(false);
        return false;
      }
    } catch (err) {
      toast.error(err);
      setIsPostsLoading(false);
      return false;
    }
  };

  const createPost = async (title, description, image, tags, status, category) => {
    setIsPostsLoading(true);

    if (!userData) {
      toast.error("Unauthorized");
      return false;
    }

    try {
      const data = {
        title,
        description,
        image,
        tags,
        status,
        category,
        user: userData.id,
      };

      const url = "/blogs";

      const response = await postData(url, data);

      if (response.data) {
        toast.success("Post created successfully!");
        setIsPostsLoading(false);
        return true;
      } else {
        toast.error("Post creation failed!");
        setIsPostsLoading(false);
        return false;
      }
    } catch (err) {
      toast.error(err);
      setIsPostsLoading(false);
      return false;
    }
  };

  return (
    <PostsContext.Provider value={{ createPost, isPostsLoading, allPosts, fetchAllPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsState;
