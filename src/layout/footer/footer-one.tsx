"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
// import logo from "@/assets/images/logo/logo-white.png";
import logo from "@/assets/images/logo/logoNew.png";
import FooterSocial from "./footer-social";
import MapWithCountries from "@/components/map/maps";
import icon_1 from "@/assets/images/icon/icon_49.svg";
import icon_2 from "@/assets/images/icon/icon_50.svg";
import map from "@/assets/images/icon/footer-map.svg";
import Newsletter from "@/components/forms/newsletter";
import NewsletterBannerTwo from "@/components/newsletter/newsletter-banner-2";

const FooterOne = () => {
  return (
    <>
      {/* <NewsletterBannerTwo /> */}
      <div
        className="footer-one"
        style={{
          background:
            "radial-gradient(56.79% 56.79% at 50% 50%, rgb(139, 242, 161) 0%, rgb(83, 188, 105) 0%, rgb(10, 116, 95) 100%)",
        }}
      >
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-md-5 footer-intro mb-30">
                <div className="logo">
                  <Link href="/" className="d-lg-inline-block mb-25">
                    <Image width={170} src={logo} alt="logo" />
                  </Link>
                </div>
                {/* map start  */}
                {/* <h5 className="footer-title">Global Presence</h5>
              <div className="pb-4">
                <MapWithCountries />
              </div> */}
                {/* map end  */}
                {/* <p className="text-white lh-sm mb-35">Top-rated <span className="opacity-50">business <br/> consultancy for your success</span></p> */}
                <h4 className="text-white lh-sm mb-2">
                  Head office <br /> 
               
                </h4>
                <div className="opacity-50 mb-4 text-white">
                Cabin -1, Plot E-313, Sector 75, Mohali 160055
                </div>
                <h4 className="text-white lh-sm mb-2">
                  Manufacturing Facility <br />
           
                </h4>
                <div className="opacity-50 mb-4 text-white">
                First Floor, Plot 53- 10 marla, <br/>Industrial Area Phase 2
                Chandigarh 160002 
                  </div>
                {/* <p className="text-white lh-sm mb-35 ">
                <Link
                  href="mailto:info@pistar.tech"
                  className="d-flex align-items-center"
                >
                  <Image
                    src={icon_1}
                    alt="icon"
                    className="lazy-img icon me-3"
                  />
                  info@pistar.tech 
                </Link> <br />
                <Link href="tel:+919888912909" className="d-flex">
                    <Image
                      src={icon_2}
                      alt="icon"
                      className="lazy-img icon me-3"
                    />
                    +91 9908127810
                  </Link>
              </p> */}
              </div>
              <div className="col-xl-3 col-md-3 col-sm-4 mb-20">
                <h5 className="footer-title">Products</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    <Link href="products/smart-solar-spaces">Smart Solar Spaces</Link>
                  </li>
                  <li>
                    <Link href="products/solar-ev-charging-stations">Solar EV Charging Stations</Link>
                  </li>
                  <li>
                    <Link href="products/solar-prefab-cabins">Solar Prefab Cabins</Link>
                  </li>
                  <li>
                    <Link href="products/solar-conversion-solutions">Solar Conversion Solutions </Link>
                  </li>
                  <li>
                    <Link href="products/solar-rooftop">Solar Rooftop</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-2 col-sm-4 mb-20">
                <h5 className="footer-title">About</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li>
                    <Link href="/article">Media</Link>
                  </li>
                  {/* <li>
                  <Link href="/internship">Internship Program</Link>
                </li> */}
                </ul>
              </div>
              <div className="col-xl-2 col-md-2 col-sm-4 mb-20">
                <h5 className="footer-title">
                <Link href="contact">
                Get In Touch
                    </Link>
                  </h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    <Link href="mailto:info@pistar.tech">
                      envinovasmartech@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:9872230560">+91 9872230560</Link>
                  </li>
                  <li>
                    <Link
                      href="tel:9877262993"
                    >
                      +91 9877262993
                    </Link>
                  </li>
                </ul>
                <ul className="style-none d-flex align-items-center pt-20 social-icon">
                  <FooterSocial />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bottom-footer">
            <div className="row align-items-center">
              <div className="col-lg-4 order-lg-last mb-15">
                <div
                  className="footer-newsletter float-xl-end"
                  style={{ zIndex: "1000000000" }}
                >
                  {/* social link */}

                  {/* social link */}
                  {/* <h5 className="footer-title">Subscribe Newsletter</h5>
                <Newsletter /> */}
                </div>
              </div>
              <div className="col-lg-8 order-lg-first mb-15">
                <div className="d-xl-flex align-items-center justify-content-between">
                  <div className="copyright me-xl-4 lg-mt-10 order-lg-first m-auto ">
                    Copyright &#169; 2023 - {new Date().getFullYear()} Envinova.
                  </div>
                  <ul className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                    {/* <li>
                      <Link href="mailto:info@pistar.tech">
                        info@pistar.tech
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:9908127810">+91 9908127810</Link>
                    </li> */}
                    {/* <li>
                    <Link href="#">Privacy & Terms</Link>
                  </li>
                  <li>
                    <Link href="#">Cookies</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;
