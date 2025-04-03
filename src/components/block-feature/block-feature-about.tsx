import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon from "@/assets/images/icon/icon_27.svg";
import shape_1 from "@/assets/images/logo/animationlogo.gif";
// import shape_2 from "@/assets/images/shape/shape_05.svg";
import shape_2 from "@/assets/images/shape/shape_05.svg";
import service_data from "@/data/service-data";
import icon1 from "@/assets/images/envo/Maintenance.png";
import icon2 from "@/assets/images/icon/financial-sustainability.png";
import icon3 from "@/assets/images/envo/Sanitization.png";
import icon4 from "@/assets/images/icon/human-resources-development.png";
import icon5 from "@/assets/images/icon/lean-manufacturing.png";
import icon6 from "@/assets/images/envo/solar-panel.png";
import icon7 from "@/assets/images/icon/sales-client-relations.png";

const BlockFeatureAbout = ({ style_2 = false }: { style_2?: boolean }) => {
  const service_items = service_data.filter((s) => s.page === "home-3");
  return (
    <>
      {!style_2 && (
        <div className="block-feature-six service-details position-relative pt-150 lg-pt-80 pb-120 lg-pb-50">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-lg-4 wow fadeInLeft">
                <div className="title-one details-meta">
                  <h3 className="text-dark">What We Do</h3>
                </div>
                <p className="text-lg text-dark mt-40 md-mt-20 mb-35 md-mb-30">
                  Inciddnt ut labore et dolor magna aliu. ad mim venam, quis
                  nostru
                </p>
                <Link
                  href="/service-v2"
                  className="btn-eleven d-inline-flex align-items-center"
                >
                  <span className="text">All Services</span>
                  <div className=" tran3s rounded-circle d-flex align-items-center">
                    <Image
                      src={icon}
                      alt="icon"
                      width="100"
                      height="100"
                      className="lazy-img"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-lg-8 md-mt-50">
                <div className="row">
                  {service_items.map((item, i) => (
                    <div
                      key={item.id}
                      className="col-md-6 d-flex wow fadeInUp"
                      data-wow-delay={`0.${i}s`}
                    >
                      <div className="card-style-eight position-relative vstack tran3s w-100 mb-30 active">
                        <div className=" d-flex align-items-center">
                          <Image
                            src={item.icon}
                            alt="icon"
                            width="100"
                            height="100"
                            className="lazy-img"
                          />
                        </div>
                        <h4 className="fw-bold mt-30 mb-20">{item.title}</h4>
                        <p>{item.desc}</p>
                        <Link
                          href="/service-details"
                          className="stretched-link"
                        ></Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Image
            src={shape_1}
            alt="shape"
            className="lazy-img shapes shape_01"
          />
          <Image
            src={shape_2}
            alt="shape"
            className="lazy-img shapes shape_02"
          />
        </div>
      )}

      {style_2 && (
        <div className="block-feature-six service-details bg-two position-relative pt-100 lg-pt-60 pb-100 lg-pb-40" style={{background:"white"}}>
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-lg-12">
                <div className="row">
                  <div className="title-one details-meta">
                    <h3>Our Services</h3>
                  </div>
                  <p className="text-lg text-dark mb-35 md-mb-30">
                    We understand that after-sales service and maintenance can
                    be a challenge. That&apos;s why we offer{" "}
                    <b>customized packages</b> to ensure the optimal performance
                    of our products and their efficient use.
                  </p>
                  {/* <div className="col-lg-4 wow fadeInLeft"></div> */}
                  {/* {service_items.map((item, i) => (
                    <div
                      key={item.id}
                      className="col-md-4 d-flex wow fadeInUp"
                      data-wow-delay={`0.${i}s`}
                    >
                      <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                        <div className="d-flex align-items-center">
                          <Image
                            src={item.icon}
                            width={70}
                            height={70}
                            alt="icon"
width="100"
height="100"
                            className="lazy-img"
                          />
                        </div>
                        <h4 className="fw-bold mt-30 mb-20">{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))} */}
                  <div
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.1s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className=" d-flex justify-content-center align-items-center">
                        <Image
                          src={icon1}
                          alt="icon"
                          width="100"
                          height="100"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20 text-center">
                        Maintenance Packages
                      </h4>
                      <p className="text-center">
                        Beyond our standard warranties, our packages include
                        regular system checks, ensuring all components are
                        functioning smoothly.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.2s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className=" d-flex justify-content-center align-items-center">
                        <Image
                          src={icon3}
                          alt="icon"
                          width="100"
                          height="100"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20 text-center">
                        Solar Panel Cleaning
                      </h4>
                      <p className="text-center">
                        Regular cleaning and maintenance of solar panels in
                        public spaces to ensure peak efficiency and extended
                        lifespan.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.3s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className=" d-flex align-items-center justify-content-center">
                        <Image
                          src={icon6}
                          alt="icon"
                          width="100"
                          height="100"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20 text-center">
                      Sanitization Services
                      </h4>
                      <p className="text-center">
                      Keep systems in public areas clean and hygienic with our
                      sanitization services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Image
            src={shape_1}
            alt="shape"
            className="lazy-img shapes shape_01"
            width="200"
            height="200"
          />
          <Image
            src={shape_2}
            alt="shape"
            className="lazy-img shapes shape_02"
          /> */}
        </div>
      )}
    </>
  );
};

export default BlockFeatureAbout;
