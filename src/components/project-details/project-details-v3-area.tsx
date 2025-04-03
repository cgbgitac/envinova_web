"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
// gallery images
import gallery_1 from "@/assets/images/gallery/solar-furniture.jpg";
import gallery_2 from "@/assets/images/gallery/img_20.jpg";
import gallery_3 from "@/assets/images/gallery/img_21.jpg";
// import ProjectDetailsFeature from "./project-details-feature";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";


// img style
const imgStyle = {
  height: "auto",
};
const ProjectDetailsThreeArea = () => {
  return (
    <ParallaxProvider>
      <div
        className="project-details-one position-relative pt-80 pb-60 lg-pb-60"
        style={{
          background:
            "linear-gradient(to bottom, rgb(10, 116, 95) 0%, rgb(139, 242, 161) 60%, white 100%)",
        }}
      >
        <div className="container">
          <div>
            {/* <div className="upper-title">overview</div> */}
            <h2 className="text-white text-center pb-50">
              Conventional vs Our Products
            </h2>
          </div>
          <div className="img-gallery mb-60 lg-mb-40">
            <div className="row align-items-center">
              <div className="col-sm-8">
                <Parallax rotateY={[180, 570]}>
                  <Image
                    src={gallery_1}
                    alt="gallery_img"
                    className="lazy-img"
                    style={imgStyle}
                  />
                </Parallax>
              </div>
              <div className="col-sm-4">
                <div>
                  <Parallax rotateY={[180,550]}>
                    <Image
                      src={gallery_2}
                      alt="gallery_img"
                      className="lazy-img"
                      style={imgStyle}
                    />
                  </Parallax>
                </div>
                <div>
                  <Parallax rotateY={[180, 700]}>
                    <Image
                      src={gallery_3}
                      alt="gallery_img"
                      className="lazy-img"
                      style={imgStyle}
                    />
                  </Parallax>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider> 
  );
};

export default ProjectDetailsThreeArea;
