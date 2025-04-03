"use client";
import React from "react";
import Image from "next/image";
import { IProduct } from "@/types/product-d-t";
import campa from "@/assets/images/envo/campa.png";
import bus from "@/assets/images/envo/bus.jpg";
import user_1 from "@/assets/images/blog/avatar_01.jpg";
import user_2 from "@/assets/images/blog/avatar_02.jpg";
import FeedbackTwo from "../feedback/feedback-two";

const FeedBackTap = () => {
  //   const { details, reviews } = product || {};

  return (
    <div
      className="product-details-one pt-20 lg-pt-20 pb-60 lg-pb-60 service-details"
      style={{ backgroundColor: "#f6f6f6" }}
    > 
      <FeedbackTwo />
    </div>
  );
};

export default FeedBackTap;
