import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CounterUp from "../common/counter-up";
import bg_image from "@/assets/images/background/counter_dark_pattern.png";
import bg_image2 from "@/assets/images/background/background-explore.jpg";
import campa from "@/assets/images/envo/campa.png";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const backImg = {
  backgroundImage: `url('${bg_image.src}')`,
  backgroundSize: "cover,auto",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundColor: "#292e31",
};
const backImg2 = {
  backgroundImage: `url('${bg_image2.src}')`,
  backgroundSize: "cover,auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

// counter block
function CounterBlock({
  num,
  text,
  title,
  prev_text,
  delay,
  decimal = false,
  icon 
}: {
  num: number;
  text: string;
  title: string;
  delay?: string;
  prev_text?: string;
  decimal?: boolean;
  icon?:string
}) {
  return (
    <div
      className="counter-block-two mt-35 mb-35 wow fadeInUp"
      data-wow-delay={`0.${delay}s`}
    >
  
      <div className="d-flex justify-content-center counterIcons"><i className={`${icon} text-white text-center`}></i></div>

      <div
        className="main-count justify-content-center fw-500 d-flex"
        style={{ color: "#62c087" }}
      >
        {prev_text && prev_text}
        <span className="counter">
          <CounterUp number={num} text={text} decimal={decimal} />
        </span>
      </div>
      <p className="m0 text-md text-white text-center">{title}</p>
    </div>
  );
}

const TextFeatureHome = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <> 
      {!style_2 && (
        <div
          className="text-feature-one service-details pt-150 lg-pt-100 pb-150 lg-pb-100"
          // style={backImg2}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 wow fadeInLeft text-feature-seven">
                <p className="text-lg">
                  Founded in 2023 by visionary entrepreneurs Arjun Mittal and
                  Ishank Bansal, Envinova Smartech is redefining how technology
                  integrates into outdoor spaces. Headquartered in Chandigarh,
                  we design and build Smart Solar Huts—innovative off-grid
                  solutions that combine cutting-edge solar technology with
                  modern amenities, including:
                </p>
                <ul className="p-0">
                  <li>Lighting solutions</li>
                  <li>Wi-Fi connectivity</li>
                  <li>Emergency health services</li>
                  <li>Mobile and laptop charging</li>
                  <li>And other essential conveniences</li>
                </ul>
                <p className="text-lg">
                  Our mission is to make solar energy an integral part of
                  everyday life by creating smarter, greener spaces that inspire
                  seamless engagement with technology.
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
                  <Link href="/about-us" className="btn-four mt-15 me-4">
                    More About Us
                  </Link>
                  {/* <Link href="/contact" className="btn-three icon-link mt-15">
                    <span>Request a Callback</span>
                    <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-6 wow fadeInRight">
                <div className="p-4">
                  <Image src={campa} alt="About us" layout="responsive"></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {style_2 && (
        <div
        // style={backImg}
        // style={{background:"#292e31"}}
        >
          <div className="">
            <div className="counter-wrapper pt-80 pb-80 lg-mt-20 lg-mb-20">
              <div className="row">
                <div className="title-one details-meta">
                  {/* <div className="upper-title">About Us</div> */}
                  {/* <h2 style={{ color: "#62c087" }}>By the Numbers</h2> */}
                </div>
                <div
                  className="col-md-4 col-6"
                  style={{ background: "#172a44", border: "1px solid gray" }}
                > 
                  <CounterBlock
                    icon="bi bi-patch-check fa-10x"
                    num={27}
                    text="+"
                    title="Total Installations"
                    delay="2"
                  />
                </div>
                <div
                  className="col-md-4 col-6"
                  style={{ background: "#172a44", border: "1px solid gray" }}
                >
                  <CounterBlock
                   icon="bi bi-person-check-fill"

                    num={500}
                    text="+"
                    title="Total Visitors"
                    // prev_text="$"
                    delay="2"
                    // decimal={true}
                  />
                </div>
                <div
                  className="col-md-4 col-6"
                  style={{ background: "#172a44", border: "1px solid gray" }}
                >
                  <CounterBlock
                   icon="bi bi-currency-dollar fa-4x"
                    num={600}
                    text="+"
                    title="Tonnes of CO2 mitigated"
                    prev_text=""
                    delay="2"
                  />
                </div>
                {/* <div className="col-md-3 col-6">
                  <CounterBlock
                    num={6}
                    text="+"
                    title="Global Delivery Center"
                    delay="3"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextFeatureHome;
