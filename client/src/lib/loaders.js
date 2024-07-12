import { defer } from "react-router-dom";
// import apiRequest from "./apiRequest";
import axios from "axios";

export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1];

  // const res = await axios.get("api/v1/Post/posts?" + query);
  const postPromise = axios.get("api/v1/Post/posts?" + query);
  return defer({
    postResponse: postPromise,
  });

  // return res.data;
};

export const singlePageLoader = async ({ request, params }) => {
  // console.log(request)

  const res = await axios.get("/api/v1/Post/posts/" + params.id);
console.log(res.data)
  
  console.log(res.data.post )
  console.log(res.data.isSaved )

  return res.data;


};

export const profilePageLoader = async () => {
  const postPromise = axios.get("/api/v1/profile/profilePosts");
  console.log(postPromise)
  // const chatPromise = apiRequest("/chats");
  return defer({
    postResponse: postPromise,
    // chatResponse: chatPromise,
  });
};
