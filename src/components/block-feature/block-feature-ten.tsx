import React from "react";
import Image, { StaticImageData } from "next/image";
// internal
import icon_1 from "@/assets/images/icon/icon_62.svg";
import icon_2 from "@/assets/images/icon/icon_63.svg";
import icon_3 from "@/assets/images/icon/icon_64.svg";
import icon_4 from "@/assets/images/icon/icon_65.svg";
import icon_5 from "@/assets/images/icon/icon_66.svg";
import icon_6 from "@/assets/images/icon/icon_67.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import feature_data from "@/data/feature-data";
import arrow from "@/assets/images/icon/icon_09.svg";
import icon from "@/assets/images/icon/icon_27.svg";
import Link from "next/link";
// import shape from "@/assets/images/shape/shape_06.svg";

// card item
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
    <div className="card-style-sixteen d-flex mt-60 lg-mt-40 mb-60 lg-mb-10">
      <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <div className="text">
        <h4 className="fw-bold mb-20 sm-mb-10">{title}</h4>
        <p className="m0">{subtitle}</p>
      </div>
    </div>
  );
}

const BlockFeatureTen = () => {
  const service_items = feature_data.filter((s) => s.page === "home");
  return (
    <div className="block-feature-ten position-relative mt-150 lg-mt-80 pb-100 lg-pb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 wow fadeInUp">
            <div className="title-one mb-50 lg-mb-20">
              <h2>Features</h2>
            </div>
          </div>
        </div>
        <div className="line-wrapper position-relative">
          <div className="row gx-lg-5">
            {service_items.map((s, i) => (
              <div
                key={i}
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay={`0.${i + 1}s`}
              >
                <div className="card-style-sixteen d-flex mt-60 lg-mt-40 mb-60 lg-mb-10">
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <Image src={s.icon} alt="icon" layout="responsive" className="lazy-img" />
                  </div>
                  <div className="text">
                    <h4 className="fw-bold mb-20 sm-mb-10">{s.title}</h4>
                    <p className="m0">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default BlockFeatureTen;
