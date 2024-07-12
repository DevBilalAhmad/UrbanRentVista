import React from "react";
import eyeIcon from "/icons/eye.png";
import { Link } from "react-router-dom";
const Card = ({ items, onClick, onEdit, buttons = false }) => {
  // console.log("itemsssssssssssssssssssssssssssssssss", items);

  return (
    // <div onClick={() => router.push(`/properties/${id}`)} className="w-[350px] h-[400px] hover:scale-105 ease-in duration-200 mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-slate-700">
    <>
      {items.map((item) => (
        <div className="flex flex-col  bg-slate-200 " key={item._id}>
          <div className="relative">
            <img
              className="h-[190px] w-full object-cover"
              src={item.images[0]}
              alt="house image"
            />
            <div className="absolute top-0 left-0 mt-[30px] ml-[30px] flex justify-center items-center ">
              <div className=" flex justify-center items-center bg-black bg-opacity-[50%] rounded-[5px] py-[3px] pr-[10px] pl-[5px] ">
                <img src={eyeIcon} alt="icon" className="w-6 h-6" />
                <p className="font-black text-[10px] leading-5 text-white">
                  65
                </p>
              </div>
              <div className="flex justify-center items-center bg-black bg-opacity-[50%] rounded-[5px] ml-[10px] px-[10px] py-[5px] ">
                <p className="font-black text-[10px] leading-5 text-white text-center">
                  1995
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="capitalize text-cardText font-black text-[15px] leading-[30px] dark:text-white">
              {item.title}
            </div>
            <p className=" text-2xl leading-[30px] font-bold text-cardText py-[10px] dark:text-white ">
              {item.price}
            </p>
            <p className="text-[13px] leading-[25px] text-blueCardSubTitle font-bold py-[10px]  dark:text-white">
              {item.address}
            </p>
            <p className="text-xs leading-5 text-blueCardSubTitle font-bold dark:text-white">
              {item.bedroom}&nbsp;&nbsp;-&nbsp;&nbsp;{item.bathroom}
              baths
            </p>
          </div>

          {buttons && (
            <div className="flex justify-between items-center p-8">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => onEdit(item._id)}
              >
                <Link to={`/edit/${item._id}`}>Edit</Link>
              </button>
              <button
                className="bg-red text-white px-4 py-2 rounded-lg"
                onClick={() => onClick(item._id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </>

    // </div>
  );
};

export default Card;
