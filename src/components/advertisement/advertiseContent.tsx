import Image from "next/image";
import React from "react";
import { AdvertiseCardData } from "@/data/advertise-card.";
import img1 from "@/assets/images/article/tech.jpg";
import Link from "next/link";
const AdvertiseContent = () => {
  const ImgStyle = {
    width: "500px",
    height: "auto",
    borderRadius: "30px",
  };
  return (
    <>
      <section className="position-relative light-bg pt-80 pb-100 pb-lg-100 lg-pt-80 ">
        <div className="container">
          <div className="headingsInfo">
            <h2 className="text-center pb-4">Advertise with Us</h2>
            <p className="pb-4 text-center">
              Leverage high-visibility outdoor spaces on our Smart Solar Huts
              and infrastructure to showcase your brand in a sustainable and
              impactful way.
            </p>
          </div>
          <div className="row">
            {AdvertiseCardData.map(({ img, title, content, id }) => {
              return (
                <>
                  <div
                    key={id}
                    className="col-lg-4 col-md-6 d-flex wow fadeInUp"
                    data-wow-delay={`0.1s`}
                  >
                    <div className="advertiseCard rounded-5 vstack tran3s w-100 mb-35">
                      <div className=" d-flex justify-content-center align-items-center">
                        <Image
                          src={img}
                          alt="icon"
                          width="100"
                          height="100"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20 text-center">
                        {title}
                      </h4>
                      <p className="text-center">{content}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section className="position-relative lg-mt-80  mt-110">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="f-card pb-50">
                <h3>Wi-Fi & Connectivity</h3>
                <p>
                  Enhance user experience with seamless Wi-Fi integration,
                  turning solar spaces into connected hubs for digital
                  engagement and accessibility.
                </p>
              </div>
              <div className="f-card pb-50">
                <h3>Maintenance & Support</h3>
                <p>
                  Ensure uninterrupted performance with our comprehensive
                  maintenance services, designed to keep your solar
                  installations running efficiently for years
                </p>
              </div>
              <div className="f-card pb-50">
                <h3>Subscription Model</h3>
                <p>
                  Access our solar-powered solutions on a flexible subscription
                  basis, perfect for businesses, cafes, and public spaces
                  looking for a hassle-free, cost-effective option.
                </p>
              </div>
              <div className="f-btn ">
                <Link href={""} className="btn-one">
                  Click Here{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvertiseContent;
