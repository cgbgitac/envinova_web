"use client";
import BackToTop from "@/lib/back-to-top";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import icon_4 from "@/assets/images/logo/whatsappicon.png";

function BackToTopCom() {
  useEffect(() => {
    BackToTop(".scroll-top");
  }, []);
  return (
    <>
      <Link href="https://wa.me/918287668958" className="whatsapp">
        <Image
          src={icon_4}
          alt="icon"
          layout="responsive"
          className="lazy-img me-auto ms-auto"
        />
      </Link>
      <button className="scroll-top d-none">
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </>
  );
}

export default BackToTopCom;
