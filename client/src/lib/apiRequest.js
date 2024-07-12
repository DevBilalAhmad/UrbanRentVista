import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8000/api/v1/users",
  withCredentials: true, // use cookies
});

// Add CORS headers
// apiRequest.interceptors.request.use((config) => {
//   config.headers["Access-Control-Allow-Origin"] = "http://localhost:8000";
//   config.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
//   config.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
//   return config;
// });

export default apiRequest;