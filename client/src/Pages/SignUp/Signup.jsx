import React, { useState } from "react";
import axios from "axios";
import SignupImg from "../../../public/login.png";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./DropDown"; // Adjust the import path as needed

const AddList = () => {
  const [accountType, setAccountType] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [successfulMessage, setSuccessfulMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const url = "/api/v1/users/register";
    const formData = new FormData(event.target);
    // formData.append('avatar', file); // 'avatar' should match the backend field name
    // const username = formData.get("name");
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const phone = formData.get("phone");
    // const avatar = formData.get("avatar");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    formData.append("accountType", accountType);
    console.log("Form Data:", formData);

    try {
      const response = await axios.post(url, formData, config);
      setSuccessfulMessage(response.data.message);
      console.log(response.data.message);
      //     setSuccessful(response.data.message);
      setUploadedFile(response.data.data.avatar);
      setError(null);
      navigate("/login");
    } catch (error) {
      setError(error.message);
      // setError(err.response.data.message);
      // setError(err.response?.data?.message || "An error occurred");
      console.log(error.message);
      setSuccessfulMessage(null);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDropdownChange = (selectedValue) => {
    setAccountType(selectedValue);
  };

  return (
    <div className="flex flex-row justify-around m-10 h-[50vh]">
      <section className="flex-1">
        <img src={SignupImg} alt="Signup" />
      </section>
      <section className="bg-gray-50 flex-1 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <span className="text-2xl font-semibold text-gray-800 dark:text-white mr-4">
                    Account Type:
                  </span>
                  <Dropdown onSelectChange={handleDropdownChange} />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="name"
                    placeholder="John Doe"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="+92 300 1234567"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="profilePicture"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    onChange={handleChange}
                    name="avatar"
                    id="avatar"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button
                  className="w-full mt-4 bg-purple-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
                {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                {successfulMessage && (
                  <p className="text-sm text-green-500 mt-2">{successfulMessage}</p>
                )}
                {uploadedFile && (
                  <img
                    src={uploadedFile}
                    alt="Uploaded content"
                    className="mt-4"
                  />
                )}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary-600 hover:underline text-base font-semibold relative text-blue-900 group-hover:text-blue-500"
                  >
                    Login
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
