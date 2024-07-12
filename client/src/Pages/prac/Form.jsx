// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";

// import { useCheckToken } from "../../hooks/useChcekToken";
// const EditableForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [isEditable, setEditable] = useState(false);

//   const User = useCheckToken();
//   const usersArray = Object.values(User);
//   // console.log("user", usersArray);
//   const decoded = jwtDecode(usersArray[0].token);
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
//       setFormData(userData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleEditClick = () => {
//     setEditable(true);
//   };

//   const handleSaveClick = async () => {
//     try {
//       // Check if usersArray is not empty
//       if (User) {
//         // Send updated data to the server
//         await axios.put("localhost:5000/api/v1/auth/update", formData, {
//           headers: {
//             Authorization: `Bearer ${usersArray[0].token}`,
//           },
//         });
//         setEditable(false);
//         console.log("Data saved successfully");
//       } else {
//         console.error("Error saving data: User token not found");
//       }
//     } catch (error) {
//       console.error("Error saving data:", error);
//     }
//   };

//   return (
//     <div>
//       <label>Name:</label>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleInputChange}
//         readOnly={!isEditable}
//       />
//       <label>Email:</label>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//         readOnly={!isEditable}
//       />
//       <label>Phone:</label>
//       <input
//         type="text"
//         name="phone"
//         value={formData.phone}
//         onChange={handleInputChange}
//         readOnly={!isEditable}
//       />
//       {isEditable ? (
//         <button onClick={handleSaveClick}>Save</button>
//       ) : (
//         // <button >Save</button>
//         <button onClick={handleEditClick}>Edit</button>
//       )}
//     </div>
//   );
// };

// export default EditableForm;

import React from 'react'

const Form = () => {
  return (
    <div>
      
    </div>
  )
}

export default Form
