import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import blog_bg from "@/assets/images/media/BlogBanner.png";
import shape from "@/assets/images/shape/shape_34.svg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";
import BlogList from "@/components/dynamic/bloglist";
import HeaderSix from "@/layout/header/header-six";
import BlockFeatureFive from "@/components/block-feature/block-feature-five";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Page",
};

const BlogPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* <HeaderTwo /> */}
        <HeaderSix />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          {/* <BreadcrumbOne
            title="Our Blogs"
            subtitle=""
            page="Blog"
            bg_img={blog_bg}
            style_2={true}
          /> */}
          {/* breadcrumb end */}

          {/* blog list area start */}
          {/* <BlogListArea /> */}
          <BlogList />
          {/* blog list area end */}
          <section className=" Project-in-Mind mb-100 mb-lg-60">
            <div className="container">
              <h2 className="text-center pb-80 pb-lg-4">Have a Project in Mind? Connect with Us!</h2>
              <p>Interested in our solutions or need a custom solar setup? Whether it&apos;s <b>Smart Solar Huts, Rooftop Systems, or Plug & Play Packs</b>, we&apos;re here to power your vision. From enhancing public spaces to bringing solar energy to homes and businesses, our team is ready to craft the perfect solution for you.</p>
              <div className="d-flex justify-content-center">
                <Link href="/" className="extra-class">Contact Us</Link>
              </div>
            </div>
          </section>

          <section className="partner-with-us pt-100 pt-lg-60 pb-100 pb-lg-60 mb-100 mb-lg-60 ">
            <div className="container">
              <h2 className="text-center pb-80 pb-lg-4">Want to Partner with Us?</h2>
              <p>Join us in driving the solar revolution! Whether you&apos;re looking to become a distributor, reseller, or channel partner, Envinova offers exciting opportunities to grow with us. Partner with a brand committed to innovation and sustainability, and bring cutting-edge solar solutions to your market. Let’s collaborate for a brighter, greener future.</p>
              <div className="d-flex justify-content-center">
                <Link href="/" className="extra-class">Contact Us</Link>
              </div>
            </div>
          </section>

          <BlockFeatureFive number={8} />

          {/* fancy banner three start */}
          {/* <FancyBannerThree /> */}
          {/* fancy banner three end */}

          {/* news letter start */}
          {/* <NewsletterBanner /> */}
          {/* news letter end */}
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogPage;
