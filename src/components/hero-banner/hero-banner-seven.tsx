"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

// Internal images
import bg_1 from "@/assets/images/banners/foot_1.png";
import bg_2 from "@/assets/images/banners/foot_2.png";

// Slider content array (Image + Text)
const slides = [
  {
    image: bg_1,
    title: "A Future beyond imagination",
    description:
      "Step into the future with Smart Solar Hub, a symbol of infinite solar potential where custom designed architecture meets technology",
    link: "/about-us",
  },
  {
    image: bg_2,
    title: "A Future beyond imagination",
    description:
      "Step into the future with Smart Solar Hub, a symbol of infinite solar potential where custom designed architecture meets technology",
    link: "/about",
  },
  {
    image: bg_2,
    title: "A Future beyond imagination",
    description:
      "Step into the future with Smart Solar Hub, a symbol of infinite solar potential where custom designed architecture meets technology",
    link: "/about",
  },
];

// Slider settings
const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  centerPadding: "0px",
  pauseOnHover: false,
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 4000,
  touchMove: false,
};

const HeroBannerTwo = () => {
  return (
    <div className="vh-100 position-relative">
      <Slider {...sliderSettings} className="hero-slider-one m0">
        {slides.map((slide, index) => (
          <div className="item m0" key={index}>
            <div
              className="hero-img d-flex align-items-center justify-content-center"
              style={{
                backgroundImage: `url(${slide.image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
                <div className="row">
                  <div className="col-lg-10 m-auto text-center">
                    <h1 className="hero-heading fw-bold text-white">
                      {slide.title}
                    </h1>
                    <p className="text-xl pt-35 pb-35 text-white">
                      {slide.description}
                    </p>
                    <div className="d-inline-flex flex-wrap align-items-center">
                      <Link href={slide.link} className="btn-four mt-15 me-4">
                        Explore Our Technology
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroBannerTwo;
