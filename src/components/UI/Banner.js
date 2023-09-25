import React from "react";
import { Carousel } from "antd";

import DrawingImage from "@/assets/images/banner-images/banner1.jpg";
import EagleImage from "@/assets/images/banner-images/banner2.jpg";

import Image from "next/image";
const contentStyle = {
  height: "560px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Banner = () => (
  <Carousel autoplay>
    <div>
      <Image src={EagleImage} alt="image" />
    </div>
    <div>
      <Image src={EagleImage} alt="image" />
    </div>
  </Carousel>
);
export default Banner;
