import React from "react";

import mainImage from "../../assests/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex items-center justify-center h-vh-minus-100 relative">
      <div className="absolute bottom-0">
        <Image alt="banner" src={mainImage} />
      </div>
    </div>
  );
};

export default Banner;
