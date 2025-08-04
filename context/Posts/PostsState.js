"use client";

import { useState } from "react";
import PostsContext from "./PostsContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import { deleteData, getAllData, postData, updateData } from "@/apiServices/apiService";

const PostsState = ({ children }) => {
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const router = useRouter();
  const { userData } = useAuth();
  const [allPosts, setAllPosts] = useState([]);
  const [allMyPosts, setAllMyPosts] = useState([]);

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const fetchAllPosts = async () => {
    setIsPostsLoading(true);
    try {
      const url = "/blogs";

      const response = await getAllData(url);

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

  const fetchPostById = async (id) => {
    setIsPostsLoading(true);
    try {
      const url = `/blogs/${id}`;

      const response = await getAllData(url);

      if (response.data) {
        setIsPostsLoading(false);
        return response.data;
      } else {
        toast.error("Failed to fetch post");
        setIsPostsLoading(false);
        return false;
      }
    } catch (err) {
      toast.error(err);
      setIsPostsLoading(false);
      return false;
    }
  };

  const fetchAllMyPosts = async (userId) => {
    setIsPostsLoading(true);
    try {
      const url = "/blogs";

      const response = await getAllData(url);

      if (response.data) {
        const myPosts = response.data.filter((post) => post.user == userId);
        setAllMyPosts(myPosts);
        setIsPostsLoading(false);
        return true;
      } else {
        // toast.error("Failed to fetch posts");
        setAllMyPosts([]);
        setIsPostsLoading(false);
        return false;
      }
    } catch (err) {
      toast.error(err);
      setIsPostsLoading(false);
      return false;
    }
  };

  const createPost = async (title, brief, description, image, tags, status, category) => {
    setIsPostsLoading(true);

    if (!userData) {
      toast.error("Unauthorized");
      return false;
    }

    try {
      const data = {
        title,
        brief,
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

  const updatePost = async (postid, postUID, title, brief, description, image, tags, status, category) => {
    setIsPostsLoading(true);

    if (!userData) {
      toast.error("Unauthorized");
      return false;
    }

    try {
      if (postUID !== parseInt(userData.id)) {
        toast.error("Unauthorized");
        return false;
      }

      const data = {
        title,
        brief,
        description,
        image,
        tags,
        status,
        category,
        user: postUID,
      };

      const url = `/blogs/${postid}`;

      const response = await updateData(url, data);

      if (response.data) {
        // toast.success("Post updated successfully!");
        setIsPostsLoading(false);
        return true;
      } else {
        toast.error("Post updated failed!");
        setIsPostsLoading(false);
        return false;
      }
    } catch (err) {
      toast.error(err);
      setIsPostsLoading(false);
      return false;
    }
  };

  const deletePost = async (postid, postUID) => {
    setIsPostsLoading(true);

    if (!userData) {
      toast.error("Unauthorized");
      return false;
    }

    try {
      if (postUID !== parseInt(userData.id)) {
        toast.error("Unauthorized");
        return false;
      }

      const url = `/blogs/${postid}`;

      const response = await deleteData(url);

      if (response.data) {
        // toast.success("Post deleted !");
        setIsPostsLoading(false);
        return true;
      } else {
        toast.error("Post deletion failed!");
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
    <PostsContext.Provider
      value={{
        createPost,
        isPostsLoading,
        allPosts,
        fetchAllPosts,
        fetchAllMyPosts,
        allMyPosts,
        fetchPostById,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsState;
