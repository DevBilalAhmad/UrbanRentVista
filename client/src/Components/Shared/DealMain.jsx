import React from "react";
import Tabs from "../TabsComponents/tabs";

import DealText from "../ui/TextHeading";

const Deals = () => {
  return (
    <div id="deals" className="relative p-4 mb-4 ">
      <DealText Text="Deals"/>
      <div className="mt-14 ">
        <Tabs />
      </div>
    </div>
  );
};

export default Deals;
