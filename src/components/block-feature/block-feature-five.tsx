import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import feature_data from "@/data/feature-data";
import arrow from "@/assets/images/icon/icon_09.svg";
import icon from "@/assets/images/icon/icon_27.svg";
import shape from "@/assets/images/shape/shape_06.svg";

const BlockFeatureFive = ({ number = 0 }) => {
  const service_items = feature_data.filter((s) => s.page === "home");
  const displayed_items = number > 0 ? service_items.slice(0, number) : service_items;
  
  return (
    <div className="block-feature-five light-bg position-relative pt-120 lg-pt-80 pb-150 lg-pb-80 service-details">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-8 wow fadeInLeft">
              <div className="title-one mb-50 lg-mb-30 md-mb-10 details-meta">
                <h2>Features</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {displayed_items.map((s, i) => (
              <div
                key={i}
                className="col-xl-3 col-md-3 d-flex wow fadeInUp"
                data-wow-delay={`0.${i + 1}s`}
              >
                <Link
                  href="/service-v2"
                  className="card-style-seven text-center vstack tran3s w-100 mt-30"
                >
                    <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center m-auto">
                      <Image src={s.icon} alt="icon" layout="responsive" className="lazy-img" />
                    </div>
                    <h4 className="fw-bold mt-20 md-mt-20 mb-20 text-capitalize">{s.title}</h4>
                </Link>
              </div>
            ))}
          </div>
          <div className="section-btn md-mt-40">
            <Link
              href="/service-v2"
              className="btn-seven d-inline-flex align-items-center"
            >
              <span className="text">Explore All</span>
              <div className="icon tran3s rounded-circle d-flex align-items-center">
                <Image src={icon} alt="icon" className="lazy-img" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default BlockFeatureFive;
