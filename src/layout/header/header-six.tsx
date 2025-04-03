"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@/assets/images/logo/logome.png";
import icon from "@/assets/images/icon/icon_94.svg";
import LoginModal from "@/components/common/login-modal";
import useSticky from "@/hooks/use-sticky";
import Navbar from "./navbar";
import bg_image1 from "@/assets/images/background/backgrondsolar.jpeg";

const HeaderSix = () => {
  const backImg1 = {
    backgroundImage: `url('${bg_image1.src}')`,
    backgroundSize: "cover,auto",
    backgroundPosition: "center",
    backgroundAttachment: "local",
    backgroundColor: "#292e31",
  };
  const { sticky } = useSticky();
  return (
    <>
      <header
        className={`theme-main-menu menu-overlay menu-style-six sticky-menu your-div ${
          sticky ? "fixed" : ""
        }`}
      >
        <div className="inner-content">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center justify-content-lg-center  justify-content-between">
              <div className="logo order-lg-0">
                <Link
                  href="/"
                  className="d-flex  d-block d-lg-none align-items-center"
                >
                  <Image width={110} src={logo} alt="Cgb logo" />
                </Link>
              </div>
              {/* <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <ul className="d-flex align-items-center style-none">
                <li className="d-flex align-items-center login-btn-two">
                  <Image
                    src={icon}
                    alt="icon"
                    className="lazy-img icon me-2"
                  />
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="fw-500"
                  >
                    Login
                  </a>
                </li>
                <li className="d-none d-md-inline-block ms-3 ms-xl-4">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="fw-500 signup-btn-two tran3s"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div> */}
              {/* <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <li className="d-none d-md-block">
                    <Link href="/contact" className="btn-one tran3s">
                      Contact Us
                    </Link>
                  </li>
                  <li className="d-flex align-items-center login-btn-two">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                      className="btn-fourteen tran3s"
                    >
                      <i className="bi bi-person"></i>
                    </a>
                  </li>
                </ul>
              </div> */}
              <nav className="navbar navbar-expand-lg p0 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* header navbar start */}
                  <Navbar logo_white={true} />
                  {/* header navbar end */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <LoginModal />
      {/* login modal end */}
    </>
  );
};

export default HeaderSix;
