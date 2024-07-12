import React from "react";
import Banner from "./components/AboutBanner";
import Unrestricted from "./components/AboutUnrestricted";
// import MeetOurTeam from "./components/AboutMeetOurTeam";
import MeetOurTeam from "../Home/TeamSection";
import AboutServices from "./components/AboutServices";
import Testimonials from "./components/Testimonials";
const page = () => {
  return (
    <div>
      <>
        <Banner />
        <Unrestricted />
        <MeetOurTeam />
        {/* <AboutServices /> */}
        {/* <AboutOurBlog /> */}
        {/* <Testimonials /> */}
      </>
    </div>
  );
};

export default page;
