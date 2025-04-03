import React from "react";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  blog: {
    id?: string;
    image: string;
    imageUrl?: string;
    date: string;
    title: string;
    author: string;
    category: string;
    link: string;
    post_info: string;
    features: string;
  };
};

// img style
const imgStyle = {
  height: "auto",
  border: "3px solid #233650",
  borderRadius: "15px"
};

const BlogWebsiteCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <>
      {/* <article className="blog-meta-two style-two mb-50 lg-mb-40">
      <figure
        className="post-img position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${blog.imageUrl || blog.image})` }}
      >
        <Link href={`/products/${blog.link}`} className="stretched-link date tran3s">
          {blog.date.split(" ")[0]} {blog.date.split(" ")[1]}
        </Link>
      </figure>
      <div className="post-data">
        <div className="post-info">{blog.category}</div>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link href={`/products/${blog.link}`} className="blog-title">
            <h4>{blog.title}</h4>
          </Link>
          <Link href={`/products/${blog.link}`} className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s">
            <i className="bi bi-arrow-up-right"></i>
          </Link>
        </div>
      </div>
    </article> */}
      <div className="product-block-one mb-60 md-mb-40">
        <div className="img-holder style-two">
          <Link
            href={`/products/${blog.link}`}
            className="d-flex align-items-center justify-content-center h-100"
          >
            <Image
              src={blog.imageUrl || blog.image}
              alt="product-img"
              className="lazy-img product-img tran4s w-100"
              width="480"
              height="480"
              style={imgStyle}
            />
          </Link>
           <div className="">
           <Link href={`/products/${blog.link}`} className="cart-button">
            View Now
          </Link>
           </div>
        </div>
        {/* <div className="product-meta">
          <div className="d-lg-flex align-items-center justify-content-between">
            <Link href={`/products/${blog.link}`} className="product-title">
              {blog.title}
            </Link>
            <ul className="style-none d-flex rating">
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star"></i>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BlogWebsiteCard;
