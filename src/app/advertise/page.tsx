import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FooterTwo from "@/layout/footer/footer-two";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import TeamTwoArea from "@/components/team/team-v2-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import team_bg from "@/assets/images/media/Leadershipbanner.png";
import FooterOne from "@/layout/footer/footer-one";
// import HeaderTwo from "@/layout/header/Header";
import TeamDetailsArea from "@/components/team/team-details-area";
import HeaderSix from "@/layout/header/header-six";
import AdvertiseContent from "@/components/advertisement/advertiseContent";
import BlockFeatureAbout from "@/components/block-feature/block-feature-about";
import SubscriptionModel from "@/components/advertisement/subscriptionModel";


export const metadata: Metadata = {
  title: "Advertise",
};

const Advertise = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
            <HeaderSix />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Advertise"
            subtitle=""
            page="Advertise"
            // // shape={shape}
            bg_img={team_bg}
          />
          {/* breadcrumb end */}
          <AdvertiseContent/>
  <BlockFeatureAbout style_2={true} />

        <SubscriptionModel/>
          {/* <TeamDetailsArea /> */}
          

          {/* team v2 area start */}
          {/* <TeamTwoArea /> */}
          {/* team v2 area end */}

        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default Advertise;
