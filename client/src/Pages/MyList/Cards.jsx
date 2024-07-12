import React, { useState, useEffect, useContext, Suspense } from "react";
import axios from "axios";
import { Await, useLoaderData } from "react-router-dom";
import ChildComponent from "./card";

const DemoList = ({ buttons, save }) => {

  const data = useLoaderData();

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/Post/posts/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };
  const handleEdit = async (id) => {
    try {
      const response = await axios.put(`/api/v1/Post/posts/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  const renderPosts = (postResponse) => {
    const posts = save
      ? postResponse.data.savedPosts
      : postResponse.data.userPosts;
    return posts.length > 0 ? (
      <ChildComponent
        items={posts}
        onClick={handleDelete}
        onEdit={handleEdit}
        buttons={buttons}
      />
    ) : (
      <p>No posts yet published</p>
    );
  };

  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5">
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={data.postResponse}
          errorElement={<p>Error loading posts!</p>}
        >
          {(postResponse) => renderPosts(postResponse)}
        </Await>
      </Suspense>
    </div>
  );
};

export default DemoList;
