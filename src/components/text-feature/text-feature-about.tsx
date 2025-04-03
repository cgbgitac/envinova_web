import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import icons from "@/assets/images/icon/icon_09.svg";
import icon_2 from "@/assets/images/icon/icon_10.svg";
import icon_3 from "@/assets/images/icon/icon_11.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import about from "@/assets/images/envo/campa.png";
import campa from "@/assets/images/envo/campa.png";
import mission from "@/assets/images/icon/mission.svg";
import vision from "@/assets/images/icon/vision.svg";
import bg_image1 from "@/assets/images/background/contactbanner.jpg";
import img1 from "@/assets/images/media/visionary-future-resize.png";
import img2 from "@/assets/images/media/vision-reality.png";
import img3 from "@/assets/images/media/relentless-mission-resize.png";

const backImg1 = {
  backgroundImage: `url('${bg_image1.src}')`,
  backgroundSize: "cover,auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

// card item
function CardItem({
  icon,
  title,
  desc,
  link,
  bg_img,
}: {
  icon: StaticImageData;
  title: string;
  desc: string;
  link: string;
  bg_img: StaticImageData;
}) {
  return (
    <div className="card-style-three d-flex pt-75 lg-pt-40 ">
      {/* <Image src={icon} alt="icon" className="lazy-img icon" /> */}
      <div className="ps-4">
        {/* <h4 className="fw-bold mb-20 text-white">{title}</h4> */}
        <p className="paracolor"> {desc} </p>
        {/* <Link
          href={link}
          className="btn-three icon-link mt-15 md-mb-40 fontcolor"
        >
          <span>Read More</span>
          <Image src={icons} alt="icon" className="lazy-img icon ms-1" />
        </Link> */}
        <Image
          src={bg_img}
          alt="bg-img"
          className="lazy-img mt-auto me-auto ms-auto w-100"
          layout="responsive"
        />
      </div>
    </div>
  );
}

const TextFeatureAbout = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      {!style_2 && (
        <>
          <div
            className="text-feature-one pt-80 lg-pt-80 pb-80 lg-pb-80  service-details"
            // style={backImg1}
          >
            <div className="container">
              <div className="row align-items-center details-meta">
                <div className="col-xl-5 col-lg-6 order-2 order-lg-1 wow fadeInRight">
                  <div className="ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                    <Image
                      src={about}
                      alt="cgb aboutus"
                      className="shap-animate rounded"
                      style={{ height: "auto" }}
                    ></Image>
                    {/* <ul className="style-none">
                        <li>Mobile app easy management & access</li>
                        <li>Ton’s of features for handle the card easily</li>
                        <li>Strong security system.</li>
                    </ul> */}
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 order-1 order-lg-2 wow fadeInLeft text-feature-seven">
                  <p className="text-lg mb-35 lg-mb-20">
                    Founded in 2023 by visionary entrepreneurs{" "}
                    <b>Arjun Mittal</b> and
                    <b>Ishank Bansal</b>, Envinova Smartech is redefining how
                    technology integrates into outdoor spaces. Headquartered in
                    Chandigarh, we design and build <b>Smart Solar Huts</b>
                    —innovative off-grid solutions that combine cutting-edge
                    solar technology with modern amenities, including:
                  </p>
                  <ul className="p-0">
                    <li>Lighting solutions</li>
                    <li>Wi-Fi connectivity</li>
                    <li>Emergency health services</li>
                    <li>Mobile and laptop charging</li>
                    <li>And other essential conveniences</li>
                  </ul>
                  <p className="text-lg mb-35 lg-mb-20">
                    Our mission is to make solar energy an integral part of
                    everyday life by creating smarter, greener spaces that
                    inspire seamless engagement with technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="block-feature-six service-details bg-two position-relative pt-60 pb-40"
            style={{ background: "white" }}
          >
            <div className="container">
              <div className="row gx-lg-5">
                <div className="col-md-6">
                  <div className="row">
                    <div className="title-one details-meta">
                      <h3>Our Journey</h3>
                    </div>
                    <p className="text-lg text-dark mb-35 md-mb-30">
                      The idea for Envinova Smartech was born out of a simple
                      yet profound challenge. As college students, <b>Arjun</b>{" "}
                      and
                      <b>Ishank</b> sought outdoor spaces where they could work
                      comfortably but found public spaces lacking critical
                      facilities like power outlets, reliable Wi-Fi, and
                      ergonomic seating. Recognizing this gap, they envisioned a
                      solution that not only addressed these needs but also
                      contributed to a sustainable future. <br /> <br />
                      Harnessing the power of solar energy, they created the
                      Smart Solar Hut—a versatile, portable, and eco-friendly
                      structure that transforms any space into a functional and
                      connected environment.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="title-one details-meta">
                      <h3>A Proud Milestone</h3>
                    </div>
                    <p className="text-lg text-dark mb-35 md-mb-30">
                      Our innovation has garnered recognition on a national
                      stage. In <b>September 2024</b>, we proudly showcased the
                      Smart Solar Hut to the Hon&apos;ble Prime Minister of India,{" "}
                      <b>Shri Narendra Modi</b>, at <b>Re-Invest</b>—a testament
                      to our commitment to advancing green technology and
                      driving change. <br /> <br />
                      At Envinova Smartech, we believe in empowering communities
                      with sustainable solutions that bridge technology and
                      nature. Together, let&apos;s create a brighter, smarter,
                      and greener future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {style_2 && (
        <div className="text-feature-one service-details">
          <div className="container">
            <div className="line-wrapper position-relative">
              <div className="row align-items-center">
                <div className="col-lg-6 wow fadeInLeft">
                  <div className="title-one details-meta">
                    {/* <div className="upper-title">About us</div> */}
                    <h3 className="text-white">
                      From Vision to Reality: The Founding Story ofEnvinoa Tech
                    </h3>
                  </div>
                  <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30 paracolor">
                   Envinoa Tech was founded by Dr. Anis Fatema and Dr. Aftab M.
                    Hussain, two visionary leaders in the field of electronics
                    and communication engineering. Dr. Anis Fatema earned her
                    Ph.D. in Electronics and Communication Engineering with a
                    specialization in Flexible Electronics from the
                    International Institute of Information Technology Hyderabad
                    (IIITH), graduating in June 2024. Dr. Fatema under the
                    guidance Ph.D. advisor Dr. Aftab M. Hussain spent four years
                    on the research and development and developed the complete
                    make in India solution <b>Podiascanner mat</b>.
                  </p>
                  {/* <Link
                  href="/our-company"
                  className="btn-three icon-link mt-15 md-mb-40 fontcolor"
                >
                  <span>Read More</span>
                  <Image
                    src={icons}
                    alt="icon"
                    className="lazy-img icon ms-1"
                  />
                </Link> */}
                  <Image
                    src={img2}
                    alt="bg-img"
                    className="lazy-img mt-auto me-auto ms-auto w-100"
                    layout="responsive"
                  />
                </div>
                <div className="col-lg-6 ms-auto wow fadeInRight">
                  <CardItem
                    icon={vision}
                    link="/our-company"
                    title="Our Vision"
                    desc="Since its incorporation in 2021,Envinoa Tech has been at the forefront of innovation, supported by a range of prestigious government grants. The company received significant funding through initiatives such as MeiTY Tide 2.0, Nidhi Prayas, PRIF, and Nidhi SSS, amassing a total of INR 82 lakhs. These grants have been instrumental in advancing the development ofEnvinoa Tech's cutting-edge technologies and reinforcing its commitment to enhancing healthcare solutions."
                    bg_img={img1}
                  />
                  <CardItem
                    icon={mission}
                    link="/our-company"
                    title="Our Mission"
                    desc="
                   AtEnvinoa Tech, we are dedicated to leveraging advanced technology to address critical healthcare challenges and improve the quality of life for our users. Our flagship product, DiaPS Mat, exemplifies our mission to combine innovation with practical solutions for better health outcomes.
                    "
                    bg_img={img3}
                  />
                </div>
              </div>
              <Image
                src={shape}
                alt="shape"
                className="lazy-img shapes shape_01"
              />
            </div>

            {/* <div className="counter-wrapper mt-80 lg-mt-20">
              <div className="row">

              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default TextFeatureAbout;
