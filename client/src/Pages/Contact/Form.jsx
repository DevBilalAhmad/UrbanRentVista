
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const EmailForm = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("currentUser", currentUser?.accountType);

  const [fullName, setFullName] = useState(currentUser ? currentUser.username : "");
  const [email, setEmail] = useState(currentUser ? currentUser.email : "");
  const [phone, setPhone] = useState(currentUser ? currentUser.phone : "");
  const [message, setMessage] = useState("");
  const [returnMessage, setReturnMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      fullName,
      senderEmail: email,
      message,
      Phone: phone,
    };

    console.log("formData", formData);

    try {
      setIsSending(true);
      const response = await axios.post("api/v1/sendmail/", formData);
      setReturnMessage(response.data.message);
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      // console.error(error);
      setReturnMessage("Error sending email!");
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#f8f8f8] p-8 rounded-sm">
      <div>
        <span className="uppercase text-sm text-gray-600 font-bold">
          Full Name
        </span>
        <input
          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder=""
        />
      </div>
      <div className="mt-8">
        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
        <input
          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mt-8">
        <span className="uppercase text-sm text-gray-600 font-bold">Phone</span>
        <input
          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div className="mt-8">
        <span className="uppercase text-sm text-gray-600 font-bold">
          Message
        </span>
        <textarea
          className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
      </div>
      <div className="mt-8">
        <button
          className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {
            isSending ? "Sending..." : "Send Mail Now"
          }
          {/* Send Mail Now */}
        </button>
      </div>
      
      {returnMessage && (
        <div className="text-center mt-4 text-green-600">{returnMessage}</div>
      )}
    </form>
  );
};

export default EmailForm;

//?



//?


// import React, { useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useContext } from "react";

// import axios from "axios";
// const EmailForm = () => {
//   const { currentUser } = useContext(AuthContext);
//     console.log("currentUser", currentUser.accountType);
// //   const [fullName, setFullName] = useState(currentUser.username);
// //   const [email, setEmail] = useState(currentUser.email);
// //   const [phone, setPhone] = useState(currentUser.phone);
//   const [fullName, setFullName] = useState(currentUser ? currentUser.username : "");
//   const [email, setEmail] = useState(currentUser ? currentUser.email : "");
//   const [phone, setPhone] = useState(currentUser ? currentUser.phone : "");
//   const [message, setMessage] = useState("");
//   const [returnMessage, setReturnMessage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     let formData = new FormData();
//     // formData.append("fullName", fullName);
//     // formData.append("email", email);
//     // formData.append("message", message);
//     formData = {
//       fullName,
//       senderEmail: email,
//       message,
//       Phone: phone,
//     };

//     console.log("formData", formData);

//     try {
//       //   const response = await ("api/v1/sendmail/", {
//       //     method: "POST",
//       //     body: formData,
//       //   });
//       const response = await axios.post("api/v1/sendmail/", formData);

//       //   console.log("response", response,  response.data.message);
//       setReturnMessage(response.data.message);
//       setFullName("");
//         setEmail("");
//         setPhone("");
//         setMessage("");


//       //   if (response.ok) {
//       //     alert("Email sent successfully!");
//       //   } else {
//       //     alert("Error sending email!");
//       //   }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-[#f8f8f8] p-8 rounded-sm">
//       <div>
//         <span className="uppercase text-sm text-gray-600 font-bold">
//           Full Name
//         </span>
//         <input
//           className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//           type="text"
//           value={fullName}
//           onChange={(event) => setFullName(event.target.value)}
//           placeholder=""
//         />
//       </div>
//       <div className="mt-8">
//         <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
//         <input
//           className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//           type="text"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </div>
//       <div className="mt-8">
//         <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
//         <input
//           className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//           type="text"
//           value={phone}
//           onChange={(event) => setPhone(event.target.value)}
//         />
//       </div>
//       <div className="mt-8">
//         <span className="uppercase text-sm text-gray-600 font-bold">
//           Message
//         </span>
//         <textarea
//           className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//           value={message}
//           onChange={(event) => setMessage(event.target.value)}
//         ></textarea>
//       </div>
//       <div className="mt-8">
//         <button
//           className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Send Mail Now
//         </button>
//       </div>
//       {returnMessage && (
//         <div className="text-center mt-4 text-green-600">{returnMessage}</div>
//       )}
//       {/* {!returnMessage && (
//         <div className="text-center mt-4 text-red-600">{returnMessage}</div>
//       )} */}
//     </form>
//   );
// };

// export default EmailForm;

//? not working 


// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";

// const EmailForm = () => {
//   const { currentUser } = useContext(AuthContext);

//   const [fullName, setFullName] = useState(currentUser ? currentUser.username : "");
//   const [email, setEmail] = useState(currentUser ? currentUser.email : "");
//   const [phone, setPhone] = useState(currentUser ? currentUser.phone : "");
//   const [message, setMessage] = useState("");
//   const [returnMessage, setReturnMessage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = {
//       fullName,
//       senderEmail: email,
//       phone,
//       message,
//     };

//     try {
//       const response = await axios.post("/api/v1/sendmail", formData);
//       setReturnMessage(response.data.message);
//     } catch (error) {
//       console.error(error);
//       setReturnMessage("Error sending email!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-[#f8f8f8] p-8 rounded-sm">
//       <div>
//         <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
//         <input
//           className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//           type="text"
//           value={fullName}
//           onChange={(event) => setFullName(event.target.value)}
//         />
//       </div>
//       <div className="mt-8">
//         <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
//         <input
//           className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//           type="text"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </div>
//       <div className="mt-8">
//         <span className="uppercase text-sm text-gray-600 font-bold">Phone</span>
//         <input
//           className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//           type="text"
//           value={phone}
//           onChange={(event) => setPhone(event.target.value)}
//         />
//       </div>
//       <div className="mt-8">
//         <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
//         <textarea
//           className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//           value={message}
//           onChange={(event) => setMessage(event.target.value)}
//         ></textarea>
//       </div>
//       <div className="mt-8">
//         <button
//           className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Send Mail Now
//         </button>
//       </div>
//       {returnMessage && (
//         <div className="text-center mt-4 text-green-600">{returnMessage}</div>
//       )}
//     </form>
//   );
// };

// export default EmailForm;
