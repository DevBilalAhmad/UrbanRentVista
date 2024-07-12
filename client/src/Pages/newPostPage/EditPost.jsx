// import { useState } from "react";
// import "./newPostPage.scss";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// // import apiRequest from "../../lib/apiRequest";
// import UploadWidget from "./UploadWidget";
// import UploadWidget1 from "./UploadWidget1";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function EditPost() {
//   const [value, setValue] = useState("");
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState("");  

//   const {id} = useParams(); 
//   console.log("id", id); 
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const inputs = Object.fromEntries(formData);

//     try {
//       const res = await axios.post(`/api/v1/Post/posts/${id}`, {
//         postData: {
//           title: inputs.title,
//           price: parseInt(inputs.price),
//           address: inputs.address,
//           city: inputs.city,
//           bedroom: parseInt(inputs.bedroom),
//           bathroom: parseInt(inputs.bathroom),
//           type: inputs.type,
//           property: inputs.property,
//           latitude: inputs.latitude,
//           longitude: inputs.longitude,
//           images: images,
//         },
//         postDetail: {
//           desc: value,
//           utilities: inputs.utilities,
//           pet: inputs.pet,
//           income: inputs.income,
//           size: parseInt(inputs.size),
//           school: parseInt(inputs.school),
//           bus: parseInt(inputs.bus),
//           restaurant: parseInt(inputs.restaurant),
//         },
//       });
//       navigate("/" + res.data._id);
//     } catch (err) {
//       console.log(err);
//       setError(error);
//     }
//   };

//   return (
//     <div className="newPostPage">
//       <div className="formContainer m-8 ">
//         <h1>Add New Post</h1>
//         <div className="wrapper">
//           <form onSubmit={handleSubmit}>
//             <div className="item">
//               <label htmlFor="title">Title</label>
//               <input id="title" name="title" type="text" />
//             </div>
//             <div className="item">
//               <label htmlFor="price">Price</label>
//               <input id="price" name="price" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="address">Address</label>
//               <input id="address" name="address" type="text" />
//             </div>
//             <div className="item description">
//               <label htmlFor="desc">Description</label>
//               <ReactQuill theme="snow" onChange={setValue} value={value} />
//             </div>
//             <div className="item">
//               <label htmlFor="city">City</label>
//               <input id="city" name="city" type="text" />
//             </div>
//             <div className="item">
//               <label htmlFor="bedroom">Bedroom Number</label>
//               <input min={1} id="bedroom" name="bedroom" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="bathroom">Bathroom Number</label>
//               <input min={1} id="bathroom" name="bathroom" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="latitude">Latitude</label>
//               <input id="latitude" name="latitude" type="text" />
//             </div>
//             <div className="item">
//               <label htmlFor="longitude">Longitude</label>
//               <input id="longitude" name="longitude" type="text" />
//             </div>
//             <div className="item">
//               <label htmlFor="type">Type</label>
//               <select name="type">
//                 <option value="rent" defaultChecked>
//                   Rent
//                 </option>
//                 <option value="buy">Buy</option>
//               </select>
//             </div>
//             <div className="item">
//               <label htmlFor="type">Property</label>
//               <select name="property">
//                 <option value="apartment">Apartment</option>
//                 <option value="house">House</option>
//                 <option value="condo">Condo</option>
//                 <option value="land">Land</option>
//               </select>
//             </div>

//             <div className="item">
//               <label htmlFor="utilities">Utilities Policy</label>
//               <select name="utilities">
//                 <option value="owner">Owner is responsible</option>
//                 <option value="tenant">Tenant is responsible</option>
//                 <option value="shared">Shared</option>
//               </select>
//             </div>
//             <div className="item">
//               <label htmlFor="pet">Pet Policy</label>
//               <select name="pet">
//                 <option value="allowed">Allowed</option>
//                 <option value="not-allowed">Not Allowed</option>
//               </select>
//             </div>
//             <div className="item">
//               <label htmlFor="income">Income Policy</label>
//               <input
//                 id="income"
//                 name="income"
//                 type="text"
//                 placeholder="Income Policy"
//               />
//             </div>
//             <div className="item">
//               <label htmlFor="size">Total Size (sqft)</label>
//               <input min={0} id="size" name="size" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="school">School</label>
//               <input min={0} id="school" name="school" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="bus">bus</label>
//               <input min={0} id="bus" name="bus" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="restaurant">Restaurant</label>
//               <input min={0} id="restaurant" name="restaurant" type="number" />
//             </div>
//             <button className="sendButton">Add</button>
//             {error && <span>error</span>}
//           </form>
//         </div>
//       </div>
//       <div className="sideContainer">
//         {images.map((image, index) => (
//           <img src={image} key={index} alt="" />
//         ))}
//         <UploadWidget
//           uwConfig={{
//             multiple: true,
//             cloudName: "lamadev",
//             uploadPreset: "estate",
//             folder: "posts",
//           }}
//           setState={setImages}
//         />
//         {/* <UploadWidget1/> */}
//       </div>
//     </div>
//   );
// }

// export default EditPost;



//?



import { useState, useEffect } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "./UploadWidget";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditPost() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    address: "",
    city: "",
    bedroom: "",
    bathroom: "",
    type: "rent",
    property: "apartment",
    latitude: "",
    longitude: "",
    utilities: "owner",
    pet: "allowed",
    income: "",
    size: "",
    school: "",
    bus: "",
    restaurant: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/v1/Post/posts/${id}`);
        const postData = res.data.post;
        console.log("postData", postData); 
        console.log("postData", postData.postDetail.desc); 
        setFormData({
          title: postData.title,
          price: postData.price,
          address: postData.address,
          city: postData.city,
          bedroom: postData.bedroom,
          bathroom: postData.bathroom,
          type: postData.type,
          property: postData.property,
          latitude: postData.latitude,
          longitude: postData.longitude,
          utilities: postData.postDetail.utilities,
          pet: postData.postDetail.pet,
          income: postData.postDetail.income,
          size: postData.postDetail.size,
          school: postData.postDetail.school,
          desc: postData.postDetail.desc,
          bus: postData.postDetail.bus,
          restaurant: postData.postDetail.restaurant,
        });
        setValue(postData.desc);
        setImages(postData.images);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`/api/v1/Post/posts/${id}`, {
        postData: {
          title: formData.title,
          price: parseInt(formData.price),
          address: formData.address,
          city: formData.city,
          bedroom: parseInt(formData.bedroom),
          bathroom: parseInt(formData.bathroom),
          type: formData.type,
          property: formData.property,
          latitude: formData.latitude,
          longitude: formData.longitude,
          desc:formData.desc,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: formData.utilities,
          pet: formData.pet,
          income: formData.income,
          size: parseInt(formData.size),
          school: parseInt(formData.school),
          bus: parseInt(formData.bus),
          restaurant: parseInt(formData.restaurant),
        },
      });
      navigate("/" + res.data._id);
    } catch (err) {
      console.log(err);
      setError("Error updating the post");
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer m-8 ">
        <h1>Edit Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={formData.desc} value={formData.desc} />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                value={formData.bedroom}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                value={formData.bathroom}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                value={formData.latitude}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                value={formData.longitude}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="property">Property</label>
              <select
                name="property"
                value={formData.property}
                onChange={handleChange}
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select
                name="utilities"
                value={formData.utilities}
                onChange={handleChange}
              >
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select
                name="pet"
                value={formData.pet}
                onChange={handleChange}
              >
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                value={formData.income}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input
                min={0}
                id="size"
                name="size"
                type="number"
                value={formData.size}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input
                min={0}
                id="school"
                name="school"
                type="number"
                value={formData.school}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="bus">Bus</label>
              <input
                min={0}
                id="bus"
                name="bus"
                type="number"
                value={formData.bus}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
                value={formData.restaurant}
                onChange={handleChange}
              />
            </div>
            <button className="sendButton">Add</button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {/* {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))} */}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default EditPost;
