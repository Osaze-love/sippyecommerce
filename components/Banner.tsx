import Image from "next/image";
import React from "react";
import "./Banner.scss";

const Banner = ({ pageName }: { pageName: string }) => {
  return (
    <div className="banner">
      <Image
        className="bannerImage"
        src="/bannerImage.jpg"
        alt="Logo"
        fill={true}
      />

      <div className="bannerContent">
        <Image src="/Logo.png" height={80} width={80} alt="Logo" />
        <h2>{pageName}</h2>
        <p>
          Home {" > "} {pageName}
        </p>
      </div>
    </div>
  );
};

export default Banner;
