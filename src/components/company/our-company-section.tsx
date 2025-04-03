"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import service_img from "@/assets/images/media/vision.jpg";
import ramarao from "@/assets/images/thumbnail/solar.jpg";
import SideBar from "./side-bar";
import ImgGallery from "../gallery/img-gallery";

// internal
import sticker from "@/assets/images/assets/sticker_02.png";
import VideoPopup from "../common/video-popup";
import VideoPopupLocal from "../common/video-popup-local";
import FaqSectionOne from "../faq/faq-section-one";
import FaqSectionTwo from "../faq/faq-section-two";
import FaqSectionFour from "../faq/faq-section-four";

// CardItem
function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 lg-mt-30 mb-15">{title}</h4>
      <p className="m0">{subtitle}</p>
    </div>
  );
}
// style
const imgStyle = {
  height: "auto",
};
const OurCompanySection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <div className="fancy-banner-five position-relative pt-80 md-pt-60 pb-80 md-pb-60">
        {/* Dark overlay */}
        <div className="position-absolute top-0 left-0 w-100 h-100" />

        <div className="container service-details position-relative h-100 d-flex align-items-center justify-content-center">
          <div className="position-relative">
            {/* Main image */}
            <Image
              src={ramarao}
              alt="service_img"
              className="lazy-img w-100 rounded-4"
              style={imgStyle}
            />

            {/* Video play button */}
            <div
              className="tran5s text-center align-items-center justify-content-center cursor-pointer details-meta solar_hut"
              // onClick={() => setIsVideoOpen(true)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1, // Ensure it is above the image
              }}
            >
              <h2  className="text-white fw-bold">
                The Ultimate Smart Solar Hut
              </h2>
              <p className="text-white text-xl pt-10 pb-20">
                Where comfort meets Sustainability & Connection
              </p>
              <Link
                href="/about-us"
                className="btn-seventeen d-inline-flex align-items-center tran3s"
              >
                <span className="text">Know more</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
              {/* <Image
                src={sticker}
                alt="sticker"
                className="lazy-img"
                style={imgStyle}
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"aXFSJTjVjw0"}
      /> */}
      <VideoPopupLocal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        url={"/assets/videos/file.mp4"}
      />
      {/* Video modal end */}
      {/* <ImgGallery /> */}
    </>
  );
};

export default OurCompanySection;
