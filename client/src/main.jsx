import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import ChatBot from "./Pages/Home/Chatbot.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <AuthContextProvider>
      <App />
      <ChatBot />
    </AuthContextProvider>
  // </React.StrictMode>
);
