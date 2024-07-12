import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import SignupImg from "../../../public/login.png";
import { Link } from "react-router-dom";
import { useContext } from "react";

const AddList = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [error, setError] = useState("");
  const [successfulMessage, setSuccessfulMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { email, password, username } = formData;
  const onSubmithandle = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    // console.log("console", { email, password, username });
    try {
      // Make POST request to the API endpoint
      if ((email, password, username)) {
        // setTimeout(async () => {
        const response = await axios.post(
          "/api/v1/users/login",
          { email, password, username },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        updateUser(response.data.data.user);

        console.log("response", response.data.data.user);
        console.log("response", response.data.message);
        // setSuccessfulMessage(response.data.message);
        // console.log("console", { email, password });
        navigate("/");
        // window.location.reload();
      } else {
        console.log("Please fill the form");
      }
    } catch (err) {
      setError(err.response.data.message);
      setSuccessfulMessage(null);
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-row justify-around m-10 h-[50vh]">
      <section className="flex-1">
        <img src={SignupImg} alt="" />
      </section>
      <section className="bg-gray-50 flex-1  dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome Back
              </h1>
              <form onSubmit={onSubmithandle}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    // required
                    // minLength={3}
                    // maxLength={20}

                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                    value={username}
                    onChange={onChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={password}
                    onChange={onChange}
                  />
                </div>

                <button
                  className="w-full mt-4 bg-purple-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "logining..." : "Login"}
                </button>
                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}
                {successfulMessage && (
                  <p className="text-sm text-green-500 mt-2">
                    {successfulMessage}
                  </p>
                )}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                  Create an account?{" "}
                  <Link
                    to="/signup"
                    className="text-primary-600 hover:underline  text-base font-semibold relative text-blue-900 group-hover:text-blue-500"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddList;
