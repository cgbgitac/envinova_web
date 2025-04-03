"use client";
import Link from "next/link";
import React, {  } from "react";


const AdvOne = () => { 
  return (
    <div className="position-relative mt-100 py-3 bg-dark">  
              <div className="text-center text-white"> 
                <Link  href="/advertise" 
                 className="d-flex align-items-center justify-content-center"
                >Advertise With Us
                </Link></div> 
    </div>
  );
};

export default AdvOne;
