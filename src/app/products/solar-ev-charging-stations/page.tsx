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
import BlogListAll from "@/components/dynamic/bloglistall";

export const metadata: Metadata = {
  title: "Solar EV Charging Stations - Envinova",
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
          {/* ---product-lisging-info-start--- */}
          <section className="position-relative lg-mt-80 mt-140">
            <div className="container">
              <div className="pb-60 lg-pg-40 pt-30">
                <h2 className="text-center pb-5">Solar EV Charging Stations</h2>
                <p className="text-center">
                Power the future of mobility with our <b>solar-powered EV charging solutions</b>
                </p>
              </div>
            </div>
          </section>
          {/* ---product-lisging-info-end--- */}

          {/* blog list area start */}
          {/* <BlogListArea /> */}
          <BlogListAll category="Solar EV Charging Stations" />
          {/* blog list area end */}

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
