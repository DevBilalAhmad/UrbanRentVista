// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useCheckToken } from "../../hooks/useChcekToken";
// //Name, Phone ,Email ,BIO
// const UpdateUserForm = () => {
//   const User = useCheckToken();
//   const usersArray = Object.values(User);

//   //? end of fetching data set that come from a
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     BIO: "",
//   });

//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // name: we get from the input field that user in googing to be changed
//     // value: we get from the input field that user in googing to be changed
//     console.log("handleChangehere", name, value);
//     setUserData({ ...userData, [name]: value });
//   };

//   //? Fetch data

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       //   const response = await axios.get("http://localhost:5000/api/v1/user"); // Adjust the endpoint accordingly
//       const response = await axios.get("http://localhost:5000/api/v1/user", {
//         headers: {
//           Authorization: `Bearer ${usersArray[0].token}`,
//         },
//       });
//       const userData = response.data;
//       console.log("userdata", userData);
//       setUserData(userData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   //? fetch data end

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make the PUT API call here
//       console.log("handleSubmit userdata", userData);
//       const response = await axios.put(
//         "http://localhost:5000/api/v1/auth/update",
//         userData,
//         {
//           headers: {
//             Authorization: `Bearer ${usersArray[0].token}`,
//           },
//         }
//       );
//       console.log(response);

//       //   setMessage(response.data);
//       setError("");
//     } catch (error) {
//       setMessage("");
//       setError(error.response.data.error);
//     }
//   };

//   return (
//     <div>
//       <h2>Update User Information</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="name"
//             value={userData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={userData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input
//             type="tel"
//             name="phone"
//             value={userData.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Bio:</label>
//           {/* <textarea
//             name="BIO"
//             value={userData.BIO}
//             onChange={handleChange}
//           ></textarea> */}
//           <input
//             type="text"
//             name="BIO"
//             value={userData.BIO}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Update</button>
//       </form>
//       {message && <div>{message}</div>}
//       {error && <div>{error}</div>}
//     </div>
//   );
// };

// export default UpdateUserForm;

// //? working code for get data from user and console it

// // import React, { useState } from "react";

// // const FormPut = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");

// //   function handleForm(e) {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append("name", name);
// //     formData.append("email", email);
// //     console.log(name, email);
// //   }

// //   return (
// //     <div>
// //       <form onSubmit={handleForm}>
// //         <input
// //           type="text"
// //           id="name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />
// //         <input
// //           type="email"
// //           id="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <button>console</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default FormPut;



import React from 'react'

const FormPut = () => {
  return (
    <div>
      
    </div>
  )
}

export default FormPut
