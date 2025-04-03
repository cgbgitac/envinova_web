"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import shape from "@/assets/images/shape/shape_04.svg";

// imageStyle
const imageStyle = {
  height: "auto",
};
// internal images
import bg_1 from "@/assets/images/banners/1.jpg";
import bg_2 from "@/assets/images/banners/2.jpg";
import bg_3 from "@/assets/images/banners/3.jpg";
import bg_4 from "@/assets/images/banners/4.jpg";
import bg_5 from "@/assets/images/banners/5.jpg";
import bg_6 from "@/assets/images/banners/6.jpg";
// import bg_1 from "@/assets/images/media/img_01.jpg";
// import bg_2 from "@/assets/images/media/img_02.jpg";
// import bg_3 from "@/assets/images/media/img_03.jpg";
import icon from "@/assets/images/icon/icon_02.svg";

// slider bg
const slider_bg = [bg_1, bg_2, bg_3, bg_4, bg_5, bg_6];
// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  pauseOnHover: false,
  draggable: false,
  autoplaySpeed: 3000,
};

const HeroBannerEight = () => {
  return (
    <div className="hero-banner-one vh-90 pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative vh-100 d-flex justify-content-center">
      <Slider {...slider_setting} className="hero-slider-one m0">
        {slider_bg.map((bg, i) => (
          <div className="item m0" key={i}>
            <div
              className="hero-img"
              style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
          </div>
        ))}
      </Slider>
      <div>
        <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-lg-12 m-auto text-center">
              <h1 className="hero-heading fw-bold wow fadeInUp mt-10 text-white">
                Innovative Solar Solutions for Smarter, Sustainable Spaces
                {/* Revolutionizing Foot Health with
                  <span className="d-inline-block position-relative">
                    &nbsp; AI-Driven
                    <Image
                      src={shape}
                      alt="shape"
                      className="lazy-img"
                      style={imageStyle}
                    />
                  </span>{" "}
                  Diagnostics */}
              </h1>
              <p
                className="text-xl pt-35 pb-35 wow fadeInUp text-white"
                data-wow-delay="0.1s"
              >
                Discover advanced Solar-powered solutions designed to transform
                Public and Private spaces. From Smart Street furniture to EV
                charging stations and custom Solar projects, we deliver
                energy-efficient innovations that blend functionality,
                sustainability, and modern design
              </p>
              <div className="d-inline-flex flex-wrap align-items-center">
                <Link href="/product" className="btn-one mt-15 me-4">
                  Product
                </Link>
                <Link href="/contact" className="btn-one mt-15 me-4">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link href="/contact"
        className="more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft"
        target="_blank"
      >
        <i className="bi bi-arrow-up-right"></i>
      </Link> */}
    </div>
  );
};

export default HeroBannerEight;
