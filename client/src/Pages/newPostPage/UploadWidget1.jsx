//? not in use 

import React, { useEffect, useRef, useState } from "react";

const UploadWidget = ({ onUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [secureUrl, setSecureUrl] = useState(null);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dxorxt0vt",
        uploadPreset: "my-uploads",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          const secureUrl = result.info.secure_url;
          setSecureUrl(secureUrl);
          onUpload(secureUrl); // Pass secureUrl to parent component
        }
      }
    );
  }, [onUpload]);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        widgetRef.current.open();
      }}
      className="relative"
    >
      <label
        title="Click to upload"
        htmlFor="button2"
        className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
      >
        <div className="w-max relative">
          <img
            className="w-12"
            src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
            alt="file upload icon"
            width="512"
            height="512"
          />
        </div>
        <div className="relative">
          <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
            {/* <button onClick={() => widgetRef.current.open()}>
            </button> */}
            Upload Profile Picture
          </span>
          <span className="mt-0.5 block text-sm text-gray-500">Max 2 MB</span>
        </div>
      </label>
      {/* <input hidden="" type="file" name="button2" id="button2" /> */}
    </button>
  );
};

export default UploadWidget;
