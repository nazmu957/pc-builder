import React from "react";
import { Carousel } from "antd";
import styles from "@/styles/Banner.module.css";
import New from "@/assets/images/banner-images/banner4.jpg";
import Offer from "@/assets/images/banner-images/banner3.jpg";
import Image from "next/image";

const Banner = () => (
  <Carousel style={{ marginTop: "2rem"}} autoplay>
    <div className={styles["carousel-item"]}>
      <Image src={New} alt="image" className={styles["carousel-image"]} />
    </div>
    <div className={styles["carousel-item"]}>
      <Image src={Offer} alt="image" className={styles["carousel-image"]} />
    </div>
  </Carousel>
);

export default Banner;
