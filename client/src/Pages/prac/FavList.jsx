// // import { useState, useEffect } from "react";
// // import { useCheckToken } from "../../hooks/useChcekToken";
// // import axios from "axios";

// // const FavList = () => {
// //   const [userData, setUserData] = useState([]);
// //   const User = useCheckToken();
// //   const usersArray = Object.values(User);

// //   // useEffect(() => {
// //   //   const fetchUserData = async () => {
// //   //     try {
// //   //       const response = await axios.get(
// //   //         "http://localhost:5000/api/v1/Listing/Fav/getALL", // Updated API endpoint URL
// //   //         {
// //   //           headers: {
// //   //             Authorization: `Bearer ${usersArray[0].token}`,
// //   //           },
// //   //         }
// //   //       );
// //   //       // Handle the response data here
// //   //       console.log(response.data);
// //   //     } catch (error) {
// //   //       console.error("Error fetching user data:", error);
// //   //     }
// //   //   };

// //   //   fetchUserData();
// //   // }, []);

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://localhost:5000/api/v1/Listing/Fav/getALL",
// //           {
// //             headers: {
// //               Authorization:`Bearer ${usersArray[0].token}`,
// //             },
// //           }
// //         );

// //         console.log(response);
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };
// //     fetchUserData();
// //   }, []);

// //   return <div></div>;
// // };

// // export default FavList;
// import { useState, useEffect } from "react";
// import { useCheckToken } from "../../hooks/useChcekToken";
// import axios from "axios";

// const FavList = () => {
//   const [userData, setUserData] = useState([]);
//   const User = useCheckToken();
//   const usersArray = Object.values(User);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/v1/Listing/Fav/getALL",
//           {
//             headers: {
//               Authorization: `Bearer ${usersArray[0].token}`,
//             },
//           }
//         );

//         console.log("ressssssssss", response.data);
//         setUserData(response.data);
//         //         const propertyNames = Object.fromEntries(response.data);

//         // console.log("responceccccc",propertyNames)

//         // Assuming response.data is an object with alreadyPresentInFav array inside
//         // if (response.data && response.data[0] && response.data[0].alreadyPresentInFav) {
//         //   setUserData(response.data[0].alreadyPresentInFav);
//         // }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchUserData();
//   }, []);
//   console.log("userdata", userData);

//   return (
//     <div>
//       {userData.length > 0 ? (
//         userData.map((item) => (
//           <div key={item._id} className="list-item">
//             <h1 className="font-bold text-xl">List Info</h1>
//             <p>Title: {item.createdByUser.Title}</p>
//             <p>bedrooms: {item.createdByUser.bedrooms}</p>
//             <p>bathrooms: {item.createdByUser.bathrooms}</p>
//             <p>sqft: {item.createdByUser.sqft}</p>
//             <p>Code: {item.createdByUser.Code}</p>
//             <p>yearBuilt: {item.createdByUser.yearBuilt}</p>
//             <p>Address: {item.createdByUser.Address}</p>
//             <p>City: {item.createdByUser.City}</p>
//             <p>Country: {item.createdByUser.Country}</p>
//             <p>Availability: {item.createdByUser.Availability}</p>
//             <p>Security Deposit: {item.createdByUser.SecurityDeposit}</p>
//             <p>PropertyType: {item.createdByUser.selectedOption}</p>
//             {/* <p>secureUrl: {item.secureUrl}</p> */}
//             <img src={item.createdByUser.secureUrl} alt="" />

//             <h1 className="font-bold text-xl">Created by-ListAgent</h1>
//             <p>Name: {item.createdByUser.CreatedBy.name}</p>
//             <p>Email : {item.createdByUser.CreatedBy.email}</p>
//             <p>Phone : {item.createdByUser.CreatedBy.phone}</p>
//             <p>Profile Image:</p>
//             <img
//               src={item.createdByUser.CreatedBy.secureUrl}
//               alt=""
//               className="w-28 h-28 rounded-full"
//             />

//             {/* <p>Liked By User ID: {item.likedByUser}</p>
//             <p>Liked At: {new Date(item.likedAt).toLocaleString()}</p> */}
//           </div>
//         ))
//       ) : (
//         <p>No favorite lists found.</p>
//       )}
//     </div>
//   );
// };
// export default FavList;



import React from 'react'

const FavList = () => {
  return (
    <div>
      
    </div>
  )
}

export default FavList
