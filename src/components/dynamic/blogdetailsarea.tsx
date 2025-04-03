"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  collection,
  getDocs,
  query,
  where,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/database/firebase";
import UseSocialShare from "@/components/socail-media/socialshare";
import BlogSidebar from "@/components/blogs/blog-sidebar";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Blog = {
  id?: string;
  image: string;
  imageUrl?: string;
  date: string;
  title: string;
  author: string;
  post_info: string;
  features: string;
  category: string;
  metaKeywords: string;
  metaDescription: string;
  link: string;
};

const BlogDetailsArea: React.FC<{ blog: Blog }> = ({ blog }) => {
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-meta-two style-two">
              <figure
                className="post-img position-relative d-flex align-items-end m0"
                style={{ backgroundImage: `url(${blog.imageUrl || blog.image})` }}
              >
                <div className="date">{blog.date}</div>
              </figure>
              <div className="post-data">
                <div className="post-info">{blog.category}</div>
                <div className="blog-title">
                  <h4>{blog.title}</h4>
                </div>
                <div className="post-details-meta">
                  <div dangerouslySetInnerHTML={{ __html: blog.post_info }} />
                </div>
                <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                  <UseSocialShare />
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-md-8">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div> */}
      <div className="product-details-one mt-150 lg-mt-80 mb-150 lg-mb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 order-lg-1">
              <div className="tab-content product-img-tab-content h-100">
                <div className="active h-100">
                  <a className="w-100 h-100 d-flex align-items-center justify-content-center">
                    <Image
                      src={blog.imageUrl || blog.image}
                      alt={blog.title || "Article Image"}
                      layout="responsive"
                      width={600}
                      height={400}
                      // alt="product-img"
                      className="lazy-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-lg-2">
              <div className="product-info ps-xxl-5 md-mt-40 blog-details">
                <div className="stock-tag">{blog.category}</div>
                <h2 className="product-name">{blog.title}</h2>

                <div className="pt-20">
                  <div dangerouslySetInnerHTML={{ __html: blog.features }} />
                </div>
                <div className="button-group mt-30 d-sm-flex align-items-center">
                  <Link
                    href="/contact"
                    type="button"
                    className="btn-six mt-15 d-block"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                  <UseSocialShare />
                </div>
              </div>
            </div>
          </div>

          <div className="product-review-tab mt-130 lg-mt-100">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#item1"
                  type="button"
                  role="tab"
                  aria-selected="true"
                  tabIndex={-1}
                >
                  Description
                </button>
              </li>
            </ul>
            <div className="tab-content mt-50 lg-mt-20">
              <div
                className="tab-pane fade show active"
                id="item1"
                role="tabpanel"
              >
                <div className="row gx-5">
                  <div dangerouslySetInnerHTML={{ __html: blog.post_info }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;
