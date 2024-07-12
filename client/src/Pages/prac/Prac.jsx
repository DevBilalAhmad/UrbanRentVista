// //? Data fetched for each user different data
// import React, { useState, useEffect } from "react";
// import { useCheckToken } from "../../hooks/useChcekToken";

// import { jwtDecode } from "jwt-decode";
// import axios from "axios";
// import CustomInput from "../Dashboard/user-account/CustomInput";

// const Prac = () => {
//     const User = useCheckToken();
//     const usersArray = Object.values(User);
//   const decoded = jwtDecode(usersArray[0].token);
//   // console.log("user", usersArray);

//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/v1/user", {
//           headers: {
//             Authorization: `Bearer ${usersArray[0].token}`,
//             "Content-Type": "application/json",            
//           },
//         });

//         if (Array.isArray(response.data)) {
//           setUserData(response.data);
//         } else {
//           // Convert response.data object into an array of its values
//           setUserData([response.data]);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     if (User) {
//         fetchUserData();
//       }
//     }, []);
  
//     return (
//         <>
//       <div>
//         {User && (
//           <>
//             <p>Email: {usersArray[0].email}</p>
//             <p>Email: {usersArray[0].token}</p>
//             <p>Decoded: {decoded.id}</p>
//           </>
//         )}
//         {userData.map((user, i) => (
//           <div key={i}>
//             <p>Name {user.name}</p>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//             {/* Add other fields as needed */}
//           </div>
//         ))}

//         {/* <CustomInput/> */}

//       </div>
//     </>
//   );
// };

// export default Prac;

// // import React from 'react';
// // // import { useListLikedorNot } from '../../hooks/useFetchData';

// // const Prac = () => {
// //   const id = '664c321aae508b9a3b429f79';
// //   // const {items, loading }= useListLikedorNot(id);
// //   // console.log("items", items.liked);
// //   return(
// //     <></>
// //   )
// // };

// // export default Prac;


//       //   <>
//       //     <p>Name: {profileData.name}</p>
//       //     <p>Email: {profileData.email}</p>
//       //     <p>Phone: {profileData.phone}</p>
//       //     <p>id: {profileData._id}</p>
//       //     <p>password: {profileData.password}</p>
//       //     <p>profile: {profileData.secureUrl}</p>
//       //     <p>role: {profileData.role}</p>
//       //     <p>BIO: {profileData.BIO}</p>
          


//       //     {/* Add other fields as needed */}
//       //   </>
//       // )}


import React from 'react'

const Prac = () => {
  return (
    <div>
      
    </div>
  )
}

export default Prac
