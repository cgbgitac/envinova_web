import Image from "next/image";
import React from "react";
import Link from "next/link";
const SubscriptionModel = () => {

  return (
    <>
      
      <section className="position-relative lg-mb-60  mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="f-card pb-50">
                <h3>Subscription Model</h3>
                <p>
                Access our <b>solar-powered solutions on a flexible subscription basis</b>, perfect for businesses, cafes, and public spaces looking for a hassle-free, cost-effective option.
                </p>
              </div>
           
              <div className="f-btn ">
                <Link href={""} className="btn-one">
                  Click Here{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscriptionModel;
