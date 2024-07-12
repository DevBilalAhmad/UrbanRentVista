// import React from "react";

// const Dropdown = ({ formData, setFormData, onSelectChange }) => {
//   const handleChange = (event) => {
//     const selectedValue = event.target.value;
//     setFormData({ ...formData, selectedOption: selectedValue });
//     onSelectChange(selectedValue);
//   };
  

//   return (
//     <div className="inline-block relative">
//       <select
//         onChange={handleChange}
//         className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
//       >
//         <option   disabled selected>
//           Select an option
//         </option>
//         {/* <option value="option1">Option 1</option> */}
//         <option value="User">User </option>
//         <option value="Listing Agent">Listing Agent</option>
//       </select>
//       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//         {/* Arrow down icon */}
//         <svg
//           className="h-4 w-4"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;



import React from "react";

const Dropdown = ({ onSelectChange }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onSelectChange(selectedValue);
  };

  return (
    <div className="inline-block relative">
      <select
        onChange={handleChange}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
      >
        <option disabled selected>
          Select an option
        </option>
        <option value="user">User</option>
        <option value="Listing Agent">Listing Agent</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
