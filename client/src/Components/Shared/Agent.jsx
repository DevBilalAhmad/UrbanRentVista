import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Agent = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-around mt-10 bg-primary-colour gap-y-10 items-center overflow-hidden rounded-md mx-5 my-5">
      {currentUser ? (
        <>
          <img
            className="w-[358px] h-[303px] object-cover hidden md:block"
            alt=""
            src="/team/unsplash7uommzpd2ja@2x.png"
          />
          <span className="text-white flex flex-col gap-y-10">
            <h1 className="text-6xl leading-[47px] font-semibold text-center">
              Welcome {currentUser.username}
            </h1>
            <p className="text-xl inline-block text-center sm:max-w-lg">
              {currentUser.accountType === "user" &&
                "Welcome to Rent Vista, a leading real estate platform! Discover your dream home with our expert guidance and unmatched services tailored just for you."}
              {currentUser.accountType === "Listing Agent" &&
                "Welcome to our platform, esteemed Listing Agent! Elevate your property listings with our premier services and connect with motivated buyers effortlessly."}
            </p>
          </span>
          <button className="text-center text-base font-medium px-10 py-5 cursor-pointer mb-10 bg-white text-primary-colour rounded-11xl flex flex-row items-center justify-start border-[1px] border-solid border-primary-colour">
            {currentUser.accountType === "user" ? (
              <Link to={"/Contact"}>Contact Us</Link>
            ) : (
              <Link to={"/profile"}>View Profile</Link>
            )}
          </button>
        </>
      ) : (
        <>
          <img
            className="w-[358px] h-[303px] object-cover hidden md:block"
            alt=""
            src="/team/unsplash7uommzpd2ja@2x.png"
          />
          <span className="text-white flex flex-col gap-y-10">
            <h1 className="text-6xl leading-[47px] font-semibold text-center">
              Login Please
            </h1>
            <p className="text-xl inline-block text-center sm:max-w-lg">
              Please login to access personalized content and services.
            </p>
          </span>
          <button className="text-center text-base font-medium px-10 py-5 cursor-pointer mt-10 bg-white text-primary-colour rounded-11xl">
            <Link to={"/login"}>Login Now</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Agent;
